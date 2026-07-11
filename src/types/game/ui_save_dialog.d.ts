/** @noSelfInFile */

/** @customConstructor UISaveDialog */
declare class UISaveDialog extends CUIScriptWnd {
  constructor()
  __finalize(): void
  FillList(): void
  InitControls(): void
  InitCallBacks(): void
  OnListItemClicked(): TODO
  OnMsgYes(): void
  OnButton_del_clicked(): TODO
  delete_selected_file(): TODO
  OnButton_ok_clicked(): void
  OnButton_cancel_clicked(): void
  OnKeyboard(dik: TODO, keyboard_action: TODO): boolean
  AddItemToList(file_name: TODO, date_time: TODO): void
  SaveFile(fileName: TODO): void
}

/** @customConstructor save_item */
declare class save_item extends CUIListBoxItem {
  constructor(height: TODO)
}
