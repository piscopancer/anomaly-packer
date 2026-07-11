/** @noSelfInFile */

declare namespace bind_dynamo_hand {
  export function a_timer(): void
  export function check_on_level(pos: TODO): boolean
  export function init(obj: TODO): void
  export function read_net_packet(obj: TODO): TODO
  export function s_timer(): TODO
}

/** @customConstructor dynamo_hand_binder */
declare class dynamo_hand_binder extends object_binder {
  constructor(obj: TODO)
  reload(section: TODO): void
  reinit(): void
  net_spawn(se_abstract: TODO): boolean
  update(delta: TODO): void
  net_destroy(): void
  save(packet: TODO): void
  load(reader: TODO): void
  sound_particle_fastcall(): boolean
  OnLButtonDown(): void
  OnLButtonUp(): void
  OnHold(delta: TODO): void
  OnRemove(): void
}
