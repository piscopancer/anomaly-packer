/** @noSelfInFile */

declare namespace xr_cover {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, storage: AnyTable): void
  export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section, gulag_name: string): void
}

/** @customConstructor action_cover */
declare class action_cover extends action_base {
  cover_position: TODO // @generated field — refine type
  cover_vertex_id: TODO // @generated field — refine type
  enemy_random_position: TODO // @generated field — refine type
  st: TODO // @generated field — refine type
  constructor(npc_name: string, action_name: string, storage: AnyTable)
  initialize(): void
  activate_scheme(): void
  execute(): void
  finalize(): void
  position_riched(): boolean
}

/** @customConstructor evaluator_need_cover */
declare class evaluator_need_cover extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(storage: AnyTable, name: string)
  evaluate(): boolean
}

declare namespace xr_cover {
  /** Anomaly `class "action_cover"` is also reachable on the `xr_cover` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`xr_cover.action_cover.Method = ...`). */
  export const action_cover: action_cover
  /** Anomaly `class "evaluator_need_cover"` is also reachable on the `xr_cover` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`xr_cover.evaluator_need_cover.Method = ...`). */
  export const evaluator_need_cover: evaluator_need_cover
}
