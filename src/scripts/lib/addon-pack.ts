import { existsSync, readdirSync } from "node:fs"
import { basename, join } from "node:path"
import { buildAddonIniSchemas, findIncluders } from "./ini-core"
import { extractScript } from "./lua-ast"
import { bucketSections, ITEM_NAMES, OBJECT_NAMES } from "./sections-core"

/**
 * Builds an on-demand addon type pack from a mod's `gamedata/` (Phase 3 of the section
 * taxonomy). A pack is three ambient `.d.ts` families, split into leaf files under
 * `<slug>/` with a `<slug>.d.ts` barrel, opted into by a consumer with
 * `/// <reference types="anomaly-packer/types/addons/<slug>" />`:
 *
 *  1. Lua script APIs — one `declare namespace <script>` per `.script` the mod ships,
 *     with real param/return types lifted from the author's LuaDoc (see lua-ast).
 *  2. Section augmentations — `declare module 'anomaly-packer' { interface Weapons … }`
 *     for sections the mod adds over vanilla (diffed against the vanilla bucketing).
 *  3. IniFileSchemas — schemas for the mod's own config ltx (plugins/misc/…).
 *
 * Nothing is guessed: Lua types come from the mod's annotations, sections from the same
 * class-resolution the base generator uses, ini values by the same conservative rules.
 */

const key = (s: string) => (/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(s) ? s : `'${s}'`)

/** TS-reserved member names (valid Lua identifiers) must be quoted as object keys. */
const TS_RESERVED = new Set(["new", "class", "default", "enum", "export", "import", "extends", "implements", "interface", "package", "private", "public", "static", "yield", "await", "debugger", "with", "typeof", "void", "delete", "in", "instanceof", "var", "let", "const", "function", "this", "super", "null", "true", "false"])
/** A member key safe inside an object type literal — quoted if reserved or non-ident. */
const memberKey = (s: string) => (/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(s) && !TS_RESERVED.has(s) ? s : `'${s}'`)

const HEADER = (slug: string, what: string) =>
  `// AUTO-GENERATED addon pack for \`${slug}\` by \`anomaly-packer gen-addon\`. ${what}\n// Refine \`TODO\` (= any) by hand where the mod gave no type.`

export type AddonPackOptions = {
  slug: string
  /** The mod's `gamedata/configs` dir (may not exist). */
  modConfigs: string
  /** The mod's `gamedata/scripts` dir (may not exist). */
  modScripts: string
  /** Vanilla `configs` dir, for section inheritance + the diff baseline. */
  vanillaConfigs: string
  /**
   * Config roots of the wider install (vanilla + the other installed mods' `gamedata/configs`),
   * used only to discover which file wildcard-includes this mod's ltx. Without it a file that is
   * never opened directly — `groups/group_hv.ltx`, globbed in by another addon's
   * `groups/base_groups.ltx` — registers a schema under its own path that no script ever reads.
   * Defaults to `[vanillaConfigs]`.
   */
  includeContext?: readonly string[]
}

export type AddonPack = {
  /** leaf file name (under `<slug>/`) -> content */
  leaves: Map<string, string>
  /** content of the `<slug>.d.ts` barrel */
  barrel: string
  summary: { scripts: number; funcs: number; vars: number; newSections: Record<string, number>; iniFiles: number }
}

/** One script's global table, as `declare const <ns>: { … }`. An object type (not a
 *  namespace) so members whose Lua names are TS-reserved (e.g. `new`) can be quoted keys
 *  — a namespace could not declare them. `@noSelf` keeps calls Lua-style (no `this`). */
/** Renders a JSDoc block (author's LuaDoc, already converted) at the given indent. */
function jsDoc(text: string | undefined, indent: string): string | undefined {
  if (!text) return undefined
  const lines = text.split("\n")
  if (lines.length === 1) return `${indent}/** ${lines[0]} */`
  return `${indent}/**\n${lines.map((l) => `${indent} * ${l}`.replace(/\s+$/, "")).join("\n")}\n${indent} */`
}

function emitScriptLeaf(slug: string, ns: string, api: Awaited<ReturnType<typeof extractScript>>): string {
  const out = [HEADER(slug, `Lua API of ${ns}.script.`), "", `/** @noSelf */`, `declare const ${ns}: {`]
  for (const v of [...api.vars].sort((a, b) => a.name.localeCompare(b.name))) {
    const d = jsDoc(v.doc, "  ")
    if (d) out.push(d)
    out.push(`  ${memberKey(v.name)}: ${v.type}`)
  }
  for (const f of [...api.funcs].sort((a, b) => a.name.localeCompare(b.name))) {
    const d = jsDoc(f.doc, "  ")
    if (d) out.push(d)
    out.push(`  ${memberKey(f.name)}(${f.params.map((p) => `${p.name}: ${p.type}`).join(", ")}): ${f.ret}`)
  }
  out.push("}", "")
  return out.join("\n")
}

export async function buildAddonPack(opts: AddonPackOptions): Promise<AddonPack> {
  const leaves = new Map<string, string>()
  const refs: string[] = []
  let funcs = 0
  let vars = 0

  // --- 1. Lua script namespaces ---
  const scriptFiles = existsSync(opts.modScripts)
    ? readdirSync(opts.modScripts).filter((f) => f.toLowerCase().endsWith(".script")).sort()
    : []
  for (const file of scriptFiles) {
    const ns = basename(file, ".script")
    const { readFileSync } = await import("node:fs")
    const api = await extractScript(readFileSync(join(opts.modScripts, file), "latin1"))
    if (!api.funcs.length && !api.vars.length) continue // nothing public to expose
    funcs += api.funcs.length
    vars += api.vars.length
    leaves.set(`${ns}.d.ts`, emitScriptLeaf(opts.slug, ns, api))
    refs.push(`${opts.slug}/${ns}.d.ts`)
  }

  // --- 2. Section augmentations (mod sections not already in vanilla) ---
  const newSections: Record<string, number> = {}
  // Every item / non-item section known once this mod is installed (vanilla + the mod's own).
  // Shared with step 3, where they decide whether a list-style ltx section is `Section.Item[]`
  // (a grouping file listing items) or `string[]` (contains a known non-item, so not item names).
  const itemSections = new Set<string>()
  const nonItemSections = new Set<string>()
  if (existsSync(opts.modConfigs)) {
    const vanilla = bucketSections([opts.vanillaConfigs]).buckets
    const combined = bucketSections([opts.vanillaConfigs, opts.modConfigs]).buckets
    for (const cat of ITEM_NAMES) for (const n of combined.get(cat) ?? []) itemSections.add(n)
    for (const cat of OBJECT_NAMES) for (const n of combined.get(cat) ?? []) nonItemSections.add(n)
    let body = ""
    for (const cat of [...ITEM_NAMES, ...OBJECT_NAMES]) {
      const added = [...(combined.get(cat) ?? [])].filter((n) => !vanilla.get(cat)?.has(n)).sort()
      if (!added.length) continue
      newSections[cat] = added.length
      body += `    interface ${cat}s {\n`
      for (const n of added) body += `      ${key(n)}: 0\n`
      body += `    }\n`
    }
    if (body) {
      // Two things here are load-bearing and easy to get wrong:
      //  - `export {}` makes this file a module, which is what turns `declare module` into an
      //    *augmentation*. Without it the file is a script and the same syntax declares an ambient
      //    module that SHADOWS the real package — every genuine export (`Section` included)
      //    disappears the moment a consumer references this pack.
      //  - the categories live under the `Section` namespace (`Section.Weapon`), so they must be
      //    augmented there, not at the module's top level.
      leaves.set("sections.d.ts", `${HEADER(opts.slug, "Sections this mod adds over vanilla.")}

export {}

declare module 'anomaly-packer' {
  namespace Section {
${body}  }
}
`)
      refs.push(`${opts.slug}/sections.d.ts`)
    }
  }

  // --- 3. IniFileSchemas for the mod's config ltx ---
  let iniFiles = 0
  if (existsSync(opts.modConfigs)) {
    const includers = findIncluders(opts.includeContext ?? [opts.vanillaConfigs])
    const ini = buildAddonIniSchemas(opts.slug, opts.modConfigs, HEADER(opts.slug, "Config ltx schemas."), includers, itemSections, nonItemSections)
    for (const [name, content] of ini.leaves) {
      leaves.set(name, content)
      refs.push(`${opts.slug}/${name}`)
    }
    iniFiles = ini.count
  }

  const barrel = `${HEADER(opts.slug, "Barrel — reference this from your project.")}
// Usage: /// <reference types="anomaly-packer/types/addons/${opts.slug}" />

${refs.map((r) => `/// <reference path="${r}" />`).join("\n")}
`

  return { leaves, barrel, summary: { scripts: leaves.size, funcs, vars, newSections, iniFiles } }
}
