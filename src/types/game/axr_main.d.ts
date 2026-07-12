/** @noSelfInFile */

declare namespace axr_main {
  const weapon_is_zoomed: boolean
  // --- auto-added by audit-coverage (missing from hand-refined types; refine by hand) ---
  export const config: TODO
  export function check_on_launch(): TODO
  export function callback_add(name: TODO): TODO
  export function callback_set(name: TODO, func_or_userdata: TODO): TODO
  export function callback_unset(name: TODO, func_or_userdata: TODO): TODO
  export function make_callback(name: TODO, ...args: TODO[]): TODO
  export function on_game_start(): TODO
  export function main_menu_on_init(menu: TODO): TODO
  export function main_menu_on_quit(menu: TODO): TODO
  export function actor_on_weapon_zoom_in(): TODO
  export function actor_on_weapon_zoom_out(): TODO
  export function server_entity_on_register(se_obj: TODO, type_name: TODO): TODO
  export function server_entity_on_unregister(se_obj: TODO, type_name: TODO): TODO
}
