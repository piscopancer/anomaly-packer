/** @noSelfInFile */

declare namespace sound_ambient {
  export function on_game_start(): void
  export function print_dbg(fmt: TODO, ...args: TODO[]): void
  export function reset_settings(level_name: TODO, ambient: TODO): boolean
  export function update_ambient(): boolean
  export function update_rain_helm_sound(rain_factor: TODO, rain_volume: TODO, inside: TODO, bLevelUnderground: TODO): TODO
  export function update_wind(rain_volume: TODO, inside: TODO, bLevelUnderground: TODO): TODO
}
