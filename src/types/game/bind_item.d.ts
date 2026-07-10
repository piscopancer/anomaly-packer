// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace bind_item {
  export function bind(obj: TODO): TODO
  export function func_separate(obj: TODO): TODO
  export function menu_separate(obj: TODO): TODO
  export function on_game_start(): TODO
  export function print_dbg(txt: TODO, ...args: TODO[]): TODO
}

/** @customConstructor item_binder */
declare class item_binder extends object_binder {
  constructor(obj: TODO)
  update(delta: TODO): TODO
  reload(section: TODO): TODO
  reinit(): TODO
  net_spawn(se_abstract: TODO): TODO
  net_destroy(): TODO
  save(stpk: TODO): TODO
  load(stpk: TODO): TODO
}
