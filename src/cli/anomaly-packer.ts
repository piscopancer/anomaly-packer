#!/usr/bin/env node
import c from 'chalk'
import Table from 'cli-table3'
import fs from 'fs/promises'
import { existsSync, readdirSync, rmSync } from 'node:fs'
import path from 'path'
import { argv } from 'process'
import { buildAddonPack } from '../scripts/lib/addon-pack'
import { zipBuild } from '../zip'

/** Reads a `--flag value` pair out of argv. */
function flag(name: string): string | undefined {
  const i = argv.indexOf(`--${name}`)
  return i !== -1 ? argv[i + 1] : undefined
}

/**
 * Every `configs` dir under a mods root, as include-scan context. Mod layouts vary — plain
 * `gamedata/configs`, an MO2-style `00 Main/configs`, a patch's `externalpatches/[01 A]/configs`
 * — so this looks for the directory by name rather than assuming a shape. Depth is capped
 * because a mods root holds hundreds of mods with deep texture/mesh trees that can never contain
 * configs, and walking them all costs far more than the scan is worth.
 */
function modConfigRoots(root: string, depth = 4): string[] {
  if (depth < 0 || !existsSync(root)) return []
  const out: string[] = []
  for (const e of readdirSync(root, { withFileTypes: true })) {
    if (!e.isDirectory()) continue
    if (e.name.toLowerCase() === 'configs') out.push(path.join(root, e.name))
    else if (!/^(textures|meshes|sounds|levels|anims|shaders|scripts)$/i.test(e.name))
      out.push(...modConfigRoots(path.join(root, e.name), depth - 1))
  }
  return out
}

/** "482- Xlib - damian_sirbu" -> "xlib": drop a leading "NN- ", any " - author" tail, lowercase. */
function slugify(folder: string): string {
  const base = folder.replace(/^\d+\s*-\s*/, '').split(/\s+-\s+/)[0]
  return base.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '')
}

async function genAddon() {
  const modRoot = argv.find((a, i) => i >= 3 && !a.startsWith('--') && argv[i - 1] !== '--out' && argv[i - 1] !== '--name' && argv[i - 1] !== '--configs' && argv[i - 1] !== '--context')
  if (!modRoot) {
    console.error('[gen-addon] usage: anomaly-packer gen-addon <mod-folder> [--name <slug>] [--out <dir>] [--configs <vanilla-configs>] [--context <mods-root>]')
    process.exit(1)
  }
  const gamedata = existsSync(path.join(modRoot, 'gamedata')) ? path.join(modRoot, 'gamedata') : modRoot
  const slug = flag('name') ?? slugify(path.basename(modRoot))
  const outBase = path.resolve(flag('out') ?? 'types/addons')
  const vanillaConfigs = path.resolve(flag('configs') ?? 'c:/Games/STALKER Anomaly/tools/_unpacked/configs')

  // A mod's ltx is often not read directly but globbed in by ANOTHER mod's base file (3DSS ships
  // `groups/group_hv.ltx`; the icon-overlay addon's `groups/base_groups.ltx` is `#include
  // "group_*.ltx"`, and that is what scripts open). That link is invisible from one mod's folder,
  // so `--context <mods-root>` supplies the sibling mods to scan for includers alongside vanilla.
  const contextRoot = flag('context')
  const includeContext = [vanillaConfigs, ...(contextRoot ? modConfigRoots(path.resolve(contextRoot)) : [])]

  const pack = await buildAddonPack({
    slug,
    modConfigs: path.join(gamedata, 'configs'),
    modScripts: path.join(gamedata, 'scripts'),
    vanillaConfigs,
    includeContext,
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

/**
 * Packages a finished build for distribution. The archive holds `gamedata/` at its root, the
 * layout every Anomaly mod manager expects, so it installs without being unwrapped first.
 */
async function zip() {
  try {
    const { file, bytes } = await zipBuild({
      buildDir: flag('build'),
      outDir: flag('out'),
      name: flag('name'),
    })
    const mb = (bytes / 1024 / 1024).toFixed(2)
    console.log(`${c.cyan.bold('Zipped')} ${c.reset(path.relative(process.cwd(), file))} ${c.gray(`(${mb} MB)`)}`)
  } catch (e) {
    console.error(`[zip] ${(e as Error).message}`)
    process.exit(1)
  }
}

async function run() {
  const [, , cmd] = argv as [never, never, string]
  switch (cmd) {
    case 'gen-addon':
      await genAddon()
      break
    case 'zip':
      await zip()
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
