import c from 'chalk'
import fs from 'fs/promises'
import iconv from 'iconv-lite'
import json2xml from 'json2xml'
import { transpile } from '../ts-to-lua'
import { objectEntries } from './util'

type Translation<L extends string[], Id extends string> = {
  [_L in L[number]]: Partial<Record<Id, string>>
}

type PackParams<L extends string[], Id extends string> = {
  translations: Translation<L, Id>
  fileName: string
  defaultId: (prop: string) => string
  idOverrides?: Partial<Record<Id, (id: string) => string>>
}

export type PackOptions<L extends string[] = ['eng']> = {
  build?: {
    outName?: string
  }
  extends?: {}
  config?: {
    languages: L
    translations(textOptions: { pack<Id extends string>(params: PackParams<L, Id>): PackParams<L, Id> }): PackParams<L, string>[]
  }
  scripts?: { fileName: string; outFileName: string }[]
}

export async function pack<L extends string[]>(options: PackOptions<L>) {
  const outDirName = options.build?.outName ?? 'build'
  if (options.config) {
    const allTranslations = options.config.translations({
      pack(params) {
        return params
      },
    })
    for (const { translations, fileName, defaultId, idOverrides } of allTranslations) {
      type JsonTextStructure = { string_table: { string: { text: string }; attrs: { id: string } }[] }

      for (const lang of options.config.languages) {
        const json: JsonTextStructure = {
          string_table: [
            ...objectEntries(translations[lang as keyof typeof translations]).map(([id, text]) => {
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
    console.log(c.cyan.bold(allTranslations.length + ' translations ') + c.cyan('were created'))
    for (const tr of allTranslations) {
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
}
