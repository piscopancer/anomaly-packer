/** @noSelfInFile */

declare namespace ui_companion_inv {
  export const GUI: AnyTable
  export function functor_inv(t: AnyTable, a: AnyTable, b: AnyTable): boolean
  export function set_item_order(): void
  export function start(npc: CGameObject): void
}

/** @customConstructor UICompanionInv */
declare class UICompanionInv extends CUIScriptWnd {
  constructor()
  __finalize(): void
  InitControls(): void
  InitCallBacks(): void
  Update(): void
  SetMsg(text: string, tmr: number): void
  SetHint(text: string, pos: vector): void
  Reset(npc: CGameObject): void
  ResetWeight(npc: CGameObject, inv_table: AnyTable): void
  InitInventoryCells(s_table: AnyTable, s_scroll: AnyTable, s_cells: AnyTable, callback: AnyTable): void
  Delay(npc: CGameObject, to_npc: CGameObject): boolean
  OnInvClicked_player(): void
  OnInvClicked_comp(): void
  OnBtn_TakeAll(): void
  OnBtn_GiveAll(): void
  OnKeyboard(dik: number, keyboard_action: number): boolean
  Close(): void
}
