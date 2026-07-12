/** @noSelfInFile */

declare namespace bind_dynamo_hand {
  export function a_timer(): void
  export function check_on_level(pos: vector): boolean
  export function init(obj: CGameObject): void
  export function read_net_packet(obj: CGameObject): string | undefined
  export function s_timer(): void
}

/** @customConstructor dynamo_hand_binder */
declare class dynamo_hand_binder extends object_binder {
  constructor(obj: CGameObject)
  reload(section: string): void
  reinit(): void
  net_spawn(se_abstract: CseAbstract): boolean
  update(delta: number): void
  net_destroy(): void
  save(packet: net_packet): void
  load(reader: net_packet): void
  sound_particle_fastcall(): boolean
  OnLButtonDown(): void
  OnLButtonUp(): void
  OnHold(delta: number): void
  OnRemove(): void
}
