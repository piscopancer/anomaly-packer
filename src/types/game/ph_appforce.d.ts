/** @noSelfInFile */

declare namespace ph_appforce {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, storage: AnyTable): void
  export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section, gulag_name: string): void
}

/** @customConstructor ph_force */
declare class ph_force {
  object: TODO // @generated field — refine type
  process: boolean // @generated field — refine type
  st: TODO // @generated field — refine type
  time: TODO // @generated field — refine type
  constructor(obj: CGameObject, storage: AnyTable)
  reset_scheme(): void
  update(delta: number): void
}

declare namespace ph_appforce {
  /** Anomaly `class "ph_force"` is also reachable on the `ph_appforce` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`ph_appforce.ph_force.Method = ...`). */
  export const ph_force: ph_force
}
