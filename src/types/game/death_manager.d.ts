/** @noSelfInFile */

declare namespace death_manager {
  export const item_by_story_id: AnyTable
  /** [npc_id] = trade table, false = no trade, nil = not asked yet. */
  export const items_by_npc: AnyTable
  export function clear_items_by_npc(): void
  export function create_item(npc: CGameObject, section: string, number: number, rnd: boolean, to_save: boolean): void
  export function create_item_list(npc: CGameObject, npc_comm: string, npc_rank: number, is_private: boolean, to_save: boolean): void
  export function create_release_item(npc: CGameObject): void
  export function decide_items_to_keep(npc: CGameObject, npc_id: number, npc_name: string): void
  export function get_comb_coeff(rank: number, comm: string): number
  export function get_condition_by_rank(rank: number, coef: number): number
  export function get_items_by_npc(npc_id: number): any
  export function get_outfit_by_npc_visual(visual: string, clean?: boolean): string[]
  export function get_outfit_by_visual(visual: string): string[]
  export function init_drop_settings(): void
  export function keep_item(npc: CGameObject, item: CGameObject): void
  export function on_game_start(): void
  export function set_items_by_npc(npc_id: number, value: any): void
  export function set_weapon_drop_condition(npc: CGameObject, itm: CGameObject): void
  export function SetDiffModifications(): void
  export function simulate_death_drops(num: number): void
  export function spawn_cosmetics(npc: CGameObject, npc_id: number, npc_comm: string, npc_rank: number, visual: string, rand_condition: boolean): void
  export function spawn_with_condition(npc: CGameObject, section: string, condition: number): number
  export function try_spawn_ammo(npc: CGameObject): void
  export function validate_drop(section: string): boolean
}
