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
  ___timer: TODO // @generated field — refine type
  boundaries: TODO // @generated field — refine type
  brightness: TODO // @generated field — refine type
  brightness_table: TODO // @generated field — refine type
  curr_weather: TODO // @generated field — refine type
  cycle: TODO // @generated field — refine type
  distant_sounds: TODO // @generated field — refine type
  distant_storm_on: TODO // @generated field — refine type
  distant_storm_prob: number // @generated field — refine type
  dof_factor: number // @generated field — refine type
  forced_weather_change_on_time_change: boolean // @generated field — refine type
  ini: TODO // @generated field — refine type
  inited_time: TODO // @generated field — refine type
  last_hour: TODO // @generated field — refine type
  last_period_change_date: TODO // @generated field — refine type
  levelWeather: TODO // @generated field — refine type
  meteorites_on: boolean // @generated field — refine type
  meteorites_particle: TODO // @generated field — refine type
  next_hour: TODO // @generated field — refine type
  next_thunder_at: TODO // @generated field — refine type
  next_weather: TODO // @generated field — refine type
  pre_blowout_period: boolean // @generated field — refine type
  preset: TODO // @generated field — refine type
  presets: TODO // @generated field — refine type
  presets_pre_blowout: TODO // @generated field — refine type
  storm_directions: TODO // @generated field — refine type
  thunder_index: TODO // @generated field — refine type
  thunders: TODO // @generated field — refine type
  transition_period: boolean // @generated field — refine type
  update_time: TODO // @generated field — refine type
  weatherType: TODO // @generated field — refine type
  weather_file: TODO // @generated field — refine type
  weather_fx: TODO // @generated field — refine type
  weather_storage: TODO // @generated field — refine type
  wfx_time: TODO // @generated field — refine type
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

declare namespace level_weathers {
  /** Anomaly `class "WeatherManager"` is also reachable on the `level_weathers` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`level_weathers.WeatherManager.Method = ...`). */
  export const WeatherManager: WeatherManager
}
