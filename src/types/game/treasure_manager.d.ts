/** @noSelfInFile */

declare namespace treasure_manager {
  export const caches: TODO
  export const ini_treasure: TODO
  export const last_secret: TODO
  export const stash_bonus: TODO
  export function box_in_same_map(id: TODO): boolean
  export function box_in_valid_map(id: TODO): boolean
  export function create_random_stash(no_spot: TODO, hint: TODO, bonus_items: TODO, spawn_local: TODO, inv_box: TODO): void
  export function get_random_stash(no_spot: TODO, hint: TODO, spawn_local: TODO, inv_box: TODO): LuaMultiReturn<[number, string]>
  export function init_settings(): void
  export function load(pk: net_packet): void
  export function on_game_start(): void
  export function release_stash_by_id(id: TODO): void
  export function save(pk: net_packet): void
  export function set_random_stash(no_spot: TODO, hint: TODO, bonus_items: TODO, id: TODO, dbg: TODO): number
  export function simulate_stash_creation(num: TODO): void
  export function try_spawn_treasure(box: TODO): void
}
