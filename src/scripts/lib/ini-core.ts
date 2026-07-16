import { existsSync, readdirSync, readFileSync } from "node:fs"
import { basename, join } from "node:path"

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

export type Section = { fields: Map<string, Set<string>>; listKeys: Set<string> }

export function parseIni(file: string): Map<string, Section> {
  const sections = new Map<string, Section>()
  let cur: Section | null = null
  for (const raw of readFileSync(file, "latin1").split(/\r?\n/)) {
    const line = raw.replace(/;.*$/, "").trim()
    if (!line) continue
    const h = line.match(/^\[([^\]]+)\]/)
    if (h) {
      cur = { fields: new Map(), listKeys: new Set() }
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

/** Emitted TS type text for a field, given its observed values. Conservative. */
export function inferType(values: Set<string>): string {
  const ne = [...values].filter(Boolean)
  if (!ne.length) return "string"
  if (ne.every((v) => NUM.test(v))) return "number"
  if (ne.every((v) => BOOL.test(v))) return "boolean"
  if (ne.every((v) => VEC.test(v))) return "vector"
  if (ne.every((v) => v.includes(","))) return "CommaSeparatedString<string>"
  if (ne.every((v) => v.includes("/"))) return "SlashSeparatedString<string>"
  if (ne.every((v) => v.includes("\\\\"))) return "TwoBackslashSeparatedString<string>"
  return "string"
}

export const iniKey = (s: string) => (/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(s) ? s : `'${s}'`)
export const winPath = (p: string) => p.replace(/\//g, "\\\\")
export const pascal = (name: string) =>
  name.split(/[^A-Za-z0-9]+/).filter(Boolean).map((s) => s[0].toUpperCase() + s.slice(1)).join("")

/** Emits one section entry: `name: { field: type }` or `name: Record<string, string>` for
 *  a list-style section. Indentation is caller-controlled via `indent`. */
export function emitSection(name: string, sec: Section, indent = "  "): string {
  const isList = sec.listKeys.size > 0 && sec.fields.size === 0
  if (isList) return `${indent}${iniKey(name)}: Record<string, string>\n`
  let s = `${indent}${iniKey(name)}: {\n`
  for (const [field, values] of [...sec.fields].sort((a, b) => a[0].localeCompare(b[0])))
    s += `${indent}  ${iniKey(field)}: ${inferType(values)}\n`
  return s + `${indent}}\n`
}

/** Full body of a file's schema interface (all sections). Empty string if no sections. */
export function emitSchemaBody(sections: Map<string, Section>, indent = "  "): string {
  let body = ""
  for (const [sname, sec] of sections) body += emitSection(sname, sec, indent)
  return body
}

/** Config sub-dirs whose top-level ltx are worth schema-ing for a mod (mirrors the base
 *  generator's flat domains). */
const ADDON_INI_DOMAINS = ["plugins", "misc", "ai_tweaks", "scripts"] as const

/**
 * Builds `IniFileSchemas` leaves for a mod's config ltx (the addon-pack ini family).
 * Scans each {@link ADDON_INI_DOMAINS} dir under `modConfigs` flat; each file becomes a
 * leaf named `ini-<domain>-<stem>.d.ts` declaring a slug-qualified interface and its
 * backslash-key registration. Value typing is the shared conservative logic.
 */
export function buildAddonIniSchemas(
  slug: string,
  modConfigs: string,
  header: string,
): { leaves: Map<string, string>; count: number } {
  const leaves = new Map<string, string>()
  for (const domain of ADDON_INI_DOMAINS) {
    const dir = join(modConfigs, domain)
    if (!existsSync(dir)) continue
    for (const f of readdirSync(dir).filter((n) => n.toLowerCase().endsWith(".ltx")).sort()) {
      const stem = basename(f, ".ltx")
      const sections = parseIni(join(dir, f))
      if (!sections.size) continue
      const iface = `${pascal(slug)}${pascal(domain)}${pascal(stem)}Ini`
      const pathKey = winPath(`${domain}/${stem}.ltx`)
      const body = emitSchemaBody(sections)
      leaves.set(`ini-${domain}-${stem}.d.ts`, `${header}

interface ${iface} {
${body}}

interface IniFileSchemas {
  '${pathKey}': ${iface}
}
`)
    }
  }
  return { leaves, count: leaves.size }
}
