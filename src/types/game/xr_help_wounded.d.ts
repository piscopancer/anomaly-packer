// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace xr_help_wounded {
  export const ini: TODO
  export function add_to_binder(npc: TODO, char_ini: TODO, scheme: TODO, section: TODO, st: TODO, temp: TODO): TODO
  export function configure_actions(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): TODO
  export function help_wounded(npc: TODO): TODO
  export function is_under_help_wounded(npc: TODO): TODO
  export function reset_generic_scheme(npc: TODO, scheme: TODO, section: TODO, stype: TODO, t: TODO): TODO
  export function setup_generic_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): TODO
}

/** @customConstructor action_help_wounded */
declare class action_help_wounded extends action_base {
  constructor(npc_name: TODO, action_name: TODO, storage: TODO, action_name_: TODO)
  initialize(): TODO
  execute(): TODO
  finalize(): TODO
}

/** @customConstructor evaluator_wounded_exist */
declare class evaluator_wounded_exist extends property_evaluator {
  constructor(name: TODO, storage: TODO, npc: TODO, name_: TODO)
  find_valid_target(): TODO
  evaluate(): TODO
}
