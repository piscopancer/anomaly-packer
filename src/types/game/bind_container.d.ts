// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace bind_container {
  export const containers: TODO
  export const curBoxID: TODO
  export function access_inventory(obj: TODO): TODO
  export function bind(obj: TODO): TODO
  export function calculate_weight(se_inv_box: TODO, base: TODO): TODO
}

/** @customConstructor container_binder */
declare class container_binder extends object_binder {
  constructor(obj: TODO)
  update(delta: TODO): TODO
  reload(section: TODO): TODO
  reinit(): TODO
  net_spawn(se_abstract: TODO): TODO
  net_destroy(): TODO
  net_save_relevant(): TODO
  save(stpk: TODO): TODO
  load(stpk: TODO): TODO
}
