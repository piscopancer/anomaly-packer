/** @noSelfInFile */

declare namespace axr_stalker_panic {
  export const actid: number
  export const evaid: number
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, storage: AnyTable, temp?: AnyTable): void
  export function configure_actions(npc: CGameObject, ini: system_ini, scheme: string, section: Section, stype: number, temp?: AnyTable): void
  export function disable_generic_scheme(npc: CGameObject, scheme: string, stype: number): void
  export function npc_add_precondition(action: any): void
  export function setup_generic_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section, stype: number, temp?: AnyTable): void
}

/** @customConstructor action_stalker_panic */
declare class action_stalker_panic extends action_base {
  st: TODO // @generated field — refine type
  stand: boolean // @generated field — refine type
  constructor(npc: CGameObject, name: string, storage: AnyTable)
  initialize(): void
  try_go_cover(npc: CGameObject, ene_pos: vector): void
  try_to_strafe(npc: CGameObject): void
  try_to_strafe_behind_enemy(npc: CGameObject, enemy: CGameObject, ene_pos: vector, dist: number): void
  try_go_backward(npc: CGameObject): void
  try_go_cover_backward(npc: CGameObject, ene_pos: vector): void
  execute(): void
  finalize(): void
}

/** @customConstructor evaluator_stalker_panic */
declare class evaluator_stalker_panic extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(npc: CGameObject, name: string, storage: AnyTable)
  evaluate(): boolean
}

declare namespace axr_stalker_panic {
  /** Anomaly `class "action_stalker_panic"` is also reachable on the `axr_stalker_panic` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`axr_stalker_panic.action_stalker_panic.Method = ...`). */
  export const action_stalker_panic: action_stalker_panic
  /** Anomaly `class "evaluator_stalker_panic"` is also reachable on the `axr_stalker_panic` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`axr_stalker_panic.evaluator_stalker_panic.Method = ...`). */
  export const evaluator_stalker_panic: evaluator_stalker_panic
}
