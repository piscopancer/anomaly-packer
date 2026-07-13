/** @noSelfInFile */

declare namespace faction_expansions {
  export const faction: AnyTable
  export const level: AnyTable
  export const mutant: AnyTable
  export const mutant_tier_by_clsid: AnyTable
  export function get_advanced_chance(resource: string): number
  export function get_faction_squad(faction: Community, typ: string): string
  export function get_section(faction: Community, advanced_chance: number, veteran_chance: number): string
  export function get_spawn_section(faction: Community, resource: string): string
  export function get_veteran_chance(resource: string): number
  export function on_game_start(): void
}
