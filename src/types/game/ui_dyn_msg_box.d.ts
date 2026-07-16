/** @noSelfInFile */

/** @customConstructor context_item */
declare class context_item extends CUIListBoxItem {
  textControl: TODO // @generated field — refine type
  constructor()
  __finalize(): void
}

/** @customConstructor context_menu */
declare class context_menu extends CUIScriptWnd {
  choices: TODO // @generated field — refine type
  file_item_fn_sz: TODO // @generated field — refine type
  file_item_main_sz: TODO // @generated field — refine type
  form: TODO // @generated field — refine type
  list_box: TODO // @generated field — refine type
  owner: TODO // @generated field — refine type
  xml: TODO // @generated field — refine type
  constructor(owner: CUIScriptWnd, pos_override: vector2 | undefined, action_list: string[], ...args: unknown[])
  __finalize(): void
  InitControls(): void
  Update(): void
  FillList(action_list: string[], ...args: unknown[]): void
  OnListItemClicked(): void
  OnListItemDbClicked(): void
  InitCallBacks(): void
  AddItemToList(index: number, str_id: string, func: (this: void) => void): void
  OnKeyboard(dik: number, keyboard_action: number): boolean
}

/** @customConstructor context_props */
declare class context_props extends CUIScriptWnd {
  H: TODO // @generated field — refine type
  W: TODO // @generated field — refine type
  ctrl_h: TODO // @generated field — refine type
  file_item_fn_sz: TODO // @generated field — refine type
  file_item_main_sz: TODO // @generated field — refine type
  form: TODO // @generated field — refine type
  frame: TODO // @generated field — refine type
  highlight: TODO // @generated field — refine type
  list_box: TODO // @generated field — refine type
  owner: TODO // @generated field — refine type
  xml: TODO // @generated field — refine type
  constructor(owner: CUIScriptWnd)
  __finalize(): void
  InitControls(): void
  Update(): void
  Reset(pos_override: vector2 | undefined, action_list: string[], name_list: string[], params_list: AnyTable[]): void
  FillList(action_list: string[], name_list: string[], params_list: AnyTable[]): void
  OnListItemClicked(): void
  OnListItemDbClicked(): void
  InitCallBacks(): void
  AddItemToList(index: number, str_id: string, func: (this: void) => void, params?: unknown[]): void
  OnKeyboard(dik: number, keyboard_action: number): boolean
  OnHide(): void
}

/** @customConstructor load_item */
declare class load_item extends CUIListBoxItem {
  file_name: string // @generated field — refine type
  fn: TODO // @generated field — refine type
  constructor(height: number)
  __finalize(): void
}

/** @customConstructor msg_box_ui */
declare class msg_box_ui extends CUIScriptWnd {
  disable_msg: TODO // @generated field — refine type
  func_cancel: TODO // @generated field — refine type
  func_ok: TODO // @generated field — refine type
  item: TODO // @generated field — refine type
  message_box: TODO // @generated field — refine type
  name: TODO // @generated field — refine type
  obj: TODO // @generated field — refine type
  p: TODO // @generated field — refine type
  // shared global name: variadic form defined in ui_dyn_msg_box, 3-arg form in ui_sr_teleport
  constructor(typ: string, show: boolean, txt: string, func_ok: (this: void, ...args: unknown[]) => void, func_cancel: (this: void, ...args: unknown[]) => void, ...args: unknown[])
  constructor(obj: CGameObject, disable_msg: boolean, item: CGameObject)
  __finalize(): void
  InitCallBacks(): void
  OnMsgOk(): void
  OnKeyboard(dik: number, keyboard_action: number): boolean
  OnMsgCancel(): void
  InitControls(): void
}

/** @customConstructor multi_choice */
declare class multi_choice extends CUIScriptWnd {
  choices: TODO // @generated field — refine type
  file_item_fd_sz: TODO // @generated field — refine type
  file_item_fn_sz: TODO // @generated field — refine type
  file_item_main_sz: TODO // @generated field — refine type
  form: TODO // @generated field — refine type
  list_box: TODO // @generated field — refine type
  xml: TODO // @generated field — refine type
  constructor(action_list: string[], ...args: unknown[])
  __finalize(): void
  InitControls(): void
  InitCallBacks(): void
  FillList(action_list: string[], ...args: unknown[]): void
  OnListItemClicked(): void
  OnListItemDbClicked(): void
  OnButton_ok(): void
  OnKeyboard(dik: number, keyboard_action: number): boolean
  AddItemToList(index: number, str_id: string, func: (this: void) => void): void
}

declare namespace ui_dyn_msg_box {
  /** Anomaly `class "context_item"` is also reachable on the `ui_dyn_msg_box` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`ui_dyn_msg_box.context_item.Method = ...`). */
  export const context_item: context_item
  /** Anomaly `class "context_menu"` is also reachable on the `ui_dyn_msg_box` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`ui_dyn_msg_box.context_menu.Method = ...`). */
  export const context_menu: context_menu
  /** Anomaly `class "context_props"` is also reachable on the `ui_dyn_msg_box` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`ui_dyn_msg_box.context_props.Method = ...`). */
  export const context_props: context_props
  /** Anomaly `class "load_item"` is also reachable on the `ui_dyn_msg_box` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`ui_dyn_msg_box.load_item.Method = ...`). */
  export const load_item: load_item
  /** Anomaly `class "msg_box_ui"` is also reachable on the `ui_dyn_msg_box` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`ui_dyn_msg_box.msg_box_ui.Method = ...`). */
  export const msg_box_ui: msg_box_ui
  /** Anomaly `class "multi_choice"` is also reachable on the `ui_dyn_msg_box` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`ui_dyn_msg_box.multi_choice.Method = ...`). */
  export const multi_choice: multi_choice
}
