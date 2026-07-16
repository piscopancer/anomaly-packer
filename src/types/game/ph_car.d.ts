/** @noSelfInFile */

declare namespace ph_car {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, storage: AnyTable): void
  export function angle_xz(npc: CGameObject, target_pos: vector): number
  export function get_katet(npc: CGameObject, target_pos: vector): number
  export function printf(): void
  export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section, gulag_name: string): void
}

/** @customConstructor action_car */
declare class action_car {
  arrival_signalled: boolean // @generated field — refine type
  car: TODO // @generated field — refine type
  def_health: TODO // @generated field — refine type
  delay_time_start: TODO // @generated field — refine type
  destroyed: boolean // @generated field — refine type
  fc_last_upd_tm: TODO // @generated field — refine type
  fc_upd_avg: TODO // @generated field — refine type
  fc_upd_num: TODO // @generated field — refine type
  fire_backward: TODO // @generated field — refine type
  fire_forward: TODO // @generated field — refine type
  fire_pt_arr: TODO // @generated field — refine type
  fire_pt_count: TODO // @generated field — refine type
  fire_rep: TODO // @generated field — refine type
  fire_rot_dir: TODO // @generated field — refine type
  fire_start_time: TODO // @generated field — refine type
  fire_time: TODO // @generated field — refine type
  hasWeapon: boolean // @generated field — refine type
  headlights: TODO // @generated field — refine type
  last_pos: TODO // @generated field — refine type
  last_pos_time: TODO // @generated field — refine type
  loop: TODO // @generated field — refine type
  min_car_explode_time: TODO // @generated field — refine type
  min_delta_per_sec: TODO // @generated field — refine type
  object: TODO // @generated field — refine type
  on_target_nvis: TODO // @generated field — refine type
  on_target_vis: TODO // @generated field — refine type
  path_walk: TODO // @generated field — refine type
  path_walk_count: TODO // @generated field — refine type
  show_tips: TODO // @generated field — refine type
  speed: TODO // @generated field — refine type
  st: TODO // @generated field — refine type
  state_cannon: TODO // @generated field — refine type
  state_delaying: boolean // @generated field — refine type
  state_firetarget: TODO // @generated field — refine type
  state_moving: TODO // @generated field — refine type
  state_shooting: TODO // @generated field — refine type
  target_dist: TODO // @generated field — refine type
  target_fire_pt: TODO // @generated field — refine type
  target_fire_pt_idx: number // @generated field — refine type
  target_obj: TODO // @generated field — refine type
  target_walk_pt: TODO // @generated field — refine type
  tip_locked: TODO // @generated field — refine type
  tip_use: TODO // @generated field — refine type
  usable: TODO // @generated field — refine type
  constructor(obj: CGameObject, storage: AnyTable)
  reset_scheme(loading: boolean): void
  save(): void
  get_nearest_walkpoint(): number
  get_next_walkpoint(): number
  at_target_walkpoint(): boolean
  go_to_walkpoint(pt: number): void
  start_car(): void
  stop_car(): void
  walk_arrival_callback(index: number): void
  change_fire_pts(): void
  get_next_firepoint(): LuaMultiReturn<[number, vector]>
  rot_to_firepoint(pt: vector): void
  set_shooting(shooting: boolean): void
  fire_arrival_callback(cur_index: number): void
  set_signal(sig: string): void
  fastcall(): boolean
  update(delta: number): void
  destroy_car(): void
  fast_update(): boolean
  car_explode(): void
  net_destroy(): void
}

/** @customConstructor static_pp */
declare class static_pp {
  x: TODO // @generated field — refine type
  y: TODO // @generated field — refine type
  z: TODO // @generated field — refine type
  constructor(x: number, y: number, z: number)
  count(): number
  point(): vector
}

declare namespace ph_car {
  /** Anomaly `class "action_car"` is also reachable on the `ph_car` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`ph_car.action_car.Method = ...`). */
  export const action_car: action_car
  /** Anomaly `class "static_pp"` is also reachable on the `ph_car` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`ph_car.static_pp.Method = ...`). */
  export const static_pp: static_pp
}
