/** @noSelfInFile */

declare namespace ui_companion_inv {
  export const GUI: TODO
  export function functor_inv(t: TODO, a: TODO, b: TODO): TODO
  export function set_item_order(): void
  export function start(npc: TODO): void
}

/** @customConstructor UICompanionInv */
declare class UICompanionInv extends CUIScriptWnd {
  constructor()
  __finalize(): void
  InitControls(): void
  InitCallBacks(): void
  Update(): void
  SetMsg(text: string, tmr: TODO): void
  SetHint(text: string, pos: TODO): void
  Reset(npc: CGameObject): void
  ResetWeight(npc: TODO, inv_table: TODO): void
  InitInventoryCells(s_table: TODO, s_scroll: TODO, s_cells: TODO, callback: TODO): TODO
  Delay(npc: TODO, to_npc: TODO): boolean
  OnInvClicked_player(): TODO
  OnInvClicked_comp(): TODO
  OnBtn_TakeAll(): TODO
  OnBtn_GiveAll(): TODO
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
  Close(): void
}
