/** @noSelfInFile */

declare namespace bind_smart_cover {
  export const registered_smartcovers: AnyTable
  export function bind(obj: CGameObject): void
}

/** @customConstructor smart_cover_binder */
declare class smart_cover_binder extends object_binder {
  constructor(obj: CGameObject)
  net_spawn(se_abstract: CseAbstract): boolean
  net_destroy(): void
  update(delta: number): void
}

declare namespace bind_smart_cover {
  /** Anomaly `class "smart_cover_binder"` is also reachable on the `bind_smart_cover` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`bind_smart_cover.smart_cover_binder.Method = ...`). */
  export const smart_cover_binder: smart_cover_binder
}
