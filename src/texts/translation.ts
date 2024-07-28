import { objectEntries } from '@/util'
import json2xml from 'json2xml'

type JsonTranslationStructure = { string_table: { string: { text: string }; attrs: { id: string } }[] }

export function translations<Id extends string>(translation: Partial<Record<Id, string>>, idOverride?: (id: string) => string): string {
  const json: JsonTranslationStructure = {
    string_table: objectEntries(translation).map(([id, text]) => {
      id = idOverride ? (idOverride(id) as Id) : id
      return {
        string: { text: text ?? '' },
        attrs: { id },
      }
    }),
  } satisfies JsonTranslationStructure

  const xml = json2xml(json, { attributes_key: 'attrs' })
  return xml
}
