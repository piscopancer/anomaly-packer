/** @noSelfInFile */

declare namespace task_functor {
  export function condlist(id: string, field: string, cond_string: string): string | undefined
  export function drx_sl_money_task_target(task_id: string, field: string, p: AnyTable, tsk: CGameTask): number | undefined
  export function esc_m_trader_task_target(task_id: string, field: string, p: AnyTable, tsk: CGameTask): number | undefined
  export function esc_m_trader_task_target_1(task_id: string, field: string, p: AnyTable, tsk: CGameTask): number | undefined
  export function faction_base_defense_target(task_id: string, field: string, p: AnyTable, tsk: CGameTask): number | undefined
  export function fallout_task_descr(id: string, field: string, p: AnyTable): string
  export function fallout_task_target(id: string, field: string, p: AnyTable): number | undefined
  export function fallout_task_title(id: string, field: string, p: AnyTable): string
  export function general_escort_task(task_id: string, field: string, p: AnyTable, tsk: CGameTask): string
  export function general_warfare_task(task_id: string, field: string, p: AnyTable, tsk: CGameTask): string
  export function get_squad_id_by_task_var(var_name: string, no_check_online?: boolean): number | undefined
  export function jup_b19_freedom_yar_task_target(task_id: string, field: string, p: AnyTable, tsk: CGameTask): number | undefined
  export function jup_b6_scientist_tech_task_target(task_id: string, field: string, p: AnyTable, tsk: CGameTask): number | undefined
  export function jup_b6_scientist_tech_task_target_1(task_id: string, field: string, p: AnyTable, tsk: CGameTask): number | undefined
  export function kill_strelok(id: string, field: string, p: AnyTable): number | undefined
  export function mar_base_owl_stalker_trader_task_target(task_id: string, field: string, p: AnyTable): number | undefined
  export function mar_base_owl_stalker_trader_task_target_1(task_id: string, field: string, p: AnyTable): number | undefined
  export function mar_base_owl_stalker_trader_task_target_2(task_id: string, field: string, p: AnyTable): number | undefined
  export function mar_base_owl_stalker_trader_task_target_3(task_id: string, field: string, p: AnyTable): number | undefined
  export function nil_target(): undefined
  export function psi_storm_task_descr(id: string, field: string, p: AnyTable): string
  export function psi_storm_task_target(id: string, field: string, p: AnyTable): number | undefined
  export function psi_storm_task_title(id: string, field: string, p: AnyTable): string
  export function surge_task_descr(id: string, field: string, p: AnyTable): string
  export function surge_task_target(id: string, field: string, p: AnyTable): number | undefined
  export function surge_task_title(id: string, field: string, p: AnyTable): string
  export function target_condlist(task_id: string, field: string, cond_string: string): number | undefined
  export function task_targets_lostzone_all(task_id: string, field: string, p: AnyTable, tsk: CGameTask): number | undefined
  export function val_smart_terrain_7_4_bandit_trader_stalker_task_target(task_id: string, field: string, p: AnyTable, tsk: CGameTask): number | undefined
  export function val_smart_terrain_7_4_bandit_trader_stalker_task_target_1(task_id: string, field: string, p: AnyTable, tsk: CGameTask): number | undefined
  export function yan_ecolog_semenov_task_target(task_id: string, field: string, p: AnyTable, tsk: CGameTask): number | undefined
  export function yan_ecolog_semenov_task_target_1(task_id: string, field: string, p: AnyTable, tsk: CGameTask): number | undefined
  export function yan_stalker_sakharov_task_target_4(task_id: string, field: string, p: AnyTable, tsk: CGameTask): number | undefined
  export function zat_b29_adv_descr(id: string, field: string, p: AnyTable): string
  export function zat_b29_adv_target(task_id: string, field: string, p: AnyTable): number | undefined
  export function zat_b29_adv_title(id: string, field: string, p: AnyTable): string
}
