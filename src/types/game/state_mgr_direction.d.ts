/** @noSelfInFile */

declare namespace state_mgr_direction {
  export function look_at_object(npc: CGameObject, st: AnyTable): void
  export function look_object_type(npc: CGameObject, st: AnyTable): boolean
  export function look_position_type(npc: CGameObject, st: AnyTable): number
  export function turn(npc: CGameObject, st: AnyTable, check: boolean): void
}

/** @customConstructor act_state_mgr_direction_search */
declare class act_state_mgr_direction_search extends action_base {
  st: TODO // @generated field — refine type
  constructor(name: string, st: AnyTable)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor act_state_mgr_direction_turn */
declare class act_state_mgr_direction_turn extends action_base {
  st: TODO // @generated field — refine type
  constructor(name: string, st: AnyTable)
  initialize(): void
  execute(): void
  finalize(): void
  turn(): void
}

/** @customConstructor eva_state_mgr_direction */
declare class eva_state_mgr_direction extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
  callback(): void
}

/** @customConstructor eva_state_mgr_direction_search */
declare class eva_state_mgr_direction_search extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}

declare namespace state_mgr_direction {
  /** Anomaly `class "act_state_mgr_direction_search"` is also reachable on the `state_mgr_direction` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_direction.act_state_mgr_direction_search.Method = ...`). */
  export const act_state_mgr_direction_search: act_state_mgr_direction_search
  /** Anomaly `class "act_state_mgr_direction_turn"` is also reachable on the `state_mgr_direction` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_direction.act_state_mgr_direction_turn.Method = ...`). */
  export const act_state_mgr_direction_turn: act_state_mgr_direction_turn
  /** Anomaly `class "eva_state_mgr_direction"` is also reachable on the `state_mgr_direction` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_direction.eva_state_mgr_direction.Method = ...`). */
  export const eva_state_mgr_direction: eva_state_mgr_direction
  /** Anomaly `class "eva_state_mgr_direction_search"` is also reachable on the `state_mgr_direction` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_direction.eva_state_mgr_direction_search.Method = ...`). */
  export const eva_state_mgr_direction_search: eva_state_mgr_direction_search
}
