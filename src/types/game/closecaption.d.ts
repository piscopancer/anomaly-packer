/** @noSelfInFile */

declare namespace closecaption {
  export function both_heli_info(): boolean
  export function cc_display_normal(cc_id: string, showtime: number, color: number): void
  export function cc_display_radio(sender: CGameObject, sender_faction: string, sender_id: string, showtime: number, cc_text: string, delay_sound: number, cc_type: string): boolean
  export function cc_display_tutorial(cc_id: string): void
  export function cc_npc_disabled(): boolean
  export function del_variable(variable_name: string): void
  export function get_game_version(): number
  export function is_cc_npc_enabled(): boolean
  export function not_both_heli_info(): boolean
  export function on_actor_update_cc(): void
  export function read_cc_ini(): void
  export function sender_unidentified(): string
  export function sound(_sound: string, showtime: number, sender: CGameObject, sender_faction: string, sender_id: string, delay_sound: number): boolean
}
