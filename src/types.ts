import * as texts from './texts'
export type Texts = typeof texts

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
