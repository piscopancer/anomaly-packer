/** @noSelfInFile */

declare namespace xr_danger {
  export const DangerIgnore: AnyTable
  export const DangerInertion: AnyTable
  export const actid: number
  export const evaid: number
  export const ini: system_ini
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: string, storage: AnyTable, temp: AnyTable): void
  export function configure_actions(npc: CGameObject, ini: system_ini, scheme: string, section: string, stype: number, temp: AnyTable): void
  export function get_danger_time(danger: AnyTable, npc: CGameObject): number
  export function has_danger(npc: CGameObject): boolean
  export function on_game_start(): void
  export function reset_generic_scheme(npc: CGameObject, scheme: string, section: string, stype: number, st: AnyTable): void
  export function set_script_danger(npc: CGameObject, time: number, who_id: number, pos: vector): void
  export function setup_generic_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: string, stype: number, temp: AnyTable): void
}

/** @customConstructor action_danger */
declare class action_danger extends action_base {
  constructor(name: string, storage: AnyTable, name_?: string)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor evaluator_check_danger */
declare class evaluator_check_danger extends property_evaluator {
  constructor(name: string, storage: AnyTable, name_?: string)
  evaluate(): boolean
}

/** @customConstructor evaluator_danger */
declare class evaluator_danger extends property_evaluator {
  constructor(name: string, storage: AnyTable, npc: CGameObject, name_?: string)
  evaluate(): boolean
}
