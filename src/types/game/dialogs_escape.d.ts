/** @noSelfInFile */

declare namespace dialogs_escape {
  // Built lazily by init_nimble_tables(); nil until first built.
  export const esc_2_12_buy_item_table: Record<number, Array<{ item: string[] }>>
  export const esc_2_12_costs_table: Record<number, { prepay_agreed: number; prepay_refused: number; cost: number }>
  export const item_count_by_category: Record<number, number>
  export const nimble_trade_instead: boolean
  export function actor_dont_has_esc_m_trader_task_2(a: CGameObject, b: CGameObject): boolean
  export function actor_dont_has_mar_base_owl_stalker_trader_task_1_pda(a: CGameObject, b: CGameObject): boolean
  export function actor_has_esc_m_trader_task_2(a: CGameObject, b: CGameObject): boolean
  export function actor_has_mar_base_owl_stalker_trader_task_1_pda(a: CGameObject, b: CGameObject): boolean
  export function actor_has_mar_base_owl_stalker_trader_warfare_task_1_pda(a: CGameObject, b: CGameObject): boolean
  export function esc_2_12_buy_item(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function esc_2_12_give_prepay(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function esc_2_12_has_item_cost(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function esc_2_12_has_prepay(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function esc_2_12_hasnt_item_cost(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function esc_2_12_hasnt_prepay(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function esc_2_12_randomize_item(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function esc_2_12_refuse_item(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function esc_2_12_stalker_fanat_about_quest(a: CGameObject, b: CGameObject): boolean
  export function init_nimble_tables(): void
  export function mar_base_owl_stalker_trader_task_1_give_reward(a: CGameObject, b: CGameObject): void
  export function nimble_can_trade(a: CGameObject, b: CGameObject): boolean
  export function nimble_cant_trade(a: CGameObject, b: CGameObject): boolean
  export function set_esc_2_12_stalker_fanat_as_companion(a: CGameObject, b: CGameObject): void
}
