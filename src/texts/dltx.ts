import { objectEntries } from '@/util'
import { LtxValue } from './ltx'
type DltxEntries<O extends object> = Partial<
  {
    [K in keyof O]: (O[K] extends infer U
      ? U extends any[]
        ? {
            [_ in K | `${'<' | '>'}${K & string}`]: any
          }
        : {}
      : {}) & {
      [_ in K | `!${K & string}`]: undefined
    } & {
      [_ in K]: any
    }
  }[keyof O]
>

/** Delete a section with the use of `!!` prefix */
function deleteSection({ sectionName }: { sectionName: string }) {
  let output = ''
  output += '!![' + sectionName + ']' + '\n'
  return output
}

type OverrideLtx<L extends Record<keyof L, LtxValue>> = { sectionName: string; _with?: string[]; entries?: DltxEntries<L> }

/**
 * Override a section with the use of `!` prefix.
 * - add or override an entry - no prefix,
 * - delete an entry with `!`,
 * - add to array with `>`,
 * - delete from array with `<`,
 */
function override<L extends Partial<Record<keyof L, LtxValue>>>(ltx: OverrideLtx<L>, sort = true, align = true) {
  let output = ''
  output += '![' + ltx.sectionName + ']'
  if (ltx._with && ltx._with.length) {
    output += ':' + ltx._with.join(', ')
  }
  if (!ltx.entries) return output
  output += '\n'
  const entries = objectEntries(ltx.entries)
  if (sort) {
    entries.sort(([k1], [k2]) => (k1 as string).localeCompare(k2 as string))
  }
  const [longestKey] = entries.toSorted(([k1], [k2]) => (k2 as string).length - (k1 as string).length)[0]
  for (const [k, v] of entries) {
    if ((k as string).startsWith('!')) {
      output += k as string
    } else {
      output += (align ? (k as string).padEnd((longestKey as string).length) : (k as string)) + ' = '
      if (Array.isArray(v)) {
        output += v.join(', ')
      } else if (v === null) {
        output += 'nil'
      } else if (v === undefined) {
        output += ''
      } else {
        output += v
      }
    }
    output += '\n'
  }
  return output
}

/** Create a section if it does not exist or override if it does with the use of `@` prefix */
function createOrOverride<L extends Partial<Record<keyof L, LtxValue>>>(ltx: OverrideLtx<L>, sort = true, align = true) {
  let output = ''
  output += '@[' + ltx.sectionName + ']'
  if (ltx._with && ltx._with.length) {
    output += ':' + ltx._with.join(', ')
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

export const dltx = { createOrOverride, override, deleteSection }
