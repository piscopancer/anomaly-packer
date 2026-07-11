/** @noSelfInFile */

declare namespace xr_box {
  export const ph_item_box_manager: TODO
  export function create_items(obj: TODO, section: TODO, number: number, rnd: TODO): void
  export function create_obligatory_items(obj: TODO, spawn_ini: TODO): void
  export function get_box_manager(): TODO
}

/** @customConstructor ph_item_box */
declare class ph_item_box {
  constructor()
  spawn_items(obj: TODO, who: TODO, spawn_ini: TODO): void
}
