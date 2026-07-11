/** @noSelfInFile */

declare namespace ui_workshop {
  export const GUI: TODO
  export const workshop_toolkits: TODO
  export function AdjustCon(sec_part: TODO, con: TODO, num: TODO, is_outfit: TODO): TODO
  export function get_workshop_ui(...args: TODO[]): TODO
  export function print_ws(fmt: TODO, ...args: TODO[]): void
  export function SetTip(tip: TODO, warning: TODO, solution: TODO, sec: TODO, pass: TODO, XMLtxt: TODO): void
}

/** @customConstructor UIWorkshop */
declare class UIWorkshop extends CUIScriptWnd {
  constructor()
  __finalize(): void
  InitControls(): void
  InitCallBacks(): void
  Reset(owner: TODO, mechanic: TODO, toolkits_workshop: TODO, dbg: TODO): void
  OnButton_state(): void
  OnButton_repair(): void
  OnButton_upgrade(): void
  OnButton_craft(): void
  Close(): void
}

/** @customConstructor UIWorkshopCraft */
declare class UIWorkshopCraft extends CUIScriptWnd {
  constructor(xml: TODO, owner: TODO, x: TODO, y: TODO)
  __finalize(): void
  InitControls(x: TODO, y: TODO): void
  InitCallBacks(): void
  Reset(): void
  Update(): void
  LoadRecipes(): void
  ListRecipes(): void
  ListItems(): TODO
  On_CC_Mouse1(cont: TODO, idx: TODO): void
  UpdateItem(n: TODO, sec: TODO, amount: TODO, result: TODO, toolkit_idx: TODO, toolkit_sec: TODO): void
  ShowComponents(sh: TODO): void
  Close(): void
  Craft(): void
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
}

/** @customConstructor UIWorkshopRepair */
declare class UIWorkshopRepair extends CUIScriptWnd {
  constructor(xml: TODO, owner: TODO, x: TODO, y: TODO)
  __finalize(): void
  InitControls(x: TODO, y: TODO): void
  InitCallBacks(): void
  Reset(): void
  Update(): void
  ListInventory(): void
  ListPartScheme(): void
  ListSpareParts(): void
  ReplacePart(): void
  UpdateToolkits(num: TODO): TODO
  On_CC_Mouse1(cont: TODO, idx: TODO): void
  Close(): void
  Repair(): void
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
}

/** @customConstructor UIWorkshopState */
declare class UIWorkshopState extends CUIScriptWnd {
  constructor(xml: TODO, owner: TODO, x: TODO, y: TODO)
  __finalize(): void
  InitControls(x: TODO, y: TODO): void
  InitCallBacks(): void
  Reset(): void
  Close(): void
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
}

/** @customConstructor UIWorkshopUpgrade */
declare class UIWorkshopUpgrade extends CUIScriptWnd {
  constructor(xml: TODO, owner: TODO, x: TODO, y: TODO)
  __finalize(): void
  InitControls(x: TODO, y: TODO): void
  InitCallBacks(): void
  Reset(): void
  Update(): void
  On_CC_Mouse1(cont: TODO, idx: TODO): void
  LoadInventory(): void
  ListUpgradeTree(): void
  EvaluateUpgrades(): void
  EvaluateUpgrade(row: TODO, col: TODO, info: TODO): void
  GetWorkshopkit(obj: TODO): TODO
  CollectUpgradekits(sec_add: TODO): TODO
  SetkitInfo(sec: TODO, XML_txt: TODO, XML_ico: TODO, XML_ico_tmp: TODO): void
  DischargeKit(sec: TODO): void
  Close(): void
  Upgrade(): void
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
}
