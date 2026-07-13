/** @noSelfInFile */

declare namespace mob_remark {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: string, storage: AnyTable): void
  export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: string, gulag_name: string): void
}

/** @customConstructor mob_remark */
declare class mob_remark {
  constructor(obj: CGameObject, storage: AnyTable)
  reset_scheme(): void
  update(delta: number): void
}
