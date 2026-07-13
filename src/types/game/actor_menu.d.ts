/** @noSelfInFile */

declare namespace actor_menu {
  export function set_msg(type: 1 | 2 | 3, message: string, seconds?: number, color?: string): void
  // --- auto-added by audit-coverage (missing from hand-refined types; refine by hand) ---
  export const last_mode: number
  export const xr_meet_dialog_closed: boolean
  export const xr_meet_trade_closed: boolean
  export const xr_meet_upgrade_closed: boolean
  export const dead_body_searching: boolean
  export function get_last_mode(): number
  export function is_hud_free(): boolean
  export function actor_menu_mode(mode: number): void
  export function inventory_wnd_opened(): void
  export function inventory_wnd_closed(): void
  export function trade_wnd_opened(): void
  export function trade_wnd_closed(): void
  export function upgrade_wnd_opened(): void
  export function upgrade_wnd_closed(): void
  export function dead_body_search_wnd_opened(): void
  export function dead_body_search_wnd_closed(): void
  export function dialog_wnd_showed(): void
  export function dialog_wnd_closed(): void
  export function inventory_opened(): boolean
  export function set_fade_msg(msg: string, tm: number, cl: number, snd: string): void
  export function set_notification(typ: number, texture: string, tm: number, snd: string): void
  export function set_item_news(color: number, type_m: number, text: string, ...args: any[]): void
  export function last_hud_msg(typ: number, value: any): boolean
  export function check_hud_fading_msg(): boolean
  export function on_game_start(): void
}
