/** @noSelfInFile */

declare namespace xr_combat_monolith {
  export const base: number
  export function add_to_binder(npc: CGameObject, ini: system_ini, st: AnyTable, planner: AnyTable): void
}

/** @customConstructor action_fight_close */
declare class action_fight_close extends action_base {
  constructor(name: string, storage: AnyTable)
  initialize(): void
  execute(): void
  finalize(): void
  hit_callback(obj: CGameObject, amount: number, local_direction: vector, who: CGameObject, bone_index: number): void
}

/** @customConstructor action_fight_far */
declare class action_fight_far extends action_base {
  constructor(name: string, storage: AnyTable)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor action_go_to_pos */
declare class action_go_to_pos extends action_base {
  constructor(name: string, storage: AnyTable)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor evaluator_close */
declare class evaluator_close extends property_evaluator {
  constructor(name: string, storage: AnyTable)
  evaluate(): boolean
}

/** @customConstructor evaluator_combat_monolith */
declare class evaluator_combat_monolith extends property_evaluator {
  constructor(name: string, storage: AnyTable)
  evaluate(): boolean
}

/** @customConstructor evaluator_on_pos */
declare class evaluator_on_pos extends property_evaluator {
  constructor(name: string, storage: AnyTable)
  evaluate(): boolean
}
