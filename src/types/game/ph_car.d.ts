// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace ph_car {
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO): TODO
  export function angle_xz(npc: TODO, target_pos: TODO): TODO
  export function get_katet(npc: TODO, target_pos: TODO): TODO
  export function printf(): TODO
  export function set_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, gulag_name: TODO): TODO
}

/** @customConstructor action_car */
declare class action_car {
  constructor(obj: TODO, storage: TODO)
  reset_scheme(loading: TODO): TODO
  save(): TODO
  get_nearest_walkpoint(): TODO
  get_next_walkpoint(): TODO
  at_target_walkpoint(): TODO
  go_to_walkpoint(pt: TODO): TODO
  start_car(): TODO
  stop_car(): TODO
  walk_arrival_callback(index: TODO): TODO
  change_fire_pts(): TODO
  get_next_firepoint(): TODO
  rot_to_firepoint(pt: TODO): TODO
  set_shooting(shooting: TODO): TODO
  fire_arrival_callback(cur_index: TODO): TODO
  set_signal(sig: TODO): TODO
  fastcall(): TODO
  update(delta: TODO): TODO
  destroy_car(): TODO
  fast_update(): TODO
  car_explode(): TODO
  net_destroy(): TODO
}

/** @customConstructor static_pp */
declare class static_pp {
  constructor(x: TODO, y: TODO, z: TODO)
  count(): TODO
  point(): TODO
}
