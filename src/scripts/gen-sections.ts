import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs"
import { join, resolve } from "node:path"

/**
 * Generates `src/types/game/__base/sections.d.ts` from the vanilla Anomaly ltx
 * config tree.
 *
 * Item sections (`configs/items`) are collected, their effective engine `class`
 * resolved through ltx inheritance (`[child]:parent`), and bucketed by kind into
 * mergeable `interface` registries; the unions (`Weapon`, `Ammo`, `Outfit`,
 * `Artefact`, `Item`) are derived via `keyof`, and `Section` is their union.
 *
 * Object sections that a game object's `section()` can also return are collected
 * too: creature/NPC spawn sections (`configs/creatures/spawn_sections*.ltx` →
 * `NpcSection`) and squad sections (`configs/misc/squad_descr/*.ltx` →
 * `SquadSection`). `AnySection` is the union of every section kind and is the
 * type of `CGameObject.section()` and of the `system_ini` readers' section args.
 * (Smart-terrain sections live in `all.spawn`, not the config tree, so they are
 * not modelled here.)
 *
 * Every registry is an `interface` (not a `const enum`) so an addon's own `.d.ts`
 * can append to it by declaration merging — `interface Weapons { my_wpn: 0 }` —
 * and the derived unions grow automatically in the consumer's project.
 *
 * Usage: `tsx src/scripts/gen-sections.ts [configs-dir]`
 */

const CONFIGS = resolve(
  process.argv[2] ?? "c:/Games/STALKER Anomaly/tools/_unpacked/configs",
)
const ITEMS = join(CONFIGS, "items")
const CREATURES = join(CONFIGS, "creatures")
const SQUADS = join(CONFIGS, "misc", "squad_descr")
const OUT = resolve("src/types/game/__base/sections.d.ts")

type Kind = "Weapon" | "Ammo" | "Outfit" | "Artefact" | "Item"
const REGISTRY: Record<Kind, string> = {
  Weapon: "Weapons",
  Ammo: "Ammos",
  Outfit: "Outfits",
  Artefact: "Artefacts",
  Item: "Items",
}

function walk(dir: string, ext: string): string[] {
  if (!existsSync(dir)) return []
  const out: string[] = []
  for (const e of readdirSync(dir)) {
    const p = join(dir, e)
    if (statSync(p).isDirectory()) out.push(...walk(p, ext))
    else if (e.toLowerCase().endsWith(ext)) out.push(p)
  }
  return out
}

/** Collects every `[section]` header name in a set of ltx files. */
function collectHeaders(files: string[]): Set<string> {
  const names = new Set<string>()
  for (const f of files) {
    for (const raw of readFileSync(f, "latin1").split("\n")) {
      const line = raw.replace(/;.*$/, "").trim()
      const h = line.match(/^\[([^\]]+)\]/)
      if (h) names.add(h[1].trim())
    }
  }
  return names
}

// --- item sections: parse headers + class, resolve class through inheritance ---
const sec = new Map<string, { parents: string[]; class: string | null }>()
for (const f of walk(ITEMS, ".ltx")) {
  let cur: string | null = null
  for (const raw of readFileSync(f, "latin1").split("\n")) {
    const line = raw.replace(/;.*$/, "").trim()
    if (!line) continue
    const h = line.match(/^\[([^\]]+)\]\s*(?::\s*(.+))?$/)
    if (h) {
      cur = h[1].trim()
      const parents = h[2]
        ? h[2]
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean)
        : []
      const prev = sec.get(cur)
      if (prev) prev.parents.push(...parents)
      else sec.set(cur, { parents, class: null })
      continue
    }
    const c = line.match(/^class\s*=\s*(\S+)/i)
    if (c && cur) sec.get(cur)!.class = c[1]
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

function bucketOf(cls: string): Kind | null {
  if (/^WP_SCOPE/.test(cls)) return "Item" // scopes/attachments, not standalone weapons
  if (/^WP_|^W_|^G_/.test(cls)) return "Weapon"
  if (/^AMMO|^S_/.test(cls)) return "Ammo"
  if (/^E_STLK|^EQU_STLK|^E_HLMET|^EQ_BAKPK/.test(cls)) return "Outfit"
  if (/^ARTEFACT|^SCRPTART/.test(cls)) return "Artefact"
  if (/^II_|^D_|^DET_|^TORCH_|^S_INVBOX/.test(cls)) return "Item"
  return null
}

const buckets: Record<Kind, Set<string>> = {
  Weapon: new Set(),
  Ammo: new Set(),
  Outfit: new Set(),
  Artefact: new Set(),
  Item: new Set(),
}
for (const name of sec.keys()) {
  const cls = resolveClass(name)
  if (!cls) continue
  const k = bucketOf(cls)
  if (k) buckets[k].add(name)
}

// --- object sections: NPC spawn sections + squad sections (headers only) ---
const npcs = collectHeaders(
  walk(CREATURES, ".ltx").filter((f) => /spawn_sections/i.test(f)),
)
const squads = collectHeaders(walk(SQUADS, ".ltx"))

const key = (s: string) => (/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(s) ? s : `'${s}'`)
function iface(name: string, names: Iterable<string>): string {
  let s = `interface ${name} {\n`
  for (const n of [...names].sort()) s += `  ${key(n)}: 0\n`
  return s + `}\n`
}

let out = `// AUTO-GENERATED by \`tsx src/scripts/gen-sections.ts\`. Do not edit by hand.
// Vanilla Anomaly sections. Each registry is a mergeable interface: an addon's own
// .d.ts can add entries (e.g. \`interface Weapons { my_wpn: 0 }\`) and the derived
// unions grow automatically.
//   Section    - item sections (spawn/give APIs), split by kind below.
//   NpcSection - creature/NPC spawn sections (configs/creatures/spawn_sections*).
//   SquadSection - squad sections (configs/misc/squad_descr).
//   AnySection - any of the above; the type a game object's section() can return.

`
for (const kind of Object.keys(REGISTRY) as Kind[]) {
  out += iface(REGISTRY[kind], buckets[kind])
  out += `type ${kind} = keyof ${REGISTRY[kind]}\n\n`
}
out += `type Section = Weapon | Ammo | Outfit | Artefact | Item\n\n`
out += iface("Npcs", npcs)
out += `type NpcSection = keyof Npcs\n\n`
out += iface("Squads", squads)
out += `type SquadSection = keyof Squads\n\n`
out += `type AnySection = Section | NpcSection | SquadSection\n`

writeFileSync(OUT, out)
console.log(`Wrote ${OUT}`)
for (const kind of Object.keys(REGISTRY) as Kind[])
  console.log(`  ${kind}: ${buckets[kind].size}`)
console.log(`  NpcSection: ${npcs.size}`)
console.log(`  SquadSection: ${squads.size}`)
