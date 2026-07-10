/** @noSelfInFile */

declare namespace game_statistics {
  export const actor_achievements: TODO
  export const actor_anomaly_maps: TODO
  export const actor_artefacts: TODO
  export const actor_miscellaneous: TODO
  export const actor_statistics: TODO
  export const actor_visited_levels: TODO
  export const actor_visited_smarts: TODO
  export const npc_statistics: TODO
  export function actor_on_achievement_earned(achievement: string, message: string): void
  export function actor_on_interaction(typ: string, obj: CGameObject, name: string): void
  export function actor_on_item_take(item: CGameObject): void
  export function check_for_rank_change(suppress?: boolean): void
  export function check_for_reputation_change(suppress?: boolean): void
  export function create_relations_tables(): void
  export function get_actor_achievements_count(): number
  export function get_actor_visited_levels_count(): number
  export function get_actor_visited_smarts_count(): number
  export function get_statistic_count(value: string): number
  export function has_actor_achievement(value: string): boolean
  export function has_actor_visited_level(value: LevelName): boolean
  export function has_actor_visited_smart(value: string): boolean
  export function has_actor_visitied_all_levels(): boolean
  export function increment_npc_rank(npc: CGameObject, value: number): void
  export function increment_npc_reputation(npc: CGameObject, value: number): void
  export function increment_npc_statistic(npc: CGameObject, value: string, custom_rank?: number, custom_rept?: number): void
  export function increment_rank(value: number): void
  export function increment_reputation(value: number): void
  export function increment_statistic(value: string, custom_rank?: number, custom_rept?: number): void
  export function load(packet: TODO): void
  export function load_state(data: TODO): void
  export function npc_on_death_callback(victim: CGameObject, killer: CGameObject): void
  export function on_game_load(): void
  export function on_game_start(): void
  export function on_level_changing(): void
  export function save(packet: TODO): void
  export function save_state(data: TODO): void
}
