/** @noSelfInFile */

declare namespace ui_load_dialog {
  export const saved_game_extension: TODO
  export function AddTimeDigit(str: TODO, dig: TODO): TODO
  export function delete_save_game(filename: TODO): void
  export function file_data(fname: TODO): TODO
  export function file_exist(fname: TODO): boolean
}

/** @customConstructor UILoadDialog */
declare class UILoadDialog extends CUIScriptWnd {
  constructor()
  __finalize(): void
  FillList(): void
  InitControls(): void
  InitCallBacks(): void
  OnListItemClicked(): TODO
  OnListItemDbClicked(): void
  OnMsgYes(): TODO
  load_game_internal(): TODO
  OnButton_load_clicked(): void
  OnButton_back_clicked(): void
  OnButton_del_clicked(): TODO
  OnKeyboard(dik: TODO, keyboard_action: TODO): boolean
  AddItemToList(file_name: TODO, date_time: TODO): void
  SelectNextItem(state: TODO): void
}
