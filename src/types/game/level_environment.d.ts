/** @noSelfInFile */

declare namespace level_environment {
  export const bLevelUnderground: TODO
  export function distance_2d(p1: TODO, p2: TODO): TODO
  export function droplets_reset(): void
  export function get_light_flicker(): TODO
  export function into_the_world(): void
  export function is_actor_immune(): boolean
  export function on_game_start(): void
  export function on_key_press(key: TODO): boolean
  export function update_fog(wthr: TODO, pos: TODO, rain_factor: TODO, rain_volume: TODO, inside: TODO, current_hour: TODO, time_g: TODO): TODO
  export function update_light_flicker(time_g: TODO): TODO
  export function update_pfx(wthr: TODO, pos: TODO, rain_factor: TODO, rain_volume: TODO, inside: TODO, current_hour: TODO, time_g: TODO): TODO
  export function update_radiation_day(wthr: TODO, inside: TODO, time_g: TODO): void
  export function update_rain_droplets(wthr: TODO, pos: TODO, rain_factor: TODO, rain_volume: TODO, inside: TODO, current_hour: TODO, time_g: TODO): void
  export function update_settings(): void
  export function update_tiny(wthr: TODO, pos: TODO, rain_factor: TODO, rain_volume: TODO, inside: TODO, current_hour: TODO, time_g: TODO): TODO
}
