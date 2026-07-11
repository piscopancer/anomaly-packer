/** @noSelfInFile */

declare namespace axr_beh {
  export const beh_actid: number
  export const beh_evid: number
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO): TODO
  export function am_i_reached(npc: TODO, index: TODO): TODO
  export function reset_scheme(loading: TODO, npc: TODO): TODO
  export function set_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, gulag_name: TODO): TODO
}

/** @customConstructor action_beh */
declare class action_beh extends action_base {
  constructor(npc_name: TODO, action_name: TODO, storage: TODO)
  initialize(): TODO
  execute(): TODO
  set_desired_target(): TODO
  beh_cover(): TODO
  beh_wait(): TODO
  set_state(): TODO
  beh_move(): TODO
  beh_path(): TODO
  get_current_waypoint(use_var: TODO): TODO
  next_waypoint_index(): string
  increment_waypoint_index(): TODO
  fill_approved_actions(state: string): TODO
  finalize(): TODO
}

/** @customConstructor evaluator_beh */
declare class evaluator_beh extends property_evaluator {
  constructor(storage: TODO, name: TODO)
  evaluate(): TODO
}

/** @customConstructor position_node */
declare class position_node {
  constructor(amt: number)
  // shared global name: 4-arg form defined in axr_beh, 6-arg form in xr_danger
  select_best_vertex_id(object: TODO, dir: TODO, lvid: TODO, distance: TODO): TODO
  select_best_vertex_id(object: TODO, dir: TODO, lvid: TODO, distance: TODO): TODO
}
