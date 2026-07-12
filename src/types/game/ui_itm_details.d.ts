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
