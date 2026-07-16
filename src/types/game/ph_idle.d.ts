/** @noSelfInFile */

declare namespace ph_idle {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, storage: AnyTable): void
  export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section, gulag_name: string): void
}

/** @customConstructor action_idle */
declare class action_idle {
  object: TODO // @generated field — refine type
  st: TODO // @generated field — refine type
  constructor(obj: CGameObject, storage: AnyTable)
  reset_scheme(): void
  update(delta: number): void
  hit_callback(obj: CGameObject, amount: number, local_direction: vector, who: CGameObject, bone_index: number): void
  use_callback(obj: CGameObject, actor: CGameObject): boolean
  deactivate(): void
}

declare namespace ph_idle {
  /** Anomaly `class "action_idle"` is also reachable on the `ph_idle` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`ph_idle.action_idle.Method = ...`). */
  export const action_idle: action_idle
}
