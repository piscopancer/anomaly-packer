/** @noSelfInFile */

declare namespace xr_meet {
  export function add_to_binder(npc: TODO, char_ini: TODO, scheme: TODO, section: TODO, st: TODO, temp: TODO): TODO
  export function configure_actions(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): TODO
  export function disable_generic_scheme(npc: TODO, scheme: TODO, stype: TODO): void
  export function has_dialog_override(npc_id: TODO): TODO
  export function init_meet(npc: TODO, ini: TODO, section: string, st: TODO, scheme: TODO): void
  export function is_meet(npc: TODO): boolean
  export function load_state(m: TODO): void
  export function notify_on_use(victim: TODO, who: TODO): void
  export function on_game_start(): void
  export function override_dialog(npc_id: TODO, dialog_name: TODO): boolean
  export function process_npc_usability(npc: CGameObject): void
  export function reset_generic_scheme(npc: TODO, scheme: string, section: TODO, stype: TODO, st: TODO): void
  export function restore_dialog(npc_id: TODO): void
  export function save_state(m: TODO): void
  export function setup_generic_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): void
}

/** @customConstructor Cmeet_manager */
declare class Cmeet_manager {
  constructor(npc: TODO, storage: TODO)
  update_state(): void
  set_start_distance(): void
  update(): void
}

/** @customConstructor action_meet_wait */
declare class action_meet_wait extends action_base {
  constructor(npc_name: TODO, action_name: TODO, storage: TODO, char_ini: TODO)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor evaluator_contact */
declare class evaluator_contact extends property_evaluator {
  constructor(name: TODO, storage: TODO)
  evaluate(): boolean
}
