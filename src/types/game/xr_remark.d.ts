/** @noSelfInFile */

declare namespace xr_remark {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: string, storage: AnyTable): void
  export function init_target(obj: CGameObject, target_str: string): LuaMultiReturn<[vector | undefined, number | undefined, boolean]>
  export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: string, gulag_name: string): void
}

/** @customConstructor action_remark_activity */
declare class action_remark_activity extends action_base {
  constructor(npc_name: string, action_name: string, storage: AnyTable)
  initialize(): void
  activate_scheme(): void
  get_target(): AnyTable | undefined
  time_callback(): void
  update(): void
  execute(): void
  finalize(): void
}

/** @customConstructor evaluator_need_remark */
declare class evaluator_need_remark extends property_evaluator {
  constructor(storage: AnyTable, name: string)
  evaluate(): boolean
}
