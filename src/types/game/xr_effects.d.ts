/** @noSelfInFile */

declare namespace xr_effects {
  export function give_actor(actor: CGameObject, npc: CGameObject, ...sections: string[]): void
  export function start_surge(actor: CGameObject, npc: CGameObject): void
  export function stop_surge(actor: CGameObject, npc: CGameObject): void
  export function set_speaker_as_enemy(actor: CGameObject, npc: CGameObject): void
  export function give_task(actor: CGameObject, npc: CGameObject, task_id: string): void
  export function set_active_task(actor: CGameObject, npc: CGameObject, task: CGameTask): void
  export function clear_smart_terrain(actor: CGameObject, npc: CGameObject, smart_name: string): void
  export function heal_squad(actor: CGameObject, npc: CGameObject, squad_story_id: string): void
  export function kill_squad(actor: CGameObject, npc: CGameObject, squad_story_id: string): void
  export function remove_squad(actor: CGameObject, npc: CGameObject, squad_story_id: string): void
  export function create_squad(actor: CGameObject, npc: CGameObject, squad_id: number, smart_name: string): void
  export function create_squad_member(actor: CGameObject, npc: CGameObject, member_section: string, squad_story_id: string, spawn_point?: string): void
  export function reward_random_money(actor: CGameObject, npc: CGameObject, min: number | string, max: number | string): void
  export function reward_random_item(actor: CGameObject, npc: CGameObject, ...sections: Item[]): void
  export function reward_item(actor: CGameObject, npc: CGameObject, section: Item): void
  export function reward_item_cost_mult_and_remove(
    actor: CGameObject,
    npc: CGameObject,
    section: Item,
    cost_mult?: string | number,
    remove_items?: number | string
  ): void
  export function remove_item(actor: CGameObject, npc: CGameObject, section: Item, count: number | string): void
  export function spawn_item_to_npc(actor: CGameObject, npc: CGameObject, section: Item): void
  export function launch_signal_rocket(actor: CGameObject, npc: CGameObject, rocket_name: string): void
  export function enable_anomaly(actor: CGameObject, npc: CGameObject, anomaly_story_id: string | string): void
  export function disable_anomaly(actor: CGameObject, npc: CGameObject, anomaly_story_id: string | string): void
  export function make_actor_visible_to_npc(actor: CGameObject, npc: CGameObject): void
  export function show_csky_squads_on_map(actor: CGameObject, npc: CGameObject): void
}
