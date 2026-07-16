/** @noSelfInFile */

declare namespace xr_animpoint {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, storage: AnyTable): void
  export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section, gulag_name: string): void
}

/** @customConstructor action_animpoint */
declare class action_animpoint extends action_base {
  st: TODO // @generated field — refine type
  constructor(npc: CGameObject, action_name: string, storage: AnyTable)
  initialize(): void
  execute(): void
  net_destroy(npc: CGameObject): void
  finalize(): void
}

/** @customConstructor action_reach_animpoint */
declare class action_reach_animpoint extends action_base {
  st: TODO // @generated field — refine type
  constructor(npc: CGameObject, action_name: string, storage: AnyTable)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor animpoint */
declare class animpoint {
  __dtimer: TODO // @generated field — refine type
  avail_actions: TODO // @generated field — refine type
  camp: TODO // @generated field — refine type
  cover_name: TODO // @generated field — refine type
  current_action: TODO // @generated field — refine type
  in_camp: TODO // @generated field — refine type
  look_position: TODO // @generated field — refine type
  npc_id: TODO // @generated field — refine type
  position: TODO // @generated field — refine type
  position_vertex: TODO // @generated field — refine type
  smart_direction: TODO // @generated field — refine type
  st: TODO // @generated field — refine type
  started: boolean // @generated field — refine type
  vertex_position: TODO // @generated field — refine type
  constructor(npc: CGameObject, storage: AnyTable)
  initialize(): void
  activate_scheme(loading: boolean, npc: CGameObject, switching_scheme: boolean): void
  calculate_position(): void
  position_riched(): boolean
  fill_approved_actions(): boolean
  start(): void
  stop(): void
  get_action(): string
  update(): void
}

/** @customConstructor evaluator_need_animpoint */
declare class evaluator_need_animpoint extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(storage: AnyTable, name: string)
  evaluate(): boolean
}

/** @customConstructor evaluator_reach_animpoint */
declare class evaluator_reach_animpoint extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(storage: AnyTable, name: string)
  evaluate(): boolean
}

declare namespace xr_animpoint {
  /** Anomaly `class "action_animpoint"` is also reachable on the `xr_animpoint` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`xr_animpoint.action_animpoint.Method = ...`). */
  export const action_animpoint: action_animpoint
  /** Anomaly `class "action_reach_animpoint"` is also reachable on the `xr_animpoint` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`xr_animpoint.action_reach_animpoint.Method = ...`). */
  export const action_reach_animpoint: action_reach_animpoint
  /** Anomaly `class "animpoint"` is also reachable on the `xr_animpoint` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`xr_animpoint.animpoint.Method = ...`). */
  export const animpoint: animpoint
  /** Anomaly `class "evaluator_need_animpoint"` is also reachable on the `xr_animpoint` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`xr_animpoint.evaluator_need_animpoint.Method = ...`). */
  export const evaluator_need_animpoint: evaluator_need_animpoint
  /** Anomaly `class "evaluator_reach_animpoint"` is also reachable on the `xr_animpoint` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`xr_animpoint.evaluator_reach_animpoint.Method = ...`). */
  export const evaluator_reach_animpoint: evaluator_reach_animpoint
}
