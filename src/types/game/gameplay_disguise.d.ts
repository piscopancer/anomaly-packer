/** @noSelfInFile */

declare namespace gameplay_disguise {
  export function anybody_remember(): boolean
  export function anybody_see(t: TODO): boolean
  export function calculate_npc_suspicion(npc: CGameObject, id: TODO, t: TODO, awareness: TODO): TODO
  export function clear_patch(id: TODO): void
  export function debug_disguise(npc: TODO, m: TODO, t: TODO): void
  export function debug_memory(): void
  export function delet_memory(): void
  export function examinate_active_item(): TODO
  export function examinate_backpack(): TODO
  export function examinate_distance(pos: TODO): TODO
  export function examinate_helmet(): TODO
  export function examinate_inventory(): TODO
  export function examinate_outfit(): TODO
  export function examinate_speed(): TODO
  export function examinate_stay_time(first_seen: TODO, last_seen: TODO): TODO
  export function examinate_weapon(): TODO
  export function expose_actor(npc: CGameObject, comm: TODO, is_enem: TODO): void
  export function get_default_comm(): TODO
  export function get_npc_awareness(sec: TODO): TODO
  export function get_outfit_comm(section: TODO): TODO
  export function get_patch(faction: TODO, only_sec: TODO): TODO
  export function hud_update(): void
  export function hud_val_to_str(val: TODO): TODO
  export function increment_disguise_statistic(curr_time: TODO): void
  export function inside_disguise_zone(): boolean
  export function is_actor_disguised(): TODO
  export function menu_patch(obj: TODO): TODO
  export function menu_patch_action(obj: TODO): void
  export function moniter_highest_suspicion(tg: TODO): void
  export function moniter_memories(tg: TODO): void
  export function on_game_start(): void
  export function set_comm(comm: TODO): void
  export function set_msg(str: TODO, comm: TODO, comm2: TODO): void
  export function time_to_str(tim: TODO): TODO
  export function toggle_feature(val: TODO): void
  export function try_to_disguise(new_comm: TODO, naked: TODO, no_patch: TODO): void
  export function update_default(comm: TODO, now: TODO): void
  export function update_feature_state(old_state: TODO, new_state: TODO): void
  export function update_settings(): void
}
