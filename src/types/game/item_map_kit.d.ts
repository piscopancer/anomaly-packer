/** @noSelfInFile */

declare namespace item_map_kit {
  export const GUI: UIMapKit
  export function on_game_start(): void
  export function start(obj: CGameObject, sec: Section): void
}

/** @customConstructor UIMapKit */
declare class UIMapKit extends CUIScriptWnd {
  constructor(owner: any, obj: CGameObject, section: Section)
  __finalize(): void
  InitControls(): void
  InitCallBacks(): void
  Reset(obj: CGameObject, sec: Section): void
  OnNext(): void
  OnPrevious(): void
  Close(): void
  OnKeyboard(dik: number, keyboard_action: number): boolean
}
