/** @noSelfInFile */

declare namespace bind_stalker_ext {
  export const invulnerable_time: TODO
  export function actor_item_to_belt(binder: TODO, obj: TODO): void
  export function actor_item_to_ruck(binder: TODO, obj: TODO): void
  export function actor_item_to_slot(binder: TODO, obj: TODO): void
  export function actor_on_attach_vehicle(binder: TODO, obj: TODO): void
  export function actor_on_before_death(binder: TODO, whoID: TODO): void
  export function actor_on_detach_vehicle(binder: TODO, obj: TODO): void
  export function actor_on_first_update(binder: TODO, delta: TODO): void
  export function actor_on_foot_step(binder: TODO, obj: TODO, power: TODO, b_play: TODO, b_on_ground: TODO, b_hud_view: TODO): void
  export function actor_on_hit_callback(binder: TODO, obj: TODO, amount: TODO, local_direction: TODO, who: TODO, bone_index: TODO): void
  export function actor_on_hud_animation_end(binder: TODO, item: TODO, section: TODO, motion: TODO, state: TODO, slot: TODO): void
  export function actor_on_info_callback(binder: TODO, obj: TODO, info_id: TODO): void
  export function actor_on_init(binder: TODO): void
  export function actor_on_item_before_pickup(item: TODO): boolean
  export function actor_on_item_drop(binder: TODO, item: TODO): void
  export function actor_on_item_take(binder: TODO, item: TODO): void
  export function actor_on_item_take_from_box(binder: TODO, box: TODO, item: TODO): void
  export function actor_on_item_use(binder: TODO, item: TODO): void
  export function actor_on_load(binder: TODO, packet: TODO): void
  export function actor_on_net_destroy(binder: TODO): void
  export function actor_on_net_spawn(): void
  export function actor_on_reinit(binder: TODO): void
  export function actor_on_save(binder: TODO, packet: TODO): void
  export function actor_on_task_callback(binder: TODO, _task: TODO, _state: TODO): void
  export function actor_on_trade(binder: TODO, item: TODO, sell_bye: boolean, money: TODO): void
  export function actor_on_update(binder: TODO, delta: TODO): void
  export function actor_on_use_vehicle(binder: TODO, obj: TODO): void
  export function actor_on_weapon_fired(binder: TODO, obj: TODO, wpn: TODO, ammo_elapsed: TODO, grenade_elapsed: TODO, ammo_type: TODO, grenade_type: TODO): void
  export function actor_on_weapon_jammed(binder: TODO, actor: TODO, wpn: TODO): void
  export function actor_on_weapon_lowered(binder: TODO, wpn: TODO): void
  export function actor_on_weapon_magazine_empty(binder: TODO, wpn: TODO, ammo_total: TODO): void
  export function actor_on_weapon_no_ammo(binder: TODO, wpn: TODO): void
  export function actor_on_weapon_raised(binder: TODO, wpn: TODO): void
  export function actor_on_weapon_reload(binder: TODO, wpn: TODO, ammo_total: TODO): void
  export function actor_on_weapon_zoom_in(binder: TODO, obj: TODO, wpn: TODO): void
  export function actor_on_weapon_zoom_out(binder: TODO, obj: TODO, wpn: TODO): void
  export function anabiotic_callback(): void
  export function anabiotic_callback2(): void
  export function on_key_hold(binder: TODO, key: TODO): void
  export function on_key_press(binder: TODO, key: TODO): void
  export function on_key_release(binder: TODO, key: TODO): void
}
