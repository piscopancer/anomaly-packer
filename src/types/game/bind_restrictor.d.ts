/** @noSelfInFile */

declare namespace bind_restrictor {
  export function bind(obj: TODO): void
}

/** @customConstructor restrictor_binder */
declare class restrictor_binder extends object_binder {
  constructor(obj: TODO, char_ini: TODO)
  reload(section: TODO): void
  reinit(): void
  net_spawn(se_abstract: TODO): boolean
  net_destroy(): void
  update(delta: TODO): void
  net_save_relevant(): boolean
  save(packet: TODO): void
  load(reader: TODO): void
  on_enter(zone: TODO, obj: TODO): void
  on_exit(zone: TODO, obj: TODO): void
}
