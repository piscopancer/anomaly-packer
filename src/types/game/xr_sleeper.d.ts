/** @noSelfInFile */

declare namespace xr_sleeper {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: string, storage: AnyTable): void
  export function is_npc_asleep(npc: CGameObject): boolean
  export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: string, gulag_name: string): void
}

/** @customConstructor action_sleeper_activity */
declare class action_sleeper_activity extends action_base {
  constructor(npc: CGameObject, action_name: string, storage: AnyTable)
  initialize(): void
  reset_scheme(): void
  activate_scheme(): void
  callback(mode: number, number: number): boolean
  execute(): void
  finalize(): void
}

/** @customConstructor evaluator_need_sleeper */
declare class evaluator_need_sleeper extends property_evaluator {
  constructor(name: string, storage: AnyTable)
  evaluate(): boolean
}
