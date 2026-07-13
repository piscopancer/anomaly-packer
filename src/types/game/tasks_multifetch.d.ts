/** @noSelfInFile */

declare namespace tasks_multifetch {
  export function condmult(x: number): number
  export function has_items(tid: string): boolean
  export function has_optional_items(tid: string): boolean
  export function load_state(m_data: AnyTable): void
  export function nkeys(t: AnyTable): number
  export function on_descr_news(tid: string): boolean
  export function on_game_start(): void
  export function remove_items_and_pay(tid: string, do_pay: boolean): void
  export function save_state(m_data: AnyTable): void
  export function tcopy(t: AnyTable): AnyTable
}
