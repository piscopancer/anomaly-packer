/** @noSelfInFile */

declare namespace xr_combat {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, storage: AnyTable, temp: AnyTable): void
  export function disable_scheme(npc: CGameObject, scheme: string, stype: number): void
  export function set_combat_type(npc: CGameObject, actor: CGameObject, t: AnyTable): void
  export function setup_generic_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section, stype: number, temp: AnyTable): void
}

/** @customConstructor evaluator_check_combat */
declare class evaluator_check_combat extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(name: string, storage: AnyTable)
  evaluate(): boolean
}

/** @customConstructor evaluator_enemy */
declare class evaluator_enemy extends property_evaluator {
  constructor(name: string)
  evaluate(): boolean
}

declare namespace xr_combat {
  /** Anomaly `class "evaluator_check_combat"` is also reachable on the `xr_combat` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`xr_combat.evaluator_check_combat.Method = ...`). */
  export const evaluator_check_combat: evaluator_check_combat
  /** Anomaly `class "evaluator_enemy"` is also reachable on the `xr_combat` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`xr_combat.evaluator_enemy.Method = ...`). */
  export const evaluator_enemy: evaluator_enemy
}
