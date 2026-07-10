// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace ui_workshop {
  export const GUI: TODO
  export const workshop_toolkits: TODO
  export function AdjustCon(sec_part: TODO, con: TODO, num: TODO, is_outfit: TODO): TODO
  export function get_workshop_ui(...args: TODO[]): TODO
  export function print_ws(fmt: TODO, ...args: TODO[]): TODO
  export function SetTip(tip: TODO, warning: TODO, solution: TODO, sec: TODO, pass: TODO, XMLtxt: TODO): TODO
}

/** @customConstructor UIWorkshop */
declare class UIWorkshop extends CUIScriptWnd {
  constructor(arg0: TODO)
  __finalize(): TODO
  InitControls(): TODO
  InitCallBacks(): TODO
  Reset(owner: TODO, mechanic: TODO, toolkits_workshop: TODO, dbg: TODO): TODO
  OnButton_state(): TODO
  OnButton_repair(): TODO
  OnButton_upgrade(): TODO
  OnButton_craft(): TODO
  Close(): TODO
}

/** @customConstructor UIWorkshopCraft */
declare class UIWorkshopCraft extends CUIScriptWnd {
  constructor(xml: TODO, owner: TODO, x: TODO, y: TODO, owner_: TODO, x_: TODO, y_: TODO)
  __finalize(): TODO
  InitControls(x: TODO, y: TODO): TODO
  InitCallBacks(): TODO
  Reset(): TODO
  Update(): TODO
  LoadRecipes(): TODO
  ListRecipes(): TODO
  ListItems(): TODO
  On_CC_Mouse1(cont: TODO, idx: TODO): TODO
  UpdateItem(n: TODO, sec: TODO, amount: TODO, result: TODO, toolkit_idx: TODO, toolkit_sec: TODO): TODO
  ShowComponents(sh: TODO): TODO
  Close(): TODO
  Craft(): TODO
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
}

/** @customConstructor UIWorkshopRepair */
declare class UIWorkshopRepair extends CUIScriptWnd {
  constructor(xml: TODO, owner: TODO, x: TODO, y: TODO, owner_: TODO, x_: TODO, y_: TODO)
  __finalize(): TODO
  InitControls(x: TODO, y: TODO): TODO
  InitCallBacks(): TODO
  Reset(): TODO
  Update(): TODO
  ListInventory(): TODO
  ListPartScheme(): TODO
  ListSpareParts(): TODO
  ReplacePart(): TODO
  UpdateToolkits(num: TODO): TODO
  On_CC_Mouse1(cont: TODO, idx: TODO): TODO
  Close(): TODO
  Repair(): TODO
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
}

/** @customConstructor UIWorkshopState */
declare class UIWorkshopState extends CUIScriptWnd {
  constructor(xml: TODO, owner: TODO, x: TODO, y: TODO, owner_: TODO, x_: TODO, y_: TODO)
  __finalize(): TODO
  InitControls(x: TODO, y: TODO): TODO
  InitCallBacks(): TODO
  Reset(): TODO
  Close(): TODO
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
}

/** @customConstructor UIWorkshopUpgrade */
declare class UIWorkshopUpgrade extends CUIScriptWnd {
  constructor(xml: TODO, owner: TODO, x: TODO, y: TODO, owner_: TODO, x_: TODO, y_: TODO)
  __finalize(): TODO
  InitControls(x: TODO, y: TODO): TODO
  InitCallBacks(): TODO
  Reset(): TODO
  Update(): TODO
  On_CC_Mouse1(cont: TODO, idx: TODO): TODO
  LoadInventory(): TODO
  ListUpgradeTree(): TODO
  EvaluateUpgrades(): TODO
  EvaluateUpgrade(row: TODO, col: TODO, info: TODO): TODO
  GetWorkshopkit(obj: TODO): TODO
  CollectUpgradekits(sec_add: TODO): TODO
  SetkitInfo(sec: TODO, XML_txt: TODO, XML_ico: TODO, XML_ico_tmp: TODO): TODO
  DischargeKit(sec: TODO): TODO
  Close(): TODO
  Upgrade(): TODO
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
}
