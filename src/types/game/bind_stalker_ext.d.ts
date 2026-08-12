/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace bind_stalker_ext {
    export const invulnerable_time: number
    export function actor_item_to_belt(binder: object_binder, obj: CGameObject): void
    export function actor_item_to_ruck(binder: object_binder, obj: CGameObject): void
    export function actor_item_to_slot(binder: object_binder, obj: CGameObject): void
    export function actor_on_attach_vehicle(binder: object_binder, obj: CGameObject): void
    export function actor_on_before_death(binder: object_binder, whoID: number): void
    export function actor_on_detach_vehicle(binder: object_binder, obj: CGameObject): void
    export function actor_on_first_update(binder: object_binder, delta: number): void
    export function actor_on_foot_step(binder: object_binder, obj: CGameObject, power: number, b_play: boolean, b_on_ground: boolean, b_hud_view: boolean): void
    export function actor_on_hit_callback(binder: object_binder, obj: CGameObject, amount: number, local_direction: vector, who: CGameObject, bone_index: number): void
    export function actor_on_hud_animation_end(binder: object_binder, item: CGameObject, section: Section.Item, motion: string, state: number, slot: number): void
    export function actor_on_info_callback(binder: object_binder, obj: CGameObject, info_id: number): void
    export function actor_on_init(binder: object_binder): void
    export function actor_on_item_before_pickup(item: CGameObject): boolean
    export function actor_on_item_drop(binder: object_binder, item: CGameObject): void
    export function actor_on_item_take(binder: object_binder, item: CGameObject): void
    export function actor_on_item_take_from_box(binder: object_binder, box: CGameObject, item: CGameObject): void
    export function actor_on_item_use(binder: object_binder, item: CGameObject): void
    export function actor_on_load(binder: object_binder, packet: net_packet): void
    export function actor_on_net_destroy(binder: object_binder): void
    export function actor_on_net_spawn(): void
    export function actor_on_reinit(binder: object_binder): void
    export function actor_on_save(binder: object_binder, packet: net_packet): void
    /** The actor's `callback.task_state` handler: sends the task news and forwards to `task_manager.task_callback`. `_state` is one of the `task` enum's states. */
    export function actor_on_task_callback(binder: object_binder, _task: CGameTask, _state: number): void
    export function actor_on_trade(binder: object_binder, item: CGameObject, sell_bye: boolean, money: number): void
    export function actor_on_update(binder: object_binder, delta: number): void
    export function actor_on_use_vehicle(binder: object_binder, obj: CGameObject): void
    export function actor_on_weapon_fired(binder: object_binder, obj: CGameObject, wpn: CGameObject, ammo_elapsed: number, grenade_elapsed: number, ammo_type: number, grenade_type: number): void
    export function actor_on_weapon_jammed(binder: object_binder, actor: CGameObject, wpn: CGameObject): void
    export function actor_on_weapon_lowered(binder: object_binder, wpn: CGameObject): void
    export function actor_on_weapon_magazine_empty(binder: object_binder, wpn: CGameObject, ammo_total: number): void
    export function actor_on_weapon_no_ammo(binder: object_binder, wpn: CGameObject): void
    export function actor_on_weapon_raised(binder: object_binder, wpn: CGameObject): void
    export function actor_on_weapon_reload(binder: object_binder, wpn: CGameObject, ammo_total: number): void
    export function actor_on_weapon_zoom_in(binder: object_binder, obj: CGameObject, wpn: CGameObject): void
    export function actor_on_weapon_zoom_out(binder: object_binder, obj: CGameObject, wpn: CGameObject): void
    export function anabiotic_callback(): void
    export function anabiotic_callback2(): void
    export function on_key_hold(binder: object_binder, key: number): void
    export function on_key_press(binder: object_binder, key: number): void
    export function on_key_release(binder: object_binder, key: number): void
  }
}
