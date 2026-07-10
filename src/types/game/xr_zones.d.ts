// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace xr_zones {
  export function bind(obj: TODO): TODO
  export function purge_arena_items(name: TODO): TODO
}

/** @customConstructor arena_zone_binder */
declare class arena_zone_binder extends object_binder {
  constructor(obj: TODO)
  net_spawn(server_object: TODO): TODO
  net_destroy(): TODO
  purge_items(): TODO
  save(packet: TODO): TODO
  load(packet: TODO): TODO
  on_enter(zone: TODO, obj: TODO): TODO
  on_exit(zone: TODO, obj: TODO): TODO
}

/** @customConstructor script_zone_binder */
declare class script_zone_binder {
  constructor(obj: TODO)
  net_spawn(se_obj: TODO): TODO
  net_destroy(): TODO
  save(packet: TODO): TODO
  load(packet: TODO): TODO
  on_enter(zone: TODO, obj: TODO): TODO
  on_exit(zone: TODO, obj: TODO): TODO
}
