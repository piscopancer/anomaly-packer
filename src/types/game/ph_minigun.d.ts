// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace ph_minigun {
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO): TODO
  export function angle_xz(npc: TODO, target_pos: TODO, start_direction: TODO): TODO
  export function set_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, gulag_name: TODO): TODO
}

/** @customConstructor action_mgun */
declare class action_mgun {
  constructor(obj: TODO, storage: TODO)
  reset_scheme(loading: TODO): TODO
  set_shooting(shooting: TODO): TODO
  check_fire_time(): TODO
  save(): TODO
  rot_to_firedir(direction: TODO): TODO
  rot_to_firepoint(pt: TODO): TODO
  set_signal(sig: TODO): TODO
  fastcall(): TODO
  update(delta: TODO): TODO
  fast_update(): TODO
  destroy_car(): TODO
}
