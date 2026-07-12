/** @noSelfInFile */

declare namespace bind_crow {
  export const crow_counter: number
  export const crow_storage: AnyTable
  export function bind(obj: CGameObject): void
}

/** @customConstructor crow_binder */
declare class crow_binder extends object_binder {
  constructor(obj: CGameObject)
  update(delta: number): void
  use_callback(obj: CGameObject, who: CGameObject): void
  reload(section: string): void
  reinit(): void
  net_spawn(se_abstract: CseAbstract): boolean
  net_destroy(): void
  death_callback(victim: CGameObject, who: CGameObject): void
  net_save_relevant(): boolean
  save(stpk: net_packet): void
  load(reader: net_packet): void
}
