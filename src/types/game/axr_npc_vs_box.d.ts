// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace axr_npc_vs_box {
  export const actid: TODO
  export const evaid: TODO
  export const selected: TODO
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO, temp: TODO): TODO
  export function configure_actions(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): TODO
  export function disable_generic_scheme(npc: TODO, scheme: TODO, stype: TODO): TODO
  export function npc_add_precondition(action: TODO): TODO
  export function setup_generic_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): TODO
}

/** @customConstructor action_npc_vs_box */
declare class action_npc_vs_box extends action_base {
  constructor(npc: TODO, name: TODO, storage: TODO, name_: TODO)
  initialize(): TODO
  execute(): TODO
  finalize(): TODO
}

/** @customConstructor evaluator_npc_vs_box */
declare class evaluator_npc_vs_box extends property_evaluator {
  constructor(npc: TODO, name: TODO, storage: TODO, name_: TODO)
  evaluate(): TODO
}
