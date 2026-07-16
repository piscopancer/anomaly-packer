/** @noSelfInFile */

declare namespace bind_faction {
  export function bind(obj: CGameObject): void
}

/** @customConstructor faction_binder */
declare class faction_binder extends object_binder {
  faction: TODO // @generated field — refine type
  constructor(obj: CGameObject)
  net_spawn(se_abstract: CseAbstract): boolean
  update(delta: number): void
}

declare namespace bind_faction {
  /** Anomaly `class "faction_binder"` is also reachable on the `bind_faction` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`bind_faction.faction_binder.Method = ...`). */
  export const faction_binder: faction_binder
}
