/** @noSelfInFile */

declare namespace faction_expansions {
  export const faction: TODO
  export const level: TODO
  export const mutant: TODO
  export const mutant_tier_by_clsid: TODO
  export function get_advanced_chance(resource: TODO): number
  export function get_faction_squad(faction: TODO, typ: string): string
  export function get_section(faction: string, advanced_chance: TODO, veteran_chance: TODO): string
  export function get_spawn_section(faction: TODO, resource: TODO): string
  export function get_veteran_chance(resource: TODO): number
  export function on_game_start(): void
}
