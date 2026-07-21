/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace warfare {
    export const FACTION_TERRITORY_RADIUS: number
    export const actor_faction: string | null
    export const actor_influence_points: number
    export const all_out_war_applied: boolean
    export const base_count: number
    export const dynamic_relations_installed: boolean
    export const ignore: AnyTable
    export const influence_levels: AnyTable
    export const initialized: boolean
    export const level_count: number
    export const loaded_squads: AnyTable
    export const need_all_out_war_applied: boolean
    export const registered_squads: AnyTable
    export const resource_count: number
    export const warfare_debug: boolean
    export const warfare_positions_filled: boolean
    export function actor_on_update(): void
    export function apply_all_out_war(): void
    export function distance_to_xz_sqr(a: vector, b: vector): number
    export function fill_start_position(): void
    export function fill_start_position_on_load(): void
    export function get_squad_section_faction(squad_section: Section.Item): string
    export function hash_table_to_array(tbl: AnyTable): AnyTable
    export function initialize(): void
    export function initialize_random_starting_locations(): void
    export function is_squad_section_enemy_of_faction(squad_section: Section.Item, faction: Community): boolean
    export function is_warfare_trader(npc: CGameObject): boolean
    export function lerp(a: number, b: number, f: number): number
    export function load_state(m_data: AnyTable): void
    export function on_game_start(): void
    export function printd(e: number, optionalMessage?: string): void
    export function resetter(): boolean
    export function save_state(m_data: AnyTable): void
    export function shuffle(t: AnyTable): void
    export function shuffleTable(t: AnyTable): void
    export function snap(): void
    export function sort_priority_table(tbl: AnyTable): void
    export function squad_on_npc_creation(squad: CseAlifeOnlineOfflineGroup, se_obj: CseAbstract, spawn_smart: se_smart_terrain): void
    export function squad_on_unregister(squad: CseAlifeOnlineOfflineGroup, type_name: string): void
  }
}
