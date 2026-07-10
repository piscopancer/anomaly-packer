// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace actor_status {
  export const HUD: TODO
  export const indicators: TODO
  export function activate_hud(): TODO
  export function actor_on_net_destroy(): TODO
  export function add_indicator(k: TODO, v: TODO): TODO
  export function deactivate_hud(): TODO
  export function func_index(t: TODO, a: TODO, b: TODO): TODO
  export function get_boost(name: TODO, time_only: TODO): TODO
  export function get_overweight(visual: TODO): TODO
  export function get_radiation(visual: TODO): TODO
  export function get_satienty(visual: TODO): TODO
  export function on_console_execute(name: TODO): TODO
  export function on_game_start(): TODO
  export function prepare_boosters_effect(): TODO
  export function prepare_indictors_list(): TODO
  export function prepare_safe_zone(): TODO
  export function scan_boosters_effect(): TODO
  export function scan_current_booster_effect(typ: TODO, period: TODO, value: TODO): TODO
  export function scan_safe_zone(): TODO
  export function scan_safe_zone_old(): TODO
  export function update_hud(): TODO
}

/** @customConstructor UIIndicators */
declare class UIIndicators extends CUIScriptWnd {
  constructor(arg0: TODO)
  __finalize(): TODO
  InitControls(): TODO
  Clear(): TODO
  Update(force: TODO): TODO
}
