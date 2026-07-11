/** @noSelfInFile */

declare namespace ui_numpad {
  export const GUI: TODO
  export function start(owner: TODO): void
}

/** @customConstructor UINumpad */
declare class UINumpad extends CUIScriptWnd {
  constructor(owner: TODO)
  __finalize(): void
  InitControls(): void
  InitCallBacks(): void
  AddNumber(number: TODO): void
  OnButton_backspace_clicked(): void
  OnButton_c_clicked(): void
  OnButton_0_clicked(): void
  OnButton_1_clicked(): void
  OnButton_2_clicked(): void
  OnButton_3_clicked(): void
  OnButton_4_clicked(): void
  OnButton_5_clicked(): void
  OnButton_6_clicked(): void
  OnButton_7_clicked(): void
  OnButton_8_clicked(): void
  OnButton_9_clicked(): void
  OnButton_OK_clicked(): void
  OnKeyboard(dik: TODO, keyboard_action: TODO): boolean
  Close(): void
}
