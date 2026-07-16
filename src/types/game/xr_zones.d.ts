/** @noSelfInFile */

declare namespace xr_zones {
  export function bind(obj: CGameObject): void
  export function purge_arena_items(name: string): void
}

/** @customConstructor arena_zone_binder */
declare class arena_zone_binder extends object_binder {
  saved_obj: TODO // @generated field — refine type
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

declare namespace xr_zones {
  /** Anomaly `class "arena_zone_binder"` is also reachable on the `xr_zones` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`xr_zones.arena_zone_binder.Method = ...`). */
  export const arena_zone_binder: arena_zone_binder
  /** Anomaly `class "script_zone_binder"` is also reachable on the `xr_zones` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`xr_zones.script_zone_binder.Method = ...`). */
  export const script_zone_binder: script_zone_binder
}
