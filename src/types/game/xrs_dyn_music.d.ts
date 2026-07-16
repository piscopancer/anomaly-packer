/** @noSelfInFile */

declare namespace xrs_dyn_music {
  export const AMBIENT_FADE_UPDATE_DELTA: number
  export const FadeTo_ambient: number
  export const FadeTo_theme: number
  export const MAX_DIST: number
  export const MIN_DIST: number
  export const THEME_FADE_UPDATE_DELTA: number
  export const TRACK_SWITCH_DELTA: number
  export const VOLUME_DELTA: number
  export const ambient_vol: AnyTable
  export const cur_theme_number: number
  export const cur_track_number: number
  export const feature_is_active: AnyTable
  export const m_ambient_vol: number
  export const m_theme_volume: number
  export const next_track_start_time: number
  export const npc_table: AnyTable
  export const theme: AnyTable
  export function activate_feature(): void
  export function actor_in_silence_zone(): boolean
  export function ambient_is_fading(): boolean
  export function deactivate_feature(): void
  export function fade_ambient(): void
  export function fade_theme(): void
  export function finish_theme(): void
  export function get_theme_state(): string
  export function initialize_themes(): void
  export function main_menu_off(): void
  export function main_menu_on(): void
  export function on_actor_destroy(): void
  export function on_game_start(): void
  export function select_next_track(): void
  export function start_theme(): void
  export function theme_is_fading(): boolean
}

/** @customConstructor stereo_sound */
declare class stereo_sound {
  both: TODO // @generated field — refine type
  both_tail: TODO // @generated field — refine type
  end_time: TODO // @generated field — refine type
  constructor()
  initialize(sound: string, lvl: number): void
  play(): void
  play_at_time(time: number, sound: string, lvl: number): void
  playing(): boolean
  update(vol: number): void
  stop(): void
  length(): number
  set_volume(num: number): void
}

declare namespace xrs_dyn_music {
  /** Anomaly `class "stereo_sound"` is also reachable on the `xrs_dyn_music` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`xrs_dyn_music.stereo_sound.Method = ...`). */
  export const stereo_sound: stereo_sound
}
