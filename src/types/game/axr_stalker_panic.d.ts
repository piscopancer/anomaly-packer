/** @noSelfInFile */

declare namespace axr_stalker_panic {
  export const actid: number
  export const evaid: number
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: string, storage: AnyTable, temp?: AnyTable): void
  export function configure_actions(npc: CGameObject, ini: system_ini, scheme: string, section: string, stype: number, temp?: AnyTable): void
  export function disable_generic_scheme(npc: CGameObject, scheme: string, stype: number): void
  export function npc_add_precondition(action: any): void
  export function setup_generic_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: string, stype: number, temp?: AnyTable): void
}

/** @customConstructor action_stalker_panic */
declare class action_stalker_panic extends action_base {
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
  constructor(npc: CGameObject, name: string, storage: AnyTable)
  evaluate(): boolean
}
