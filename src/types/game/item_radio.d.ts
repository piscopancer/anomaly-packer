/** @noSelfInFile */

declare namespace item_radio {
  export const RF_stashes: AnyTable
  export const RF_targets: AnyTable
  export function add_stash(lvl: LevelName, id: number, freq: number): void
  export function add_target(id: number, freq: number, dist: number): void
  export function change_freq(num: number): void
  export function clear_stash(lvl: LevelName, id: number): void
  export function clear_target(id: number): void
  export function create_rf_table(id: number, cls: number, dist_pos: vector, freq: number, dist: number, snd: any): AnyTable
  export function get_freq(): number
  export function get_random_freq(): number
  export function get_UI(): UI3D_RF
  export function get_vol_range(freq: number): number
  export function is_in_range(freq: number): boolean
  export function on_game_start(): void
  export function print_dbg(fmt: string, ...args: any[]): void
  export function scan_online_sources(): void
  export function sound_trigger(state: boolean): void
  export function validate_RF_targets(): void
}

/** @customConstructor UI3D_RF */
declare class UI3D_RF extends CUIScriptWnd {
  freq: TODO // @generated field — refine type
  m_area_r: TODO // @generated field — refine type
  m_led: TODO // @generated field — refine type
  m_seg1: TODO // @generated field — refine type
  m_seg2: TODO // @generated field — refine type
  m_seg3: TODO // @generated field — refine type
  xml: TODO // @generated field — refine type
  constructor()
  __finalize(): void
  Update(): void
}

declare namespace item_radio {
  /** Anomaly `class "UI3D_RF"` is also reachable on the `item_radio` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`item_radio.UI3D_RF.Method = ...`). */
  export const UI3D_RF: UI3D_RF
}
