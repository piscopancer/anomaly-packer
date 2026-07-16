/** @noSelfInFile */

declare namespace bind_door_labx8 {
  export function bind(obj: CGameObject): void
}

/** @customConstructor door_binder_labx8 */
declare class door_binder_labx8 extends object_binder {
  anim_time: TODO // @generated field — refine type
  idle_delay: TODO // @generated field — refine type
  idle_snd: TODO // @generated field — refine type
  is_idle: TODO // @generated field — refine type
  is_play_fwd: TODO // @generated field — refine type
  loaded: boolean // @generated field — refine type
  on_start: TODO // @generated field — refine type
  on_stop: TODO // @generated field — refine type
  on_use: TODO // @generated field — refine type
  start_delay: TODO // @generated field — refine type
  start_snd: TODO // @generated field — refine type
  stop_snd: TODO // @generated field — refine type
  tip: TODO // @generated field — refine type
  constructor(obj: CGameObject)
  net_spawn(se_abstract: CseAbstract): boolean
  net_destroy(): void
  update(delta: number): void
  anim_forward(): void
  anim_backward(): void
  anim_stop(): void
  animation_end_callback(is_end: boolean): void
  use_callback(obj: CGameObject): void
  net_save_relevant(): boolean
  save(packet: net_packet): void
  load(packet: net_packet): void
}

declare namespace bind_door_labx8 {
  /** Anomaly `class "door_binder_labx8"` is also reachable on the `bind_door_labx8` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`bind_door_labx8.door_binder_labx8.Method = ...`). */
  export const door_binder_labx8: door_binder_labx8
}
