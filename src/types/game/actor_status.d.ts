/** @noSelfInFile */

declare namespace actor_status {
  export const HUD: UIIndicators
  export const indicators: AnyTable
  export function activate_hud(): void
  export function actor_on_net_destroy(): void
  export function add_indicator(k: string, v: any): void
  export function deactivate_hud(): void
  export function func_index(t: AnyTable, a: any, b: any): boolean
  export function get_boost(name: string, time_only: boolean): number
  export function get_overweight(visual: string): number
  export function get_radiation(visual: string): number
  export function get_satienty(visual: string): number
  export function on_console_execute(name: string): void
  export function on_game_start(): void
  export function prepare_boosters_effect(): void
  export function prepare_indictors_list(): void
  export function prepare_safe_zone(): void
  export function scan_boosters_effect(): void
  export function scan_current_booster_effect(typ: string, period: number, value: number): void
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
  Update(force: boolean): void
}
