/** @noSelfInFile */

declare namespace warfare_factions {
  export const all_factions: AnyTable
  export const faction_information: AnyTable
  export const faction_timers: AnyTable
  export const factions: AnyTable
  export const factions_p: AnyTable
  export const printd: (e: number, optionalMessage?: string) => void
  export function update(): void
  export function update_faction(faction: Community): void
}
