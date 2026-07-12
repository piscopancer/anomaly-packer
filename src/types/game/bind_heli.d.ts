/** @noSelfInFile */

declare namespace bind_heli {
  export function bind(obj: CGameObject): void
  export function get_heli_health(heli: CHelicopter, st: AnyTable): number
  export function heli_die(obj: CGameObject): void
  export function heli_start_flame(obj: CGameObject): void
  export function is_heli_alive(obj: CGameObject): boolean
}

/** @customConstructor heli_binder */
declare class heli_binder extends object_binder {
  constructor(obj: CGameObject)
  reload(section: string): void
  reinit(): void
  update(delta: number): void
  net_spawn(se_abstract: CseAbstract): boolean
  net_destroy(): void
  net_save_relevant(): boolean
  save(packet: net_packet): void
  load(packet: net_packet): void
  check_health(): void
  on_hit(power: number, impulse: number, hit_type: number, enemy_id: number): void
  on_point(distance: number, position: vector, path_idx: number): void
}
