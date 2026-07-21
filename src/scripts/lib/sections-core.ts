import { existsSync, readdirSync, readFileSync, statSync } from "node:fs"
import { join } from "node:path"

/**
 * Shared section class-resolution + bucketing used by both the base generator
 * (`gen-sections.ts`, vanilla configs) and the on-demand addon-pack generator
 * (`anomaly-packer gen-addon`, a mod's configs overlaid on vanilla). Keeping the
 * manifests and the resolver here means the two can't drift: an addon section buckets
 * into exactly the category the base generator would have put it in.
 *
 * A "config root" is a `configs/` directory (vanilla's, or a mod's `gamedata/configs`).
 * `[child]:parent` inheritance is resolved across the union of roots, so a modded
 * `[wpn_x]:identity_immunities` resolves its class through the vanilla base it inherits.
 */

/** How a resolved engine `class` joins a category: it is in `exact`, or starts with a
 *  string in `prefix`. */
export type ClassRule = { exact?: string[]; prefix?: string[] }

/** Item categories, evaluated top-to-bottom (first match wins). `MiscItem` has no rule:
 *  it is the fallback for any item resolving to an unclaimed class. Order matters —
 *  `Attachment` precedes `Weapon` so `WP_SCOPE`/`WP_SILEN` bucket as mountables. */
export const ITEM_CATEGORIES: { name: string; rule?: ClassRule }[] = [
  { name: "Attachment", rule: { exact: ["II_ATTCH", "WP_SCOPE", "WP_SILEN"] } },
  { name: "Weapon", rule: { prefix: ["WP_"], exact: ["W_STMGUN", "W_MOUNTD"] } },
  { name: "Grenade", rule: { prefix: ["G_"], exact: ["S_VOG25", "S_OG7B", "S_M209"] } },
  { name: "Ammo", rule: { exact: ["AMMO", "AMMO_S"] } },
  { name: "Outfit", rule: { exact: ["EQU_STLK"] } },
  { name: "Helmet", rule: { exact: ["E_HLMET"] } },
  { name: "Backpack", rule: { exact: ["EQ_BAKPK"] } },
  { name: "Artefact", rule: { exact: ["ARTEFACT", "SCRPTART"] } },
  { name: "Detector", rule: { exact: ["DET_SIMP", "DET_ADVA", "DET_ELIT", "DET_SCIE"] } },
  { name: "Device", rule: { exact: ["D_PDA", "D_CUSTOM", "D_FLARE", "D_FLALIT", "TORCH_S"] } },
  { name: "Consumable", rule: { exact: ["II_FOOD"] } },
  { name: "Explosive", rule: { exact: ["II_EXPLO", "S_EXPLO", "S_INVBOX"] } },
  { name: "MiscItem" }, // fallback: II_ANTIR, II_BOLT, E_STLK, and anything unmapped
]

/** Non-item object categories. Each names its candidate source files (relative to a
 *  config root) and a class rule. `Squad` matches by presence in `misc/squad_descr`
 *  (no class), so its rule is omitted. */
export type ObjectCategory = {
  name: string
  files: (root: string) => string[]
  rule?: ClassRule
  /** Section names to drop even if they match (abstract bases). */
  exclude?: string[]
}

export const OBJECT_CATEGORIES: ObjectCategory[] = [
  { name: "Vehicle", files: (r) => [join(r, "vehicles.ltx")], rule: { exact: ["SCRPTCAR"] }, exclude: ["m_car"] },
  { name: "Helicopter", files: (r) => [join(r, "creatures", "helicopter.ltx")], rule: { exact: ["C_HLCP_S"] } },
  { name: "Anomaly", files: (r) => walk(join(r, "zones"), ".ltx"), rule: { prefix: ["ZS_", "Z_"] } },
  { name: "Monster", files: spawnFiles, rule: { prefix: ["SM_"], exact: ["AI_CROW", "AI_FLE_G", "AI_PHANT"] } },
  { name: "Npc", files: spawnFiles, rule: { exact: ["AI_STL_S", "AI_TRD_S", "S_ACTOR"] } },
  { name: "Squad", files: (r) => walk(join(r, "misc", "squad_descr"), ".ltx") },
]

/** Ordered category names as they appear in the aggregates. */
export const ITEM_NAMES = ITEM_CATEGORIES.map((c) => c.name)
export const OBJECT_NAMES = OBJECT_CATEGORIES.map((c) => c.name)

export function walk(dir: string, ext: string): string[] {
  if (!existsSync(dir)) return []
  const out: string[] = []
  for (const e of readdirSync(dir)) {
    const p = join(dir, e)
    if (statSync(p).isDirectory()) out.push(...walk(p, ext))
    else if (e.toLowerCase().endsWith(ext)) out.push(p)
  }
  return out
}

function spawnFiles(root: string): string[] {
  return walk(join(root, "creatures"), ".ltx").filter((f) => /spawn_sections/i.test(f))
}

/** Collects every `[section]` header name across a set of ltx files. */
export function headersOf(files: string[]): Set<string> {
  const names = new Set<string>()
  for (const f of files) {
    if (!existsSync(f)) continue
    for (const raw of readFileSync(f, "latin1").split("\n")) {
      const line = raw.replace(/;.*$/, "").trim()
      const h = line.match(/^\[([^\]]+)\]/)
      if (h) names.add(h[1].trim())
    }
  }
  return names
}

/**
 * Files whose `[child]:parent` + `class=` lines build the inheritance graph.
 *
 * The root-level `mod_system*.ltx` are how a mod adds sections in Anomaly: the engine merges
 * them into `system.ltx` on load — vanilla's `system.ltx` never `#include`s them, so they are
 * invisible to any scan that only follows includes or only walks `items/`. Miss them and a mod's
 * items resolve to no class at all: 3DSS defines `[skeet]:addon` (a scope, with `cost` and
 * `inv_weight`) in `mod_system_z_weapon_addons_3dssg.ltx`, and without this it buckets nowhere.
 */
function graphFiles(root: string): string[] {
  const modSystem = existsSync(root)
    ? readdirSync(root)
        .filter((f) => /^mod_system.*\.ltx$/i.test(f))
        .sort()
        .map((f) => join(root, f))
    : []
  return [
    // The base identity sections the class graph roots into (`[booster]:identity_immunities`
    // with `class = II_FOOD`, etc.) live here. Without it, chains that pass through a base —
    // `[skeet]:addon` -> `[addon]:booster` -> `booster` — resolve to no class and the item
    // buckets nowhere.
    join(root, "defines.ltx"),
    ...walk(join(root, "items"), ".ltx"),
    ...walk(join(root, "creatures"), ".ltx"),
    ...walk(join(root, "zones"), ".ltx"),
    join(root, "vehicles.ltx"),
    ...modSystem,
  ]
}

export type Resolver = {
  /** header -> resolved engine class (or null). */
  resolveClass: (name: string) => string | null
  /** Every `[section]` header defined anywhere in these roots' graph files. */
  graphHeaders: Set<string>
}

/** Builds the class-resolution graph over the union of config roots. Later roots'
 *  `[child]:parent` entries merge in; the first `class=` seen for a section wins (so a
 *  section's own class beats an inherited one, matching engine behaviour). */
export function buildResolver(roots: string[]): Resolver {
  const sec = new Map<string, { parents: string[]; class: string | null }>()
  const graphHeaders = new Set<string>()
  for (const root of roots) {
    for (const f of graphFiles(root)) {
      if (!existsSync(f)) continue
      let cur: string | null = null
      for (const raw of readFileSync(f, "latin1").split("\n")) {
        const line = raw.replace(/;.*$/, "").trim()
        if (!line) continue
        const h = line.match(/^\[([^\]]+)\]\s*(?::\s*(.+))?$/)
        if (h) {
          cur = h[1].trim()
          graphHeaders.add(cur)
          const parents = h[2] ? h[2].split(",").map((s) => s.trim()).filter(Boolean) : []
          const prev = sec.get(cur)
          if (prev) prev.parents.push(...parents)
          else sec.set(cur, { parents, class: null })
          continue
        }
        const c = line.match(/^class\s*=\s*(\S+)/i)
        if (c && cur && !sec.get(cur)!.class) sec.get(cur)!.class = c[1]
      }
    }
  }
  const memo = new Map<string, string | null>()
  function resolveClass(name: string, seen = new Set<string>()): string | null {
    if (memo.has(name)) return memo.get(name)!
    if (seen.has(name)) return null
    seen.add(name)
    const e = sec.get(name)
    if (!e) return null
    let cls = e.class
    if (!cls)
      for (const p of e.parents) {
        cls = resolveClass(p, seen)
        if (cls) break
      }
    memo.set(name, cls)
    return cls
  }
  return { resolveClass: (n) => resolveClass(n), graphHeaders }
}

function matches(cls: string, rule: ClassRule): boolean {
  if (rule.exact?.includes(cls)) return true
  if (rule.prefix?.some((p) => cls.startsWith(p))) return true
  return false
}

export type Buckets = {
  /** category name -> section names in it (item categories then object categories). */
  buckets: Map<string, Set<string>>
  resolver: Resolver
}

/**
 * Buckets every section defined across `roots` into its category, using the shared
 * manifests. Item categories are first-match-wins by resolved class (MiscItem fallback);
 * object categories match by their own source files + class rule. This is the exact
 * classification the base generator applies to vanilla; the addon generator calls it
 * over `[vanilla, mod]` and diffs against the vanilla run to isolate new sections.
 */
export function bucketSections(roots: string[]): Buckets {
  const resolver = buildResolver(roots)
  const buckets = new Map<string, Set<string>>(
    [...ITEM_CATEGORIES, ...OBJECT_CATEGORIES].map((c) => [c.name, new Set<string>()]),
  )

  // items: first-match-wins over ITEM_CATEGORIES, MiscItem as fallback
  const itemNames = headersOf(roots.flatMap((r) => walk(join(r, "items"), ".ltx")))
  for (const name of itemNames) {
    const cls = resolver.resolveClass(name)
    if (!cls) continue // resolves to no engine class -> not a spawnable item section
    const hit = ITEM_CATEGORIES.find((c) => c.rule && matches(cls, c.rule))
    buckets.get((hit ?? ITEM_CATEGORIES.at(-1)!).name)!.add(name)
  }

  // object categories: each over its own candidate source files across roots
  for (const cat of OBJECT_CATEGORIES) {
    const bucket = buckets.get(cat.name)!
    const exclude = new Set(cat.exclude ?? [])
    const candidates = headersOf(roots.flatMap((r) => cat.files(r)))
    for (const name of candidates) {
      if (exclude.has(name)) continue
      if (!cat.rule) {
        bucket.add(name) // no class rule (Squad): membership by source alone
        continue
      }
      const cls = resolver.resolveClass(name)
      if (cls && matches(cls, cat.rule)) bucket.add(name)
    }
  }

  return { buckets, resolver }
}
