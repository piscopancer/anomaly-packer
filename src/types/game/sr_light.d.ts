/** @noSelfInFile */

declare namespace sr_light {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, storage: AnyTable): void
  export function check_light(stalker: CGameObject): void
  export function clean_up(): void
  export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section, gulag_name: string): void
}

/** @customConstructor action_light */
declare class action_light {
  constructor(obj: CGameObject, storage: AnyTable)
  reset_scheme(): void
  update(delta: number): void
  check_stalker(stalker: CGameObject): boolean
}
