import c from 'chalk'
import fs from 'fs/promises'
import iconv from 'iconv-lite'
import json2xml from 'json2xml'
import { transpile } from '../ts-to-lua'
import { objectEntries } from './util'

type Translation<L extends string[], Id extends string> = {
  [_L in L[number]]: Partial<Record<Id, string>>
}

type PackTranslationParams<L extends string[], Id extends string> = {
  translation: Translation<L, Id>
  fileName: string
  defaultId: (prop: string) => string
  idOverrides?: Partial<Record<Id, (id: string) => string>>
}

export type PackOptions<L extends string[] = ['eng']> = {
  build?: {
    outDirName?: string
  }
  extends?: {}
  config?: {
    languages: L
    translations(textOptions: {
      pack<Id extends string>(params: PackTranslationParams<L, Id>): PackTranslationParams<L, Id>
    }): PackTranslationParams<L, string>[]
  }
  scripts?: { fileName: string; outFileName?: string }[]
  /**
   * Relative path to the raw gamedata folder that will be appended to the build. During the build this folder will be treated as is and will be simply copied dispite its contents. This folder is recommended to stay at the root level of your project.
   * @example './gamedata'
   */
  rawGamedata?: string
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

export async function pack<L extends string[]>(options: PackOptions<L>) {
  const outDirName = options.build?.outDirName ?? 'build'
  if (options.rawGamedata) {
    await fs.cp(options.rawGamedata, process.cwd() + `/${outDirName}/gamedata`, { recursive: true })
    console.log(c.cyan.bold('Raw gamedata ') + c.cyan('was copied'))
  }
  if (options.config) {
    const translations = options.config.translations({
      pack(params) {
        return params
      },
    })
    for (const { translation, fileName, defaultId, idOverrides } of translations) {
      type JsonTextStructure = { string_table: { string: { text: string }; attrs: { id: string } }[] }

      for (const lang of options.config.languages) {
        const json: JsonTextStructure = {
          string_table: [
            ...objectEntries(translation[lang as keyof typeof translation]).map(([id, text]) => {
              const overrideId = idOverrides && idOverrides[id as string]
              const formattedId = overrideId ? overrideId(id as string) : defaultId(id as string)
              return { string: { text: text ?? '' }, attrs: { id: formattedId } }
            }),
          ],
        } satisfies JsonTextStructure
        const trDir = process.cwd() + `/${outDirName}/gamedata/configs/text/${lang}`
        if (!(await fs.exists(trDir))) {
          await fs.mkdir(trDir, { recursive: true })
        }
        const filePath = trDir + '/' + fileName + '.xml'
        const xml: string | Buffer = json2xml(json, { attributes_key: 'attrs' })
        await fs.writeFile(filePath, iconv.encode(xml, 'win1251'))
      }
    }
    console.log(c.cyan.bold(translations.length + ' translations ') + c.cyan('were created'))
    for (const tr of translations) {
      console.log('  ' + c.gray.italic(tr.fileName + '.xml'))
    }
  }
  if (options.scripts) {
    const transpiledFiles = await transpile(options.scripts, outDirName)
    console.log(c.cyan.bold(transpiledFiles.length + ' scripts ') + c.cyan('were created'))
    for (const tf of transpiledFiles) {
      console.log('  ' + c.gray.italic(tf))
    }
  }
  if (options.refresh && options.refresh.length) {
    for (const refresh of options.refresh) {
      await fs.cp(process.cwd() + `/${outDirName}/gamedata`, refresh, { recursive: true })
    }
    console.log(c.cyan('Build was copied to ') + c.cyan.bold(options.refresh.length + ' outer gamedata directories'))
    for (const refresh of options.refresh) {
      console.log('  ' + c.gray.italic(refresh))
    }
  }
}
