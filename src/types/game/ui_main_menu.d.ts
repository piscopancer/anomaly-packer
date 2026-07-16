/** @noSelfInFile */

/** @customConstructor main_menu */
declare class main_menu extends CUIScriptWnd {
  load_dlg: TODO // @generated field — refine type
  mbox_mode: number // @generated field — refine type
  message_box: TODO // @generated field — refine type
  msg_wnd: TODO // @generated field — refine type
  msg_wnd_text: TODO // @generated field — refine type
  msg_wnd_timer: TODO // @generated field — refine type
  new_game_dlg: TODO // @generated field — refine type
  opt_dlg: TODO // @generated field — refine type
  save_dlg: TODO // @generated field — refine type
  shniaga: TODO // @generated field — refine type
  constructor()
  __finalize(): void
  InitControls(): void
  InitCallBacks(): void
  Update(): void
  Show(f: boolean): void
  OnButton_last_save(): void
  OnButton_new_game(): void
  OnButton_originals_clicked(): void
  OnButton_quit_clicked(): void
  OnButton_disconnect_clicked(): void
  OnButton_save_clicked(): void
  OnButton_options_clicked(): void
  OnButton_load_clicked(): void
  OnButton_return_game(): void
  OnMsgOk(): void
  OnMsgCancel(): void
  OnMsgYes(): void
  OnMsgNo(): void
  OnMessageQuitGame(): void
  OnMessageQuitWin(): void
  StartGame(): void
  ShowFactionUI(): void
  LoadLastSave(): void
  on_localization_change(): void
  Dispatch(cmd: number, param: any): boolean
  OnKeyboard(dik: number, keyboard_action: number): boolean
  OnMenuReloaded(): void
  SetMsg(text: string, tmr: number, align: number): void
}

declare namespace ui_main_menu {
  /** Anomaly `class "main_menu"` is also reachable on the `ui_main_menu` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`ui_main_menu.main_menu.Method = ...`). */
  export const main_menu: main_menu
}
