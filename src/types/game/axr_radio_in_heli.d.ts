// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace axr_radio_in_heli {
  export const actid: TODO
  export const evaid: TODO
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO, temp: TODO): TODO
  export function configure_actions(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): TODO
  export function disable_generic_scheme(npc: TODO, scheme: TODO, stype: TODO): TODO
  export function npc_add_precondition(action: TODO): TODO
  export function setup_generic_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): TODO
}

/** @customConstructor action_radio_in_heli */
declare class action_radio_in_heli extends action_base {
  constructor(npc: TODO, name: TODO, storage: TODO, name_: TODO)
  initialize(): TODO
  try_go_cover(npc: TODO, ene_pos: TODO): TODO
  execute(): TODO
  finalize(): TODO
}

/** @customConstructor evaluator_radio_in_heli */
declare class evaluator_radio_in_heli extends property_evaluator {
  constructor(npc: TODO, name: TODO, storage: TODO, name_: TODO)
  evaluate(): TODO
}
