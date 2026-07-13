/** @noSelfInFile */

declare namespace sr_timer {
  export function add_to_binder(obj: CGameObject, ini: system_ini, scheme: string, section: Section, storage: AnyTable): void
  export function parse_data(npc: CGameObject, s: string): AnyTable
  export function set_scheme(obj: CGameObject, ini: system_ini, scheme: string, section: Section, gulag_name: string): void
  export function time2str(n: number): string
}

/** @customConstructor action_timer */
declare class action_timer {
  constructor(obj: CGameObject, storage: AnyTable)
  update(delta: number): void
  deactivate(delta: number): void
}
