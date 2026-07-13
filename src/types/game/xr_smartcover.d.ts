/** @noSelfInFile */

declare namespace xr_smartcover {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, storage: AnyTable): void
  export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section, gulag_name: string): void
}

/** @customConstructor action_smartcover_activity */
declare class action_smartcover_activity extends action_base {
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
  constructor(storage: AnyTable, name: string)
  evaluate(): boolean
}

/** @customConstructor evaluator_use_smartcover_in_combat */
declare class evaluator_use_smartcover_in_combat extends property_evaluator {
  constructor(storage: AnyTable, name: string)
  evaluate(): boolean
}
