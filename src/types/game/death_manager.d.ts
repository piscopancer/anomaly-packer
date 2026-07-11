/** @noSelfInFile */

declare namespace death_manager {
  export const item_by_story_id: TODO
  export const items_by_npc: TODO
  export function clear_items_by_npc(): void
  export function create_item(npc: TODO, section: string, number: number, rnd: TODO, to_save: TODO): void
  export function create_item_list(npc: TODO, npc_comm: TODO, npc_rank: TODO, is_private: TODO, to_save: TODO): void
  export function create_release_item(npc: TODO): void
  export function decide_items_to_keep(npc: CGameObject, npc_id: TODO, npc_name: TODO): void
  export function get_comb_coeff(rank: TODO, comm: TODO): number
  export function get_condition_by_rank(rank: TODO, coef: TODO): number
  export function get_items_by_npc(npc_id: TODO): TODO
  export function get_outfit_by_npc_visual(visual: TODO, clean: TODO): TODO
  export function get_outfit_by_visual(visual: TODO): TODO
  export function init_drop_settings(): void
  export function keep_item(npc: TODO, item: TODO): void
  export function on_game_start(): void
  export function set_items_by_npc(npc_id: TODO, value: TODO): void
  export function set_weapon_drop_condition(npc: CGameObject, itm: TODO): void
  export function SetDiffModifications(): void
  export function simulate_death_drops(num: number): void
  export function spawn_cosmetics(npc: TODO, npc_id: TODO, npc_comm: TODO, npc_rank: TODO, visual: TODO, rand_condition: TODO): void
  export function spawn_with_condition(npc: TODO, section: TODO, condition: TODO): number
  export function try_spawn_ammo(npc: CGameObject): void
  export function validate_drop(section: TODO): boolean
}
