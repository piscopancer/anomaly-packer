/** @noSelfInFile */

declare namespace bind_smart_terrain {
  export function bind(obj: CGameObject): void
}

/** @customConstructor smart_terrain_binder */
declare class smart_terrain_binder extends object_binder {
  constructor(obj: CGameObject)
  net_spawn(se_abstract: CseAbstract): boolean
  net_destroy(): void
  net_Relcase(obj: CGameObject): void
  update(delta: number): void
}
