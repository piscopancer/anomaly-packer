/** @noSelfInFile */

declare namespace ph_button {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, storage: AnyTable): void
  export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section, gulag_name: string): void
}

/** @customConstructor ph_button */
declare class ph_button {
  last_hit_tm: TODO // @generated field — refine type
  object: TODO // @generated field — refine type
  st: TODO // @generated field — refine type
  constructor(obj: CGameObject, storage: AnyTable)
  reset_scheme(): void
  update(delta: number): void
  try_switch(): boolean
  hit_callback(obj: CGameObject, amount: number, local_direction: vector, who: CGameObject, bone_index: number): void
  use_callback(victim: CGameObject, who: CGameObject): void
}

declare namespace ph_button {
  /** Anomaly `class "ph_button"` is also reachable on the `ph_button` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`ph_button.ph_button.Method = ...`). */
  export const ph_button: ph_button
}
