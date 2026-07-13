/** @noSelfInFile */

/** @customConstructor UISaveDialog */
declare class UISaveDialog extends CUIScriptWnd {
  constructor()
  __finalize(): void
  FillList(): void
  InitControls(): void
  InitCallBacks(): void
  OnListItemClicked(): void
  OnMsgYes(): void
  OnButton_del_clicked(): void
  delete_selected_file(): void
  OnButton_ok_clicked(): void
  OnButton_cancel_clicked(): void
  OnKeyboard(dik: number, keyboard_action: number): boolean
  AddItemToList(file_name: string, date_time: string): void
  SaveFile(fileName: string): void
}

/** @customConstructor save_item */
declare class save_item extends CUIListBoxItem {
  constructor(height: number)
}
