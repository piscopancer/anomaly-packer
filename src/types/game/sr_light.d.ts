/** @noSelfInFile */

declare namespace sr_light {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, storage: AnyTable): void
  export function check_light(stalker: CGameObject): void
  export function clean_up(): void
  export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section, gulag_name: string): void
}

/** @customConstructor action_light */
declare class action_light {
  active: boolean // @generated field — refine type
  id: TODO // @generated field — refine type
  object: TODO // @generated field — refine type
  st: TODO // @generated field — refine type
  constructor(obj: CGameObject, storage: AnyTable)
  reset_scheme(): void
  update(delta: number): void
  check_stalker(stalker: CGameObject): boolean
}

declare namespace sr_light {
  /** Anomaly `class "action_light"` is also reachable on the `sr_light` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`sr_light.action_light.Method = ...`). */
  export const action_light: action_light
}
