/** @noSelfInFile */

declare namespace pda_actor {
  export const manual_control: boolean
  export const printd: (e: number, optionalMessage?: string) => void
  export function on_game_start(): void
  export function refresh_strings(): void
}
