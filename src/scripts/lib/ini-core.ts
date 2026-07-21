import { existsSync, readdirSync, readFileSync } from "node:fs"
import { basename, dirname, join, resolve } from "node:path"
import { emitLeafFile } from "./emit"

/**
 * Shared ltx parsing + conservative value-type inference used by the base ini-schema
 * generator (`gen-ini-schemas.ts`) and the on-demand addon-pack generator
 * (`anomaly-packer gen-addon`). Keeping it here means a mod's config files are typed by
 * exactly the same rules as the vanilla ones.
 *
 * Modelling ("sections precise, values conservative"): section names are enumerated; a
 * field is `number`/`boolean`/`vector` only when EVERY observed value fits; multi-token
 * values become a branded separated-string; a list-style section (bare keys, no `=`)
 * becomes `Record<string, string>`.
 */

const NUM = /^-?\d+(?:\.\d+)?$/
const BOOL = /^(?:true|false|on|off)$/i
// exactly 3 or 4 comma-separated floats (colors/vectors) — NOT a 2-number param list
const VEC = /^-?\d+(?:\.\d+)?(?:\s*,\s*-?\d+(?:\.\d+)?){2,3}$/

export type Section = {
  fields: Map<string, Set<string>>
  listKeys: Set<string>
  /** Section names this one inherits from, via xray's `[child]:parent1, parent2` syntax.
   *  The engine merges each parent's fields into the child at parse time (later parents
   *  win, the child's own lines win over all), so the child's real shape is the union. */
  parents: string[]
}

/** `[name]` or `[name]:parent1, parent2` — xray ltx section inheritance, incl. multiple. */
const HEADER = /^\[([^\]]+)\]\s*(?::\s*(.+?))?\s*$/
/** `#include "file.ltx"` — the path may be a glob (`layer_*.ltx`), relative to the includer. */
const INCLUDE = /^#include\s+"([^"]+)"/i

/**
 * Parses one ltx file, resolving `#include` (glob-aware, relative to the includer) so the
 * result is the *logical* file the engine sees. Many Anomaly config files are nothing but
 * a wildcard include — `base_properties.ltx` is one line, `#include "property_*.ltx"` — so
 * without resolution they parse to zero sections and get skipped as empty.
 *
 * `seen` guards against include cycles and diamond re-parsing.
 */
export function parseIni(file: string, seen = new Set<string>()): Map<string, Section> {
  const sections = new Map<string, Section>()
  const canonical = resolve(file)
  if (seen.has(canonical)) return sections
  seen.add(canonical)
  if (!existsSync(canonical)) return sections

  let cur: Section | null = null
  for (const raw of readFileSync(canonical, "latin1").split(/\r?\n/)) {
    const line = raw.replace(/;.*$/, "").trim()
    if (!line) continue

    const inc = line.match(INCLUDE)
    if (inc) {
      for (const target of expandInclude(dirname(canonical), inc[1]))
        for (const [name, sec] of parseIni(target, seen)) sections.set(name, sec)
      cur = null
      continue
    }

    const h = line.match(HEADER)
    if (h) {
      cur = {
        fields: new Map(),
        listKeys: new Set(),
        parents: h[2] ? h[2].split(",").map((p) => p.trim()).filter(Boolean) : [],
      }
      sections.set(h[1].trim(), cur)
      continue
    }
    if (!cur) continue // stray line before first header — ignore
    const kv = line.match(/^([^=]+?)\s*=\s*(.*)$/)
    if (kv) {
      const name = kv[1].trim()
      if (!cur.fields.has(name)) cur.fields.set(name, new Set())
      cur.fields.get(name)!.add(kv[2].trim())
    } else {
      cur.listKeys.add(line)
    }
  }
  return sections
}

/** Resolves an `#include` target against the includer's dir, expanding a `*` glob by
 *  matching sibling filenames. Returns absolute paths, sorted for deterministic output. */
function expandInclude(fromDir: string, target: string): string[] {
  const spec = target.replace(/\\/g, "/")
  const dir = join(fromDir, dirname(spec))
  const pattern = basename(spec)
  if (!pattern.includes("*")) return existsSync(join(dir, pattern)) ? [join(dir, pattern)] : []
  if (!existsSync(dir)) return []
  const rx = new RegExp(`^${pattern.split("*").map(escapeRx).join(".*")}$`, "i")
  return readdirSync(dir).filter((f) => rx.test(f)).sort().map((f) => join(dir, f))
}

const escapeRx = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")

/** Emitted TS type text for a field, given its observed values. Conservative. */
export function inferType(values: Set<string>): string {
  const ne = [...values].filter(Boolean)
  if (!ne.length) return "string"
  if (ne.every((v) => NUM.test(v))) return "number"
  if (ne.every((v) => BOOL.test(v))) return "boolean"
  if (ne.every((v) => VEC.test(v))) return "vector"
  // Bare names; the leaf emitter ({@link emitLeafFile}) adds the type-only `anomaly-packer`
  // import for whichever of these a body ends up using.
  if (ne.every((v) => v.includes(","))) return "CommaSeparatedString<string[]>"
  if (ne.every((v) => v.includes("/"))) return "SlashSeparatedString<string[]>"
  if (ne.every((v) => v.includes("\\\\"))) return "TwoBackslashSeparatedString<string[]>"
  return "string"
}

export const iniKey = (s: string) => (/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(s) ? s : `'${s}'`)
export const winPath = (p: string) => p.replace(/\//g, "\\\\")
/** PascalCase, safe to use as a TS identifier. A mod slug may legitimately start with a digit
 *  (`3dss-for-gamma`), which would emit `interface 3dssForGamma…` — a syntax error — so a
 *  leading digit is prefixed with `_`. */
export const pascal = (name: string) => {
  const s = name.split(/[^A-Za-z0-9]+/).filter(Boolean).map((p) => p[0].toUpperCase() + p.slice(1)).join("")
  return /^\d/.test(s) ? `_${s}` : s
}

/**
 * Emits one section entry: `name: { field: type }`, or `name: Record<string, string>` for a
 * list-style section.
 *
 * When the section inherits (`[child]:p1, p2`), the parents are referenced by indexed access
 * into the *same* interface (`Iface['p1']`) rather than copied. That keeps the link live: a
 * later augmentation of the parent flows into every child, exactly as the engine's parse-time
 * merge does. The child's own lines must win over the parents', so its keys are `Omit`ted off
 * the parent side — a plain intersection would collapse any overridden field to `never` when
 * the inferred types differ. Parents are referenced only if `known` contains them, so a
 * dangling `:parent` (typo, or a base living in an addon we haven't scanned) degrades to the
 * child's own fields instead of emitting an unresolvable type.
 */
export function emitSection(
  name: string,
  sec: Section,
  indent = "  ",
  iface?: string,
  known?: ReadonlySet<string>,
  itemSections?: ReadonlySet<string>,
  nonItemSections?: ReadonlySet<string>,
): string {
  const parents = iface && known ? sec.parents.filter((p) => known.has(p)) : []
  const isList = sec.listKeys.size > 0 && sec.fields.size === 0 && !parents.length
  if (isList) return `${indent}${iniKey(name)}: ${listType(sec.listKeys, itemSections, nonItemSections)}\n`

  const own = [...sec.fields].sort((a, b) => a[0].localeCompare(b[0]))
  const inherited = parents.map((p) => `${iface}['${p}']`).join(" & ")

  if (!inherited) {
    let s = `${indent}${iniKey(name)}: {\n`
    for (const [field, values] of own) s += `${indent}  ${iniKey(field)}: ${inferType(values)}\n`
    return s + `${indent}}\n`
  }
  if (!own.length) return `${indent}${iniKey(name)}: ${inherited}\n`

  const shadowed = own.map(([f]) => `'${f}'`).join(" | ")
  let s = `${indent}${iniKey(name)}: Omit<${inherited}, ${shadowed}> & {\n`
  for (const [field, values] of own) s += `${indent}  ${iniKey(field)}: ${inferType(values)}\n`
  return s + `${indent}}\n`
}

/**
 * Type of a list-style section — bare lines with no `=`, which `collect_section` returns as an
 * **array** of those lines (hence `T[]`, not a `Record`: the script iterates the result).
 *
 * A grouping file lists item sections (`group_hv.ltx`'s `[hv]` holds `skeet`, `cut_kit`,
 * `gauss_sight`), so the array is `Section.Item[]`. The test is deliberately lenient: a group
 * routinely lists items owned by *other* addons (`[kits]` is entirely `cut_kit`/`vitup`/… defined
 * in separate weapons mods), none of which are visible when this pack is generated alone.
 * Requiring lines to resolve locally would type such a group `string[]` and defeat the point, so
 * an unrecognised token is taken as an item section awaiting its own addon's reference — the
 * "unknown section = registry gap, not a wider type" rule. Demotion to `string[]` happens only on
 * positive evidence: a line that resolves to a known *non-item* (an Npc/Squad/Monster/… section),
 * which marks the list as something other than an item group. The caller passes `itemSections` to
 * opt a mod's files into this at all; the base generator omits it and every list stays `string[]`.
 */
function listType(
  lines: ReadonlySet<string>,
  itemSections?: ReadonlySet<string>,
  nonItemSections?: ReadonlySet<string>,
): string {
  if (!itemSections || !lines.size) return "string[]"
  if (nonItemSections && [...lines].some((l) => nonItemSections.has(l))) return "string[]"
  return "Section.Item[]"
}

/**
 * Full body of a file's schema interface (all sections). Empty string if no sections.
 * `iface` enables inheritance emission — without it, parents are ignored and every section
 * emits flat (the pre-inheritance behaviour). `itemSections` lets a list-style section whose
 * lines are all item sections be typed `Section.Item[]` rather than `string[]`.
 */
export function emitSchemaBody(
  sections: Map<string, Section>,
  indent = "  ",
  iface?: string,
  itemSections?: ReadonlySet<string>,
  nonItemSections?: ReadonlySet<string>,
): string {
  const known = new Set(sections.keys())
  let body = ""
  for (const [sname, sec] of sections)
    body += emitSection(sname, sec, indent, iface, known, itemSections, nonItemSections)
  return body
}

/**
 * Every `.ltx` under `root`, as paths relative to it in posix form, sorted. Unlike the base
 * generator's flat per-domain scan, a mod's configs are walked in full: an addon invents its
 * own directory layout (`custom_icon_layers/groups/…` exists in no vanilla install), so there
 * is no fixed domain list to enumerate.
 */
function walkLtx(root: string, rel = ""): string[] {
  const dir = join(root, rel)
  if (!existsSync(dir)) return []
  const out: string[] = []
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const child = rel ? `${rel}/${e.name}` : e.name
    if (e.isDirectory()) out.push(...walkLtx(root, child))
    else if (e.name.toLowerCase().endsWith(".ltx")) out.push(child)
  }
  return out.sort()
}

/**
 * The canonical interface name for an ltx path. Derived from the path alone, so every pack
 * that touches a file agrees on the name without coordinating: `custom_icon_layers/groups/
 * base_groups.ltx` is always `CustomIconLayersGroupsBaseGroupsIni`. This is what makes a file
 * augmentable across addons — a slug-qualified name (`MyModFooIni`) is private to one pack and
 * nothing else can merge into it.
 */
export const ifaceForPath = (rel: string) => `${pascal(rel.replace(/\.ltx$/i, ""))}Ini`

/** An `#include` glob found in some config file: `dir` is the includer's directory (relative,
 *  posix), `rx` matches the basenames it pulls in, `includer` is its own relative path. */
type Includer = { dir: string; rx: RegExp; includer: string }

/**
 * Finds every wildcard `#include` across the given config roots. A mod's file is often not read
 * directly — it is globbed in by *another* mod's base file (3DSS ships `groups/group_hv.ltx`;
 * the icon-overlay addon's `groups/base_groups.ltx` is the single line `#include "group_*.ltx"`,
 * and that is the path scripts actually open). Neither mod's folder contains both halves, so the
 * link is only visible when the roots are scanned together.
 */
export function findIncluders(roots: readonly string[]): Includer[] {
  const out: Includer[] = []
  for (const root of roots) {
    for (const rel of walkLtx(root)) {
      for (const raw of readFileSync(join(root, rel), "latin1").split(/\r?\n/)) {
        const m = raw.replace(/;.*$/, "").trim().match(INCLUDE)
        if (!m || !m[1].includes("*")) continue
        const spec = m[1].replace(/\\/g, "/")
        const dir = join(dirname(rel), dirname(spec)).replace(/\\/g, "/").replace(/^\.$|^\.\//, "")
        out.push({
          dir,
          rx: new RegExp(`^${basename(spec).split("*").map(escapeRx).join(".*")}$`, "i"),
          includer: rel,
        })
      }
    }
  }
  return out
}

/**
 * Builds `IniFileSchemas` leaves for a mod's config ltx (the addon-pack ini family).
 * Walks `modConfigs` recursively; each file becomes a leaf declaring a path-derived interface
 * and its backslash-key registration. Value typing and `#include`/inheritance resolution are the
 * shared logic, so a mod's files are typed by exactly the same rules as the vanilla ones.
 *
 * `includers` (from {@link findIncluders}, scanned over the whole install) redirects a file that
 * is only ever read through someone else's wildcard include: `group_hv.ltx` emits an
 * augmentation of `CustomIconLayersGroupsBaseGroupsIni` rather than registering its own key,
 * because no script opens `group_hv.ltx` — they open `base_groups.ltx`. Several mods contribute
 * to the same includer, and interface merging unions them, which is exactly the runtime picture:
 * one merged gamedata where every installed `group_*.ltx` sits in one directory.
 *
 * Files that resolve to zero sections are skipped. `#include` is resolved first, so a pure
 * wildcard-include file yields what it pulls in rather than being dropped as empty; one that is
 * *still* empty is a genuine extension point, populated only by other addons.
 */
export function buildAddonIniSchemas(
  slug: string,
  modConfigs: string,
  header: string,
  includers: readonly Includer[] = [],
  itemSections?: ReadonlySet<string>,
  nonItemSections?: ReadonlySet<string>,
): { leaves: Map<string, string>; count: number } {
  const leaves = new Map<string, string>()
  for (const rel of walkLtx(modConfigs)) {
    const sections = parseIni(join(modConfigs, rel))
    if (!sections.size) continue
    const dir = dirname(rel).replace(/\\/g, "/").replace(/^\.$/, "")
    const via = includers.find((i) => i.dir === dir && i.rx.test(basename(rel)) && i.includer !== rel)
    const target = via ? via.includer : rel
    const iface = ifaceForPath(target)
    const body = emitSchemaBody(sections, "    ", iface, itemSections, nonItemSections)
    const leafName = `ini-${rel.replace(/\.ltx$/i, "").replace(/\//g, "-")}.d.ts`
    // The interface (and, for a directly-opened file, its `IniFileSchemas` registration) must land
    // in GLOBAL scope so they merge with the consumer's `declare global` declarations and with
    // other packs contributing to the same path-derived interface. A body that mentions
    // `Section.Item` forces the file to be a module that imports `Section` — there is no global
    // `Section` (it is only a module export of the package), so a bare ambient `interface … {
    // hv: Section.Item[] }` would silently resolve `Section` to a different/broken type under
    // `skipLibCheck` and never match the consumer's imported `Section`. `export {}` guarantees
    // module-hood even when nothing else makes the file a module.
    const note = via
      ? `\n// \`${rel}\` is never opened directly — \`${via.includer}\` globs it in, so these sections augment\n// that file's schema. The interface is path-derived, so every mod contributing to it merges here.`
      : ""
    leaves.set(
      leafName,
      emitLeafFile({
        comment: `${header.replace(/\n$/, "")}${note}`,
        interfaces: [{ name: iface, body }],
        // A directly-opened file registers its `IniFileSchemas` key; one pulled in through
        // someone else's wildcard `#include` only augments the includer's interface.
        register: via ? undefined : { key: winPath(rel), iface },
      }),
    )
  }
  return { leaves, count: leaves.size }
}
