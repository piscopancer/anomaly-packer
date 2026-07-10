// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace ui_pda_radio_tab {
  export function action_plyr_loop(): TODO
  export function action_plyr_next(): TODO
  export function action_plyr_playlist(): TODO
  export function action_plyr_previous(): TODO
  export function action_plyr_shuffle(): TODO
  export function action_plyr_start(): TODO
  export function action_plyr_stop(): TODO
  export function action_plyr_v_down(): TODO
  export function action_plyr_v_up(): TODO
  export function action_radio_ch(n: TODO): TODO
  export function action_radio_start(): TODO
  export function action_radio_stop(): TODO
  export function action_radio_v_down(): TODO
  export function action_radio_v_up(): TODO
  export function get_num_of_plyr(arg0: TODO): TODO
  export function get_playing_object(i: TODO): TODO
  export function get_plyr_param(): TODO
  export function get_ui(): TODO
  export function is_snd_playing(arg0: TODO): TODO
  export function on_game_start(): TODO
  export function plyr_pick(num_of_tracks: TODO, plyr_now: TODO, previous: TODO, shuffle: TODO, loop: TODO, counter: TODO, index: TODO): TODO
  export function radio_pick(radio_index_i: TODO, number_of_tracks: TODO): TODO
  export function radio_setVolume(radio_vol: TODO): TODO
  export function update_settings(): TODO
}

/** @customConstructor pda_radio_tab */
declare class pda_radio_tab extends CUIScriptWnd {
  constructor(arg0: TODO)
  __finalize(): TODO
  InitControls(): TODO
  InitCallbacks(): TODO
  Update(): TODO
  SwitchChannel(n: TODO): TODO
  On_Radio_Channel_1(): TODO
  On_Radio_Channel_2(): TODO
  On_Radio_Volume_Down(): TODO
  On_Radio_Volume_Up(): TODO
  On_Radio_Stop(): TODO
  On_Radio_Start(): TODO
  On_Player_Playlist(): TODO
  On_Player_Loop(): TODO
  On_Player_Shuffle(): TODO
  On_Player_Vol_Down(): TODO
  On_Player_Vol_Up(): TODO
  On_Player_Prev(): TODO
  On_Player_Stop(): TODO
  On_Player_Start(): TODO
  On_Player_Next(): TODO
}
