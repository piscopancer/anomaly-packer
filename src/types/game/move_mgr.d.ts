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
