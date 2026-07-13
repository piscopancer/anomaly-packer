/** @noSelfInFile */

declare namespace xr_combat {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: string, storage: AnyTable, temp: AnyTable): void
  export function disable_scheme(npc: CGameObject, scheme: string, stype: number): void
  export function set_combat_type(npc: CGameObject, actor: CGameObject, t: AnyTable): void
  export function setup_generic_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: string, stype: number, temp: AnyTable): void
}

/** @customConstructor evaluator_check_combat */
declare class evaluator_check_combat extends property_evaluator {
  constructor(name: string, storage: AnyTable)
  evaluate(): boolean
}

/** @customConstructor evaluator_enemy */
declare class evaluator_enemy extends property_evaluator {
  constructor(name: string)
  evaluate(): boolean
}
