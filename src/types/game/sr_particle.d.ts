/** @noSelfInFile */

declare namespace sr_particle {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, storage: AnyTable): void
  export function set_scheme(obj: CGameObject, ini: system_ini, scheme: string, section: Section, gulag_name: string): void
}

/** @customConstructor action_particle */
declare class action_particle {
  first_played: boolean // @generated field — refine type
  last_update: TODO // @generated field — refine type
  object: TODO // @generated field — refine type
  particles: TODO // @generated field — refine type
  path: TODO // @generated field — refine type
  st: TODO // @generated field — refine type
  started: boolean // @generated field — refine type
  constructor(obj: CGameObject, storage: AnyTable)
  reset_scheme(): void
  update(delta: number): void
  is_end(): boolean
  update_mode_1(): void
  update_mode_2(): void
  deactivate(): void
}

declare namespace sr_particle {
  /** Anomaly `class "action_particle"` is also reachable on the `sr_particle` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`sr_particle.action_particle.Method = ...`). */
  export const action_particle: action_particle
}
