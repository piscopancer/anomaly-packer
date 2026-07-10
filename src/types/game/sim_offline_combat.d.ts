// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace sim_offline_combat {
  export const ignore_list: TODO
  export const ocs_power: TODO
  export const opponents: TODO
  export const squads_by_level: TODO
  export const story_id_communities: TODO
  export const task_squads: TODO
  export function calculate_npc_power(se_obj: TODO, community: TODO): TODO
  export function calculate_squad_power(squad: TODO, community: TODO, raw: TODO): TODO
  export function distance_to_xz_sqr(a: TODO, b: TODO): TODO
  export function get_ignore_list(): TODO
  export function get_num_squads_on_level(lvl: TODO, faction: TODO, mode: TODO): TODO
  export function get_random_npc(squad: TODO): TODO
  export function init_settings(): TODO
  export function on_game_start(): TODO
  export function remove_squad_info(squad_2: TODO, id_2: TODO, id_1: TODO, lid: TODO): TODO
  export function set_battle_outcome(victory: TODO, id_1: TODO, id_2: TODO, squad_1: TODO, squad_2: TODO, community_1: TODO, community_2: TODO, se_attacker: TODO, se_victim: TODO, damage: TODO): TODO
  export function simulate_battle(id_1: TODO, id_2: TODO, squad_1: TODO, squad_2: TODO, community_1: TODO, community_2: TODO, lid: TODO): TODO
  export function validate_enemy(sim: TODO, lid: TODO, squad_1: TODO, id_1: TODO, id_2: TODO, community_1: TODO): TODO
}
