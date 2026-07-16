/** @noSelfInFile */

declare namespace ui_companion_inv {
  export const GUI: AnyTable
  export function functor_inv(t: AnyTable, a: AnyTable, b: AnyTable): boolean
  export function set_item_order(): void
  export function start(npc: CGameObject): void
}

/** @customConstructor UICompanionInv */
declare class UICompanionInv extends CUIScriptWnd {
  block_input: boolean // @generated field — refine type
  btn_giveall: TODO // @generated field — refine type
  btn_takeall: TODO // @generated field — refine type
  cells_npc: TODO // @generated field — refine type
  cells_player: TODO // @generated field — refine type
  delay_time: number // @generated field — refine type
  dialog: TODO // @generated field — refine type
  highlight_npc: TODO // @generated field — refine type
  highlight_player: TODO // @generated field — refine type
  hint_wnd: TODO // @generated field — refine type
  hint_wnd_text: TODO // @generated field — refine type
  msg_wnd: TODO // @generated field — refine type
  msg_wnd_text: TODO // @generated field — refine type
  msg_wnd_timer: TODO // @generated field — refine type
  npc_community: TODO // @generated field — refine type
  npc_icon: TODO // @generated field — refine type
  npc_id: TODO // @generated field — refine type
  npc_info: TODO // @generated field — refine type
  npc_inv: TODO // @generated field — refine type
  npc_money: TODO // @generated field — refine type
  npc_name: TODO // @generated field — refine type
  npc_side: TODO // @generated field — refine type
  npc_weight: TODO // @generated field — refine type
  overweight: TODO // @generated field — refine type
  player_community: TODO // @generated field — refine type
  player_icon: TODO // @generated field — refine type
  player_info: TODO // @generated field — refine type
  player_inv: TODO // @generated field — refine type
  player_money: TODO // @generated field — refine type
  player_name: TODO // @generated field — refine type
  player_side: TODO // @generated field — refine type
  player_weight: TODO // @generated field — refine type
  xml: TODO // @generated field — refine type
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

declare namespace ui_companion_inv {
  /** Anomaly `class "UICompanionInv"` is also reachable on the `ui_companion_inv` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`ui_companion_inv.UICompanionInv.Method = ...`). */
  export const UICompanionInv: UICompanionInv
}
