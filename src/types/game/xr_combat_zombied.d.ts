/** @noSelfInFile */

declare namespace xr_combat_zombied {
  export function add_to_binder(npc: CGameObject, ini: system_ini, st: AnyTable, planner: AnyTable): void
}

/** @customConstructor action_zombie_go_to_danger */
declare class action_zombie_go_to_danger extends action_base {
  constructor(name: string, storage: AnyTable)
  initialize(): void
  set_state(state: string, be: CGameObject | undefined, pos: vector | undefined): void
  execute(): void
  finalize(): void
  hit_callback(obj: CGameObject, amount: number, local_direction: vector, who: CGameObject, bone_index: number): void
}

/** @customConstructor action_zombie_shoot */
declare class action_zombie_shoot extends action_base {
  constructor(name: string, storage: AnyTable)
  initialize(): void
  set_state(state: string, be: CGameObject | undefined, pos: vector | undefined): void
  execute(): void
  calc_random_direction(): vector
  finalize(): void
  hit_callback(obj: CGameObject, amount: number, local_direction: vector, who: CGameObject, bone_index: number): void
}

/** @customConstructor evaluator_combat_zombied */
declare class evaluator_combat_zombied extends property_evaluator {
  constructor(name: string, glob_storage: AnyTable)
  evaluate(): boolean
}
