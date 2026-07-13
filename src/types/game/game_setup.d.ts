/** @noSelfInFile */

declare namespace game_setup {
  export function add_marker(name: string, section: Section, id: number, typ: string): void
  export function bar_medic_remove_stuff(): void
  export function darkscape_remove_physics_objects(): void
  export function freedom_medic_fix(): void
  export function get_itm_type(name: string): string
  export function init_settings(): void
  export function is_world_item(id: number): boolean
  export function on_game_start(): void
  export function print_debug(...args: any[]): void
  export function remove_marker(id: number, typ: string): void
  export function try_spawn_world_item(ignore: boolean): void
}
