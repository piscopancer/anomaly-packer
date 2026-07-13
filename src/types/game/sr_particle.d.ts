/** @noSelfInFile */

declare namespace sr_particle {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, storage: AnyTable): void
  export function set_scheme(obj: CGameObject, ini: system_ini, scheme: string, section: Section, gulag_name: string): void
}

/** @customConstructor action_particle */
declare class action_particle {
  constructor(obj: CGameObject, storage: AnyTable)
  reset_scheme(): void
  update(delta: number): void
  is_end(): boolean
  update_mode_1(): void
  update_mode_2(): void
  deactivate(): void
}
