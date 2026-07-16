#!/usr/bin/env node
import c from 'chalk'
import Table from 'cli-table3'
import fs from 'fs/promises'
import { existsSync, rmSync } from 'node:fs'
import path from 'path'
import { argv } from 'process'
import { buildAddonPack } from '../scripts/lib/addon-pack'

/** Reads a `--flag value` pair out of argv. */
function flag(name: string): string | undefined {
  const i = argv.indexOf(`--${name}`)
  return i !== -1 ? argv[i + 1] : undefined
}

/** "482- Xlib - damian_sirbu" -> "xlib": drop a leading "NN- ", any " - author" tail, lowercase. */
function slugify(folder: string): string {
  const base = folder.replace(/^\d+\s*-\s*/, '').split(/\s+-\s+/)[0]
  return base.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '')
}

async function genAddon() {
  const modRoot = argv.find((a, i) => i >= 3 && !a.startsWith('--') && argv[i - 1] !== '--out' && argv[i - 1] !== '--name' && argv[i - 1] !== '--configs')
  if (!modRoot) {
    console.error('[gen-addon] usage: anomaly-packer gen-addon <mod-folder> [--name <slug>] [--out <dir>] [--configs <vanilla-configs>]')
    process.exit(1)
  }
  const gamedata = existsSync(path.join(modRoot, 'gamedata')) ? path.join(modRoot, 'gamedata') : modRoot
  const slug = flag('name') ?? slugify(path.basename(modRoot))
  const outBase = path.resolve(flag('out') ?? 'types/addons')
  const vanillaConfigs = path.resolve(flag('configs') ?? 'c:/Games/STALKER Anomaly/tools/_unpacked/configs')

  const pack = await buildAddonPack({
    slug,
    modConfigs: path.join(gamedata, 'configs'),
    modScripts: path.join(gamedata, 'scripts'),
    vanillaConfigs,
  })

  const dir = path.join(outBase, slug)
  rmSync(dir, { recursive: true, force: true })
  await fs.mkdir(dir, { recursive: true })
  for (const [name, content] of pack.leaves) await fs.writeFile(path.join(dir, name), content)
  await fs.writeFile(path.join(outBase, `${slug}.d.ts`), pack.barrel)

  const s = pack.summary
  const sec = Object.entries(s.newSections).map(([k, v]) => `${k} ${v}`).join(', ') || 'none'
  console.log(c.green(`[gen-addon] wrote ${slug}: ${pack.leaves.size} leaves -> ${dir}`))
  console.log(`  scripts: ${s.funcs} funcs, ${s.vars} vars | new sections: ${sec} | ini files: ${s.iniFiles}`)
  console.log(`  reference it with: /// <reference types="anomaly-packer/types/addons/${slug}" />`)
}

async function run() {
  const [, , cmd] = argv as [never, never, string]
  switch (cmd) {
    case 'gen-addon':
      await genAddon()
      break
    case 'types':
      const [, , , cmd] = argv as [never, never, never, 'list']
      const declarationsDirs = await fs.readdir(path.join(import.meta.dirname, '..', 'types'))
      let declarationGroups = await Promise.all(
        declarationsDirs.map(async (dir) => {
          return {
            dir,
            dts: await fs
              .readdir(path.join(import.meta.dirname, '..', 'types', dir))
              .then((tds) => tds.filter((tds) => tds.endsWith('d.ts')).map((td) => td.replace('.d.ts', ''))),
          }
        })
      )
      switch (cmd) {
        case 'list':
          const t = new Table()
          for (const d of declarationGroups) {
            t.push({ [d.dir + ' ' + c.gray('(' + d.dts.length + ')')]: c.yellow(d.dts.join('\n')) })
          }
          console.log(t.toString())
          break
        default:
          console.error('[Anomaly Packer CLI] Unknown command')
      }
      break
    default:
      console.error('[Anomaly Packer CLI] Unknown command')
      break
  }
}

run()
