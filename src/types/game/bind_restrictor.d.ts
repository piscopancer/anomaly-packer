/** @noSelfInFile */

declare namespace bind_restrictor {
  export function bind(obj: CGameObject): void
}

/** @customConstructor restrictor_binder */
declare class restrictor_binder extends object_binder {
  initialized: boolean // @generated field — refine type
  loaded: boolean // @generated field — refine type
  st: TODO // @generated field — refine type
  constructor(obj: CGameObject, char_ini: system_ini)
  reload(section: Section): void
  reinit(): void
  net_spawn(se_abstract: CseAbstract): boolean
  net_destroy(): void
  update(delta: number): void
  net_save_relevant(): boolean
  save(packet: net_packet): void
  load(reader: net_packet): void
  on_enter(zone: CGameObject, obj: CGameObject): void
  on_exit(zone: CGameObject, obj: CGameObject): void
}

declare namespace bind_restrictor {
  /** Anomaly `class "restrictor_binder"` is also reachable on the `bind_restrictor` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`bind_restrictor.restrictor_binder.Method = ...`). */
  export const restrictor_binder: restrictor_binder
}
