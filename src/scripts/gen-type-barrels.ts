import { readdirSync, statSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'

/**
 * Generates a barrel `.d.ts` next to every type sub-folder in `dist/types`,
 * so consumers can pull in a whole group with a single triple-slash reference
 * (e.g. `/// <reference types="anomaly-packer/types/game" />`) instead of
 * listing each module. Run after tsdown has copied `src/types` into `dist`.
 */

const typesDir = resolve('dist/types')

for (const entry of readdirSync(typesDir)) {
  const dir = join(typesDir, entry)
  if (!statSync(dir).isDirectory()) continue

  const modules = readdirSync(dir)
    .filter((file) => file.endsWith('.d.ts'))
    .sort()

  const barrel = modules.map((file) => `/// <reference path="${entry}/${file}" />`).join('\n') + '\n'
  writeFileSync(join(typesDir, `${entry}.d.ts`), barrel)
  console.log(`Generated dist/types/${entry}.d.ts (${modules.length} modules)`)
}
