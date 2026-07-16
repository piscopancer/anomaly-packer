/** @noSelfInFile */

declare namespace heli_fly {
  export function get_heli_flyer(obj: CGameObject): heli_fly
}

/** @customConstructor heli_fly */
declare class heli_fly {
  block_flook: TODO // @generated field — refine type
  dest_point: TODO // @generated field — refine type
  dist_by_look: number // @generated field — refine type
  heliLAccBW: number // @generated field — refine type
  heliLAccFW: number // @generated field — refine type
  max_velocity: number // @generated field — refine type
  obj: TODO // @generated field — refine type
  point_arr: TODO // @generated field — refine type
  point_by_look: TODO // @generated field — refine type
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

declare namespace heli_fly {
  /** Anomaly `class "heli_fly"` is also reachable on the `heli_fly` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`heli_fly.heli_fly.Method = ...`). */
  export const heli_fly: heli_fly
}
