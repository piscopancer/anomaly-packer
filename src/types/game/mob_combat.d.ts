/** @noSelfInFile */

declare namespace mob_combat {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, st: AnyTable, temp: AnyTable): void
  export function disable_generic_scheme(npc: CGameObject, scheme: string, stype: number): void
  export function setup_generic_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section, stype: number, temp: AnyTable): void
}

/** @customConstructor mob_combat */
declare class mob_combat {
  object: TODO // @generated field — refine type
  st: TODO // @generated field — refine type
  constructor(obj: CGameObject, storage: AnyTable)
  combat_callback(): void
}

declare namespace mob_combat {
  /** Anomaly `class "mob_combat"` is also reachable on the `mob_combat` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`mob_combat.mob_combat.Method = ...`). */
  export const mob_combat: mob_combat
}
