// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace item_repair {
  export const GUI: TODO
  export function func_tool(obj: TODO): TODO
  export function menu_tool(obj: TODO): TODO
  export function on_game_start(): TODO
  export function start(obj: TODO, sec: TODO): TODO
}

/** @customConstructor UIRepair */
declare class UIRepair extends CUIScriptWnd {
  constructor(obj: TODO, section: TODO)
  __finalize(): TODO
  InitControls(): TODO
  InitCallBacks(): TODO
  Reset(obj: TODO, section: TODO): TODO
  InitInventory(n: TODO): TODO
  Update(): TODO
  On_CC_Mouse1(cont: TODO, idx: TODO): TODO
  OnItemSelect(n: TODO): TODO
  OnRepair(): TODO
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
  OnCancel(): TODO
}
