/** @noSelfInFile */

/** @customConstructor context_item */
declare class context_item extends CUIListBoxItem {
  constructor()
  __finalize(): TODO
}

/** @customConstructor context_menu */
declare class context_menu extends CUIScriptWnd {
  constructor(owner: TODO, pos_override: TODO, action_list: TODO, ...args: TODO[])
  __finalize(): TODO
  InitControls(): TODO
  Update(): TODO
  FillList(action_list: TODO, ...args: TODO[]): TODO
  OnListItemClicked(): TODO
  OnListItemDbClicked(): TODO
  InitCallBacks(): TODO
  AddItemToList(index: TODO, str_id: TODO, func: TODO): TODO
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
}

/** @customConstructor context_props */
declare class context_props extends CUIScriptWnd {
  constructor(owner: TODO)
  __finalize(): TODO
  InitControls(): TODO
  Update(): TODO
  Reset(pos_override: TODO, action_list: TODO, name_list: TODO, params_list: TODO): TODO
  FillList(action_list: TODO, name_list: TODO, params_list: TODO): TODO
  OnListItemClicked(): TODO
  OnListItemDbClicked(): TODO
  InitCallBacks(): TODO
  AddItemToList(index: TODO, str_id: TODO, func: TODO, params: TODO): TODO
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
  OnHide(): TODO
}

/** @customConstructor load_item */
declare class load_item extends CUIListBoxItem {
  constructor(height: TODO)
  __finalize(): TODO
}

/** @customConstructor msg_box_ui */
declare class msg_box_ui extends CUIScriptWnd {
  // shared global name: variadic form defined in ui_dyn_msg_box, 3-arg form in ui_sr_teleport
  constructor(typ: TODO, show: TODO, txt: TODO, func_ok: TODO, func_cancel: TODO, ...args: TODO[])
  constructor(typ: TODO, show: TODO, txt: TODO, func_ok: TODO, func_cancel: TODO, ...args: TODO[])
  __finalize(): TODO
  InitCallBacks(): TODO
  OnMsgOk(): TODO
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
  OnMsgCancel(): TODO
  InitControls(): TODO
}

/** @customConstructor multi_choice */
declare class multi_choice extends CUIScriptWnd {
  constructor(action_list: TODO, ...args: TODO[])
  __finalize(): TODO
  InitControls(): TODO
  InitCallBacks(): TODO
  FillList(action_list: TODO, ...args: TODO[]): TODO
  OnListItemClicked(): TODO
  OnListItemDbClicked(): TODO
  OnButton_ok(): TODO
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
  AddItemToList(index: TODO, str_id: TODO, func: TODO): TODO
}
