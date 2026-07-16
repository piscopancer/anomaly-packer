/** @noSelfInFile */

declare namespace axr_npc_vs_box {
  export const actid: number
  export const evaid: number
  export const selected: AnyTable
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, storage: AnyTable, temp?: AnyTable): void
  export function configure_actions(npc: CGameObject, ini: system_ini, scheme: string, section: Section, stype: number, temp?: AnyTable): void
  export function disable_generic_scheme(npc: CGameObject, scheme: string, stype: number): void
  export function npc_add_precondition(action: any): void
  export function setup_generic_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section, stype: number, temp?: AnyTable): void
}

/** @customConstructor action_npc_vs_box */
declare class action_npc_vs_box extends action_base {
  st: TODO // @generated field — refine type
  constructor(npc: CGameObject, name: string, storage: AnyTable)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor evaluator_npc_vs_box */
declare class evaluator_npc_vs_box extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(npc: CGameObject, name: string, storage: AnyTable)
  evaluate(): boolean
}

declare namespace axr_npc_vs_box {
  /** Anomaly `class "action_npc_vs_box"` is also reachable on the `axr_npc_vs_box` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`axr_npc_vs_box.action_npc_vs_box.Method = ...`). */
  export const action_npc_vs_box: action_npc_vs_box
  /** Anomaly `class "evaluator_npc_vs_box"` is also reachable on the `axr_npc_vs_box` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`axr_npc_vs_box.evaluator_npc_vs_box.Method = ...`). */
  export const evaluator_npc_vs_box: evaluator_npc_vs_box
}
