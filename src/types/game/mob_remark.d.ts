/** @noSelfInFile */

declare namespace mob_remark {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, storage: AnyTable): void
  export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section, gulag_name: string): void
}

/** @customConstructor mob_remark */
declare class mob_remark {
  action_end_signalled: boolean // @generated field — refine type
  object: TODO // @generated field — refine type
  st: TODO // @generated field — refine type
  tip_sent: boolean // @generated field — refine type
  constructor(obj: CGameObject, storage: AnyTable)
  reset_scheme(): void
  update(delta: number): void
}

declare namespace mob_remark {
  /** Anomaly `class "mob_remark"` is also reachable on the `mob_remark` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`mob_remark.mob_remark.Method = ...`). */
  export const mob_remark: mob_remark
}
