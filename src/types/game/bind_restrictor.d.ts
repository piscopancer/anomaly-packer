/** @noSelfInFile */

declare namespace bind_restrictor {
  export function bind(obj: CGameObject): void
}

/** @customConstructor restrictor_binder */
declare class restrictor_binder extends object_binder {
  constructor(obj: CGameObject, char_ini: system_ini)
  reload(section: string): void
  reinit(): void
  net_spawn(se_abstract: CseAbstract): boolean
  net_destroy(): void
  update(delta: number): void
  net_save_relevant(): boolean
  save(packet: net_packet): void
  load(reader: net_packet): void
  on_enter(zone: CGameObject, obj: CGameObject): void
  on_exit(zone: CGameObject, obj: CGameObject): void
}
