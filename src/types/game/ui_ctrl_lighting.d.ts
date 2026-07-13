/** @noSelfInFile */

declare namespace ui_ctrl_lighting {
  export const GUI: AnyTable
  export function actor_on_first_update(): void
  export function on_game_start(): void
  export function on_key_release(key: number): void
  export function start(): void
}

/** @customConstructor UILightControl */
declare class UILightControl extends CUIScriptWnd {
  constructor()
  __finalize(): void
  InitControls(): void
  Callback_Track(i: number, val: number): void
  Update(): void
  OnKeyboard(dik: number, keyboard_action: number): boolean
  Close(): void
}
