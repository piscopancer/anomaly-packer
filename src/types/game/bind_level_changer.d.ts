/** @noSelfInFile */

declare namespace bind_level_changer {
  export function bind(obj: CGameObject): void
}

/** @customConstructor lchanger_binder */
declare class lchanger_binder extends object_binder {
  constructor(obj: CGameObject)
  update(delta: number): void
  reload(section: string): void
  reinit(): void
  net_spawn(se_abstract: CseAbstract): boolean
  net_destroy(): void
  net_save_relevant(): boolean
  save(package: net_packet): void
  load(reader: net_packet): void
}
