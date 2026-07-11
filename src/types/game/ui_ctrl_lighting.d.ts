/** @noSelfInFile */

declare namespace ui_ctrl_lighting {
  export const GUI: TODO
  export function actor_on_first_update(): void
  export function on_game_start(): void
  export function on_key_release(key: TODO): void
  export function start(): void
}

/** @customConstructor UILightControl */
declare class UILightControl extends CUIScriptWnd {
  constructor()
  __finalize(): void
  InitControls(): void
  Callback_Track(i: TODO, val: TODO): void
  Update(): void
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
  Close(): void
}
