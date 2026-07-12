/** @noSelfInFile */

declare namespace axr_turn_on_campfire {
  export const actid: number
  export const already_selected: AnyTable
  export const evaid: number
  export function add_to_binder(npc: CGameObject, char_ini: system_ini, scheme: string, section: string, st: AnyTable, temp?: AnyTable): void
  export function configure_actions(npc: CGameObject, ini: system_ini, scheme: string, section: string, stype: number, temp?: AnyTable): void
  export function is_under_turn_on_campfire(npc: CGameObject): boolean
  export function light_campfire(npc: CGameObject): boolean
  export function npc_add_precondition(action: any): void
  export function on_game_start(): void
  export function reset_generic_scheme(npc: CGameObject, scheme: string, section: string, stype: number, st: AnyTable): void
  export function setup_generic_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: string, stype: number, temp?: AnyTable): void
}

/** @customConstructor act_turn_on_campfire */
declare class act_turn_on_campfire extends action_base {
  constructor(npc: CGameObject, name: string, storage: AnyTable)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor eva_turn_on_campfire */
declare class eva_turn_on_campfire extends property_evaluator {
  constructor(npc: CGameObject, name: string, storage: AnyTable)
  find_valid_target(): boolean
  evaluate(): boolean
}
