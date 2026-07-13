/** @noSelfInFile */

declare namespace pda_smart_terrain_warfare {
  export const level_keys: AnyTable
  export const printd: (e: number, optionalMessage?: string) => void
  export function on_game_start(): void
  export function refresh_strings(): void
}
