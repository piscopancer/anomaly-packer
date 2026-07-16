/** @noSelfInFile */

declare namespace ph_minigun {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, storage: AnyTable): void
  export function angle_xz(npc: CGameObject, target_pos: vector, start_direction: vector): number
  export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section, gulag_name: string): void
}

/** @customConstructor action_mgun */
declare class action_mgun {
  def_fire_rep: TODO // @generated field — refine type
  def_fire_time: TODO // @generated field — refine type
  destroyed: boolean // @generated field — refine type
  fc_last_upd_tm: TODO // @generated field — refine type
  fc_upd_avg: TODO // @generated field — refine type
  fc_upd_num: TODO // @generated field — refine type
  fire_range_sqr: TODO // @generated field — refine type
  fire_rep: TODO // @generated field — refine type
  fire_track_target: TODO // @generated field — refine type
  hasWeapon: boolean // @generated field — refine type
  last_pos: TODO // @generated field — refine type
  last_pos_time: number // @generated field — refine type
  mgun: TODO // @generated field — refine type
  object: TODO // @generated field — refine type
  on_target_nvis: TODO // @generated field — refine type
  on_target_vis: TODO // @generated field — refine type
  path_fire: TODO // @generated field — refine type
  path_fire_point: TODO // @generated field — refine type
  st: TODO // @generated field — refine type
  start_delaying_time: TODO // @generated field — refine type
  start_direction: TODO // @generated field — refine type
  start_look_pos: TODO // @generated field — refine type
  start_shooting_time: TODO // @generated field — refine type
  state_cannon: TODO // @generated field — refine type
  state_delaying: boolean // @generated field — refine type
  state_firetarget: TODO // @generated field — refine type
  state_shooting: TODO // @generated field — refine type
  target_fire_pt: TODO // @generated field — refine type
  target_fire_pt_idx: number // @generated field — refine type
  constructor(obj: CGameObject, storage: AnyTable)
  reset_scheme(loading: boolean): void
  set_shooting(shooting: boolean): void
  check_fire_time(): boolean
  save(): void
  rot_to_firedir(direction: vector): void
  rot_to_firepoint(pt: vector): void
  set_signal(sig: string): void
  fastcall(): boolean
  update(delta: number): void
  fast_update(): boolean
  destroy_car(): void
}

declare namespace ph_minigun {
  /** Anomaly `class "action_mgun"` is also reachable on the `ph_minigun` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`ph_minigun.action_mgun.Method = ...`). */
  export const action_mgun: action_mgun
}
