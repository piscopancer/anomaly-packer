// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace ui_companion_inv {
  export const GUI: TODO
  export function functor_inv(t: TODO, a: TODO, b: TODO): TODO
  export function set_item_order(): TODO
  export function start(npc: TODO): TODO
}

/** @customConstructor UICompanionInv */
declare class UICompanionInv extends CUIScriptWnd {
  constructor(arg0: TODO)
  __finalize(): TODO
  InitControls(): TODO
  InitCallBacks(): TODO
  Update(): TODO
  SetMsg(text: TODO, tmr: TODO): TODO
  SetHint(text: TODO, pos: TODO): TODO
  Reset(npc: TODO): TODO
  ResetWeight(npc: TODO, inv_table: TODO): TODO
  InitInventoryCells(s_table: TODO, s_scroll: TODO, s_cells: TODO, callback: TODO): TODO
  Delay(npc: TODO, to_npc: TODO): TODO
  OnInvClicked_player(): TODO
  OnInvClicked_comp(): TODO
  OnBtn_TakeAll(): TODO
  OnBtn_GiveAll(): TODO
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
  Close(): TODO
}
