/** @noSelfInFile */

declare namespace bind_faction {
  export function bind(obj: CGameObject): void
}

/** @customConstructor faction_binder */
declare class faction_binder extends object_binder {
  constructor(obj: CGameObject)
  net_spawn(se_abstract: CseAbstract): boolean
  update(delta: number): void
}
