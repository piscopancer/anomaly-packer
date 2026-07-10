// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace item_radio {
  export const RF_stashes: TODO
  export const RF_targets: TODO
  export function add_stash(lvl: TODO, id: TODO, freq: TODO): TODO
  export function add_target(id: TODO, freq: TODO, dist: TODO): TODO
  export function change_freq(num: TODO): TODO
  export function clear_stash(lvl: TODO, id: TODO): TODO
  export function clear_target(id: TODO): TODO
  export function create_rf_table(id: TODO, cls: TODO, dist_pos: TODO, freq: TODO, dist: TODO, snd: TODO): TODO
  export function get_freq(): TODO
  export function get_random_freq(): TODO
  export function get_UI(): TODO
  export function get_vol_range(freq: TODO): TODO
  export function is_in_range(freq: TODO): TODO
  export function on_game_start(): TODO
  export function print_dbg(fmt: TODO, ...args: TODO[]): TODO
  export function scan_online_sources(): TODO
  export function sound_trigger(state: TODO): TODO
  export function validate_RF_targets(): TODO
}

/** @customConstructor UI3D_RF */
declare class UI3D_RF extends CUIScriptWnd {
  constructor(arg0: TODO)
  __finalize(): TODO
  Update(): TODO
}
