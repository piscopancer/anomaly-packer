/** @noSelfInFile */

declare namespace ph_minigun {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: string, storage: AnyTable): void
  export function angle_xz(npc: CGameObject, target_pos: vector, start_direction: vector): number
  export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: string, gulag_name: string): void
}

/** @customConstructor action_mgun */
declare class action_mgun {
  constructor(obj: CGameObject, storage: AnyTable)
  reset_scheme(loading: boolean): void
  set_shooting(shooting: boolean): void
  check_fire_time(): boolean
  save(): void
  rot_to_firedir(direction: vector): void
  rot_to_firepoint(pt: vector): void
  set_signal(sig: string): void
  fastcall(): boolean
  update(delta: number): void
  fast_update(): boolean
  destroy_car(): void
}
