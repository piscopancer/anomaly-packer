/** @noSelfInFile */

declare namespace xr_campfire_point {
  export const actid: number
  export const evaid: number
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, storage: AnyTable): void
  export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section, gulag_name: string): void
}

/** @customConstructor action_point_campfire */
declare class action_point_campfire extends action_base {
  __dtimer: TODO // @generated field — refine type
  current_action: TODO // @generated field — refine type
  in_camp: TODO // @generated field — refine type
  st: TODO // @generated field — refine type
  constructor(npc_name: string, action_name: string, storage: AnyTable)
  initialize(): void
  activate_scheme(): void
  execute(): void
  get_camp_action(): string | undefined
  finalize(): void
  position_riched(): boolean
}

/** @customConstructor evaluator_need_job */
declare class evaluator_need_job extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(storage: AnyTable, name: string)
  evaluate(): boolean
}

declare namespace xr_campfire_point {
  /** Anomaly `class "action_point_campfire"` is also reachable on the `xr_campfire_point` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`xr_campfire_point.action_point_campfire.Method = ...`). */
  export const action_point_campfire: action_point_campfire
  /** Anomaly `class "evaluator_need_job"` is also reachable on the `xr_campfire_point` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`xr_campfire_point.evaluator_need_job.Method = ...`). */
  export const evaluator_need_job: evaluator_need_job
}
