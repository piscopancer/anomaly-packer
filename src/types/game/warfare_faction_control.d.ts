/** @noSelfInFile */

declare namespace warfare_faction_control {
  export const player_heli: AnyTable
  export const player_heli_spot: AnyTable
  export const printd: (e: number, optionalMessage?: string) => void
  export function on_game_start(): void
  export function possess_squad_leader(squad: CseAlifeOnlineOfflineGroup): boolean
  export function refresh_strings(): void
  export function translate_smart_name(name: string): string
}
