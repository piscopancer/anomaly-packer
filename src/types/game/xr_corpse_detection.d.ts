// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace xr_corpse_detection {
  export const lootable_table: TODO
  export function add_to_binder(npc: TODO, char_ini: TODO, scheme: TODO, section: TODO, st: TODO, temp: TODO): TODO
  export function configure_actions(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): TODO
  export function get_all_from_corpse(npc: TODO): TODO
  export function get_loot_table(ini: TODO): TODO
  export function has_valuable_loot(obj: TODO): TODO
  export function is_under_corpse_detection(npc: TODO): TODO
  export function near_actor(obj: TODO): TODO
  export function on_game_start(): TODO
  export function reset_generic_scheme(npc: TODO, scheme: TODO, section: TODO, stype: TODO, st: TODO): TODO
  export function set_valuable_loot(id: TODO, val: TODO): TODO
  export function setup_generic_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): TODO
}

/** @customConstructor action_search_corpse */
declare class action_search_corpse extends action_base {
  constructor(npc_name: TODO, action_name: TODO, storage: TODO, action_name_: TODO)
  initialize(): TODO
  execute(): TODO
  finalize(): TODO
}

/** @customConstructor evaluator_corpse */
declare class evaluator_corpse extends property_evaluator {
  constructor(name: TODO, storage: TODO, npc: TODO, name_: TODO)
  find_valid_target(): TODO
  evaluate(): TODO
}
