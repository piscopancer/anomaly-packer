/** @noSelfInFile */

declare namespace xr_combat_monolith {
  export const base: number
  export function add_to_binder(npc: CGameObject, ini: system_ini, st: AnyTable, planner: AnyTable): void
}

/** @customConstructor action_fight_close */
declare class action_fight_close extends action_base {
  st: TODO // @generated field — refine type
  constructor(name: string, storage: AnyTable)
  initialize(): void
  execute(): void
  finalize(): void
  hit_callback(obj: CGameObject, amount: number, local_direction: vector, who: CGameObject, bone_index: number): void
}

/** @customConstructor action_fight_far */
declare class action_fight_far extends action_base {
  st: TODO // @generated field — refine type
  constructor(name: string, storage: AnyTable)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor action_go_to_pos */
declare class action_go_to_pos extends action_base {
  cached_id: TODO // @generated field — refine type
  st: TODO // @generated field — refine type
  t: TODO // @generated field — refine type
  constructor(name: string, storage: AnyTable)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor evaluator_close */
declare class evaluator_close extends property_evaluator {
  close_dist_sqr: TODO // @generated field — refine type
  st: TODO // @generated field — refine type
  constructor(name: string, storage: AnyTable)
  evaluate(): boolean
}

/** @customConstructor evaluator_combat_monolith */
declare class evaluator_combat_monolith extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(name: string, storage: AnyTable)
  evaluate(): boolean
}

/** @customConstructor evaluator_on_pos */
declare class evaluator_on_pos extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(name: string, storage: AnyTable)
  evaluate(): boolean
}

declare namespace xr_combat_monolith {
  /** Anomaly `class "action_fight_close"` is also reachable on the `xr_combat_monolith` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`xr_combat_monolith.action_fight_close.Method = ...`). */
  export const action_fight_close: action_fight_close
  /** Anomaly `class "action_fight_far"` is also reachable on the `xr_combat_monolith` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`xr_combat_monolith.action_fight_far.Method = ...`). */
  export const action_fight_far: action_fight_far
  /** Anomaly `class "action_go_to_pos"` is also reachable on the `xr_combat_monolith` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`xr_combat_monolith.action_go_to_pos.Method = ...`). */
  export const action_go_to_pos: action_go_to_pos
  /** Anomaly `class "evaluator_close"` is also reachable on the `xr_combat_monolith` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`xr_combat_monolith.evaluator_close.Method = ...`). */
  export const evaluator_close: evaluator_close
  /** Anomaly `class "evaluator_combat_monolith"` is also reachable on the `xr_combat_monolith` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`xr_combat_monolith.evaluator_combat_monolith.Method = ...`). */
  export const evaluator_combat_monolith: evaluator_combat_monolith
  /** Anomaly `class "evaluator_on_pos"` is also reachable on the `xr_combat_monolith` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`xr_combat_monolith.evaluator_on_pos.Method = ...`). */
  export const evaluator_on_pos: evaluator_on_pos
}
