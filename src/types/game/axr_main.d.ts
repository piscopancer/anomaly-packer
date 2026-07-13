/** @noSelfInFile */

declare namespace axr_main {
  const weapon_is_zoomed: boolean
  // --- auto-added by audit-coverage (missing from hand-refined types; refine by hand) ---
  export const config: AnyTable
  export function check_on_launch(): void
  export function callback_add(name: string): void
  export function callback_set(name: string, func_or_userdata: AnyTable): void
  export function callback_unset(name: string, func_or_userdata: AnyTable): void
  export function make_callback(name: string, ...args: any[]): any
  export function on_game_start(): void
  export function main_menu_on_init(menu: AnyTable): void
  export function main_menu_on_quit(menu: AnyTable): void
  export function actor_on_weapon_zoom_in(): void
  export function actor_on_weapon_zoom_out(): void
  export function server_entity_on_register(se_obj: CseAbstract, type_name: string): void
  export function server_entity_on_unregister(se_obj: CseAbstract, type_name: string): void
}
