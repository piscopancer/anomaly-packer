/** @noSelfInFile */

declare namespace bind_heli {
  export function bind(obj: TODO): void
  export function get_heli_health(heli: TODO, st: TODO): TODO
  export function heli_die(obj: TODO): void
  export function heli_start_flame(obj: TODO): void
  export function is_heli_alive(obj: TODO): TODO
}

/** @customConstructor heli_binder */
declare class heli_binder extends object_binder {
  constructor(obj: TODO)
  reload(section: TODO): void
  reinit(): void
  update(delta: TODO): void
  net_spawn(se_abstract: TODO): boolean
  net_destroy(): void
  net_save_relevant(): boolean
  save(packet: TODO): void
  load(packet: TODO): void
  check_health(): void
  on_hit(power: TODO, impulse: TODO, hit_type: TODO, enemy_id: TODO): void
  on_point(distance: TODO, position: TODO, path_idx: TODO): void
}
