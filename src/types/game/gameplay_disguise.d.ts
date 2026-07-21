/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace gameplay_disguise {
    export function anybody_remember(): boolean
    export function anybody_see(t: AnyTable): boolean
    export function calculate_npc_suspicion(npc: CGameObject, id: number, t: AnyTable, awareness: number): number
    export function clear_patch(id: number): void
    export function debug_disguise(npc: CGameObject, m: AnyTable, t: AnyTable): void
    export function debug_memory(): void
    export function delet_memory(): void
    export function examinate_active_item(): number
    export function examinate_backpack(): number
    export function examinate_distance(pos: vector): number
    export function examinate_helmet(): number
    export function examinate_inventory(): number
    export function examinate_outfit(): number
    export function examinate_speed(): number
    export function examinate_stay_time(first_seen: number, last_seen: number): number
    export function examinate_weapon(): number
    export function expose_actor(npc: CGameObject, comm: Community, is_enem?: boolean): void
    export function get_default_comm(): string
    export function get_npc_awareness(sec: Section.Item): number
    export function get_outfit_comm(section: Section.Item): string
    /** @returns the patch section (string) or the patch item object, or `nil` */
    export function get_patch(faction: Community, only_sec?: boolean): string | CGameObject | undefined
    export function hud_update(): void
    export function hud_val_to_str(val: number): string
    export function increment_disguise_statistic(curr_time: number): void
    export function inside_disguise_zone(): boolean
    export function is_actor_disguised(): boolean
    export function menu_patch(obj: CGameObject): string
    export function menu_patch_action(obj: CGameObject): void
    export function moniter_highest_suspicion(tg: AnyTable): void
    export function moniter_memories(tg: AnyTable): void
    export function on_game_start(): void
    export function set_comm(comm: Community): void
    export function set_msg(str: string, comm?: Community, comm2?: Community): void
    export function time_to_str(tim: number): string
    export function toggle_feature(val: boolean): void
    export function try_to_disguise(new_comm: string, naked?: boolean, no_patch?: boolean): void
    export function update_default(comm: Community, now?: boolean): void
    export function update_feature_state(old_state: boolean, new_state: boolean): void
    export function update_settings(): void
  }
}
