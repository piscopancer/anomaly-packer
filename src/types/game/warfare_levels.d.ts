/** @noSelfInFile */

declare namespace warfare_levels {
  export const level_information: AnyTable
  export const level_timers: AnyTable
  export const printd: (e: number, optionalMessage?: string) => void
  export function faction_enemy_present(lvl: number, faction: Community): LuaMultiReturn<[number, AnyTable]>
  export function get_level_target(lvl: number, faction: Community): AnyTable | undefined
  export function setup_faction_table(lvl: number, faction: Community): void
  export function update(): void
  export function update_level(lvl: number): void
}
