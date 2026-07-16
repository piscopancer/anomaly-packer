/** @noSelfInFile */

declare namespace mob_death {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, st: AnyTable, temp: AnyTable): void
  export function setup_generic_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section, stype: number, temp: AnyTable): void
}

/** @customConstructor mob_death */
declare class mob_death {
  object: TODO // @generated field — refine type
  st: TODO // @generated field — refine type
  constructor(obj: CGameObject, storage: AnyTable)
  death_callback(victim: CGameObject, who: CGameObject): void
}

declare namespace mob_death {
  /** Anomaly `class "mob_death"` is also reachable on the `mob_death` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`mob_death.mob_death.Method = ...`). */
  export const mob_death: mob_death
}
