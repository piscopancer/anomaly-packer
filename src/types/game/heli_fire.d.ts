/** @noSelfInFile */

declare namespace heli_fire {
  export function get_heli_firer(obj: CGameObject): heli_fire
}

/** @customConstructor heli_fire */
declare class heli_fire {
  enemy_: TODO // @generated field — refine type
  enemy_die: boolean // @generated field — refine type
  enemy_id: TODO // @generated field — refine type
  enemy_time: TODO // @generated field — refine type
  enumy_die: boolean // @generated field — refine type
  fire_id: TODO // @generated field — refine type
  fire_point: TODO // @generated field — refine type
  flag_by_enemy: boolean // @generated field — refine type
  hit_count: number // @generated field — refine type
  obj: TODO // @generated field — refine type
  show_health: boolean // @generated field — refine type
  upd_vis: number // @generated field — refine type
  constructor(obj: CGameObject)
  update_enemy_state(): void
  set_enemy(): void
  update_enemy_arr(): void
  update_hit(): void
  cs_heli(): void
  set_cs_heli_progress_health(): void
  cs_remove(): void
}

declare namespace heli_fire {
  /** Anomaly `class "heli_fire"` is also reachable on the `heli_fire` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`heli_fire.heli_fire.Method = ...`). */
  export const heli_fire: heli_fire
}
