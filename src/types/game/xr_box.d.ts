/** @noSelfInFile */

declare namespace xr_box {
  export const ph_item_box_manager: AnyTable
  export function create_items(obj: CGameObject, section: Section, number: number, rnd: boolean): void
  export function create_obligatory_items(obj: CGameObject, spawn_ini: system_ini): void
  export function get_box_manager(): AnyTable
}

/** @customConstructor ph_item_box */
declare class ph_item_box {
  constructor()
  spawn_items(obj: CGameObject, who: CGameObject, spawn_ini: system_ini): void
}
