/** @noSelfInFile */

declare namespace bind_crow {
  export const crow_counter: TODO
  export const crow_storage: TODO
  export function bind(obj: TODO): void
}

/** @customConstructor crow_binder */
declare class crow_binder extends object_binder {
  constructor(obj: TODO)
  update(delta: TODO): void
  use_callback(obj: TODO, who: TODO): void
  reload(section: TODO): void
  reinit(): void
  net_spawn(se_abstract: TODO): boolean
  net_destroy(): void
  death_callback(victim: TODO, who: TODO): void
  net_save_relevant(): boolean
  save(stpk: net_packet): void
  load(reader: net_packet): void
}
