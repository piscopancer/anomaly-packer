/** @noSelfInFile */

/** @customConstructor context_item */
declare class context_item extends CUIListBoxItem {
  constructor()
  __finalize(): void
}

/** @customConstructor context_menu */
declare class context_menu extends CUIScriptWnd {
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
  constructor(height: number)
  __finalize(): void
}

/** @customConstructor msg_box_ui */
declare class msg_box_ui extends CUIScriptWnd {
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
