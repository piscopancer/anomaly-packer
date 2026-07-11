/** @noSelfInFile */

declare namespace warfare_levels {
  export const level_information: TODO
  export const level_timers: TODO
  export const printd: TODO
  export function faction_enemy_present(lvl: TODO, faction: string): LuaMultiReturn<[number, TODO]>
  export function get_level_target(lvl: TODO, faction: TODO): TODO
  export function setup_faction_table(lvl: TODO, faction: string): void
  export function update(): void
  export function update_level(lvl: TODO): void
}
