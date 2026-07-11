/** @noSelfInFile */

declare namespace xr_zones {
  export function bind(obj: TODO): void
  export function purge_arena_items(name: TODO): void
}

/** @customConstructor arena_zone_binder */
declare class arena_zone_binder extends object_binder {
  constructor(obj: TODO)
  net_spawn(server_object: TODO): boolean
  net_destroy(): void
  purge_items(): void
  save(packet: net_packet): void
  load(packet: net_packet): void
  on_enter(zone: TODO, obj: TODO): void
  on_exit(zone: TODO, obj: TODO): void
}

/** @customConstructor script_zone_binder */
declare class script_zone_binder {
  constructor(obj: TODO)
  net_spawn(se_obj: TODO): boolean
  net_destroy(): void
  save(packet: TODO): void
  load(packet: TODO): void
  on_enter(zone: TODO, obj: TODO): void
  on_exit(zone: TODO, obj: TODO): void
}
