/** @noSelfInFile */

declare namespace gamemode_agony {
  export function is_bleeding(flags: AnyTable): boolean
  export function is_emission_active(flags: AnyTable): boolean
  export function is_health_critical(flags: AnyTable): boolean
  export function is_in_combat(flags: AnyTable): boolean
  export function on_game_start(): void
}
