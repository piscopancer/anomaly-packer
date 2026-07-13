/** @noSelfInFile */

declare namespace xr_zones {
  export function bind(obj: CGameObject): void
  export function purge_arena_items(name: string): void
}

/** @customConstructor arena_zone_binder */
declare class arena_zone_binder extends object_binder {
  constructor(obj: CGameObject)
  net_spawn(server_object: CseAbstract): boolean
  net_destroy(): void
  purge_items(): void
  save(packet: net_packet): void
  load(packet: net_packet): void
  on_enter(zone: CGameObject, obj: CGameObject): void
  on_exit(zone: CGameObject, obj: CGameObject): void
}

/** @customConstructor script_zone_binder */
declare class script_zone_binder {
  constructor(obj: CGameObject)
  net_spawn(se_obj: CseAbstract): boolean
  net_destroy(): void
  save(packet: net_packet): void
  load(packet: net_packet): void
  on_enter(zone: CGameObject, obj: CGameObject): void
  on_exit(zone: CGameObject, obj: CGameObject): void
}
