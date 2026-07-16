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
  file_caption: TODO // @generated field — refine type
  file_data: TODO // @generated field — refine type
  file_item_fd_sz: TODO // @generated field — refine type
  file_item_fn_sz: TODO // @generated field — refine type
  file_item_main_sz: TODO // @generated field — refine type
  form: TODO // @generated field — refine type
  list_box: TODO // @generated field — refine type
  message_box: TODO // @generated field — refine type
  msgbox_id: number // @generated field — refine type
  picture: TODO // @generated field — refine type
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

declare namespace ui_load_dialog {
  /** Anomaly `class "UILoadDialog"` is also reachable on the `ui_load_dialog` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`ui_load_dialog.UILoadDialog.Method = ...`). */
  export const UILoadDialog: UILoadDialog
}
