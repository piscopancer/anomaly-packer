/** @noSelfInFile */

declare namespace xr_sleeper {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, storage: AnyTable): void
  export function is_npc_asleep(npc: CGameObject): boolean
  export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section, gulag_name: string): void
}

/** @customConstructor action_sleeper_activity */
declare class action_sleeper_activity extends action_base {
  move_mgr: TODO // @generated field — refine type
  st: TODO // @generated field — refine type
  state: TODO // @generated field — refine type
  timer: TODO // @generated field — refine type
  was_reset: boolean // @generated field — refine type
  constructor(npc: CGameObject, action_name: string, storage: AnyTable)
  initialize(): void
  reset_scheme(): void
  activate_scheme(): void
  callback(mode: number, number: number): boolean
  execute(): void
  finalize(): void
}

/** @customConstructor evaluator_need_sleeper */
declare class evaluator_need_sleeper extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(name: string, storage: AnyTable)
  evaluate(): boolean
}

declare namespace xr_sleeper {
  /** Anomaly `class "action_sleeper_activity"` is also reachable on the `xr_sleeper` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`xr_sleeper.action_sleeper_activity.Method = ...`). */
  export const action_sleeper_activity: action_sleeper_activity
  /** Anomaly `class "evaluator_need_sleeper"` is also reachable on the `xr_sleeper` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`xr_sleeper.evaluator_need_sleeper.Method = ...`). */
  export const evaluator_need_sleeper: evaluator_need_sleeper
}
