/** @noSelfInFile */

declare namespace xr_death {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, st: AnyTable, temp: AnyTable): void
  export function reset_generic_scheme(npc: CGameObject, scheme: string, section: Section, stype: number, st: AnyTable): void
  export function setup_generic_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section, stype: number, temp: AnyTable): void
}

/** @customConstructor action_process_death */
declare class action_process_death {
  constructor(obj: CGameObject, storage: AnyTable)
  death_callback(victim: CGameObject, who: CGameObject): void
}
