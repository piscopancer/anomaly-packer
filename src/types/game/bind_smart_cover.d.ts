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
