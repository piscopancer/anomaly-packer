/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace axr_beh {
    export const beh_actid: number
    export const beh_evid: number
    export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, storage: AnyTable): void
    export function am_i_reached(npc: CGameObject, index: number): boolean
    export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, gulag_name: string): void
  }
  
  /** @customConstructor action_beh */
  class action_beh extends action_base {
    dist_to_assist_pt: TODO // @generated field — refine type
    in_camp: TODO // @generated field — refine type
    keep_state_until: TODO // @generated field — refine type
    st: TODO // @generated field — refine type
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
  class evaluator_beh extends property_evaluator {
    st: TODO // @generated field — refine type
    constructor(storage: AnyTable, name: string)
    evaluate(): boolean
  }
  
  /** @customConstructor position_node */
  class position_node {
    node: TODO // @generated field — refine type
    constructor(amt: number)
    // shared global name: 4-arg form defined in axr_beh, 6-arg form in xr_danger
    select_best_vertex_id(object: CGameObject, dir: vector, lvid: number, distance: number): number
    select_best_vertex_id(object: CGameObject, dir: vector, lvid: number, min_dist: number, max_dist: number, find_furthest?: boolean): number
  }

  namespace axr_beh {
    /** Anomaly `class "action_beh"` is also reachable on the `axr_beh` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`axr_beh.action_beh.Method = ...`). */
    export const action_beh: action_beh
    /** Anomaly `class "evaluator_beh"` is also reachable on the `axr_beh` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`axr_beh.evaluator_beh.Method = ...`). */
    export const evaluator_beh: evaluator_beh
    /** Anomaly `class "position_node"` is also reachable on the `axr_beh` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`axr_beh.position_node.Method = ...`). */
    export const position_node: position_node
  }
}
