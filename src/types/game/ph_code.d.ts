/** @noSelfInFile */

declare namespace ph_code {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, storage: AnyTable): void
  export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section, gulag_name: string): void
}

/** @customConstructor codepad */
declare class codepad {
  constructor(obj: CGameObject, storage: AnyTable)
  reset_scheme(): void
  update(delta: number): void
  use_callback(obj: CGameObject, who: CGameObject): void
  OnNumberReceive(text: string): void
  deactivate(): void
}
