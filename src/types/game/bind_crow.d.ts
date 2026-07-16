/** @noSelfInFile */

declare namespace bind_crow {
  export const crow_counter: number
  export const crow_storage: AnyTable
  export function bind(obj: CGameObject): void
}

/** @customConstructor crow_binder */
declare class crow_binder extends object_binder {
  body_timer: TODO // @generated field — refine type
  st: TODO // @generated field — refine type
  constructor(obj: CGameObject)
  update(delta: number): void
  use_callback(obj: CGameObject, who: CGameObject): void
  reload(section: Section): void
  reinit(): void
  net_spawn(se_abstract: CseAbstract): boolean
  net_destroy(): void
  death_callback(victim: CGameObject, who: CGameObject): void
  net_save_relevant(): boolean
  save(stpk: net_packet): void
  load(reader: net_packet): void
}

declare namespace bind_crow {
  /** Anomaly `class "crow_binder"` is also reachable on the `bind_crow` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`bind_crow.crow_binder.Method = ...`). */
  export const crow_binder: crow_binder
}
