/** @noSelfInFile */

declare namespace gwr_worldweapon_binder {
  export function init_m98(obj: CGameObject): void
}

/** @customConstructor gwr_wpn_m98_binder */
declare class gwr_wpn_m98_binder extends object_binder {
  ammo: TODO // @generated field — refine type
  delta: number // @generated field — refine type
  efftime: TODO // @generated field — refine type
  constructor(obj: CGameObject)
  update(): void
}

declare namespace gwr_worldweapon_binder {
  /** Anomaly `class "gwr_wpn_m98_binder"` is also reachable on the `gwr_worldweapon_binder` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`gwr_worldweapon_binder.gwr_wpn_m98_binder.Method = ...`). */
  export const gwr_wpn_m98_binder: gwr_wpn_m98_binder
}
