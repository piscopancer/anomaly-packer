/** @noSelfInFile */

declare namespace heli_look {
  export function get_heli_looker(obj: CGameObject): heli_look
}

/** @customConstructor heli_look */
declare class heli_look {
  look_point: TODO // @generated field — refine type
  look_state: TODO // @generated field — refine type
  obj: TODO // @generated field — refine type
  constructor(obj: CGameObject)
  calc_look_point(dest_point: vector, look_state: boolean): void
}

declare namespace heli_look {
  /** Anomaly `class "heli_look"` is also reachable on the `heli_look` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`heli_look.heli_look.Method = ...`). */
  export const heli_look: heli_look
}
