/** @noSelfInFile */

declare namespace treasure_manager {
  /**
   * Every stash the manager knows about, keyed by the inventory box's object id. The value is
   * the comma-joined sections still waiting to be spawned into it, `false` while the stash is
   * empty, and `true` once its contents have been placed.
   */
  export const caches: Record<number, string | boolean>
  export const ini_treasure: AnyTable
  export const last_secret: AnyTable
  export const stash_bonus: AnyTable
  export function box_in_same_map(id: number): boolean
  export function box_in_valid_map(id: number): boolean
  export function create_random_stash(no_spot: boolean, hint: string, bonus_items: boolean, spawn_local: boolean, inv_box: CGameObject): void
  export function get_random_stash(no_spot: boolean, hint: string, spawn_local: boolean, inv_box: CGameObject): LuaMultiReturn<[number, string]>
  export function init_settings(): void
  export function load(pk: net_packet): void
  export function on_game_start(): void
  export function release_stash_by_id(id: number): void
  export function save(pk: net_packet): void
  export function set_random_stash(no_spot: boolean, hint: string, bonus_items: boolean, id: number, dbg: boolean): number
  export function simulate_stash_creation(num: number): void
  export function try_spawn_treasure(box: CGameObject): void
}
