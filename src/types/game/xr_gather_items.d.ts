// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace xr_gather_items {
  export const actid: TODO
  export const evaid: TODO
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, st: TODO, temp: TODO): TODO
  export function configure_actions(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): TODO
  export function gather_item(npc: TODO): TODO
  export function is_under_gather_items(npc: TODO): TODO
  export function near_actor(obj: TODO): TODO
  export function npc_add_precondition(action: TODO): TODO
  export function on_game_start(): TODO
  export function reset_generic_scheme(npc: TODO, scheme: TODO, section: TODO, stype: TODO, st: TODO): TODO
  export function setup_generic_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): TODO
}

/** @customConstructor act_gather_itm */
declare class act_gather_itm extends action_base {
  constructor(name: TODO, storage: TODO, name_: TODO)
  initialize(): TODO
  execute(): TODO
  finalize(): TODO
}

/** @customConstructor eva_gather_itm */
declare class eva_gather_itm extends property_evaluator {
  constructor(name: TODO, storage: TODO, npc: TODO, name_: TODO)
  find_valid_item(): TODO
  evaluate(): TODO
}

/** @customConstructor evaluator_gather_items */
declare class evaluator_gather_items extends property_evaluator {
  constructor(name: TODO, storage: TODO, npc: TODO, name_: TODO)
  evaluate(): TODO
}
