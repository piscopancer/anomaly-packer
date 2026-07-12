/** @noSelfInFile */

declare namespace axr_beh {
  export const beh_actid: number
  export const beh_evid: number
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: string, storage: AnyTable): void
  export function am_i_reached(npc: CGameObject, index: number): boolean
  export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: string, gulag_name: string): void
}

/** @customConstructor action_beh */
declare class action_beh extends action_base {
  constructor(npc_name: string, action_name: string, storage: AnyTable)
  initialize(): void
  execute(): void
  set_desired_target(): boolean
  beh_cover(): void
  beh_wait(): void
  set_state(): void
  beh_move(): void
  beh_path(): void
  get_current_waypoint(use_var: boolean): any
  next_waypoint_index(): string
  increment_waypoint_index(): void
  fill_approved_actions(state: string): void
  finalize(): void
}

/** @customConstructor evaluator_beh */
declare class evaluator_beh extends property_evaluator {
  constructor(storage: AnyTable, name: string)
  evaluate(): boolean
}

/** @customConstructor position_node */
declare class position_node {
  constructor(amt: number)
  // shared global name: 4-arg form defined in axr_beh, 6-arg form in xr_danger
  select_best_vertex_id(object: CGameObject, dir: vector, lvid: number, distance: number): number
  select_best_vertex_id(object: CGameObject, dir: vector, lvid: number, min_dist: number, max_dist: number, find_furthest?: boolean): number
}
