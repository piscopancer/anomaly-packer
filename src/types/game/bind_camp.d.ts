/** @noSelfInFile */

declare namespace bind_camp {
  export const camps: AnyTable
  export function bind(obj: CGameObject): void
}

/** @customConstructor camp_binder */
declare class camp_binder extends object_binder {
  constructor(obj: CGameObject, char_ini: system_ini)
  reload(section: Section): void
  reinit(): void
  net_spawn(se_abstract: CseAbstract): boolean
  net_destroy(): void
  update(delta: number): void
  net_save_relevant(): boolean
  save(packet: net_packet): void
  load(reader: net_packet): void
}
