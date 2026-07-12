/** @noSelfInFile */

declare namespace bind_signal_light {
  export function init(obj: CGameObject): void
}

/** @customConstructor signal_light_binder */
declare class signal_light_binder extends object_binder {
  constructor(obj: CGameObject)
  reload(section: string): void
  reinit(): void
  update(delta: number): void
  net_spawn(se_abstract: CseAbstract): boolean
  net_destroy(): void
  launch(): boolean
  slow_fly(): void
  stop_light(): void
  stop(): void
  is_flying(): boolean
  net_save_relevant(): boolean
  save(packet: net_packet): void
  load(reader: net_packet): void
}
