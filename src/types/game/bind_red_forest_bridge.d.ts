/** @noSelfInFile */

declare namespace bind_red_forest_bridge {
  export function bind(obj: CGameObject): void
}

/** @customConstructor bridge_binder */
declare class bridge_binder extends object_binder {
  anim_time: TODO // @generated field — refine type
  bridge: TODO // @generated field — refine type
  bridge_anim_fwd: TODO // @generated field — refine type
  bridge_idle: TODO // @generated field — refine type
  down_snd: TODO // @generated field — refine type
  idle: number // @generated field — refine type
  idle_end: TODO // @generated field — refine type
  idle_snd: TODO // @generated field — refine type
  koleso: TODO // @generated field — refine type
  se_koleso_id: TODO // @generated field — refine type
  start_snd: TODO // @generated field — refine type
  stop_snd: TODO // @generated field — refine type
  constructor(obj: CGameObject)
  net_spawn(se_abstract: CseAbstract): boolean
  net_destroy(): void
  anim_forward(): void
  anim_backward(): void
  anim_stop(): void
  update(delta: number): void
  animation_end_callback(is_end: boolean): void
  net_save_relevant(): boolean
  save(packet: net_packet): void
  load(packet: net_packet): void
}

declare namespace bind_red_forest_bridge {
  /** Anomaly `class "bridge_binder"` is also reachable on the `bind_red_forest_bridge` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`bind_red_forest_bridge.bridge_binder.Method = ...`). */
  export const bridge_binder: bridge_binder
}
