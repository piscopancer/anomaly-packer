// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace bind_dynamo_hand {
  export function a_timer(): TODO
  export function check_on_level(pos: TODO): TODO
  export function init(obj: TODO): TODO
  export function read_net_packet(obj: TODO): TODO
  export function s_timer(): TODO
}

/** @customConstructor dynamo_hand_binder */
declare class dynamo_hand_binder extends object_binder {
  constructor(obj: TODO)
  reload(section: TODO): TODO
  reinit(): TODO
  net_spawn(se_abstract: TODO): TODO
  update(delta: TODO): TODO
  net_destroy(): TODO
  save(packet: TODO): TODO
  load(reader: TODO): TODO
  sound_particle_fastcall(): TODO
  OnLButtonDown(): TODO
  OnLButtonUp(): TODO
  OnHold(delta: TODO): TODO
  OnRemove(): TODO
}
