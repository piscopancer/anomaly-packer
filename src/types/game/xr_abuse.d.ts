/** @noSelfInFile */

declare namespace xr_abuse {
  export function add_abuse(npc: CGameObject, value: number): void
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, st: AnyTable, temp?: AnyTable): void
  export function clear_abuse(npc: CGameObject): void
  export function configure_actions(npc: CGameObject, ini: system_ini, scheme: string, section: Section, stype: number, temp?: AnyTable): void
  export function disable_abuse(npc: CGameObject): void
  export function enable_abuse(npc: CGameObject): void
  export function is_abuse(npc: CGameObject): boolean
  export function setup_generic_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section, stype: number, temp?: AnyTable): void
}

/** @customConstructor CAbuseManager */
declare class CAbuseManager {
  constructor(npc: CGameObject, storage: AnyTable)
  SetAbuseRate(rate: number): void
  abused(): boolean
  update(): boolean
  addAbuse(value: number): void
  clearAbuse(): void
  disableAbuse(): void
  enableAbuse(): void
}

/** @customConstructor action_abuse_hit */
declare class action_abuse_hit extends action_base {
  constructor(npc_name: string, action_name: string, storage: AnyTable, char_ini: system_ini)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor evaluator_abuse */
declare class evaluator_abuse extends property_evaluator {
  constructor(name: string, storage: AnyTable)
  evaluate(): boolean
}
