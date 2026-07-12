/** @noSelfInFile */

declare namespace actor_menu {
  export function set_msg(type: 1 | 2 | 3, message: string, seconds?: number, color?: string): void
  // --- auto-added by audit-coverage (missing from hand-refined types; refine by hand) ---
  export const last_mode: TODO
  export const xr_meet_dialog_closed: TODO
  export const xr_meet_trade_closed: TODO
  export const xr_meet_upgrade_closed: TODO
  export const dead_body_searching: TODO
  export function get_last_mode(): TODO
  export function is_hud_free(): TODO
  export function actor_menu_mode(mode: TODO): TODO
  export function inventory_wnd_opened(): TODO
  export function inventory_wnd_closed(): TODO
  export function trade_wnd_opened(): TODO
  export function trade_wnd_closed(): TODO
  export function upgrade_wnd_opened(): TODO
  export function upgrade_wnd_closed(): TODO
  export function dead_body_search_wnd_opened(): TODO
  export function dead_body_search_wnd_closed(): TODO
  export function dialog_wnd_showed(): TODO
  export function dialog_wnd_closed(): TODO
  export function inventory_opened(): TODO
  export function set_fade_msg(msg: TODO, tm: TODO, cl: TODO, snd: TODO): TODO
  export function set_notification(typ: TODO, texture: TODO, tm: TODO, snd: TODO): TODO
  export function set_item_news(color: TODO, type_m: TODO, text: TODO, ...args: TODO[]): TODO
  export function last_hud_msg(typ: TODO, value: TODO): TODO
  export function check_hud_fading_msg(): TODO
  export function on_game_start(): TODO
}
