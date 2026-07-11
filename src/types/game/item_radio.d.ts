/** @noSelfInFile */

declare namespace item_radio {
  export const RF_stashes: TODO
  export const RF_targets: TODO
  export function add_stash(lvl: TODO, id: TODO, freq: TODO): void
  export function add_target(id: TODO, freq: TODO, dist: TODO): void
  export function change_freq(num: TODO): void
  export function clear_stash(lvl: TODO, id: TODO): void
  export function clear_target(id: TODO): void
  export function create_rf_table(id: TODO, cls: TODO, dist_pos: TODO, freq: TODO, dist: TODO, snd: TODO): TODO
  export function get_freq(): TODO
  export function get_random_freq(): TODO
  export function get_UI(): TODO
  export function get_vol_range(freq: TODO): TODO
  export function is_in_range(freq: TODO): boolean
  export function on_game_start(): void
  export function print_dbg(fmt: TODO, ...args: TODO[]): void
  export function scan_online_sources(): void
  export function sound_trigger(state: TODO): void
  export function validate_RF_targets(): void
}

/** @customConstructor UI3D_RF */
declare class UI3D_RF extends CUIScriptWnd {
  constructor()
  __finalize(): void
  Update(): void
}
