/** @noSelfInFile */

declare namespace ph_car {
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO): void
  export function angle_xz(npc: TODO, target_pos: TODO): TODO
  export function get_katet(npc: TODO, target_pos: TODO): TODO
  export function printf(): void
  export function set_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, gulag_name: TODO): void
}

/** @customConstructor action_car */
declare class action_car {
  constructor(obj: TODO, storage: TODO)
  reset_scheme(loading: TODO): void
  save(): void
  get_nearest_walkpoint(): TODO
  get_next_walkpoint(): TODO
  at_target_walkpoint(): boolean
  go_to_walkpoint(pt: TODO): void
  start_car(): void
  stop_car(): void
  walk_arrival_callback(index: TODO): TODO
  change_fire_pts(): TODO
  get_next_firepoint(): TODO
  rot_to_firepoint(pt: TODO): void
  set_shooting(shooting: TODO): void
  fire_arrival_callback(cur_index: TODO): TODO
  set_signal(sig: TODO): void
  fastcall(): boolean
  update(delta: TODO): void
  destroy_car(): void
  fast_update(): boolean
  car_explode(): void
  net_destroy(): void
}

/** @customConstructor static_pp */
declare class static_pp {
  constructor(x: TODO, y: TODO, z: TODO)
  count(): TODO
  point(): TODO
}
