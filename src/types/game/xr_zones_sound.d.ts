/** @noSelfInFile */

declare namespace xr_zones_sound {
  export function r_num(spawn_ini: system_ini, section: Section, line: string, default_: number): number
  export function table_include(dest: AnyTable, src: AnyTable): void
}

/** @customConstructor zone_sound */
declare class zone_sound {
  constructor(zone: CGameObject, binder: AnyTable, ini: system_ini)
  on_enter(obj: CGameObject): void
}
