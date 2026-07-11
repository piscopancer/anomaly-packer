/** @noSelfInFile */

declare namespace bind_signal_light {
  export function init(obj: TODO): void
}

/** @customConstructor signal_light_binder */
declare class signal_light_binder extends object_binder {
  constructor(obj: TODO)
  reload(section: TODO): void
  reinit(): void
  update(delta: TODO): void
  net_spawn(se_abstract: TODO): boolean
  net_destroy(): void
  launch(): boolean
  slow_fly(): void
  stop_light(): void
  stop(): void
  is_flying(): TODO
  net_save_relevant(): boolean
  save(packet: net_packet): void
  load(reader: net_packet): void
}
