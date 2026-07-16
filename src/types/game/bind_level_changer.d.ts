/** @noSelfInFile */

declare namespace bind_level_changer {
  export function bind(obj: CGameObject): void
}

/** @customConstructor lchanger_binder */
declare class lchanger_binder extends object_binder {
  st: TODO // @generated field — refine type
  constructor(obj: CGameObject)
  update(delta: number): void
  reload(section: Section): void
  reinit(): void
  net_spawn(se_abstract: CseAbstract): boolean
  net_destroy(): void
  net_save_relevant(): boolean
  save(package: net_packet): void
  load(reader: net_packet): void
}

declare namespace bind_level_changer {
  /** Anomaly `class "lchanger_binder"` is also reachable on the `bind_level_changer` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`bind_level_changer.lchanger_binder.Method = ...`). */
  export const lchanger_binder: lchanger_binder
}
