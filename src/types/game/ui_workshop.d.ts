/** @noSelfInFile */

declare namespace ui_workshop {
  /** The live workshop UI instance (`nil` until opened). */
  export const GUI: UIWorkshop | undefined
  /** Toolkit definitions for the workshop, keyed by toolkit. */
  export const workshop_toolkits: AnyTable
  export function AdjustCon(sec_part: string, con: number, num: number, is_outfit?: boolean): number
  export function get_workshop_ui(...args: any[]): UIWorkshop
  export function print_ws(fmt: string, ...args: any[]): void
  export function SetTip(tip: string, warning: string, solution: string, sec: Section, pass: boolean, XMLtxt: CScriptXmlInit): void
}

/** @customConstructor UIWorkshop */
declare class UIWorkshop extends CUIScriptWnd {
  constructor()
  __finalize(): void
  InitControls(): void
  InitCallBacks(): void
  Reset(owner: CGameObject, mechanic: CGameObject, toolkits_workshop: AnyTable, dbg?: boolean): void
  OnButton_state(): void
  OnButton_repair(): void
  OnButton_upgrade(): void
  OnButton_craft(): void
  Close(): void
}

/** @customConstructor UIWorkshopCraft */
declare class UIWorkshopCraft extends CUIScriptWnd {
  constructor(xml: CScriptXmlInit, owner: CGameObject, x: number, y: number)
  __finalize(): void
  InitControls(x?: number, y?: number): void
  InitCallBacks(): void
  Reset(): void
  Update(): void
  LoadRecipes(): void
  ListRecipes(): void
  ListItems(): void
  On_CC_Mouse1(cont: string, idx: number): void
  UpdateItem(n: number, sec: Section, amount: number, result: any, toolkit_idx: number, toolkit_sec: string): void
  ShowComponents(sh: boolean): void
  Close(): void
  Craft(): void
  OnKeyboard(dik: number, keyboard_action: number): boolean
}

/** @customConstructor UIWorkshopRepair */
declare class UIWorkshopRepair extends CUIScriptWnd {
  constructor(xml: CScriptXmlInit, owner: CGameObject, x: number, y: number)
  __finalize(): void
  InitControls(x?: number, y?: number): void
  InitCallBacks(): void
  Reset(): void
  Update(): void
  ListInventory(): void
  ListPartScheme(): void
  ListSpareParts(): void
  ReplacePart(): void
  UpdateToolkits(num: number): number
  On_CC_Mouse1(cont: string, idx: number): void
  Close(): void
  Repair(): void
  OnKeyboard(dik: number, keyboard_action: number): boolean
}

/** @customConstructor UIWorkshopState */
declare class UIWorkshopState extends CUIScriptWnd {
  constructor(xml: CScriptXmlInit, owner: CGameObject, x: number, y: number)
  __finalize(): void
  InitControls(x?: number, y?: number): void
  InitCallBacks(): void
  Reset(): void
  Close(): void
  OnKeyboard(dik: number, keyboard_action: number): boolean
}

/** @customConstructor UIWorkshopUpgrade */
declare class UIWorkshopUpgrade extends CUIScriptWnd {
  constructor(xml: CScriptXmlInit, owner: CGameObject, x: number, y: number)
  __finalize(): void
  InitControls(x?: number, y?: number): void
  InitCallBacks(): void
  Reset(): void
  Update(): void
  On_CC_Mouse1(cont: string, idx: number): void
  LoadInventory(): void
  ListUpgradeTree(): void
  EvaluateUpgrades(): void
  EvaluateUpgrade(row: number, col: number, info: AnyTable): void
  GetWorkshopkit(obj: CGameObject): any
  CollectUpgradekits(sec_add: string): AnyTable
  SetkitInfo(sec: Section, XML_txt: CScriptXmlInit, XML_ico: CScriptXmlInit, XML_ico_tmp: CScriptXmlInit): void
  DischargeKit(sec: Section): void
  Close(): void
  Upgrade(): void
  OnKeyboard(dik: number, keyboard_action: number): boolean
}
