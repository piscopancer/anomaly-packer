/** @noSelfInFile */

declare namespace inventory_upgrades {
  /** Currently displayed upgrade hint text (`nil` when none). */
  export const cur_hint: string | undefined
  export const force_upgrade: boolean
  export function can_afford_repair_item(item_name: string, item_condition: number): boolean
  export function can_repair_item(sec: string, cond: number, mechanic: string): boolean
  export function can_upgrade_item(item_name: string, mechanic: string): boolean
  export function delayed_upgrades_fix(m_data: AnyTable): void
  export function dm_repair_not_done(a: CGameObject, b: CGameObject): string
  export function dont_has_repaired_items(a: CGameObject, b: CGameObject): boolean
  export function effect_functor_a(param2: string, section: string, loading: number): void
  export function effect_repair_item(item_name: string, item_condition: number): boolean
  export function effect_upgrade_item(item: CGameObject, upgrade_section: string): void
  export function get_global_precondition_functor(victim: CGameObject, section: string): number
  export function get_possibility_string(mechanic_name: string, possibility_table: AnyTable): string
  export function get_price_percent(): number
  export function get_upgrade_cost(section: string): string
  export function give_repaired_items(a: CGameObject, b: CGameObject): boolean
  export function has_repair_info(a: CGameObject, b: CGameObject): boolean
  export function has_repaired_items(a: CGameObject, b: CGameObject): boolean
  export function issue_property(param1: string, name: string): string
  export function lend_item_for_repair(itm: CGameObject, mechanic_name: string, rt: string): void
  export function load_state(m_data: AnyTable): void
  export function mech_discount(perc: number): void
  export function precondition_functor_a(param1: string, section: string): number
  export function prereq_functor_a(param3: string, section: string): string
  export function property_functor_a(param1: string, name: string): string
  export function property_functor_b(param1: string, name: string): string
  export function property_functor_c(param1: string, name: string): string
  export function property_functor_d(param1: string, name: string): string
  export function property_functor_t(param1: string, name: string): string
  export function question_repair_item(item_name: string, item_condition: number, can: boolean, mechanic: string): string
  export function save_state(m_data: AnyTable): void
}
