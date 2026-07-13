/** @noSelfInFile */

declare namespace sim_offline_combat {
  export const ignore_list: AnyTable
  export const ocs_power: AnyTable
  export const opponents: AnyTable
  export const squads_by_level: AnyTable
  export const story_id_communities: AnyTable
  export const task_squads: AnyTable
  export function calculate_npc_power(se_obj: CseAbstract, community: Community): number
  export function calculate_squad_power(squad: CseAlifeOnlineOfflineGroup, community: Community, raw: boolean): number
  export function distance_to_xz_sqr(a: vector, b: vector): number
  export function get_ignore_list(): AnyTable
  export function get_num_squads_on_level(lvl: LevelName, faction: Community, mode: boolean): number
  export function get_random_npc(squad: CseAlifeOnlineOfflineGroup): CseAbstract | null
  export function init_settings(): void
  export function on_game_start(): void
  export function remove_squad_info(squad_2: CseAlifeOnlineOfflineGroup, id_2: number, id_1: number, lid: number): void
  export function set_battle_outcome(victory: boolean, id_1: number, id_2: number, squad_1: CseAlifeOnlineOfflineGroup, squad_2: CseAlifeOnlineOfflineGroup, community_1: Community, community_2: Community, se_attacker: CseAbstract, se_victim: CseAbstract, damage: number): void
  export function simulate_battle(id_1: number, id_2: number, squad_1: CseAlifeOnlineOfflineGroup, squad_2: CseAlifeOnlineOfflineGroup, community_1: Community, community_2: Community, lid: number): void
  export function validate_enemy(sim: any, lid: number, squad_1: CseAlifeOnlineOfflineGroup, id_1: number, id_2: number, community_1: Community): boolean
}
