/** @noSelfInFile */

declare namespace item_repair {
  export const GUI: UIRepair
  export function func_tool(obj: CGameObject): void
  export function menu_tool(obj: CGameObject): string | undefined
  export function on_game_start(): void
  export function start(obj: CGameObject, sec: string): void
}

/** @customConstructor UIRepair */
declare class UIRepair extends CUIScriptWnd {
  constructor(obj: CGameObject, section: string)
  __finalize(): void
  InitControls(): void
  InitCallBacks(): void
  Reset(obj: CGameObject, section: string): void
  InitInventory(n: number): void
  Update(): void
  On_CC_Mouse1(cont: number, idx: any): void
  OnItemSelect(n: number): void
  OnRepair(): void
  OnKeyboard(dik: number, keyboard_action: number): boolean
  OnCancel(): void
}
