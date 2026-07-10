// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace xr_meet {
  export function add_to_binder(npc: TODO, char_ini: TODO, scheme: TODO, section: TODO, st: TODO, temp: TODO): TODO
  export function configure_actions(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): TODO
  export function disable_generic_scheme(npc: TODO, scheme: TODO, stype: TODO): TODO
  export function has_dialog_override(npc_id: TODO): TODO
  export function init_meet(npc: TODO, ini: TODO, section: TODO, st: TODO, scheme: TODO): TODO
  export function is_meet(npc: TODO): TODO
  export function load_state(m: TODO): TODO
  export function notify_on_use(victim: TODO, who: TODO): TODO
  export function on_game_start(): TODO
  export function override_dialog(npc_id: TODO, dialog_name: TODO): TODO
  export function process_npc_usability(npc: TODO): TODO
  export function reset_generic_scheme(npc: TODO, scheme: TODO, section: TODO, stype: TODO, st: TODO): TODO
  export function restore_dialog(npc_id: TODO): TODO
  export function save_state(m: TODO): TODO
  export function setup_generic_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): TODO
}

/** @customConstructor Cmeet_manager */
declare class Cmeet_manager {
  constructor(npc: TODO, storage: TODO)
  update_state(): TODO
  set_start_distance(): TODO
  update(): TODO
}

/** @customConstructor action_meet_wait */
declare class action_meet_wait extends action_base {
  constructor(npc_name: TODO, action_name: TODO, storage: TODO, char_ini: TODO, action_name_: TODO)
  initialize(): TODO
  execute(): TODO
  finalize(): TODO
}

/** @customConstructor evaluator_contact */
declare class evaluator_contact extends property_evaluator {
  constructor(name: TODO, storage: TODO, name_: TODO)
  evaluate(): TODO
}
