/** @noSelfInFile */

declare namespace axr_npc_vs_box {
  export const actid: number
  export const evaid: number
  export const selected: AnyTable
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: string, storage: AnyTable, temp?: AnyTable): void
  export function configure_actions(npc: CGameObject, ini: system_ini, scheme: string, section: string, stype: number, temp?: AnyTable): void
  export function disable_generic_scheme(npc: CGameObject, scheme: string, stype: number): void
  export function npc_add_precondition(action: any): void
  export function setup_generic_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: string, stype: number, temp?: AnyTable): void
}

/** @customConstructor action_npc_vs_box */
declare class action_npc_vs_box extends action_base {
  constructor(npc: CGameObject, name: string, storage: AnyTable)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor evaluator_npc_vs_box */
declare class evaluator_npc_vs_box extends property_evaluator {
  constructor(npc: CGameObject, name: string, storage: AnyTable)
  evaluate(): boolean
}
