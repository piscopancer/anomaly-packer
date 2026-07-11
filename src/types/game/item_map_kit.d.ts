/** @noSelfInFile */

declare namespace item_map_kit {
  export const GUI: TODO
  export function on_game_start(): void
  export function start(obj: TODO, sec: TODO): void
}

/** @customConstructor UIMapKit */
declare class UIMapKit extends CUIScriptWnd {
  constructor(owner: TODO, obj: TODO, section: TODO)
  __finalize(): void
  InitControls(): void
  InitCallBacks(): void
  Reset(obj: TODO, sec: TODO): void
  OnNext(): void
  OnPrevious(): void
  Close(): void
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
}
