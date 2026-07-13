/** @noSelfInFile */

declare namespace mob_death {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, st: AnyTable, temp: AnyTable): void
  export function setup_generic_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section, stype: number, temp: AnyTable): void
}

/** @customConstructor mob_death */
declare class mob_death {
  constructor(obj: CGameObject, storage: AnyTable)
  death_callback(victim: CGameObject, who: CGameObject): void
}
