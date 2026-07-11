/** @noSelfInFile */

declare namespace bind_smart_cover {
  export const registered_smartcovers: TODO
  export function bind(obj: TODO): void
}

/** @customConstructor smart_cover_binder */
declare class smart_cover_binder extends object_binder {
  constructor(obj: TODO)
  net_spawn(se_abstract: TODO): boolean
  net_destroy(): void
  update(delta: TODO): void
}
