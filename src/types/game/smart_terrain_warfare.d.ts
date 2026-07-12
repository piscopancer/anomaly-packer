/** @noSelfInFile */

declare namespace smart_terrain_warfare {
  export const control_hold: AnyTable
  export const dbg_hud: boolean
  export const defense_next_update: AnyTable
  export const defense_timers: AnyTable
  export const hide_smarts: boolean
  export const invasions: AnyTable
  export const manual_point: AnyTable
  export const patrol_next_update: AnyTable
  export const patrol_squads: AnyTable
  export const patrol_timers: AnyTable
  export const pda_icons: AnyTable
  export const point_cap_timers: AnyTable
  export const printd: (this: void, ...args: unknown[]) => void
  export const random_patrols: AnyTable
  export const smart_owners: AnyTable
  export function calculate_target_density(smart: se_smart_terrain): number
  export function check_owner(smart: se_smart_terrain): void
  export function check_unique_npcs(smart: se_smart_terrain): void
  export function faction_enemy_present(smart: se_smart_terrain, faction: string): void
  export function find_patrol_target(smart: se_smart_terrain, patrol_table: AnyTable, squad: cse_alife_online_offline_group): LuaMultiReturn<[cse_alife_online_offline_group | se_smart_terrain | undefined, boolean]>
  export function find_random_patrol_target(smart: se_smart_terrain, f: string): number
  export function find_targets(smart: se_smart_terrain, faction_override: string): AnyTable | undefined
  export function get_faction_power(smart: se_smart_terrain, faction: string): number
  export function get_invasion_target(smart: se_smart_terrain): se_smart_terrain | undefined
  export function get_neutral_info(smart: se_smart_terrain): string
  export function get_target_info(smart: se_smart_terrain, visible: boolean): string
  export function get_unknown_info(smart: se_smart_terrain): string
  export function get_warfare_info(smart: se_smart_terrain): string
  export function on_game_start(): void
  export function process_defense(smart: se_smart_terrain): void
  export function process_manual_capture(smart: se_smart_terrain): void
  export function process_mutants(smart: se_smart_terrain): void
  export function process_patrols(smart: se_smart_terrain): void
  export function process_squads(smart: se_smart_terrain): void
  export function process_targets(smart: se_smart_terrain): void
  export function refresh_strings(): void
  export function set_max_population(smart: se_smart_terrain): void
  export function smart_terrain_on_update(smart: se_smart_terrain): void
  export function spawn_defense(smart: se_smart_terrain): void
  export function spawn_mutants(smart: se_smart_terrain): void
  export function spawn_patrols(smart: se_smart_terrain): void
  export function squad_count(smart: se_smart_terrain, faction: string): number
  export function squad_count_defending(smart: se_smart_terrain, faction: string): LuaMultiReturn<[number, number]>
  export function squad_count_defending_all(smart: se_smart_terrain): LuaMultiReturn<[number, number]>
  export function squad_count_targeting(smart: se_smart_terrain, faction: string): number
  export function translate_smart_name(name: string): string
  export function update_resources(smart: se_smart_terrain): void
}
