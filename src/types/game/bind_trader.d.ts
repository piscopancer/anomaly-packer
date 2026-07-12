/** @noSelfInFile */

declare namespace bind_trader {
  export function bind(obj: CGameObject): void
}

/** @customConstructor trader_object_binder */
declare class trader_object_binder extends object_binder {
  constructor(obj: CGameObject)
  reload(section: string): void
  reinit(): void
  update(delta: number): void
  net_spawn(se_abstract: CseAbstract): boolean
  net_destroy(): void
  net_save_relevant(): boolean
  save(packet: net_packet): void
  load(reader: net_packet): void
  save_state(m_data: AnyTable): void
  load_state(): void
}
