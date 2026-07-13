/** @noSelfInFile */

declare namespace xr_cover {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, storage: AnyTable): void
  export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section, gulag_name: string): void
}

/** @customConstructor action_cover */
declare class action_cover extends action_base {
  constructor(npc_name: string, action_name: string, storage: AnyTable)
  initialize(): void
  activate_scheme(): void
  execute(): void
  finalize(): void
  position_riched(): boolean
}

/** @customConstructor evaluator_need_cover */
declare class evaluator_need_cover extends property_evaluator {
  constructor(storage: AnyTable, name: string)
  evaluate(): boolean
}
