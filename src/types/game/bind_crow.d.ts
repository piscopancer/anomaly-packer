// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace bind_crow {
  export const crow_counter: TODO
  export const crow_storage: TODO
  export function bind(obj: TODO): TODO
}

/** @customConstructor crow_binder */
declare class crow_binder extends object_binder {
  constructor(obj: TODO)
  update(delta: TODO): TODO
  use_callback(obj: TODO, who: TODO): TODO
  reload(section: TODO): TODO
  reinit(): TODO
  net_spawn(se_abstract: TODO): TODO
  net_destroy(): TODO
  death_callback(victim: TODO, who: TODO): TODO
  net_save_relevant(): TODO
  save(stpk: TODO): TODO
  load(reader: TODO): TODO
}
