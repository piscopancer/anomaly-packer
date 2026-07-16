/** @noSelfInFile */

declare namespace ui_freeplay_dialog {
  export function main(): void
  export function show(mb_type: number, text: string): void
}

/** @customConstructor freeplay_dialog */
declare class freeplay_dialog extends CUIScriptWnd {
  freeplay_mb: TODO // @generated field — refine type
  constructor()
  Show(mb_type: number, text: string): void
  OnMsgOk(): void
  OnMsgYes(): void
  OnMsgNo(): void
}

declare namespace ui_freeplay_dialog {
  /** Anomaly `class "freeplay_dialog"` is also reachable on the `ui_freeplay_dialog` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`ui_freeplay_dialog.freeplay_dialog.Method = ...`). */
  export const freeplay_dialog: freeplay_dialog
}
