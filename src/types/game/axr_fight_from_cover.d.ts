/** @noSelfInFile */

declare namespace axr_fight_from_cover {
  export const actid: number
  export const evaid: number
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: string, storage: AnyTable, temp?: AnyTable): void
  export function configure_actions(npc: CGameObject, ini: system_ini, scheme: string, section: string, stype: number, temp?: AnyTable): void
  export function disable_generic_scheme(npc: CGameObject, scheme: string, stype: number): void
  export function npc_add_precondition(action: any): void
  export function setup_generic_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: string, stype: number, temp?: AnyTable): void
}

/** @customConstructor action_fight_from_cover */
declare class action_fight_from_cover extends action_base {
  constructor(npc: CGameObject, name: string, storage: AnyTable)
  initialize(): void
  try_go_cover(npc: CGameObject, ene_pos: vector): number | undefined
  try_go_backward(npc: CGameObject): number | undefined
  try_to_strafe(npc: CGameObject): number | undefined
  execute(): void
  finalize(): void
}

/** @customConstructor evaluator_fight_from_cover */
declare class evaluator_fight_from_cover extends property_evaluator {
  constructor(npc: CGameObject, name: string, storage: AnyTable)
  evaluate(): boolean
}
