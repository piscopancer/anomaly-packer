/** @noSelfInFile */

declare namespace mob_camp {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, storage: AnyTable): void
  export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section, gulag_name: string): void
}

/** @customConstructor mob_camp */
declare class mob_camp {
  constructor(obj: CGameObject, storage: AnyTable)
  reset_scheme(): void
  update(delta: number): void
  select_current_home_point(first_call: boolean): void
  select_state(): void
  execute_state(): void
  deactivate(): void
  net_destroy(): void
}
