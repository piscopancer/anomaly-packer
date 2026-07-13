/** @noSelfInFile */

declare namespace heli_fly {
  export function get_heli_flyer(obj: CGameObject): heli_fly
}

/** @customConstructor heli_fly */
declare class heli_fly {
  constructor(obj: CGameObject)
  fly_on_point_with_vector(dest_point: vector, dest_direction: vector, dest_velocity: number, flag_to_wp_callback: boolean, flag_by_null_velocity: boolean): boolean
  get_block_flook(): boolean
  calc_point(): vector
  lagrange(x: number, xArr: AnyTable, yArr: AnyTable): number
  correct_velocity(): void
  look_at_position(): void
  set_block_flook(fl_block: boolean): void
  set_look_point(l_point: vector): void
}
