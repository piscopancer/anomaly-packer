/** @noSelfInFile */

declare namespace warfare {
  export const FACTION_TERRITORY_RADIUS: number
  export const actor_faction: string | null
  export const actor_influence_points: number
  export const all_out_war_applied: boolean
  export const base_count: number
  export const dynamic_relations_installed: boolean
  export const ignore: TODO
  export const influence_levels: TODO
  export const initialized: boolean
  export const level_count: number
  export const loaded_squads: TODO
  export const need_all_out_war_applied: boolean
  export const registered_squads: TODO
  export const resource_count: number
  export const warfare_debug: boolean
  export const warfare_positions_filled: boolean
  export function actor_on_update(): void
  export function apply_all_out_war(): void
  export function distance_to_xz_sqr(a: vector, b: vector): number
  export function fill_start_position(): void
  export function fill_start_position_on_load(): void
  export function get_squad_section_faction(squad_section: string): string
  export function hash_table_to_array(tbl: TODO): TODO
  export function initialize(): void
  export function initialize_random_starting_locations(): void
  export function is_squad_section_enemy_of_faction(squad_section: string, faction: string): boolean
  export function is_warfare_trader(npc: CGameObject): boolean
  export function lerp(a: number, b: number, f: number): number
  export function load_state(m_data: TODO): void
  export function on_game_start(): void
  export function printd(e: TODO, optionalMessage: TODO): void
  export function resetter(): boolean
  export function save_state(m_data: TODO): void
  export function shuffle(t: TODO): void
  export function shuffleTable(t: TODO): void
  export function snap(): void
  export function sort_priority_table(tbl: TODO): void
  export function squad_on_npc_creation(squad: TODO, se_obj: TODO, spawn_smart: TODO): void
  export function squad_on_unregister(squad: TODO, type_name: string): void
}
