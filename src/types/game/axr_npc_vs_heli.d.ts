/** @noSelfInFile */

declare namespace axr_npc_vs_heli {
  export const actid: number
  export const evaid: number
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, storage: AnyTable, temp?: AnyTable): void
  export function configure_actions(npc: CGameObject, ini: system_ini, scheme: string, section: Section, stype: number, temp?: AnyTable): void
  export function disable_generic_scheme(npc: CGameObject, scheme: string, stype: number): void
  export function is_under_npc_vs_heli(npc: CGameObject): boolean
  export function npc_add_precondition(action: any): void
  export function setup_generic_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section, stype: number, temp?: AnyTable): void
}

/** @customConstructor action_npc_vs_heli */
declare class action_npc_vs_heli extends action_base {
  constructor(npc: CGameObject, name: string, storage: AnyTable)
  initialize(): void
  try_go_cover(npc: CGameObject, ene_pos: vector, r: number): number | undefined
  try_go_backward(npc: CGameObject): number | undefined
  try_to_strafe(npc: CGameObject): number | undefined
  execute(): void
  finalize(): void
}

/** @customConstructor evaluator_npc_vs_heli */
declare class evaluator_npc_vs_heli extends property_evaluator {
  constructor(npc: CGameObject, name: string, storage: AnyTable)
  evaluate(): boolean
}
