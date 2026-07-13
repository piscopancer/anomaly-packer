/** @noSelfInFile */

declare namespace rx_ff {
  export const actid: number
  export const evaid: number
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, st: AnyTable, temp?: AnyTable): void
  export function configure_actions(npc: CGameObject, ini: system_ini, scheme: string, section: Section, stype: number, temp?: AnyTable): void
  export function disable_generic_scheme(npc: CGameObject, scheme: string, stype: number): void
  export function npc_add_precondition(action: any): void
  export function setup_generic_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section, stype: number, temp?: AnyTable): void
}

/** @customConstructor action_verso */
declare class action_verso extends action_base {
  constructor(npc: CGameObject, name: string, storage: AnyTable)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor evaluator_dont_shoot */
declare class evaluator_dont_shoot extends property_evaluator {
  constructor(npc: CGameObject, name: string, storage: AnyTable)
  check_in_los(friend: CGameObject, be: CGameObject, be_pos: vector): boolean
  check_all_in_los(): boolean
  evaluate(): boolean
}
