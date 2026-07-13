/** @noSelfInFile */

declare namespace sr_silence {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, storage: AnyTable): void
  export function set_scheme(obj: CGameObject, ini: system_ini, scheme: string, section: Section, gulag_name: string): void
}

/** @customConstructor CSilence_zone */
declare class CSilence_zone {
  constructor(obj: CGameObject, storage: AnyTable)
  reset_scheme(): void
  update(): void
}
