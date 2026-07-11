/** @noSelfInFile */

declare namespace ui_freeplay_dialog {
  export function main(): void
  export function show(mb_type: TODO, text: TODO): void
}

/** @customConstructor freeplay_dialog */
declare class freeplay_dialog extends CUIScriptWnd {
  constructor()
  Show(mb_type: TODO, text: TODO): void
  OnMsgOk(): void
  OnMsgYes(): void
  OnMsgNo(): void
}
