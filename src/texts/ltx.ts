import { objectEntries } from '@/util'

type LtxEntries = Record<string, string | number | boolean | null | (string | number | boolean | null)[]>

type Ltx<E extends LtxEntries = LtxEntries> = {
  section: string
  extends?: string[]
  entries?: E
}

/**
 * @param ltx
 * @param sort sort entries alphabetically (`true` by default)
 * @param align aligns table vertically, resuling in "=" signs appear under each other (`true` by default)
 * @returns ltx table as string
 */
export function ltx(ltx: Ltx, sort = true, align: boolean = true): string {
  let output = ''
  output += '[' + ltx.section + ']'
  if (ltx.extends && ltx.extends.length) {
    output += ':' + ltx.extends.join(', ')
  }
  output += '\n'
  const entries = objectEntries(ltx.entries)
  if (sort) {
    entries.sort(([k1], [k2]) => k1.localeCompare(k2))
  }
  const [longestKey] = entries.toSorted(([k1], [k2]) => k2.length - k1.length)[0]
  for (const [k, v] of entries) {
    output += (align ? k.padEnd(longestKey.length) : k) + ' = '
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
