/** @noSelfInFile */

declare namespace xr_camper {
  export function add_to_binder(object: CGameObject, ini: system_ini, scheme: string, section: Section, storage: AnyTable): void
  export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section, gulag_name?: string): void
}

/** @customConstructor action_patrol */
declare class action_patrol extends action_base {
  constructor(npc: CGameObject, action_name: string, storage: AnyTable)
  initialize(): void
  reset_scheme(): void
  activate_scheme(): void
  can_shoot(): boolean
  execute(): void
  process_danger(): boolean
  scan(flag: boolean): void
  get_next_point(flag: boolean): any
  process_point(mode: string, number: number): boolean
  finalize(): void
  on_place(): boolean
  hit_callback(obj: CGameObject, amount: number, local_direction: vector, who: CGameObject, bone_index: number): void
  formation_callback(mode: string, number: number, index: number): void
  death_callback(npc: CGameObject): void
  deactivate(npc: CGameObject): void
  net_destroy(npc: CGameObject): void
}

/** @customConstructor evaluator_close_combat */
declare class evaluator_close_combat extends property_evaluator {
  constructor(name: string, storage: AnyTable)
  evaluate(): boolean
}

/** @customConstructor evaluator_end */
declare class evaluator_end extends property_evaluator {
  constructor(name: string, storage: AnyTable)
  evaluate(): boolean
}
