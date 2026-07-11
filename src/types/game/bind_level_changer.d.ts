/** @noSelfInFile */

declare namespace bind_level_changer {
  export function bind(obj: TODO): void
}

/** @customConstructor lchanger_binder */
declare class lchanger_binder extends object_binder {
  constructor(obj: TODO)
  update(delta: TODO): void
  reload(section: TODO): void
  reinit(): void
  net_spawn(se_abstract: TODO): boolean
  net_destroy(): void
  net_save_relevant(): boolean
  save(package: TODO): void
  load(reader: TODO): void
}
