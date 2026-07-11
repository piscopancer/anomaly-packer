/** @noSelfInFile */

declare namespace xrs_dyn_music {
  export const AMBIENT_FADE_UPDATE_DELTA: TODO
  export const FadeTo_ambient: TODO
  export const FadeTo_theme: TODO
  export const MAX_DIST: TODO
  export const MIN_DIST: TODO
  export const THEME_FADE_UPDATE_DELTA: TODO
  export const TRACK_SWITCH_DELTA: TODO
  export const VOLUME_DELTA: TODO
  export const ambient_vol: TODO
  export const cur_theme_number: TODO
  export const cur_track_number: TODO
  export const feature_is_active: TODO
  export const m_ambient_vol: TODO
  export const m_theme_volume: TODO
  export const next_track_start_time: TODO
  export const npc_table: TODO
  export const theme: TODO
  export function activate_feature(): void
  export function actor_in_silence_zone(): boolean
  export function ambient_is_fading(): TODO
  export function deactivate_feature(): void
  export function fade_ambient(): void
  export function fade_theme(): void
  export function finish_theme(): void
  export function get_theme_state(): TODO
  export function initialize_themes(): void
  export function main_menu_off(): void
  export function main_menu_on(): void
  export function on_actor_destroy(): void
  export function on_game_start(): void
  export function select_next_track(): void
  export function start_theme(): void
  export function theme_is_fading(): TODO
}

/** @customConstructor stereo_sound */
declare class stereo_sound {
  constructor()
  initialize(sound: TODO, lvl: TODO): void
  play(): TODO
  play_at_time(time: TODO, sound: TODO, lvl: TODO): TODO
  playing(): TODO
  update(vol: TODO): void
  stop(): void
  length(): TODO
  set_volume(num: TODO): void
}
