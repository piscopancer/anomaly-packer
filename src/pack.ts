import c from 'chalk'
import { existsSync } from 'fs'
import fs from 'fs/promises'
import iconv from 'iconv-lite'
import path from 'path'
import { pathToFileURL } from 'url'
import { FileExtension } from '.'
import * as texts from './texts'
import { transpile, TranspiledScript } from './transpilation'

/**
 * Extensions whose contents are text the engine reads in win1251. Everything else in a
 * gamedata tree — textures, sounds, meshes — is binary and must be copied unchanged.
 */
const TEXT_EXTENSIONS = new Set(['.ltx', '.xml', '.script', '.txt', '.seq', '.lua', '.json', '.md'])

export type PackOptions = {
  /**
   * Flat identifier of the addon. Every registered script is prefixed with it (the `index` entry becomes the bare id), and the runtime scripts Anomaly Packer copies into the build are namespaced with it too, so nothing collides with other addons: e.g. importing 'anomaly-packer/mcm' emits `<addonId>__ap_mcm.script`.
   *
   * @example
   *
   * 'pcprs_healing_campfires'
   */
  addonId: string
  build?: {
    outDirName?: string
  }
  /**
   * Short names of the TypeScript files under /gamedata/scripts to include in the build. [typescript-to-lua](https://www.npmjs.com/package/typescript-to-lua) transpiles the entire project, so only the files listed here are picked up; every other transpiled module is discarded. Each name is written to the build prefixed with {@link addonId} — `index` becomes the bare addon id (the addon's main script), everything else becomes `<addonId>_<name>`.
   *
   * @example
   *
   * With the below configuration /gamedata/scripts/index.ts and /gamedata/scripts/mcm.ts are built to `<addonId>.script` and `<addonId>_mcm.script`
   *
   * ```ts
   * ['index', 'mcm']
   * ```
   */
  scripts?: string[]
  /**
   * Path to the original Anomaly gamedata directory. This path is the base for the relative paths that are used in certain functions of Anomaly Packer.
   *
   * @example
   *
   * 'C:/Games/Anomaly 1.5.2/gamedata'
   */
  sourceGamedata?: string
}

export async function pack(options: PackOptions) {
  console.log('')
  const outDirName = options.build?.outDirName ?? 'build'
  const cwd = process.cwd()
  const buildGamedataPath = path.join(cwd, outDirName, 'gamedata')
  if (!existsSync(path.join(cwd, 'gamedata'))) {
    console.error('gamedata directory must reside in the root of the project, otherwise there is nothing to pack')
    return
  } else {
    await fs.rm(buildGamedataPath, { force: true, recursive: true })
    await fs.mkdir(buildGamedataPath, { recursive: true })

    console.log('Reading ' + c.bold.white('gamedata ') + c.reset('directory...'))

    const scriptsDirPresent = existsSync(path.join(cwd, 'gamedata/scripts'))

    console.log(c.bold.white('scripts') + c.reset(` directory detected. Transpiling scripts...`))

    const transpiled = scriptsDirPresent && options.scripts ? await transpile(options.scripts, options.addonId) : null
    await thisRecursiveShit(path.join(cwd, 'gamedata'), buildGamedataPath, transpiled?.scripts ?? null)

    console.log(c.cyan.bold('Scripts ') + c.cyan('were transpiled'))

    // Copy the runtime scripts that transpiled code linked against (e.g. the MCM builder). Driven purely by imports, so nothing to opt into.
    if (transpiled && transpiled.runtimes.size) {
      const scriptsBuildPath = path.join(buildGamedataPath, 'scripts')
      await fs.mkdir(scriptsBuildPath, { recursive: true })
      for (const [template, global] of transpiled.runtimes) {
        const runtimeLua = await fs.readFile(path.join(import.meta.dirname, 'runtime', `${template}.script`), 'utf8')
        await fs.writeFile(path.join(scriptsBuildPath, `${global}.script`), iconv.encode(transpiled.header + runtimeLua, 'win1251'))
      }
      console.log(c.cyan.bold('Runtime ') + c.cyan(`scripts linked (${[...transpiled.runtimes.values()].join(', ')})`))
    }
  }
  console.log('')
}

async function thisRecursiveShit(sourcePath: string, buildPath: string, allTranspiled: TranspiledScript[] | null) {
  const dirItems = await fs.readdir(sourcePath)
  for (const item of dirItems) {
    const curSourcePath = path.join(sourcePath, item)
    const curBuildPath = path.join(buildPath, item)
    const itemStat = await fs.stat(curSourcePath)
    if (itemStat.isDirectory()) {
      // Prevent directories in gamedata/scripts from appearing in the build
      if (curBuildPath.includes(path.join('gamedata', 'scripts')) && !curBuildPath.endsWith(path.join('gamedata', 'scripts'))) {
        continue
      }
      await fs.mkdir(curBuildPath)
      await thisRecursiveShit(curSourcePath, curBuildPath, allTranspiled)
    } else if (itemStat.isFile()) {
      // `gamedata/tsconfig.json` configures the authoring project; it is not mod content.
      if (item === 'tsconfig.json' && sourcePath.endsWith('gamedata')) {
        continue
      }
      // Declaration files carry only ambient types — there is nothing to render and nothing
      // to emit, so importing one would just fail the "no default export" check and print a
      // misleading error for a perfectly correct file.
      if (item.endsWith('.d.ts')) {
        continue
      }
      const ext = path.extname(item)
      if (ext === '.ts' || ext === '.tsx') {
        const fileName = item.substring(0, item.length - ext.length)
        if (allTranspiled && sourcePath.includes(path.join('gamedata', 'scripts'))) {
          // Write transpiled file in gamedata/scripts if it's registered
          for (const transpiled of allTranspiled) {
            if (fileName === transpiled.sourceFileName) {
              await fs.writeFile(
                //
                path.join(buildPath, transpiled.buildFileName + '.script'),
                iconv.encode(transpiled.buildFileText, 'win1251')
              )
            }
          }
        } else {
          // A Windows absolute path must become a file:// URL for ESM import; the query busts the module cache so repeated packs re-read edited scripts
          const moduleUrl = pathToFileURL(curSourcePath).href + '?t=' + Date.now()
          const textScript = (await import(moduleUrl)) as { default: (t: typeof texts) => any | Promise<any>; extension?: FileExtension }
          try {
            const text = await textScript.default(texts)
            const extension = textScript.extension ?? 'xml'
            // A config module may return several rendered chunks (e.g. one ltx section each).
            // Joining explicitly, rather than letting `iconv.encode` stringify the array,
            // avoids `Array.prototype.toString` splicing commas between them.
            const output = Array.isArray(text) ? text.join('\n') : String(text)
            await fs.writeFile(path.join(buildPath, fileName + `.${extension}`), iconv.encode(output, 'win1251'))
          } catch (e) {
            console.error('Script at %s does not have a default export or contains an error. This file will not appear in the build', curSourcePath)
            console.log(c.italic.gray((e as Error).message))
          }
        }
      } else {
        // If not a TypeScript file
        if (curBuildPath.includes(path.join('gamedata', 'scripts')) && ext !== '.script') {
          continue
        }
        // Only text is transcoded to the encoding the engine reads. Anything else is copied
        // byte for byte: running a dds, ogg or ogf through `toString('utf8')` replaces every
        // byte sequence that is not valid utf8 with U+FFFD, silently destroying the asset.
        if (TEXT_EXTENSIONS.has(ext.toLowerCase())) {
          const content = await fs.readFile(curSourcePath)
          await fs.writeFile(curBuildPath, iconv.encode(content.toString('utf8'), 'win1251'))
        } else {
          await fs.copyFile(curSourcePath, curBuildPath)
        }
      }
    }
  }
}
