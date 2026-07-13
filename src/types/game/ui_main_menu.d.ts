/** @noSelfInFile */

/** @customConstructor main_menu */
declare class main_menu extends CUIScriptWnd {
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
