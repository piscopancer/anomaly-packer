/** @noSelfInFile */

declare namespace bind_red_forest_bridge {
  export function bind(obj: TODO): void
}

/** @customConstructor bridge_binder */
declare class bridge_binder extends object_binder {
  constructor(obj: TODO)
  net_spawn(se_abstract: TODO): boolean
  net_destroy(): void
  anim_forward(): void
  anim_backward(): void
  anim_stop(): void
  update(delta: TODO): void
  animation_end_callback(is_end: TODO): void
  net_save_relevant(): boolean
  save(packet: net_packet): void
  load(packet: net_packet): void
}
