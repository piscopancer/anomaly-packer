/** @noSelfInFile */

declare namespace bind_stalker {
  export function actor_init(npc: CGameObject): void
  export function init(obj: CGameObject): void
}

/** @customConstructor actor_binder */
declare class actor_binder extends object_binder {
  constructor(obj: CGameObject)
  net_spawn(se_abstract: CseAbstract): boolean
  net_destroy(): void
  reinit(): void
  update(delta: number): boolean
  save(packet: net_packet): void
  load(reader: net_packet): void
  save_state(m_data: AnyTable): void
  load_state(m_data: AnyTable): void
}
