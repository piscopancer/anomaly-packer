declare function GetARGB(a: number, r: number, g: number, b: number): number
declare function GetFontSmall(): CGameFont | null
declare function GetFontMedium(): CGameFont | null
declare function GetFontDI(): CGameFont | null
declare function GetFontLetterica16Russian(): CGameFont | null
declare function GetFontLetterica18Russian(): CGameFont | null
declare function GetFontGraffiti19Russian(): CGameFont | null
declare function GetFontGraffiti22Russian(): CGameFont | null
declare function GetFontGraffiti32Russian(): CGameFont | null
declare function GetFontGraffiti50Russian(): CGameFont | null
declare function GetFontLetterica25(): CGameFont | null
declare function GetCursorPosition(): vector2
declare function SetCursorPosition(pos: vector2): void
declare function FitInRect(window: CUIWindow, rect: FRect, border?: number, dx16pos?: number): boolean
declare class StaticDrawableWrapper {
  m_endTime: number
  wnd(): CUIWindow | null
}
interface Hud {
  AddDialogToRender(dialog: CUIWindow): void
  RemoveDialogToRender(dialog: CUIWindow): void
  AddCustomStatic(static_id: string, single_instance: boolean): StaticDrawableWrapper
  RemoveCustomStatic(static_id: string): void
  HideActorMenu(): void
  UpdateActorMenu(): void
  CurrentItemAtCell(): CGameObject | null
  GetWindow(): CUIWindow | null
  HidePdaMenu(): void
  show_messages(): void
  hide_messages(): void
  GetCustomStatic(static: Suggest<'gameplay_notification' | 'notify_icon' | 'showcase_notification'>): StaticDrawableWrapper | null
  update_fake_indicators(_type: number, power: number): void
  enable_fake_indicators(enable: boolean): void
}
declare function get_hud(): Hud | null
declare enum ui_events {
  // CUIWindow
  WINDOW_LBUTTON_DOWN = 0,
  WINDOW_RBUTTON_DOWN = 1,
  WINDOW_LBUTTON_UP = 3,
  WINDOW_RBUTTON_UP = 4,
  WINDOW_MOUSE_MOVE = 6,
  WINDOW_LBUTTON_DB_CLICK = 9,
  WINDOW_KEY_PRESSED = 10,
  WINDOW_KEY_RELEASED = 11,
  WINDOW_KEYBOARD_CAPTURE_LOST = 14,
  // CUIButton
  BUTTON_CLICKED = 17,
  BUTTON_DOWN = 18,
  // CUITabControl
  TAB_CHANGED = 19,
  // CUICheckButton
  CHECK_BUTTON_SET = 20,
  CHECK_BUTTON_RESET = 21,
  // CUIRadioButton
  RADIOBUTTON_SET = 22,
  // CUIScrollBox
  SCROLLBOX_MOVE = 30,
  // CUIScrollBar
  SCROLLBAR_VSCROLL = 31,
  SCROLLBAR_HSCROLL = 32,
  // CUIListWnd
  LIST_ITEM_CLICKED = 35,
  LIST_ITEM_SELECT = 36,
  // UIPropertiesBox
  PROPERTY_CLICKED = 38,
  // CUIMessageBox
  MESSAGE_BOX_OK_CLICKED = 39,
  MESSAGE_BOX_YES_CLICKED = 40,
  MESSAGE_BOX_NO_CLICKED = 43,
  MESSAGE_BOX_CANCEL_CLICKED = 44,
  MESSAGE_BOX_COPY_CLICKED = 45,
  MESSAGE_BOX_QUIT_GAME_CLICKED = 42,
  MESSAGE_BOX_QUIT_WIN_CLICKED = 41,
  EDIT_TEXT_COMMIT = 82,
  // CMainMenu
  MAIN_MENU_RELOADED = 87,
}
declare const enum EUIMessages {
  WINDOW_LBUTTON_DOWN,
  WINDOW_RBUTTON_DOWN,
  WINDOW_CBUTTON_DOWN,
  WINDOW_LBUTTON_UP,
  WINDOW_RBUTTON_UP,
  WINDOW_CBUTTON_UP,
  WINDOW_MOUSE_MOVE,
  WINDOW_MOUSE_WHEEL_UP,
  WINDOW_MOUSE_WHEEL_DOWN,
  WINDOW_LBUTTON_DB_CLICK,
  WINDOW_KEY_PRESSED,
  WINDOW_KEY_RELEASED,
  WINDOW_KEY_HOLD,
  WINDOW_MOUSE_CAPTURE_LOST,
  WINDOW_KEYBOARD_CAPTURE_LOST,
  WINDOW_FOCUS_RECEIVED,
  WINDOW_FOCUS_LOST,
  BUTTON_CLICKED,
  BUTTON_DOWN,
  TAB_CHANGED,
  CHECK_BUTTON_SET,
  CHECK_BUTTON_RESET,
  RADIOBUTTON_SET,
  DRAG_DROP_ITEM_DRAG,
  DRAG_DROP_ITEM_DROP,
  DRAG_DROP_ITEM_DB_CLICK,
  DRAG_DROP_ITEM_LBUTTON_CLICK,
  DRAG_DROP_ITEM_RBUTTON_CLICK,
  DRAG_DROP_ITEM_SELECTED,
  DRAG_DROP_ITEM_FOCUSED_UPDATE,
  SCROLLBOX_MOVE,
  SCROLLBAR_VSCROLL,
  SCROLLBAR_HSCROLL,
  SCROLLBAR_NEEDUPDATE,
  CHILD_CHANGED_SIZE,
  LIST_ITEM_CLICKED,
  LIST_ITEM_SELECT,
  LIST_ITEM_FOCUS_RECEIVED,
  PROPERTY_CLICKED,
  MESSAGE_BOX_OK_CLICKED,
  MESSAGE_BOX_YES_CLICKED,
  MESSAGE_BOX_QUIT_WIN_CLICKED,
  MESSAGE_BOX_QUIT_GAME_CLICKED,
  MESSAGE_BOX_NO_CLICKED,
  MESSAGE_BOX_CANCEL_CLICKED,
  MESSAGE_BOX_COPY_CLICKED,
  TALK_DIALOG_TRADE_BUTTON_CLICKED,
  TALK_DIALOG_UPGRADE_BUTTON_CLICKED,
  TALK_DIALOG_QUESTION_CLICKED,
  PDA_TASK_SET_TARGET_MAP,
  PDA_TASK_SHOW_MAP_SPOT,
  PDA_TASK_HIDE_MAP_SPOT,
  PDA_TASK_SHOW_HINT,
  PDA_TASK_HIDE_HINT,
  INVENTORY_DROP_ACTION,
  INVENTORY_EAT_ACTION,
  INVENTORY_EAT2_ACTION,
  INVENTORY_EAT3_ACTION,
  INVENTORY_EAT4_ACTION,
  INVENTORY_EAT5_ACTION,
  INVENTORY_EAT6_ACTION,
  INVENTORY_EAT7_ACTION,
  INVENTORY_EAT8_ACTION,
  INVENTORY_EAT9_ACTION,
  INVENTORY_EAT10_ACTION,
  INVENTORY_EAT11_ACTION,
  INVENTORY_DONATE_ACTION,
  INVENTORY_PLAY_ACTION,
  INVENTORY_TO_BELT_ACTION,
  INVENTORY_TO_SLOT_ACTION,
  INVENTORY_TO_BAG_ACTION,
  INVENTORY_ATTACH_ADDON,
  INVENTORY_REPAIR,
  INVENTORY_ATTACH_SCOPE_ADDON,
  INVENTORY_DETACH_SCOPE_ADDON,
  INVENTORY_ATTACH_SILENCER_ADDON,
  INVENTORY_DETACH_SILENCER_ADDON,
  INVENTORY_ATTACH_GRENADE_LAUNCHER_ADDON,
  INVENTORY_DETACH_GRENADE_LAUNCHER_ADDON,
  INVENTORY_RELOAD_MAGAZINE,
  INVENTORY_UNLOAD_MAGAZINE,
  INVENTORY_SELL_ITEM,
  EDIT_TEXT_COMMIT,
  EDIT_TEXT_CANCEL,
  MAP_SHOW_HINT,
  MAP_HIDE_HINT,
  MAP_SELECT_SPOT,
  MAIN_MENU_RELOADED,
  MAP_SELECT_SPOT2,
}
declare const enum TextAlignment {
  Left = 0,
  Right = 1,
  Center = 2,
}
declare const enum VerticalTextAlignment {
  Top = 0,
  Center = 1,
  Bottom = 2,
}
declare class CGameFont {}
declare class FRect {}
declare class CUILines {
  SetFont(font: CGameFont): void
  SetText(text: string): void
  SetTextST(text_id: string): void
  GetText(): string | null
  SetElipsis(ellipsis: boolean): void
  SetTextColor(color: number): void
}
declare class CUIStatic {
  constructor()
  SetTextureColor(color: number): void
  GetTextureColor(): number
  AdjustHeightToText(): void
  AdjustWidthToText(): void
  GetStretchTexture(): boolean
  TextControl(): CUILines | null
  InitTexture(texture: string): void
  InitTextureEx(texture: string, sh: string): void
  SetTextureRect(rect: FRect): void
  SetStretchTexture(stretch: boolean): void
  GetTextureRect(): FRect | null
  EnableHeading(enable: boolean): void
  GetHeading(): number
  SetHeading(heading: number): void
  SetConstHeading(heading: boolean): void
  GetConstHeading(): boolean
}
declare class CUIButton extends CUIStatic {
  constructor()
}
declare class CUI3tButton extends CUIButton {
  constructor()
}
declare class CUICheckButton extends CUI3tButton {
  constructor()
  GetCheck(): boolean
  SetCheck(checked: boolean): void
  SetDependControl(window: CUIWindow): void
}
// declare class CUIList {}
declare class CUIListBox {
  ShowSelectedItem(show: boolean): void
  RemoveAll(): void
  GetSize(): number
  GetSelectedItem(): CUIListBoxItem | null
  GetSelectedIndex(): number
  SetSelectedIndex(index: number): void
  SetItemHeight(height: number): void
  GetItemHeight(): number
  GetItemByIndex(index: number): CUIListBoxItem | null
  GetItem(index: number): CUIWindow | null
  RemoveItem(item: CUIWindow): void
  AddTextItem(text: string): CUIListBoxItem | null
  AddExistingItem(item: CUIListBoxItem): void
}
declare class CUIListBoxItem {
  GetTextItem(): CUITextWnd | null
  AddTextField(text: string, width: number): CUITextWnd | null
  AddIconField(width: number): CUIStatic | null
  SetTextColor(color: number): void
}
declare class CUIWindow {
  constructor()
  AttachChild(child: CUIWindow): void
  DetachChild(child: CUIWindow): void
  SetAutoDelete(auto_delete: boolean): void
  IsAutoDelete(): boolean
  IsCursorOverWindow(): boolean
  FocusReceiveTime(): number
  GetAbsoluteRect(rect: FRect): void
  SetWndRect(rect: FRect): void
  SetWndPos(pos: vector2): void
  SetWndSize(size: vector2): void
  GetWndPos(window: CUIWindow): vector2 | null
  GetWidth(): number
  GetHeight(): number
  Enable(enable: boolean): void
  IsEnabled(): boolean
  Show(show: boolean): void
  IsShown(): boolean
  WindowName(): string | null
  SetWindowName(name: string): void
  SetPPMode(): void
  ResetPPMode(): void
}
declare class UIHint extends CUIWindow {
  SetWidth(width: number): void
  SetHeight(height: number): void
  SetHintText(hint: string): void
  GetHintText(): string | null
}
declare class CDialogHolder {}
declare class CUIDialogWnd extends CUIWindow {
  ShowDialog(hide_indicators: boolean): void
  HideDialog(): void
  GetHolder(): CDialogHolder | null
  AllowMovement(allow: boolean): void
  AllowCursor(allow: boolean): void
  AllowCenterCursor(allow: boolean): void
}
declare class CUIScriptWnd {
  constructor()
  // Load(xml_name: string): true
  Update(): void
  Dispatch(): void
  Register(): void
  // NewCallback(control_id: string, event: ui_events, functor: () => void, self: CUIWindow): void
  AddCallback(control_id: string, event: ui_events, functor: () => void, self: CUIWindow): void
  OnKeyboard(dik: number, ui_message: EUIMessages): boolean
}
declare class CUIFrameLineWnd {}
declare class CUIEditBox {}
declare class CUISpinNum {}
declare class CUISpinFlt {}
declare class CUISpinText {}
declare class CUITabControl {}
declare class CServerList {}
declare class CUIMapList {}
declare class CUIMapInfo {}
declare class CUITrackBar {}
declare class CUIMMShniaga {}
declare class CUIProgressBar {}
declare class CUITextWnd extends CUIWindow {
  AdjustHeightToText(): void
  AdjustWidthToText(): void
  SetText(text: string): void
  SetTextST(text_id: string): void
  GetText(): string | null
  SetFont(font: CGameFont): void
  GetFont(): CGameFont | null
  SetTextColor(color: number): void
  GetTextColor(): number
  SetTextComplexMode(
    /** @default true */
    complex?: boolean
  ): void
  SetTextAlignment(al: TextAlignment): void
  SetVTextAlignment(al: VerticalTextAlignment): void
  SetEllipsis(ellipsis: boolean): void
  SetTextOffset(x: number, y: number): void
}
declare class CUIScrollView extends CUIWindow {
  constructor()
  AddWindow(window: CUIWindow, auto_delete: boolean): void
  RemoveWindow(window: CUIWindow): void
  Clear(): void
  ScrollToBegin(): void
  ScrollToEnd(): void
  GetMinScrollPos(): number
  GetMaxScrollPos(): number
  GetCurrentScrollPos(): number
  SetFixedScrollBar(fixed: boolean): void
  SetScrollPos(pos: number): void
}
declare class CUIFrameWindow extends CUIWindow {
  SetWidth(width: number): void
  SetHeight(height: number): void
  SetColor(color: number): void
}
declare class CUIComboBox {
  SetVertScroll(scroll: boolean): void
  SetListLength(length: number): void
  CurrentID(): number
  disable_id(id: number): void
  enable_id(id: number): void
  AddItem(item: string, data: number): CUIListBoxItem | null
  GetText(): string | null
  GetTextOf(index: number): string | null
  SetText(text: string): void
  ClearList(): void
  SetCurrentOptValue(): void
  SetCurrentIdx(index: number): void
  GetCurrentIdx(): number
}
declare class CUIPropertiesBox {
  RemoveItem(tag: number): void
  RemoveAll(): void
  Show(parent_rect: FRect, point: vector2): void
  Hide(): void
  GetSelectedItem(): CUIListBoxItem | null
  AutoUpdateSize(): void
  AddItem(title: string): boolean
  InitPropertiesBox(pos: vector2, size: vector2): void
}
