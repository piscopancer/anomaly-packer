/** @noSelfInFile */

declare namespace mob_combat {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, st: AnyTable, temp: AnyTable): void
  export function disable_generic_scheme(npc: CGameObject, scheme: string, stype: number): void
  export function setup_generic_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section, stype: number, temp: AnyTable): void
}

/** @customConstructor mob_combat */
declare class mob_combat {
  constructor(obj: CGameObject, storage: AnyTable)
  combat_callback(): void
}
