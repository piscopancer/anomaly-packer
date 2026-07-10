// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace bind_camp {
  export const camps: TODO
  export function bind(obj: TODO): TODO
}

/** @customConstructor camp_binder */
declare class camp_binder extends object_binder {
  constructor(obj: TODO, char_ini: TODO)
  reload(section: TODO): TODO
  reinit(): TODO
  net_spawn(se_abstract: TODO): TODO
  net_destroy(): TODO
  update(delta: TODO): TODO
  net_save_relevant(): TODO
  save(packet: TODO): TODO
  load(reader: TODO): TODO
}
