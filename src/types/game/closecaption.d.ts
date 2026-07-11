/** @noSelfInFile */

declare namespace closecaption {
  export function both_heli_info(): TODO
  export function cc_display_normal(cc_id: TODO, showtime: TODO, color: TODO): void
  export function cc_display_radio(sender: CGameObject, sender_faction: TODO, sender_id: TODO, showtime: TODO, cc_text: TODO, delay_sound: TODO, cc_type: TODO): boolean
  export function cc_display_tutorial(cc_id: TODO): void
  export function cc_npc_disabled(): TODO
  export function del_variable(variable_name: TODO): void
  export function get_game_version(): TODO
  export function is_cc_npc_enabled(): TODO
  export function not_both_heli_info(): TODO
  export function on_actor_update_cc(): void
  export function read_cc_ini(): void
  export function sender_unidentified(): TODO
  export function sound(_sound: TODO, showtime: TODO, sender: TODO, sender_faction: TODO, sender_id: TODO, delay_sound: TODO): boolean
}
