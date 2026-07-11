/** @noSelfInFile */

declare namespace item_repair {
  export const GUI: TODO
  export function func_tool(obj: TODO): void
  export function menu_tool(obj: TODO): TODO
  export function on_game_start(): void
  export function start(obj: TODO, sec: TODO): void
}

/** @customConstructor UIRepair */
declare class UIRepair extends CUIScriptWnd {
  constructor(obj: TODO, section: TODO)
  __finalize(): void
  InitControls(): void
  InitCallBacks(): void
  Reset(obj: TODO, section: TODO): void
  InitInventory(n: number): void
  Update(): void
  On_CC_Mouse1(cont: number, idx: TODO): void
  OnItemSelect(n: number): void
  OnRepair(): TODO
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
  OnCancel(): void
}
