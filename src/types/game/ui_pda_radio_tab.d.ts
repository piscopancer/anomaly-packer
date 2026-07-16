/** @noSelfInFile */

declare namespace ui_pda_radio_tab {
  export function action_plyr_loop(): void
  export function action_plyr_next(): void
  export function action_plyr_playlist(): void
  export function action_plyr_previous(): void
  export function action_plyr_shuffle(): void
  export function action_plyr_start(): void
  export function action_plyr_stop(): void
  export function action_plyr_v_down(): void
  export function action_plyr_v_up(): void
  export function action_radio_ch(n: number): void
  export function action_radio_start(): void
  export function action_radio_stop(): void
  export function action_radio_v_down(): void
  export function action_radio_v_up(): void
  export function get_num_of_plyr(): number
  export function get_playing_object(i: number): CGameObject | undefined
  export function get_plyr_param(): AnyTable
  export function get_ui(): AnyTable
  export function is_snd_playing(): boolean
  export function on_game_start(): void
  export function plyr_pick(num_of_tracks: number, plyr_now: number, previous: number, shuffle: boolean, loop: number, counter: number, index: number): number
  export function radio_pick(radio_index_i: number, number_of_tracks: number): number
  export function radio_setVolume(radio_vol: number): void
  export function update_settings(): void
}

/** @customConstructor pda_radio_tab */
declare class pda_radio_tab extends CUIScriptWnd {
  btn_plyr_loop: TODO // @generated field — refine type
  btn_plyr_next: TODO // @generated field — refine type
  btn_plyr_playlist: TODO // @generated field — refine type
  btn_plyr_prev: TODO // @generated field — refine type
  btn_plyr_shuffle: TODO // @generated field — refine type
  btn_plyr_start: TODO // @generated field — refine type
  btn_plyr_stop: TODO // @generated field — refine type
  btn_plyr_v_down: TODO // @generated field — refine type
  btn_plyr_v_up: TODO // @generated field — refine type
  btn_radio_ch: TODO // @generated field — refine type
  btn_radio_start: TODO // @generated field — refine type
  btn_radio_stop: TODO // @generated field — refine type
  btn_radio_v_down: TODO // @generated field — refine type
  btn_radio_v_up: TODO // @generated field — refine type
  loop_text: TODO // @generated field — refine type
  playing_text: TODO // @generated field — refine type
  playlist_text: TODO // @generated field — refine type
  radio_ch: TODO // @generated field — refine type
  radio_display_ch: TODO // @generated field — refine type
  radio_off: TODO // @generated field — refine type
  suffle_text: TODO // @generated field — refine type
  time_text: TODO // @generated field — refine type
  constructor()
  __finalize(): void
  InitControls(): void
  InitCallbacks(): void
  Update(): void
  SwitchChannel(n: number): void
  On_Radio_Channel_1(): void
  On_Radio_Channel_2(): void
  On_Radio_Volume_Down(): void
  On_Radio_Volume_Up(): void
  On_Radio_Stop(): void
  On_Radio_Start(): void
  On_Player_Playlist(): void
  On_Player_Loop(): void
  On_Player_Shuffle(): void
  On_Player_Vol_Down(): void
  On_Player_Vol_Up(): void
  On_Player_Prev(): void
  On_Player_Stop(): void
  On_Player_Start(): void
  On_Player_Next(): void
}

declare namespace ui_pda_radio_tab {
  /** Anomaly `class "pda_radio_tab"` is also reachable on the `ui_pda_radio_tab` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`ui_pda_radio_tab.pda_radio_tab.Method = ...`). */
  export const pda_radio_tab: pda_radio_tab
}
