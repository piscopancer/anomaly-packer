/** @noSelfInFile */

declare namespace sr_deimos {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, storage: AnyTable): void
  export function check_disable_bound(obj: CGameObject): boolean
  export function check_intensity_delta(obj: CGameObject): boolean
  export function check_lower_bound(obj: CGameObject): boolean
  export function check_upper_bound(obj: CGameObject): boolean
  export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section, gulag_name: string): void
}

/** @customConstructor CDeimos */
declare class CDeimos {
  constructor(obj: CGameObject, storage: AnyTable)
  update(delta: number): void
}
