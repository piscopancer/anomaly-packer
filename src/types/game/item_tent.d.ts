/** @noSelfInFile */

declare namespace item_tent {
  export function func_use_bag(obj: CGameObject): boolean
  export function func_use_tent(obj: CGameObject): boolean
  export function get_nearby_tent(dist: number, result: boolean): boolean
  export function get_spawned_sleepbags(): AnyTable
  export function get_spawned_tents(): AnyTable
  export function itm_tent_bag_func(): void
  export function itm_tent_func(): void
  export function on_game_start(): void
  export function start_timer(obj: CGameObject): void
  export function str_use(): string
  export function use_compression_bag(obj_c: CGameObject, dist: number): void
}
