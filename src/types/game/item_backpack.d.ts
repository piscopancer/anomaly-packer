// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace item_backpack {
  export const GUI: TODO
  export function actor_on_item_take_from_box(box: TODO, obj: TODO): TODO
  export function actor_on_item_use(obj: TODO): TODO
  export function func_stash(obj: TODO): TODO
  export function is_ammo_for_wpn(sec: TODO): TODO
  export function is_in_slot(obj: TODO): TODO
  export function menu_stash(obj: TODO): TODO
  export function on_game_start(): TODO
  export function start(obj: TODO): TODO
}

/** @customConstructor UICreateStash */
declare class UICreateStash extends CUIScriptWnd {
  constructor(arg0: TODO)
  __finalize(): TODO
  InitControls(): TODO
  InitCallBacks(): TODO
  Reset(obj: TODO): TODO
  Update(): TODO
  OnAccept(): TODO
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
  Close(): TODO
}
