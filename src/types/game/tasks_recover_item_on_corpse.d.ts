/** @noSelfInFile */

declare namespace tasks_recover_item_on_corpse {
  export const status_recover_item_on_corpse: TODO
  export const target_recover_item_on_corpse: TODO
  export function cleanup_recover_item_on_corpse(a: TODO, b: TODO, c: TODO): void
  export function has_item(item_id: TODO, owner_id: TODO): TODO
  export function id_exists(id: TODO): TODO
  export function kill_if_online(id: TODO): void
  export function kill_if_online_mutant(id: TODO, random_push: TODO): void
  export function load_state(m: TODO): void
  export function on_descr(a: TODO, b: TODO, c: TODO): boolean
  export function on_game_start(): void
  export function parse_settings(task_id: TODO): TODO
  export function pick_random_array(arr: TODO): TODO
  export function precondition_corpse_task_petr(a: TODO, b: TODO, c: TODO): TODO
  export function precondition_corpse_task_sak(a: TODO, b: TODO, c: TODO): TODO
  export function precondition_corpse_task_sid(a: TODO, b: TODO, c: TODO): TODO
  export function randsign(): TODO
  export function release_item_if_exists(id: TODO): void
  export function reward(a: TODO, b: TODO, c: TODO): void
  export function safe_target(id: TODO): TODO
  export function same_level(id1: TODO, id2: TODO): TODO
  export function same_level_se(se1: TODO, se2: TODO): TODO
  export function save_state(m: TODO): void
  export function section_from_critter_category(x: TODO): TODO
  export function spawn_on_id(section: TODO, target_id: TODO): TODO
  export function spawn_on_id_position(section: TODO, target_id: TODO): TODO
  export function split(str: TODO): TODO
  export function split_and_pick(str: TODO): TODO
  export function split_tonumber(str: TODO): TODO
}
