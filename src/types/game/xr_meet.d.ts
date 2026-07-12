/** @noSelfInFile */

declare namespace xr_meet {
  export function add_to_binder(npc: CGameObject, char_ini: system_ini, scheme: string, section: string, st: AnyTable, temp?: AnyTable): void
  export function configure_actions(npc: CGameObject, ini: system_ini, scheme: string, section: string, stype: number, temp?: AnyTable): void
  export function disable_generic_scheme(npc: CGameObject, scheme: string, stype: number): void
  export function has_dialog_override(npc_id: number): boolean
  export function init_meet(npc: CGameObject, ini: system_ini, section: string, st: AnyTable, scheme: string): void
  export function is_meet(npc: CGameObject): boolean
  export function load_state(m: AnyTable): void
  export function notify_on_use(victim: CGameObject, who: CGameObject): void
  export function on_game_start(): void
  export function override_dialog(npc_id: number, dialog_name: string): boolean
  export function process_npc_usability(npc: CGameObject): void
  export function reset_generic_scheme(npc: CGameObject, scheme: string, section: string, stype: number, st: AnyTable): void
  export function restore_dialog(npc_id: number): void
  export function save_state(m: AnyTable): void
  export function setup_generic_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: string, stype: number, temp?: AnyTable): void
}

/** @customConstructor Cmeet_manager */
declare class Cmeet_manager {
  constructor(npc: CGameObject, storage: AnyTable)
  update_state(): void
  set_start_distance(): void
  update(): void
}

/** @customConstructor action_meet_wait */
declare class action_meet_wait extends action_base {
  constructor(npc_name: string, action_name: string, storage: AnyTable, char_ini: system_ini)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor evaluator_contact */
declare class evaluator_contact extends property_evaluator {
  constructor(name: string, storage: AnyTable)
  evaluate(): boolean
}
