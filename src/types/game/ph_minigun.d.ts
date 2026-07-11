/** @noSelfInFile */

declare namespace ph_minigun {
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO): void
  export function angle_xz(npc: TODO, target_pos: TODO, start_direction: TODO): TODO
  export function set_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, gulag_name: TODO): void
}

/** @customConstructor action_mgun */
declare class action_mgun {
  constructor(obj: TODO, storage: TODO)
  reset_scheme(loading: TODO): void
  set_shooting(shooting: TODO): void
  check_fire_time(): TODO
  save(): void
  rot_to_firedir(direction: TODO): void
  rot_to_firepoint(pt: TODO): void
  set_signal(sig: TODO): void
  fastcall(): boolean
  update(delta: TODO): void
  fast_update(): boolean
  destroy_car(): void
}
