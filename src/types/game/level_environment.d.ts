/** @noSelfInFile */

declare namespace level_environment {
  export const bLevelUnderground: boolean
  export function distance_2d(p1: vector, p2: vector): number
  export function droplets_reset(): void
  export function get_light_flicker(): boolean
  export function into_the_world(): void
  export function is_actor_immune(): boolean
  export function on_game_start(): void
  export function on_key_press(key: number): boolean
  export function update_fog(wthr: string, pos: vector, rain_factor: number, rain_volume: number, inside: boolean, current_hour: number, time_g: number): void
  export function update_light_flicker(time_g: number): void
  export function update_pfx(wthr: string, pos: vector, rain_factor: number, rain_volume: number, inside: boolean, current_hour: number, time_g: number): void
  export function update_radiation_day(wthr: string, inside: boolean, time_g: number): void
  export function update_rain_droplets(wthr: string, pos: vector, rain_factor: number, rain_volume: number, inside: boolean, current_hour: number, time_g: number): void
  export function update_settings(): void
  export function update_tiny(wthr: string, pos: vector, rain_factor: number, rain_volume: number, inside: boolean, current_hour: number, time_g: number): void
}
