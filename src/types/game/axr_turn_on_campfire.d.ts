// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace axr_turn_on_campfire {
  export const actid: TODO
  export const already_selected: TODO
  export const evaid: TODO
  export function add_to_binder(npc: TODO, char_ini: TODO, scheme: TODO, section: TODO, st: TODO, temp: TODO): TODO
  export function configure_actions(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): TODO
  export function is_under_turn_on_campfire(npc: TODO): TODO
  export function light_campfire(npc: TODO): TODO
  export function npc_add_precondition(action: TODO): TODO
  export function on_game_start(): TODO
  export function reset_generic_scheme(npc: TODO, scheme: TODO, section: TODO, stype: TODO, st: TODO): TODO
  export function setup_generic_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): TODO
}

/** @customConstructor act_turn_on_campfire */
declare class act_turn_on_campfire extends action_base {
  constructor(npc: TODO, name: TODO, storage: TODO, name_: TODO)
  initialize(): TODO
  execute(): TODO
  finalize(): TODO
}

/** @customConstructor eva_turn_on_campfire */
declare class eva_turn_on_campfire extends property_evaluator {
  constructor(npc: TODO, name: TODO, storage: TODO, name_: TODO)
  find_valid_target(): TODO
  evaluate(): TODO
}
