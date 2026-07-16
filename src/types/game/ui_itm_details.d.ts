/** @noSelfInFile */

declare namespace ui_itm_details {
  /** The live item-details UI instance (`nil` until opened). */
  export const GUI: UIItemSheet | undefined
  export function func_details(obj: CGameObject): void
  export function menu_details(obj: CGameObject): string
  export function start(obj: CGameObject): void
}

/** Item detail sheet UI. @customConstructor UIItemSheet */
declare class UIItemSheet extends CUIScriptWnd {
  CC: TODO // @generated field — refine type
  btn_back: TODO // @generated field — refine type
  cap: TODO // @generated field — refine type
  clr_1: TODO // @generated field — refine type
  clr_2: TODO // @generated field — refine type
  clr_3: TODO // @generated field — refine type
  clr_b: TODO // @generated field — refine type
  clr_g: TODO // @generated field — refine type
  clr_o: TODO // @generated field — refine type
  clr_p: TODO // @generated field — refine type
  clr_r: TODO // @generated field — refine type
  clr_y: TODO // @generated field — refine type
  dialog: TODO // @generated field — refine type
  hint_wnd: TODO // @generated field — refine type
  item_info: TODO // @generated field — refine type
  scroll: TODO // @generated field — refine type
  scroll_upgr: TODO // @generated field — refine type
  st_h: TODO // @generated field — refine type
  upgr: TODO // @generated field — refine type
  upgr_info: TODO // @generated field — refine type
  upx: TODO // @generated field — refine type
  xml: TODO // @generated field — refine type
  constructor()
  __finalize(): void
  InitControls(): void
  InitCallBacks(): void
  Reset(obj: CGameObject): void
  Update(): void
  AddIcon(xml: CScriptXmlInit, path: string, offset: number, obj: CGameObject): CUIWindow
  AddText(xml: CScriptXmlInit, path: string, offset: number, txt: string): CUIWindow
  AddSpec(xml: CScriptXmlInit, path: string, offset: number, name: string, value: number | string, clr_1?: number, clr_2?: number, sign?: string, unit?: string): CUIWindow
  AddContainer(xml: CScriptXmlInit, path: string, offset: number, tbl: AnyTable, info: AnyTable): CUIWindow
  AddStat(xml: CScriptXmlInit, path: string, offset: number, obj: CGameObject, stat: string, gr: string): CUIWindow
  AddLine(xml: CScriptXmlInit, offset: number): CUIWindow
  AddSpace(xml: CScriptXmlInit, offset: number): CUIWindow
  AddUpgrades(xml: CScriptXmlInit, tree: AnyTable, obj: CGameObject): void
  Close(): void
  OnKeyboard(dik: number, keyboard_action: number): boolean
}

declare namespace ui_itm_details {
  /** Anomaly `class "UIItemSheet"` is also reachable on the `ui_itm_details` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`ui_itm_details.UIItemSheet.Method = ...`). */
  export const UIItemSheet: UIItemSheet
}
