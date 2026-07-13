/** @noSelfInFile */

declare namespace sound_ambient {
  export function on_game_start(): void
  export function print_dbg(fmt: string, ...args: any[]): void
  export function reset_settings(level_name: string, ambient: string): boolean
  export function update_ambient(): boolean
  export function update_rain_helm_sound(rain_factor: number, rain_volume: number, inside: boolean, bLevelUnderground: boolean): void
  export function update_wind(rain_volume: number, inside: boolean, bLevelUnderground: boolean): void
}
