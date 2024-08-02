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

/**
 * - `%=func%` return the function's returned value
 * - `{=func}` check the function's returned value
 * - `{-info}` check actor does not have info portion
 * - `{+info}` check actor has info portion
 */
type CondList = string

export namespace Ltx {
  export type Trader = Partial<{
    buy_condition: string
    sell_condition: string
    buy_supplies: CondList
    buy_item_condition_factor: number
    buy_item_exponent: number
    sell_item_exponent: number
  }>
  export type Task = Partial<{
    icon: string
    prior: number
    sim_communities: Faction | Faction[]
    storyline: boolean
    title: string
    title_functor: CondList
    descr: string
    job_descr: string
    fetch_descr: string
    descr_functor: string
    target_functor: string
    task_complete_descr: string
    fetch_func: CondList
    status_functor: string
    status_functor_params: string[]
    precondition: CondList
    repeat_timeout: number
    stage_complete: number
    on_job_descr: string
    on_init: CondList
    on_complete: CondList
    on_fail: CondList
  }> &
    Record<`condlist_${number}`, CondList>
}
