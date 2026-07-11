/** @noSelfInFile */

declare namespace smart_terrain_warfare {
  export const control_hold: TODO
  export const dbg_hud: TODO
  export const defense_next_update: TODO
  export const defense_timers: TODO
  export const hide_smarts: TODO
  export const invasions: TODO
  export const manual_point: TODO
  export const patrol_next_update: TODO
  export const patrol_squads: TODO
  export const patrol_timers: TODO
  export const pda_icons: TODO
  export const point_cap_timers: TODO
  export const printd: TODO
  export const random_patrols: TODO
  export const smart_owners: TODO
  export function calculate_target_density(smart: TODO): number
  export function check_owner(smart: TODO): void
  export function check_unique_npcs(smart: TODO): void
  export function faction_enemy_present(smart: TODO, faction: TODO): void
  export function find_patrol_target(smart: TODO, patrol_table: TODO, squad: TODO): LuaMultiReturn<[TODO, boolean]>
  export function find_random_patrol_target(smart: TODO, f: TODO): number
  export function find_targets(smart: TODO, faction_override: TODO): TODO
  export function get_faction_power(smart: TODO, faction: TODO): number
  export function get_invasion_target(smart: TODO): TODO
  export function get_neutral_info(smart: TODO): TODO
  export function get_target_info(smart: TODO, visible: TODO): TODO
  export function get_unknown_info(smart: TODO): TODO
  export function get_warfare_info(smart: TODO): TODO
  export function on_game_start(): void
  export function process_defense(smart: TODO): void
  export function process_manual_capture(smart: TODO): void
  export function process_mutants(smart: TODO): void
  export function process_patrols(smart: TODO): void
  export function process_squads(smart: TODO): void
  export function process_targets(smart: TODO): void
  export function refresh_strings(): void
  export function set_max_population(smart: TODO): void
  export function smart_terrain_on_update(smart: TODO): void
  export function spawn_defense(smart: TODO): void
  export function spawn_mutants(smart: TODO): void
  export function spawn_patrols(smart: TODO): void
  export function squad_count(smart: TODO, faction: TODO): number
  export function squad_count_defending(smart: TODO, faction: TODO): LuaMultiReturn<[number, number]>
  export function squad_count_defending_all(smart: TODO): LuaMultiReturn<[number, number]>
  export function squad_count_targeting(smart: TODO, faction: TODO): number
  export function translate_smart_name(name: TODO): string
  export function update_resources(smart: TODO): void
}
