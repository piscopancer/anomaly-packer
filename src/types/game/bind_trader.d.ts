/** @noSelfInFile */

declare namespace bind_trader {
  export function bind(obj: TODO): void
}

/** @customConstructor trader_object_binder */
declare class trader_object_binder extends object_binder {
  constructor(obj: TODO)
  reload(section: TODO): void
  reinit(): void
  update(delta: TODO): void
  net_spawn(se_abstract: TODO): boolean
  net_destroy(): void
  net_save_relevant(): boolean
  save(packet: TODO): void
  load(reader: TODO): void
  save_state(m_data: TODO): void
  load_state(): void
}
