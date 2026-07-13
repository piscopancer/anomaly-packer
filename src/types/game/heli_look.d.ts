/** @noSelfInFile */

declare namespace heli_look {
  export function get_heli_looker(obj: CGameObject): heli_look
}

/** @customConstructor heli_look */
declare class heli_look {
  constructor(obj: CGameObject)
  calc_look_point(dest_point: vector, look_state: boolean): void
}
