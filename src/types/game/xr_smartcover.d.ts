/** @noSelfInFile */

declare namespace xr_smartcover {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, storage: AnyTable): void
  export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section, gulag_name: string): void
}

/** @customConstructor action_smartcover_activity */
declare class action_smartcover_activity extends action_base {
  cover_condlist: TODO // @generated field — refine type
  cover_state: TODO // @generated field — refine type
  fire_pos: TODO // @generated field — refine type
  initialized: TODO // @generated field — refine type
  st: TODO // @generated field — refine type
  target_enemy_id: TODO // @generated field — refine type
  target_path_condlist: TODO // @generated field — refine type
  constructor(npc: CGameObject, action_name: string, storage: AnyTable)
  initialize(): void
  target_selector(obj: CGameObject): void
  activate_scheme(): void
  check_target_selector(): void
  check_target(): boolean
  execute(): void
  finalize(): void
  position_riched(): boolean
  deactivate(): void
}

/** @customConstructor evaluator_need_smartcover */
declare class evaluator_need_smartcover extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(storage: AnyTable, name: string)
  evaluate(): boolean
}

/** @customConstructor evaluator_use_smartcover_in_combat */
declare class evaluator_use_smartcover_in_combat extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(storage: AnyTable, name: string)
  evaluate(): boolean
}

declare namespace xr_smartcover {
  /** Anomaly `class "action_smartcover_activity"` is also reachable on the `xr_smartcover` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`xr_smartcover.action_smartcover_activity.Method = ...`). */
  export const action_smartcover_activity: action_smartcover_activity
  /** Anomaly `class "evaluator_need_smartcover"` is also reachable on the `xr_smartcover` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`xr_smartcover.evaluator_need_smartcover.Method = ...`). */
  export const evaluator_need_smartcover: evaluator_need_smartcover
  /** Anomaly `class "evaluator_use_smartcover_in_combat"` is also reachable on the `xr_smartcover` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`xr_smartcover.evaluator_use_smartcover_in_combat.Method = ...`). */
  export const evaluator_use_smartcover_in_combat: evaluator_use_smartcover_in_combat
}
