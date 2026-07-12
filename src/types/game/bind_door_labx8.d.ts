/** @noSelfInFile */

declare namespace bind_door_labx8 {
  export function bind(obj: CGameObject): void
}

/** @customConstructor door_binder_labx8 */
declare class door_binder_labx8 extends object_binder {
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
