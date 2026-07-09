import { objectEntries } from '@/util'
import { buildXml, element, leaf } from './_xml'

export function translations<Id extends string>(translation: Partial<Record<Id, string>>, idOverride?: (id: string) => string): string {
  return buildXml([
    element(
      'string_table',
      undefined,
      objectEntries(translation).map(([id, text]) => element('string', { id: idOverride ? idOverride(id as string) : (id as string) }, [leaf('text', text ?? '')]))
    ),
  ])
}
