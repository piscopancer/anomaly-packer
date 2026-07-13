/** @noSelfInFile */

declare namespace ph_death {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, storage: AnyTable): void
  export function disable_scheme(npc: CGameObject, scheme: string): void
  export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section, gulag_name: string): void
}

/** @customConstructor ph_on_death */
declare class ph_on_death {
  constructor(obj: CGameObject, storage: AnyTable)
  reset_scheme(): void
  update(delta: number): void
  death_callback(obj: CGameObject, who: CGameObject): void
}
