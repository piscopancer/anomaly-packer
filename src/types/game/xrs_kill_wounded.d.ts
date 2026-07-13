/** @noSelfInFile */

declare namespace xrs_kill_wounded {
  export const actid: number
  export const evaid: number
  export const hostage_list: AnyTable
  export const ini: system_ini
  export function add_common_precondition(action: any): void
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, st: AnyTable, temp?: AnyTable): void
  export function configure_actions(npc: CGameObject, ini: system_ini, scheme: string, section: Section, stype: number, temp?: AnyTable): void
  export function is_under_kill_wounded(npc: CGameObject): boolean
  export function on_game_start(): boolean
  export function setup_generic_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section, stype: number, temp?: AnyTable): void
}

/** @customConstructor act_kill_wounded */
declare class act_kill_wounded extends action_base {
  constructor(name: string, storage: AnyTable)
  initialize(): void
  reset(): void
  execute(): void
  begin_kill_wounded(vo: CGameObject): void
  finalize(): void
}

/** @customConstructor eva_kill_wounded */
declare class eva_kill_wounded extends property_evaluator {
  constructor(name: string, storage: AnyTable)
  find_target(): boolean
  evaluate(): boolean
}
