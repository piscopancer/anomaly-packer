/** @noSelfInFile */

declare namespace bind_stalker {
  export function actor_init(npc: TODO): void
  export function init(obj: TODO): void
}

/** @customConstructor actor_binder */
declare class actor_binder extends object_binder {
  constructor(obj: TODO)
  net_spawn(se_abstract: TODO): boolean
  net_destroy(): void
  reinit(): void
  update(delta: TODO): boolean
  save(packet: net_packet): void
  load(reader: net_packet): void
  save_state(m_data: TODO): void
  load_state(m_data: TODO): void
}
