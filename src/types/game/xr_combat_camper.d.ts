/** @noSelfInFile */

declare namespace xr_combat_camper {
  export const base: number
  export function add_to_binder(npc: CGameObject, ini: system_ini, st: AnyTable, planner: action_planner, temp?: AnyTable): void
}

/** @customConstructor action_look_around */
declare class action_look_around extends action_base {
  change_dir_time: TODO // @generated field — refine type
  forget_time: TODO // @generated field — refine type
  st: TODO // @generated field — refine type
  constructor(name: string, storage: AnyTable)
  initialize(): void
  reset(): void
  execute(): void
  finalize(): void
  hit_callback(obj: CGameObject, amount: number, local_direction: vector, who: CGameObject, bone_index: string): void
}

/** @customConstructor action_shoot */
declare class action_shoot extends action_base {
  st: TODO // @generated field — refine type
  constructor(name: string, storage: AnyTable)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor evaluator_combat_camper */
declare class evaluator_combat_camper extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(name: string, storage: AnyTable)
  evaluate(): boolean
}

/** @customConstructor evaluator_see */
declare class evaluator_see extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(name: string, storage: AnyTable)
  evaluate(): boolean
}

declare namespace xr_combat_camper {
  /** Anomaly `class "action_look_around"` is also reachable on the `xr_combat_camper` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`xr_combat_camper.action_look_around.Method = ...`). */
  export const action_look_around: action_look_around
  /** Anomaly `class "action_shoot"` is also reachable on the `xr_combat_camper` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`xr_combat_camper.action_shoot.Method = ...`). */
  export const action_shoot: action_shoot
  /** Anomaly `class "evaluator_combat_camper"` is also reachable on the `xr_combat_camper` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`xr_combat_camper.evaluator_combat_camper.Method = ...`). */
  export const evaluator_combat_camper: evaluator_combat_camper
  /** Anomaly `class "evaluator_see"` is also reachable on the `xr_combat_camper` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`xr_combat_camper.evaluator_see.Method = ...`). */
  export const evaluator_see: evaluator_see
}
