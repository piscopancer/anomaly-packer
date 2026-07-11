/** @noSelfInFile */

declare namespace heli_combat {
  export function cross_ray_circle(p: TODO, v: TODO, o: TODO, r: TODO): TODO
}

/** @customConstructor heli_combat */
declare class heli_combat {
  constructor(object: TODO, heliObject: TODO)
  is_enemy(obj: TODO): boolean
  set_enemy(target: TODO): void
  find_valid_target(): boolean
  read_custom_data(ini: TODO, section: TODO): void
  set_enemy_from_custom_data(combat_enemy: string): void
  set_combat_type(new_combat_type: TODO): void
  initialize(): void
  fastcall(): boolean
  SeeEnemy(): TODO
  save(packet: net_packet): void
  load(packet: net_packet): void
  waypoint_callback(): boolean
  update_custom_data_settings(): void
  forget_enemy(): void
  update_combat_type(see_enemy: TODO): void
  combat_ignore_check(): TODO
  update(): boolean
  calc_position_in_radius(r: TODO): TODO
  round_update(see_enemy: TODO): void
  search_update(see_enemy: TODO): void
  flyby_update(see_enemy: TODO): void
  retreat_initialize(): void
  retreat_update(): void
}
