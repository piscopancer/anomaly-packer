/** @noSelfInFile */

declare namespace move_mgr {
  export const arrival_after_rotation: number
  export const arrival_before_rotation: number
  export function choose_look_point(patrol_look: number, path_look_info: AnyTable, search_for: number): AnyTable | undefined
  /** The `move_mgr` class table, called as a constructor: `move_mgr.move_mgr(npc)`. */
  export const move_mgr: (this: void, npc: CGameObject) => move_mgr
}

/** @customConstructor move_mgr */
declare class move_mgr {
  __disable: TODO // @generated field — refine type
  at_terminal_waypoint_flag: boolean // @generated field — refine type
  can_use_get_current_point_index: boolean // @generated field — refine type
  cur_state_moving: TODO // @generated field — refine type
  cur_state_standing: TODO // @generated field — refine type
  current_point_index: TODO // @generated field — refine type
  current_point_init_time: TODO // @generated field — refine type
  default_state_moving1: TODO // @generated field — refine type
  default_state_moving2: TODO // @generated field — refine type
  default_state_moving3: TODO // @generated field — refine type
  default_state_standing: TODO // @generated field — refine type
  keep_state_until: TODO // @generated field — refine type
  last_index: TODO // @generated field — refine type
  last_look_index: TODO // @generated field — refine type
  move_cb_info: TODO // @generated field — refine type
  no_validation: TODO // @generated field — refine type
  object: TODO // @generated field — refine type
  path_look: TODO // @generated field — refine type
  path_look_info: TODO // @generated field — refine type
  path_walk: TODO // @generated field — refine type
  path_walk_info: TODO // @generated field — refine type
  patrol_look: TODO // @generated field — refine type
  patrol_walk: TODO // @generated field — refine type
  pt_wait_time: TODO // @generated field — refine type
  retval_after_rotation: TODO // @generated field — refine type
  run_until: TODO // @generated field — refine type
  sound_after_anim_start: TODO // @generated field — refine type
  state: TODO // @generated field — refine type
  suggested_state: TODO // @generated field — refine type
  syn_signal: TODO // @generated field — refine type
  syn_signal_set_tm: TODO // @generated field — refine type
  team: TODO // @generated field — refine type
  use_default_sound: TODO // @generated field — refine type
  walk_until: TODO // @generated field — refine type
  constructor(npc: CGameObject)
  initialize(npc: CGameObject): void
  disable(): void
  validate_paths(): void
  extrapolate_callback(npc: CGameObject): void
  standing_on_terminal_waypoint(): boolean
  at_terminal_waypoint(): boolean
  reset(path_walk: string, path_walk_info: AnyTable, path_look: string, path_look_info: AnyTable, team: number, suggested_state: string, move_cb_info: AnyTable, no_validation: boolean, continue_: boolean, use_default_sound: boolean): void
  continue(): void
  setup_movement_by_patrol_path(): void
  arrived_to_first_waypoint(): boolean
  sync_ok(): boolean
  update(): void
  set_current_state_moving(state: string): void
  finalize(npc: CGameObject): void
  update_movement_state(): void
  update_standing_state(look_pos: vector, snd: string): void
  time_callback(): void
  scheme_set_signal(sig: string): void
  turn_end_callback(): void
  waypoint_callback(obj: CGameObject, action_type: number, index: number): void
}
