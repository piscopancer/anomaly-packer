/** @noSelfInFile */

declare namespace ph_oscillate {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, storage: AnyTable): void
  export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section, gulag_name: string): void
}

/** @customConstructor action_oscillator */
declare class action_oscillator {
  coefficient: TODO // @generated field — refine type
  dir: TODO // @generated field — refine type
  joint: TODO // @generated field — refine type
  object: TODO // @generated field — refine type
  pause: boolean // @generated field — refine type
  st: TODO // @generated field — refine type
  time: TODO // @generated field — refine type
  constructor(obj: CGameObject, storage: AnyTable)
  reset_scheme(): void
  update(delta: number): void
}

declare namespace ph_oscillate {
  /** Anomaly `class "action_oscillator"` is also reachable on the `ph_oscillate` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`ph_oscillate.action_oscillator.Method = ...`). */
  export const action_oscillator: action_oscillator
}
