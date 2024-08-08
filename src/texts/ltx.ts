import { objectEntries } from '@/util'

export type LtxValue = string | number | boolean | null | undefined | readonly (string | number | boolean | null | undefined)[]

type Ltx<L> = {
  section: string
  with?: string[]
  entries?: Partial<L>
}

/**
 * @param ltx
 * @param sort sort entries alphabetically (`true` by default)
 * @param align aligns table vertically, resuling in "=" signs appear under each other (`true` by default)
 * @returns ltx table as string
 */
export function ltx<L extends Partial<Record<keyof L, LtxValue>>>(ltx: Ltx<L>, sort = true, align = true): string {
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

type SkipFirstSecond<Arr> = Arr extends [infer _1, infer _2, ...infer Rest] ? Rest : never

ltx.f = function <N extends keyof typeof xr_conditions | keyof typeof xr_effects>(
  name: N,
  ...args: SkipFirstSecond<Parameters<(typeof xr_conditions & typeof xr_effects)[N]>>
) {
  return name + (args.length ? '(' + args.join(':') + ')' : '')
}
