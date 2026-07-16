/** @noSelfInFile */

/** @customConstructor actor_detector */
declare class actor_detector {
  init_time: TODO // @generated field — refine type
  last_update_time: TODO // @generated field — refine type
  constructor()
  actor_enter(): void
  actor_exit(): void
  update(): void
  save(packet: net_packet): void
  load(packet: net_packet): void
}

declare namespace xr_detector {
  /** Anomaly `class "actor_detector"` is also reachable on the `xr_detector` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`xr_detector.actor_detector.Method = ...`). */
  export const actor_detector: actor_detector
}
