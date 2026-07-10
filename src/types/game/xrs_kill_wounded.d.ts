// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace xrs_kill_wounded {
  export const actid: TODO
  export const evaid: TODO
  export const hostage_list: TODO
  export const ini: TODO
  export function add_common_precondition(action: TODO): TODO
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, st: TODO, temp: TODO): TODO
  export function configure_actions(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): TODO
  export function is_under_kill_wounded(npc: TODO): TODO
  export function on_game_start(): TODO
  export function setup_generic_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): TODO
}

/** @customConstructor act_kill_wounded */
declare class act_kill_wounded extends action_base {
  constructor(name: TODO, storage: TODO, name_: TODO)
  initialize(): TODO
  reset(): TODO
  execute(): TODO
  begin_kill_wounded(vo: TODO): TODO
  finalize(): TODO
}

/** @customConstructor eva_kill_wounded */
declare class eva_kill_wounded extends property_evaluator {
  constructor(name: TODO, storage: TODO, name_: TODO)
  find_target(): TODO
  evaluate(): TODO
}
