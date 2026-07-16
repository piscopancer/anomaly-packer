/** @noSelfInFile */

declare namespace bind_smart_terrain {
  export function bind(obj: CGameObject): void
}

/** @customConstructor smart_terrain_binder */
declare class smart_terrain_binder extends object_binder {
  se_smart_terrain: TODO // @generated field — refine type
  constructor(obj: CGameObject)
  net_spawn(se_abstract: CseAbstract): boolean
  net_destroy(): void
  net_Relcase(obj: CGameObject): void
  update(delta: number): void
}

declare namespace bind_smart_terrain {
  /** Anomaly `class "smart_terrain_binder"` is also reachable on the `bind_smart_terrain` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`bind_smart_terrain.smart_terrain_binder.Method = ...`). */
  export const smart_terrain_binder: smart_terrain_binder
}
