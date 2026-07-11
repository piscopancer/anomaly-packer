/** @noSelfInFile */

declare namespace move_mgr {
  export const arrival_after_rotation: number
  export const arrival_before_rotation: number
  export function choose_look_point(patrol_look: number, path_look_info: TODO, search_for: TODO): TODO
}

/** @customConstructor move_mgr */
declare class move_mgr {
  constructor(npc: TODO)
  initialize(npc: TODO): void
  disable(): void
  validate_paths(): void
  extrapolate_callback(npc: TODO): void
  standing_on_terminal_waypoint(): boolean
  at_terminal_waypoint(): TODO
  reset(path_walk: TODO, path_walk_info: TODO, path_look: TODO, path_look_info: TODO, team: TODO, suggested_state: TODO, move_cb_info: TODO, no_validation: TODO, continue_: TODO, use_default_sound: TODO): void
  continue(): void
  setup_movement_by_patrol_path(): void
  arrived_to_first_waypoint(): TODO
  sync_ok(): boolean
  update(): void
  set_current_state_moving(state: TODO): void
  finalize(npc: TODO): void
  update_movement_state(): void
  update_standing_state(look_pos: TODO, snd: TODO): void
  time_callback(): void
  scheme_set_signal(sig: TODO): void
  turn_end_callback(): void
  waypoint_callback(obj: TODO, action_type: TODO, index: number): void
}
