/** @noSelfInFile */

declare namespace item_map_kit {
  export const GUI: UIMapKit
  export function on_game_start(): void
  export function start(obj: CGameObject, sec: string): void
}

/** @customConstructor UIMapKit */
declare class UIMapKit extends CUIScriptWnd {
  constructor(owner: any, obj: CGameObject, section: string)
  __finalize(): void
  InitControls(): void
  InitCallBacks(): void
  Reset(obj: CGameObject, sec: string): void
  OnNext(): void
  OnPrevious(): void
  Close(): void
  OnKeyboard(dik: number, keyboard_action: number): boolean
}
