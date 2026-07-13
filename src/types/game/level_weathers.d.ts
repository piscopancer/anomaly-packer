/** @noSelfInFile */

declare namespace level_weathers {
  export const valid_levels: AnyTable
  export const bLevelUnderground: boolean
  export function get_weather_manager(): WeatherManager
  export function get_next_state(graph: AnyTable, state: string): string
  export function get_random_weather(): WeatherCycle
  export function on_game_start(): void
}

/** @customConstructor WeatherManager */
declare class WeatherManager {
  constructor()
  reset(): void
  update(): void
  change_period(): void
  select_weather(now: number): void
  get_next_weather_cycle(curr_weather: WeatherCycle): WeatherCycle
  reset_change_date(cycle_change: AnyTable, _s: string): void
  is_next_change_date(weather_cycle: AnyTable): boolean
  forced_weather_change(): void
  get_hour_as_string(h: number): string
  get_moon_phase(): string
  set_brightness_boosts(): void
  get_curr_weather(): WeatherCycle
  get_curr_weather_preset(): Weather
  get_curr_ambient(): any
  apply_dof(): void
  launch_meteorites(): void
  stop_meteorites(): void
  meteorites(): void
  distant_storm(): void
  inside_boundaries(x: number, y: number): boolean
  lightning(): void
  load_state(m_data: AnyTable): void
  save_state(m_data: AnyTable): void
  finalize(): void
  Print(fmt: string, ...args: any[]): void
}
