import * as texts from '@/texts'
import c from 'chalk'
import fs from 'fs/promises'
import iconv from 'iconv-lite'
import path from 'path'
import { Texts } from './src'
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
  if (!(await fs.exists(path.join(cwd, 'gamedata')))) {
    console.error('gamedata directory must reside in the root of the project, otherwise there is nothing to pack')
    return
  } else {
    await fs.rm(path.join(cwd, outDirName), { force: true, recursive: true })
    await fs.mkdir(path.join(cwd, outDirName))
    console.log('Reading ' + c.bold.white('gamedata ') + c.reset('directory...'))
    const withScripts = await fs.exists(path.join(cwd, 'gamedata/scripts'))
    console.log(c.bold.white('scripts') + c.reset(` directory detected. Transpiling scripts...`))
    const transpiled = withScripts && options.scripts ? await transpile(options.scripts) : null
    await thisRecursiveShit(path.join(cwd, 'gamedata'), path.join(cwd, outDirName), transpiled)
    console.log(c.cyan.bold('Scripts ') + c.cyan('were transpiled'))
  }
  if (options.refresh && options.refresh.length) {
    for (const refresh of options.refresh) {
      try {
        await fs.cp(path.join(process.cwd(), outDirName), refresh, { recursive: true })
      } catch (error) {
        console.error('Refresh path "%s" is incorrect', refresh)
      }
    }
    console.log(c.cyan('Build was copied to ') + c.cyan.bold(options.refresh.length + ' outer gamedata directories'))
    for (const refresh of options.refresh) {
      console.log('  ' + c.gray.italic(refresh))
    }
  }
}

async function thisRecursiveShit(sourcePath: string, buildPath: string, allTranspiled: TranspiledScript[] | null) {
  const dirItems = await fs.readdir(sourcePath)
  for (const item of dirItems) {
    const nextSourcePath = path.join(sourcePath, item)
    const nextBuildPath = path.join(buildPath, item)
    const itemStat = await fs.stat(nextSourcePath)
    if (itemStat.isDirectory()) {
      if (sourcePath.includes(path.join('gamedata', 'scripts'))) {
        return
      }
      await fs.mkdir(nextBuildPath)
      await thisRecursiveShit(nextSourcePath, nextBuildPath, allTranspiled)
    } else if (itemStat.isFile()) {
      const ext = path.extname(item)
      if (['.ts', '.tsx'].includes(ext)) {
        const fileName = item.substring(0, item.length - ext.length)
        if (allTranspiled && sourcePath.includes(path.join('gamedata', 'scripts'))) {
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
          const textScript = (await import(nextSourcePath)) as { default: (texts: Texts) => any | Promise<any> }
          try {
            const text = await textScript.default(texts)
            await fs.writeFile(path.join(buildPath, fileName + '.xml'), iconv.encode(text, 'win1251'))
          } catch {
            console.error('Script at %s does not have a default export. This file will not appear in the build', nextSourcePath)
          }
        }
      } else {
        const content = await fs.readFile(path.join(nextSourcePath))
        await fs.writeFile(path.join(nextBuildPath), iconv.encode(content.toString('utf8'), 'win1251'))
      }
    }
  }
}
