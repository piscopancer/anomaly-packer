/** @noSelfInFile */

/** @customConstructor UISaveDialog */
declare class UISaveDialog extends CUIScriptWnd {
  editbox: TODO // @generated field — refine type
  file_item_fd_sz: TODO // @generated field — refine type
  file_item_fn_sz: TODO // @generated field — refine type
  file_item_main_sz: TODO // @generated field — refine type
  form: TODO // @generated field — refine type
  list_box: TODO // @generated field — refine type
  list_date_font: TODO // @generated field — refine type
  list_file_font: TODO // @generated field — refine type
  mbox_mode: number // @generated field — refine type
  message_box: TODO // @generated field — refine type
  new_save: TODO // @generated field — refine type
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
  fn: TODO // @generated field — refine type
  constructor(height: number)
}

declare namespace ui_save_dialog {
  /** Anomaly `class "UISaveDialog"` is also reachable on the `ui_save_dialog` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`ui_save_dialog.UISaveDialog.Method = ...`). */
  export const UISaveDialog: UISaveDialog
  /** Anomaly `class "save_item"` is also reachable on the `ui_save_dialog` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`ui_save_dialog.save_item.Method = ...`). */
  export const save_item: save_item
}
