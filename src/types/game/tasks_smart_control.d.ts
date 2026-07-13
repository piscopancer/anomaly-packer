/** @noSelfInFile */

declare namespace tasks_smart_control {
  export function evaluate_smarts_squads(task_id: string, tbl: AnyTable, smart: se_smart_terrain, squad_def: AnyTable, faction_def: AnyTable): void
  export function evaluate_squads_smarts(task_id: string, var_: AnyTable, smart: se_smart_terrain, smrt: se_smart_terrain): boolean
  export function is_legit_mutant_squad(squad: CseAlifeOnlineOfflineGroup): boolean
  export function postpone_for_next_frame(task_id: string, squad_id: number): boolean
}
