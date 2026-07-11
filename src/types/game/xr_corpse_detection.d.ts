/** @noSelfInFile */

declare namespace xr_corpse_detection {
  export const lootable_table: TODO
  export function add_to_binder(npc: TODO, char_ini: TODO, scheme: TODO, section: TODO, st: TODO, temp: TODO): void
  export function configure_actions(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): void
  export function get_all_from_corpse(npc: TODO): void
  export function get_loot_table(ini: TODO): TODO
  export function has_valuable_loot(obj: TODO): boolean
  export function is_under_corpse_detection(npc: TODO): boolean
  export function near_actor(obj: TODO): boolean
  export function on_game_start(): void
  export function reset_generic_scheme(npc: TODO, scheme: TODO, section: TODO, stype: TODO, st: TODO): void
  export function set_valuable_loot(id: TODO, val: TODO): void
  export function setup_generic_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): void
}

/** @customConstructor action_search_corpse */
declare class action_search_corpse extends action_base {
  constructor(npc_name: TODO, action_name: TODO, storage: TODO)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor evaluator_corpse */
declare class evaluator_corpse extends property_evaluator {
  constructor(name: TODO, storage: TODO, npc: TODO)
  find_valid_target(): TODO
  evaluate(): boolean
}
