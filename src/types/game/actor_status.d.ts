/** @noSelfInFile */

declare namespace actor_status {
  export const HUD: TODO
  export const indicators: TODO
  export function activate_hud(): void
  export function actor_on_net_destroy(): void
  export function add_indicator(k: TODO, v: TODO): void
  export function deactivate_hud(): void
  export function func_index(t: TODO, a: TODO, b: TODO): TODO
  export function get_boost(name: TODO, time_only: TODO): TODO
  export function get_overweight(visual: TODO): TODO
  export function get_radiation(visual: TODO): TODO
  export function get_satienty(visual: TODO): TODO
  export function on_console_execute(name: string): void
  export function on_game_start(): void
  export function prepare_boosters_effect(): void
  export function prepare_indictors_list(): TODO
  export function prepare_safe_zone(): void
  export function scan_boosters_effect(): void
  export function scan_current_booster_effect(typ: TODO, period: TODO, value: TODO): void
  export function scan_safe_zone(): boolean
  export function scan_safe_zone_old(): boolean
  export function update_hud(): void
}

/** @customConstructor UIIndicators */
declare class UIIndicators extends CUIScriptWnd {
  constructor()
  __finalize(): void
  InitControls(): void
  Clear(): void
  Update(force: TODO): void
}
