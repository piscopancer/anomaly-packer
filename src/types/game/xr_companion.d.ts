/** @noSelfInFile */

declare namespace xr_companion {
  export const beh_wait_ignore: number
  export const beh_wait_near: number
  export const beh_wait_simple: number
  export const beh_walk_ignore: number
  export const beh_walk_near: number
  export const beh_walk_simple: number
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, storage: AnyTable): void
  export function select_position(npc: CGameObject, st: AnyTable): number | undefined
  export function set_scheme(object: CGameObject, ini: system_ini, scheme: string, section: Section): void
  export function vector_rotate_y(v: vector, angle: number): vector
}

/** @customConstructor action_companion_activity */
declare class action_companion_activity extends action_base {
  assist_point: TODO // @generated field — refine type
  keep_state_until: TODO // @generated field — refine type
  last_state: TODO // @generated field — refine type
  st: TODO // @generated field — refine type
  constructor(npc_name: string, action_name: string, storage: AnyTable)
  initialize(): void
  beh_walk_simple(): void
  beh_wait_simple(): void
  execute(): void
  finalize(): void
}

/** @customConstructor evaluator_need_companion */
declare class evaluator_need_companion extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(storage: AnyTable, name: string)
  evaluate(): boolean
}

declare namespace xr_companion {
  /** Anomaly `class "action_companion_activity"` is also reachable on the `xr_companion` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`xr_companion.action_companion_activity.Method = ...`). */
  export const action_companion_activity: action_companion_activity
  /** Anomaly `class "evaluator_need_companion"` is also reachable on the `xr_companion` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`xr_companion.evaluator_need_companion.Method = ...`). */
  export const evaluator_need_companion: evaluator_need_companion
}
