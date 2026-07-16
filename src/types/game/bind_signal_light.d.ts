/** @noSelfInFile */

declare namespace bind_signal_light {
  export function init(obj: CGameObject): void
}

/** @customConstructor signal_light_binder */
declare class signal_light_binder extends object_binder {
  delta_time: TODO // @generated field — refine type
  loaded: boolean // @generated field — refine type
  need_turn_off: boolean // @generated field — refine type
  slow_fly_started: TODO // @generated field — refine type
  start_time: TODO // @generated field — refine type
  constructor(obj: CGameObject)
  reload(section: Section): void
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

declare namespace bind_signal_light {
  /** Anomaly `class "signal_light_binder"` is also reachable on the `bind_signal_light` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`bind_signal_light.signal_light_binder.Method = ...`). */
  export const signal_light_binder: signal_light_binder
}
