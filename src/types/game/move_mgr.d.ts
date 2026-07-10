// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace move_mgr {
  export const arrival_after_rotation: TODO
  export const arrival_before_rotation: TODO
  export function choose_look_point(patrol_look: TODO, path_look_info: TODO, search_for: TODO): TODO
}

/** @customConstructor move_mgr */
declare class move_mgr {
  constructor(npc: TODO)
  initialize(npc: TODO): TODO
  disable(): TODO
  validate_paths(): TODO
  extrapolate_callback(npc: TODO): TODO
  standing_on_terminal_waypoint(): TODO
  at_terminal_waypoint(): TODO
  reset(path_walk: TODO, path_walk_info: TODO, path_look: TODO, path_look_info: TODO, team: TODO, suggested_state: TODO, move_cb_info: TODO, no_validation: TODO, _continue: TODO, use_default_sound: TODO): TODO
  continue(): TODO
  setup_movement_by_patrol_path(): TODO
  arrived_to_first_waypoint(): TODO
  sync_ok(): TODO
  update(): TODO
  set_current_state_moving(state: TODO): TODO
  finalize(npc: TODO): TODO
  update_movement_state(): TODO
  update_standing_state(look_pos: TODO, snd: TODO): TODO
  time_callback(): TODO
  scheme_set_signal(sig: TODO): TODO
  turn_end_callback(): TODO
  waypoint_callback(obj: TODO, action_type: TODO, index: TODO): TODO
}
