import c from 'chalk'
import { existsSync } from 'fs'
import fs from 'fs/promises'
import iconv from 'iconv-lite'
import path from 'path'
import trash from 'trash'
import { FileExtension } from '.'
import * as texts from './texts'
import { transpile, TranspiledScript } from './transpilation'

export type PackOptions = {
  build?: {
    outDirName?: string
  }
  /**
   * TypeScript scripts under /gamedata/scripts directory will be transpiled but not included in the build by default. This is due to [typescript-to-lua](https://www.npmjs.com/package/typescript-to-lua) package transpiling the entirety of project and creating a Lua script for every TypeScript module it is able to find. Because this is totally unnecessary, an array of so-called "registered" or "desired" scripts must be provided for scripts to be recognised and appear in the build. Transforming the name of the output script is optional.
   *
   * @example
   *
   * With the below configuration the *main.ts* file will be searched for under gamedata/scripts directory
   *
   * ```ts
   * [{ sourceFileName: 'main.ts', bildFileName: addonId + '_main' }]
   * ```
   */
  scripts?: { sourceFileName: string; buildFileName?: string }[]
  /**
   * Path to the original Anomaly gamedata directory. This path is the base for the relative paths that are used in certain functions of Anomaly Packer.
   *
   * @example
   *
   * 'C:/Games/Anomaly 1.5.2/gamedata'
   */
  sourceGamedata?: string
  /**
   * ## ⚠ Use with care! If misused, this function can damage personal and valueable data!
   *
   * Additional paths to gamedata directory that will get refreshed with the gamedata of the fresh build. Useful when this the addon was installed via Mod Organizer 2 once and simply requires to get its files refreshed as the development continues.
   *
   * @example
   * ```ts
   * [`C:/Users/Jack Daniels/AppData/Local/ModOrganizer/STALKER Anomaly/mods/${addonId}_build/gamedata`]
   * ```
   */
  refresh?: string[]
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

    const transpiled = scriptsDirPresent && options.scripts ? await transpile(options.scripts) : null
    await thisRecursiveShit(path.join(cwd, 'gamedata'), buildGamedataPath, transpiled)

    console.log(c.cyan.bold('Scripts ') + c.cyan('were transpiled'))
  }
  if (options.refresh && options.refresh.length) {
    for (const refresh of options.refresh) {
      try {
        await trash(refresh)
        await fs.cp(buildGamedataPath, refresh, { recursive: true })
      } catch (error) {
        console.error('Refresh path "%s" is incorrect', refresh)
        console.log(c.gray('Full log: ' + (error as Error).message))
      }
    }
    console.log(c.cyan('Build was copied to ') + c.cyan.bold(options.refresh.length + ' outer gamedata directories'))
    for (const refresh of options.refresh) {
      console.log('  ' + c.gray.italic(refresh))
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
          const textScript = (await import(curSourcePath)) as { default: (t: typeof texts) => any | Promise<any>; extension?: FileExtension }
          try {
            const text = await textScript.default(texts)
            const extension = textScript.extension ?? 'xml'
            await fs.writeFile(path.join(buildPath, fileName + `.${extension}`), iconv.encode(text, 'win1251'))
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
        const content = await fs.readFile(path.join(curSourcePath))
        await fs.writeFile(path.join(curBuildPath), iconv.encode(content.toString('utf8'), 'win1251'))
      }
    }
  }
}
