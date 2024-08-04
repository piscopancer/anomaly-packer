import { objectEntries } from '@/util'

export type LtxEntries = Record<string, string | number | boolean | null | (string | number | boolean | null)[]>

type Ltx<E extends LtxEntries = LtxEntries> = {
  section: string
  with?: string[]
  entries?: E
}

/**
 * @param ltx
 * @param sort sort entries alphabetically (`true` by default)
 * @param align aligns table vertically, resuling in "=" signs appear under each other (`true` by default)
 * @returns ltx table as string
 */
export function ltx<LE extends LtxEntries = LtxEntries>(ltx: Ltx<LE>, sort = true, align = true): string {
  let output = ''
  output += '[' + ltx.section + ']'
  if (ltx.with && ltx.with.length) {
    output += ':' + ltx.with.join(', ')
  }
  if (!ltx.entries) return output
  output += '\n'
  const entries = objectEntries(ltx.entries)
  if (sort) {
    entries.sort(([k1], [k2]) => (k1 as string).localeCompare(k2 as string))
  }
  const [longestKey] = entries.toSorted(([k1], [k2]) => (k2 as string).length - (k1 as string).length)[0]
  for (const [k, v] of entries) {
    output += (align ? (k as string).padEnd((longestKey as string).length) : (k as string)) + ' = '
    if (Array.isArray(v)) {
      output += v.join(', ')
    } else if (v === null) {
      output += 'nil'
    } else {
      output += v
    }
    output += '\n'
  }
  return output
}
