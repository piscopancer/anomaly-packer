// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace bind_heli {
  export function bind(obj: TODO): TODO
  export function get_heli_health(heli: TODO, st: TODO): TODO
  export function heli_die(obj: TODO): TODO
  export function heli_start_flame(obj: TODO): TODO
  export function is_heli_alive(obj: TODO): TODO
}

/** @customConstructor heli_binder */
declare class heli_binder extends object_binder {
  constructor(obj: TODO)
  reload(section: TODO): TODO
  reinit(): TODO
  update(delta: TODO): TODO
  net_spawn(se_abstract: TODO): TODO
  net_destroy(): TODO
  net_save_relevant(): TODO
  save(packet: TODO): TODO
  load(packet: TODO): TODO
  check_health(): TODO
  on_hit(power: TODO, impulse: TODO, hit_type: TODO, enemy_id: TODO): TODO
  on_point(distance: TODO, position: TODO, path_idx: TODO): TODO
}
