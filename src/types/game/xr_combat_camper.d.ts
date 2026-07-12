/** @noSelfInFile */

declare namespace xr_combat_camper {
  export const base: number
  export function add_to_binder(npc: CGameObject, ini: system_ini, st: AnyTable, planner: action_planner, temp?: AnyTable): void
}

/** @customConstructor action_look_around */
declare class action_look_around extends action_base {
  constructor(name: string, storage: AnyTable)
  initialize(): void
  reset(): void
  execute(): void
  finalize(): void
  hit_callback(obj: CGameObject, amount: number, local_direction: vector, who: CGameObject, bone_index: string): void
}

/** @customConstructor action_shoot */
declare class action_shoot extends action_base {
  constructor(name: string, storage: AnyTable)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor evaluator_combat_camper */
declare class evaluator_combat_camper extends property_evaluator {
  constructor(name: string, storage: AnyTable)
  evaluate(): boolean
}

/** @customConstructor evaluator_see */
declare class evaluator_see extends property_evaluator {
  constructor(name: string, storage: AnyTable)
  evaluate(): boolean
}
