/** @noSelfInFile */

declare namespace axr_radio_in_heli {
  export const actid: number
  export const evaid: number
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, storage: AnyTable, temp?: AnyTable): void
  export function configure_actions(npc: CGameObject, ini: system_ini, scheme: string, section: Section, stype: number, temp?: AnyTable): void
  export function disable_generic_scheme(npc: CGameObject, scheme: string, stype: number): void
  export function npc_add_precondition(action: any): void
  export function setup_generic_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section, stype: number, temp?: AnyTable): void
}

/** @customConstructor action_radio_in_heli */
declare class action_radio_in_heli extends action_base {
  st: TODO // @generated field — refine type
  constructor(npc: CGameObject, name: string, storage: AnyTable)
  initialize(): void
  try_go_cover(npc: CGameObject, ene_pos: vector): number | undefined
  execute(): void
  finalize(): void
}

/** @customConstructor evaluator_radio_in_heli */
declare class evaluator_radio_in_heli extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(npc: CGameObject, name: string, storage: AnyTable)
  evaluate(): boolean
}

declare namespace axr_radio_in_heli {
  /** Anomaly `class "action_radio_in_heli"` is also reachable on the `axr_radio_in_heli` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`axr_radio_in_heli.action_radio_in_heli.Method = ...`). */
  export const action_radio_in_heli: action_radio_in_heli
  /** Anomaly `class "evaluator_radio_in_heli"` is also reachable on the `axr_radio_in_heli` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`axr_radio_in_heli.evaluator_radio_in_heli.Method = ...`). */
  export const evaluator_radio_in_heli: evaluator_radio_in_heli
}
