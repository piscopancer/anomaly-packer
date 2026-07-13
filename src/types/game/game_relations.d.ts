/** @noSelfInFile */

declare namespace game_relations {
  /** Playable/enemy community names used for faction relations. */
  export const factions_table: string[]
  /** All community names, including actor-prefixed and special ones. */
  export const factions_table_all: string[]
  /** Default sympathy applied to NPCs (`0.01`). */
  export const default_sympathy: number
  /** Maps a numeric relation code to its name. */
  export const game_relations_by_num: Record<number, 'friend' | 'neutral' | 'enemy'>
  /** Scratch table of pending community goodwill overrides, keyed by data set. */
  export const temp_goodwill_table: AnyTable
  /** Number of configured unaffected faction pairs (`unaffected_pairs` line count). */
  export const n: number

  export function is_faction_unaffected(fac: Community): boolean
  export function is_faction_pair_unaffected(fac1: Community, fac2: Community): boolean
  export function send_news(faction_1: Community, faction_2: Community, text: string, icon: string): void
  export function reset_goodwill(faction_1: Community, faction_2: Community): void
  export function is_relation_allowed(faction_1: Community, faction_2: Community): boolean
  /** Randomly shifts `value` within `range`; `up` restricts the shift to higher values. */
  export function give_range(value: number, range: number, up?: boolean): number
  export function save_relation(faction_1: Community, faction_2: Community, relation: number): void
  export function load_relation(faction_1: Community, faction_2: Community): void
  export function change_faction_relations(faction_1: Community, faction_2: Community, delta: number, force?: boolean): void
  export function reset_all_relations(): void
  export function calculate_relation_change(victim_tbl: AnyTable, killer_tbl: AnyTable): void
  export function get_random_enemy_faction(comm: Community): string | undefined
  export function get_random_natural_faction(comm: Community): string | undefined
  /** @param victim_se @param killer_se server objects (called from the offline combat simulator) */
  export function offline_npc_on_death(victim_se: CseAbstract, killer_se: CseAbstract): void
  export function online_npc_on_death(victim: CGameObject, killer: CGameObject): void
  export function on_game_start(): void
  /** @param new_community a numeric string, or `"enemy"` / `"friend"` */
  export function set_factions_community(faction: Community, faction_to: Community, new_community: Community | number): void
  export function set_factions_community_num(faction: Community, faction_to: Community, new_community_num: number): void
  export function change_factions_community_num(faction_name: Community, obj_id: number, delta: number): void
  export function get_factions_community(faction: Community, faction_to: Community): number | undefined
  export function is_factions_friends(faction: Community, faction_to: Community): boolean
  export function is_factions_enemies(faction_1: Community, faction_2: Community): boolean
  export function is_factions_neutrals(faction: Community, faction_to: Community): boolean
  export function get_npcs_relation(npc1: CGameObject, npc2: CGameObject): number | undefined
  export function set_npcs_relation(npc1: CGameObject, npc2: CGameObject, new_relation: number): void
  export function get_npc_sympathy(npc: CGameObject): number
  export function set_npc_sympathy(npc: CGameObject, new_sympathy: number): void
  export function set_squad_goodwill(squad_id: number, new_goodwill: number): void
  export function set_squad_goodwill_to_npc(npc: CGameObject, squad_id: number, new_goodwill: number): void
  export function set_squad_community_goodwill(squad_id: number, community: Community, new_goodwill: number): void
  export function set_level_faction_community(obj: CGameObject): void
  export function set_community_goodwill_for_faction(faction: Community): void
  export function is_valid(faction: Community): boolean
  /** @param relation a numeric string, or `"enemy"` / `"friend"` */
  export function check_all_squad_members(squad_name: string, relation: string | number): boolean
  /** @returns the squad's relationship string (`"enemy"`/`"friend"`/`"neutral"`), or `false` if the squad is missing */
  export function get_squad_goodwill_to_actor_by_id(squad_id: number): string | false
  export function get_squad_goodwill_to_actor(squad_name: string): string | false
  export function is_squad_enemy_to_actor(squad_name: string): boolean
  export function is_squad_friend_to_actor(squad_name: string): boolean
  export function is_squad_neutral_to_actor(squad_name: string): boolean
  /** @param relation a numeric string, or `"enemy"` / `"friend"` */
  export function set_gulag_relation_actor(smart_name: string, relation: string | number): void
  export function get_gulag_relation_actor(smart_name: string, relation: string | number): boolean
  export function get_squad_relation_to_actor_by_id(squad_id: number): 'enemy' | 'friends' | 'neutral'
  export function get_rank_relation(obj_1: CGameObject, obj_2: CGameObject): string
  export function get_reputation_relation(obj_1: CGameObject, obj_2: CGameObject): string
}
