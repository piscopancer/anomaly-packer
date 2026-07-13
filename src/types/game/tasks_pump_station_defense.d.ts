/** @noSelfInFile */

declare namespace tasks_pump_station_defense {
  export function actor_on_first_update(): void
  export function aggro(): boolean
  export function clean_corpses(): void
  export function cleanup(): void
  export function dist_from_trigger(): number
  export function escape_message(): void
  export function get_news_data(id: number): string
  export function give_before_attack_talk(): void
  export function intro_message(): void
  export function is_commader_replaced(): boolean
  export function load_state(m_data: AnyTable): void
  export function loot_message(): void
  export function mr(n: number, inc_0: boolean): number
  export function nkeys(t: AnyTable): number
  export function on_game_start(): void
  export function rkeys(t: AnyTable): any
  export function save_state(m_data: AnyTable): void
  export function spawn_and_set(kill: boolean, sec: string, x: number, y: number, z: number, lvid: number, gvid: number, guard_profile: string, give_guns: boolean): number
  export function start_message(): void
  export function warning_message(): void
}
