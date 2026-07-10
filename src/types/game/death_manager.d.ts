// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace death_manager {
  export const item_by_story_id: TODO
  export const items_by_npc: TODO
  export function clear_items_by_npc(): TODO
  export function create_item(npc: TODO, section: TODO, number: TODO, rnd: TODO, to_save: TODO): TODO
  export function create_item_list(npc: TODO, npc_comm: TODO, npc_rank: TODO, is_private: TODO, to_save: TODO): TODO
  export function create_release_item(npc: TODO): TODO
  export function decide_items_to_keep(npc: TODO, npc_id: TODO, npc_name: TODO): TODO
  export function get_comb_coeff(rank: TODO, comm: TODO): TODO
  export function get_condition_by_rank(rank: TODO, coef: TODO): TODO
  export function get_items_by_npc(npc_id: TODO): TODO
  export function get_outfit_by_npc_visual(visual: TODO, clean: TODO): TODO
  export function get_outfit_by_visual(visual: TODO): TODO
  export function init_drop_settings(): TODO
  export function keep_item(npc: TODO, item: TODO): TODO
  export function on_game_start(): TODO
  export function set_items_by_npc(npc_id: TODO, value: TODO): TODO
  export function set_weapon_drop_condition(npc: TODO, itm: TODO): TODO
  export function SetDiffModifications(): TODO
  export function simulate_death_drops(num: TODO): TODO
  export function spawn_cosmetics(npc: TODO, npc_id: TODO, npc_comm: TODO, npc_rank: TODO, visual: TODO, rand_condition: TODO): TODO
  export function spawn_with_condition(npc: TODO, section: TODO, condition: TODO): TODO
  export function try_spawn_ammo(npc: TODO): TODO
  export function validate_drop(section: TODO): TODO
}
