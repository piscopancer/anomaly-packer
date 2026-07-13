/** @noSelfInFile */

declare namespace sr_monster {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: string, storage: AnyTable): void
  export function set_scheme(obj: CGameObject, ini: system_ini, scheme: string, section: string, gulag_name: string): void
}

/** @customConstructor fake_monster */
declare class fake_monster {
  constructor(obj: CGameObject, storage: AnyTable)
  reset_scheme(): void
  update(delta: number): void
  on_enter(): void
  reset_path(): void
  next_point(): number
  set_positions(): void
}
