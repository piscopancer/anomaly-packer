/** @noSelfInFile */

declare namespace heli_combat {
  export function cross_ray_circle(p: vector, v: vector, o: vector, r: number): vector
}

/** @customConstructor heli_combat */
declare class heli_combat {
  constructor(object: CGameObject, heliObject: CHelicopter)
  is_enemy(obj: CGameObject): boolean
  set_enemy(target: CGameObject): void
  find_valid_target(): boolean
  read_custom_data(ini: system_ini, section: string): void
  set_enemy_from_custom_data(combat_enemy: string): void
  set_combat_type(new_combat_type: number): void
  initialize(): void
  fastcall(): boolean
  SeeEnemy(): boolean
  save(packet: net_packet): void
  load(packet: net_packet): void
  waypoint_callback(): boolean
  update_custom_data_settings(): void
  forget_enemy(): void
  update_combat_type(see_enemy: boolean): void
  combat_ignore_check(): boolean
  update(): boolean
  calc_position_in_radius(r: number): vector
  round_update(see_enemy: boolean): void
  search_update(see_enemy: boolean): void
  flyby_update(see_enemy: boolean): void
  retreat_initialize(): void
  retreat_update(): void
}
