/** @noSelfInFile */

declare namespace heli_fly {
  export function get_heli_flyer(obj: TODO): TODO
}

/** @customConstructor heli_fly */
declare class heli_fly {
  constructor(obj: TODO)
  fly_on_point_with_vector(dest_point: TODO, dest_direction: TODO, dest_velocity: TODO, flag_to_wp_callback: TODO, flag_by_null_velocity: TODO): TODO
  get_block_flook(): TODO
  calc_point(): TODO
  lagrange(x: TODO, xArr: TODO, yArr: TODO): TODO
  correct_velocity(): void
  look_at_position(): void
  set_block_flook(fl_block: TODO): void
  set_look_point(l_point: TODO): void
}
