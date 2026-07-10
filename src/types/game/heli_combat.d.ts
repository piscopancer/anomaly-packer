// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace heli_combat {
  export function cross_ray_circle(p: TODO, v: TODO, o: TODO, r: TODO): TODO
}

/** @customConstructor heli_combat */
declare class heli_combat {
  constructor(object: TODO, heliObject: TODO)
  is_enemy(obj: TODO): TODO
  set_enemy(target: TODO): TODO
  find_valid_target(): TODO
  read_custom_data(ini: TODO, section: TODO): TODO
  set_enemy_from_custom_data(combat_enemy: TODO): TODO
  set_combat_type(new_combat_type: TODO): TODO
  initialize(): TODO
  fastcall(): TODO
  SeeEnemy(): TODO
  save(packet: TODO): TODO
  load(packet: TODO): TODO
  waypoint_callback(): TODO
  update_custom_data_settings(): TODO
  forget_enemy(): TODO
  update_combat_type(see_enemy: TODO): TODO
  combat_ignore_check(): TODO
  update(): TODO
  calc_position_in_radius(r: TODO): TODO
  round_update(see_enemy: TODO): TODO
  search_update(see_enemy: TODO): TODO
  flyby_update(see_enemy: TODO): TODO
  retreat_initialize(): TODO
  retreat_update(): TODO
}
