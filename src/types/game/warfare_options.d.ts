/** @noSelfInFile */

declare namespace warfare_options {
  export const ENABLE_MUTANT_OFFLINE_COMBAT: boolean
  export const RANDOMIZE_SQUAD_COUNT: boolean
  export const SHOW_ALL_SMARTS: boolean
  export const SHOW_ALL_SQUADS: boolean
  export const SQUAD_COUNT_MAX: number
  export const SQUAD_COUNT_MIN: number
  export const options: TODO
  export function get_random_start_location(): string
  export function on_game_start(): void
  export function override_functions(): void
  export function update_settings(): void
}
