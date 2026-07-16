/** @noSelfInFile */

declare namespace sr_no_weapon {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, storage: AnyTable): void
  export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section, gulag_name: string): void
}

/** @customConstructor action_no_weapon */
declare class action_no_weapon {
  inited_time: TODO // @generated field — refine type
  object: TODO // @generated field — refine type
  st: TODO // @generated field — refine type
  state: TODO // @generated field — refine type
  constructor(obj: CGameObject, storage: AnyTable)
  reset_scheme(): void
  update(delta: number): void
  switch_state(actor: CGameObject): void
  zone_enter(): void
  zone_leave(): void
}

declare namespace sr_no_weapon {
  /** Anomaly `class "action_no_weapon"` is also reachable on the `sr_no_weapon` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`sr_no_weapon.action_no_weapon.Method = ...`). */
  export const action_no_weapon: action_no_weapon
}
