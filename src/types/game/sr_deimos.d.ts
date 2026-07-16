/** @noSelfInFile */

declare namespace sr_deimos {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, storage: AnyTable): void
  export function check_disable_bound(obj: CGameObject): boolean
  export function check_intensity_delta(obj: CGameObject): boolean
  export function check_lower_bound(obj: CGameObject): boolean
  export function check_upper_bound(obj: CGameObject): boolean
  export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section, gulag_name: string): void
}

/** @customConstructor CDeimos */
declare class CDeimos {
  cam_effector_time: TODO // @generated field — refine type
  object: TODO // @generated field — refine type
  phase: number // @generated field — refine type
  st: TODO // @generated field — refine type
  constructor(obj: CGameObject, storage: AnyTable)
  update(delta: number): void
}

declare namespace sr_deimos {
  /** Anomaly `class "CDeimos"` is also reachable on the `sr_deimos` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`sr_deimos.CDeimos.Method = ...`). */
  export const CDeimos: CDeimos
}
