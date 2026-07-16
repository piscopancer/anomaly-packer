/** @noSelfInFile */

declare namespace mob_jump {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, storage: AnyTable): void
  export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section, gulag_name: string): void
}

/** @customConstructor mob_jump */
declare class mob_jump {
  jump_path: TODO // @generated field — refine type
  object: TODO // @generated field — refine type
  point: TODO // @generated field — refine type
  st: TODO // @generated field — refine type
  state_current: TODO // @generated field — refine type
  constructor(obj: CGameObject, storage: AnyTable)
  reset_scheme(): void
  update(delta: number): void
}

declare namespace mob_jump {
  /** Anomaly `class "mob_jump"` is also reachable on the `mob_jump` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`mob_jump.mob_jump.Method = ...`). */
  export const mob_jump: mob_jump
}
