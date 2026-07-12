/** @noSelfInFile */

declare namespace xr_help_wounded {
  export const ini: system_ini
  export function add_to_binder(npc: CGameObject, char_ini: system_ini, scheme: string, section: string, st: AnyTable, temp?: AnyTable): void
  export function configure_actions(npc: CGameObject, ini: system_ini, scheme: string, section: string, stype: number, temp?: AnyTable): void
  export function help_wounded(npc: CGameObject): boolean
  export function is_under_help_wounded(npc: CGameObject): boolean
  export function reset_generic_scheme(npc: CGameObject, scheme: string, section: string, stype: number, t: AnyTable): void
  export function setup_generic_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: string, stype: number, temp?: AnyTable): void
}

/** @customConstructor action_help_wounded */
declare class action_help_wounded extends action_base {
  constructor(npc_name: string, action_name: string, storage: AnyTable)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor evaluator_wounded_exist */
declare class evaluator_wounded_exist extends property_evaluator {
  constructor(name: string, storage: AnyTable, npc: CGameObject)
  find_valid_target(): boolean
  evaluate(): boolean
}
