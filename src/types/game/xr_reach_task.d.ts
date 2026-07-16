/** @noSelfInFile */

declare namespace xr_reach_task {
  export function add_reach_task_action(npc: CGameObject): void
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, st: AnyTable, temp: AnyTable): void
  export function setup_generic_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section, stype: number, temp: AnyTable): void
}

/** @customConstructor action_reach_task_location */
declare class action_reach_task_location extends action_base {
  st: TODO // @generated field — refine type
  constructor(name: string, storage: AnyTable)
  initialize(): void
  execute(): void
  finalize(): void
  single_execute(se_obj: CseAbstract): void
  fake_target(squad: CseAlifeOnlineOfflineGroup): void
  commander_execute(squad: CseAlifeOnlineOfflineGroup): void
  soldier_execute(squad: CseAlifeOnlineOfflineGroup): void
  death_callback(npc: CGameObject): void
  net_destroy(npc: CGameObject): void
}

/** @customConstructor evaluator_reached_task_location */
declare class evaluator_reached_task_location extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(name: string, storage: AnyTable)
  evaluate(): boolean
}

declare namespace xr_reach_task {
  /** Anomaly `class "action_reach_task_location"` is also reachable on the `xr_reach_task` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`xr_reach_task.action_reach_task_location.Method = ...`). */
  export const action_reach_task_location: action_reach_task_location
  /** Anomaly `class "evaluator_reached_task_location"` is also reachable on the `xr_reach_task` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`xr_reach_task.evaluator_reached_task_location.Method = ...`). */
  export const evaluator_reached_task_location: evaluator_reached_task_location
}
