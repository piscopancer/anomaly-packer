import { readdirSync, statSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'

/**
 * Generates a barrel `.d.ts` next to every type sub-folder in `dist/types`,
 * so consumers can pull in a whole group with a single triple-slash reference
 * (e.g. `/// <reference types="anomaly-packer/types/game" />`) instead of
 * listing each module. Run after tsdown has copied `src/types` into `dist`.
 */

const typesDir = resolve('dist/types')

// Groups that must NOT get an auto-generated barrel. `addons` holds third-party mod
// integrations (mcm, modded_exes) that pull in ambient globals; each is referenced
// selectively with `/// <reference types="anomaly-packer/types/addons/<name>" />` only
// by addons that use it, so they never pollute the global scope of ones that don't.
// `sections` is a real importable ES module (`anomaly-packer/sections`), not an ambient
// group — it must not get a triple-slash barrel (that would re-expose it ambiently and
// clash with its module exports). It is reached via the package `./sections` export.
const excludedGroups = new Set(['addons', 'sections'])

for (const entry of readdirSync(typesDir)) {
  const dir = join(typesDir, entry)
  if (!statSync(dir).isDirectory()) continue
  if (excludedGroups.has(entry)) continue

  const modules = readdirSync(dir)
    .filter((file) => file.endsWith('.d.ts'))
    .sort()

  const barrel = modules.map((file) => `/// <reference path="${entry}/${file}" />`).join('\n') + '\n'
  writeFileSync(join(typesDir, `${entry}.d.ts`), barrel)
  console.log(`Generated dist/types/${entry}.d.ts (${modules.length} modules)`)
}
