/** @noSelfInFile */

declare namespace bind_camp {
  export const camps: TODO
  export function bind(obj: TODO): void
}

/** @customConstructor camp_binder */
declare class camp_binder extends object_binder {
  constructor(obj: TODO, char_ini: TODO)
  reload(section: TODO): void
  reinit(): void
  net_spawn(se_abstract: TODO): boolean
  net_destroy(): void
  update(delta: TODO): void
  net_save_relevant(): boolean
  save(packet: TODO): void
  load(reader: TODO): void
}
