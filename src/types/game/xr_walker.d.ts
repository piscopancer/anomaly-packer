/** @noSelfInFile */

declare namespace xr_walker {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, storage: AnyTable): void
  export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section, gulag_name: string): void
}

/** @customConstructor action_walker_activity */
declare class action_walker_activity extends action_base {
  constructor(npc: CGameObject, action_name: string, storage: AnyTable)
  initialize(): void
  activate_scheme(loading: boolean, npc: CGameObject): void
  reset_scheme(loading: boolean, npc: CGameObject): void
  execute(): void
  update(): void
  finalize(): void
  position_riched(): boolean
  net_destroy(npc: CGameObject): void
}

/** @customConstructor evaluator_need_walker */
declare class evaluator_need_walker extends property_evaluator {
  constructor(storage: AnyTable, name: string)
  evaluate(): boolean
}
