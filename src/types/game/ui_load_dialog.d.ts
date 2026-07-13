/** @noSelfInFile */

declare namespace ui_load_dialog {
  export const saved_game_extension: string
  export function AddTimeDigit(str: string, dig: string): string
  export function delete_save_game(filename: string): void
  export function file_data(fname: string): string
  export function file_exist(fname: string): boolean
}

/** @customConstructor UILoadDialog */
declare class UILoadDialog extends CUIScriptWnd {
  constructor()
  __finalize(): void
  FillList(): void
  InitControls(): void
  InitCallBacks(): void
  OnListItemClicked(): void
  OnListItemDbClicked(): void
  OnMsgYes(): void
  load_game_internal(): void
  OnButton_load_clicked(): void
  OnButton_back_clicked(): void
  OnButton_del_clicked(): void
  OnKeyboard(dik: number, keyboard_action: number): boolean
  AddItemToList(file_name: string, date_time: string): void
  SelectNextItem(state: string): void
}
