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

declare namespace xr_box {
  /** Anomaly `class "ph_item_box"` is also reachable on the `xr_box` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`xr_box.ph_item_box.Method = ...`). */
  export const ph_item_box: ph_item_box
}
