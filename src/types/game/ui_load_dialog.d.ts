// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace ui_load_dialog {
  export const saved_game_extension: TODO
  export function AddTimeDigit(str: TODO, dig: TODO): TODO
  export function delete_save_game(filename: TODO): TODO
  export function file_data(fname: TODO): TODO
  export function file_exist(fname: TODO): TODO
}

/** @customConstructor UILoadDialog */
declare class UILoadDialog extends CUIScriptWnd {
  constructor(arg0: TODO)
  __finalize(): TODO
  FillList(): TODO
  InitControls(): TODO
  InitCallBacks(): TODO
  OnListItemClicked(): TODO
  OnListItemDbClicked(): TODO
  OnMsgYes(): TODO
  load_game_internal(): TODO
  OnButton_load_clicked(): TODO
  OnButton_back_clicked(): TODO
  OnButton_del_clicked(): TODO
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
  AddItemToList(file_name: TODO, date_time: TODO): TODO
  SelectNextItem(state: TODO): TODO
}
