/** @noSelfInFile */

declare namespace gamemode_ironman {
  export function get_ironman_details(): AnyTable
  export function get_lives_left(): number
  export function on_game_start(): void
  export function timer(): boolean
}
