/** @noSelfInFile */

declare namespace inventory_upgrades {
  export const cur_hint: TODO
  export const force_upgrade: boolean
  export function can_afford_repair_item(item_name: TODO, item_condition: TODO): TODO
  export function can_repair_item(sec: TODO, cond: TODO, mechanic: TODO, float: TODO, string: TODO): TODO
  export function can_upgrade_item(item_name: TODO, mechanic: TODO): TODO
  export function delayed_upgrades_fix(m_data: TODO): TODO
  export function dm_repair_not_done(a: TODO, b: TODO): TODO
  export function dont_has_repaired_items(a: TODO, b: TODO): TODO
  export function effect_functor_a(param2: TODO, section: string, loading: number): void
  export function effect_repair_item(item_name: TODO, item_condition: TODO): TODO
  export function effect_upgrade_item(item: TODO, upgrade_section: TODO): TODO
  export function get_global_precondition_functor(victim: CGameObject, section: string): number
  export function get_possibility_string(mechanic_name: string, possibility_table: TODO): string
  export function get_price_percent(): number
  export function get_upgrade_cost(section: string): string
  export function give_repaired_items(a: TODO, b: TODO): TODO
  export function has_repair_info(a: TODO, b: TODO): TODO
  export function has_repaired_items(a: TODO, b: TODO): TODO
  export function issue_property(param1: TODO, name: TODO): TODO
  export function lend_item_for_repair(itm: TODO, mechanic_name: TODO, rt: TODO): TODO
  export function load_state(m_data: TODO): TODO
  export function mech_discount(perc: TODO): TODO
  export function precondition_functor_a(param1: TODO, section: string): number
  export function prereq_functor_a(param3: TODO, section: string): string
  export function property_functor_a(param1: TODO, name: TODO): TODO
  export function property_functor_b(param1: TODO, name: TODO): TODO
  export function property_functor_c(param1: TODO, name: TODO): TODO
  export function property_functor_d(param1: TODO, name: TODO): TODO
  export function property_functor_t(param1: TODO, name: TODO): TODO
  export function question_repair_item(item_name: TODO, item_condition: TODO, can: TODO, mechanic: TODO, float: TODO, bool: TODO, string: TODO): TODO
  export function save_state(m_data: TODO): TODO
}
