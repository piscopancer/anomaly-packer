// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace ui_itm_details {
  export const GUI: TODO
  export function func_details(obj: TODO): TODO
  export function menu_details(obj: TODO): TODO
  export function start(obj: TODO): TODO
}

/** @customConstructor UIItemSheet */
declare class UIItemSheet extends CUIScriptWnd {
  constructor(arg0: TODO)
  __finalize(): TODO
  InitControls(): TODO
  InitCallBacks(): TODO
  Reset(obj: TODO): TODO
  Update(): TODO
  AddIcon(xml: TODO, path: TODO, offset: TODO, obj: TODO): TODO
  AddText(xml: TODO, path: TODO, offset: TODO, txt: TODO): TODO
  AddSpec(xml: TODO, path: TODO, offset: TODO, name: TODO, value: TODO, clr_1: TODO, clr_2: TODO, sign: TODO, unit: TODO): TODO
  AddContainer(xml: TODO, path: TODO, offset: TODO, tbl: TODO, info: TODO): TODO
  AddStat(xml: TODO, path: TODO, offset: TODO, obj: TODO, stat: TODO, gr: TODO): TODO
  AddLine(xml: TODO, offset: TODO): TODO
  AddSpace(xml: TODO, offset: TODO): TODO
  AddUpgrades(xml: TODO, tree: TODO, obj: TODO): TODO
  Close(): TODO
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
}
