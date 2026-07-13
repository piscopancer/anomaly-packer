/** @noSelfInFile */

declare namespace sr_teleport {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: string, storage: AnyTable): void
  export function set_scheme(obj: CGameObject, ini: system_ini, scheme: string, section: string, gulag_name: string): void
}

/** @customConstructor action_teleport */
declare class action_teleport {
  constructor(obj: CGameObject, storage: AnyTable)
  update(delta: number): void
}
