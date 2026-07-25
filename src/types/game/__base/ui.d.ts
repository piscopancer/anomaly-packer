/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  function GetARGB(a: number, r: number, g: number, b: number): number
  function GetFontSmall(): CGameFont | null
  function GetFontMedium(): CGameFont | null
  function GetFontDI(): CGameFont | null
  function GetFontLetterica16Russian(): CGameFont | null
  function GetFontLetterica18Russian(): CGameFont | null
  function GetFontGraffiti19Russian(): CGameFont | null
  function GetFontGraffiti22Russian(): CGameFont | null
  function GetFontGraffiti32Russian(): CGameFont | null
  function GetFontGraffiti50Russian(): CGameFont | null
  function GetFontLetterica25(): CGameFont | null
  function GetCursorPosition(): vector2
  function SetCursorPosition(pos: vector2): void
  function FitInRect(window: CUIWindow, rect: Frect, border?: number, dx16pos?: number): boolean
  /** Global HUD accessor (registered separately from the UI window classes) */
  function get_hud(): Hud | null
  function get_pda_menu(): CUIPdaWnd | null
  function get_actor_menu(): CUIActorMenu | null
  /** @returns the current `EMenuMode` */
  function get_menu_mode(): number
  function get_maingame(): CUIMainIngameWnd | null
  
  class Fbox {
    constructor()
    /** min corner (`Fvector`) */
    min: vector
    /** max corner (`Fvector`) */
    max: vector
  }
  /** @customConstructor Frect */
  class Frect {
    constructor()
    /** @returns self */
    set(left: number, top: number, right: number, bottom: number): Frect
    /** left-top corner (`Fvector2`) */
    lt: vector2
    /** right-bottom corner (`Fvector2`) */
    rb: vector2
    x1: number
    x2: number
    y1: number
    y2: number
  }
  class StaticDrawableWrapper {
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
  enum ui_events {
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
  const enum EUIMessages {
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
  /** Drag-and-drop list kinds of the actor menu (luabind enum `EDDListType`) */
  const enum EDDListType {
    iInvalid = 0,
    iActorSlot = 1,
    iActorBag = 2,
    iActorBelt = 3,
    iActorTrade = 4,
    iPartnerTradeBag = 5,
    iPartnerTrade = 6,
    iDeadBodyBag = 7,
    iQuickSlot = 8,
    iTrashSlot = 9,
  }
  /** Multiplayer game types (luabind enum `GAME_TYPE`, values from `EGameIDs` bit flags) */
  const enum GAME_TYPE {
    GAME_UNKNOWN = -1,
    eGameIDDeathmatch = 2,
    eGameIDTeamDeathmatch = 4,
    eGameIDArtefactHunt = 8,
    eGameIDCaptureTheArtefact = 16,
  }
  const enum TextAlignment {
    Left = 0,
    Right = 1,
    Center = 2,
  }
  const enum VerticalTextAlignment {
    Top = 0,
    Center = 1,
    Bottom = 2,
  }
  class CGameFont {
    // Horizontal alignment constants, bound as the class's own `EAligment` enum
    // (`ui_export_script.cpp`), so they are read off the class rather than a separate table.
    static readonly alLeft: 0
    static readonly alRight: 1
    static readonly alCenter: 2
  }
  class CUILines {
    SetFont(font: CGameFont): void
    SetText(text: string): void
    SetTextST(text_id: string): void
    GetText(): string | null
    SetElipsis(ellipsis: boolean): void
    SetTextColor(color: number): void
  }
  
  // --- Core window hierarchy ---
  class CUIWindow {
    constructor()
    AttachChild(child: CUIWindow): void
    DetachChild(child: CUIWindow): void
    SetAutoDelete(auto_delete: boolean): void
    IsAutoDelete(): boolean
    IsCursorOverWindow(): boolean
    FocusReceiveTime(): number
    GetAbsoluteRect(rect: Frect): void
    SetWndRect(rect: Frect): void
    SetWndPos(pos: vector2): void
    SetWndSize(size: vector2): void
    /**
     * The window's position relative to its parent. Exported from a free function taking
     * the window (`get_wnd_pos` in `UIWindow_script.cpp`), so luabind exposes it as a
     * no-argument method; it returns a reference to a member and is never nil.
     */
    GetWndPos(): vector2
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
    // built-in hover hint
    DisableHint(): void
    EnableHint(): void
    SetHintDelay(delay: number): void
    GetHintDelay(): number
    RemoveHint(): void
    SetHintWnd(hint: UIHint): void
    GetHintWnd(): UIHint | null
    SetHintText(hint: string): void
    GetHintText(): string | null
  }
  class CDialogHolder {
    AddDialogToRender(dialog: CUIWindow): void
    RemoveDialogToRender(dialog: CUIWindow): void
  }
  class CUIDialogWnd extends CUIWindow {
    ShowDialog(hide_indicators: boolean): void
    HideDialog(): void
    GetHolder(): CDialogHolder | null
    AllowMovement(allow: boolean): void
    AllowCursor(allow: boolean): void
    AllowCenterCursor(allow: boolean): void
  }
  class CUIFrameWindow extends CUIWindow {
    constructor()
    SetWidth(width: number): void
    SetHeight(height: number): void
    SetColor(color: number): void
  }
  class CUIFrameLineWnd extends CUIWindow {
    constructor()
    SetWidth(width: number): void
    SetHeight(height: number): void
    SetColor(color: number): void
  }
  class UIHint extends CUIWindow {
    delay: TODO // @generated field — refine type
    dialog: TODO // @generated field — refine type
    dialog_text: TODO // @generated field — refine type
    owner: TODO // @generated field — refine type
    path: TODO // @generated field — refine type
    timer: TODO // @generated field — refine type
    txt: TODO // @generated field — refine type
    constructor()
    SetWidth(width: number): void
    SetHeight(height: number): void
    SetHintText(hint: string): void
    GetHintText(): string | null
  }
  class CUIScrollView extends CUIWindow {
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
  class CUIStatic extends CUIWindow {
    constructor()
    SetTextureColor(color: number): void
    GetTextureColor(): number
    AdjustHeightToText(): void
    AdjustWidthToText(): void
    GetStretchTexture(): boolean
    TextControl(): CUILines | null
    InitTexture(texture: string): void
    InitTextureEx(texture: string, sh: string): void
    SetTextureRect(rect: Frect): void
    SetStretchTexture(stretch: boolean): void
    GetTextureRect(): Frect | null
    EnableHeading(enable: boolean): void
    GetHeading(): number
    SetHeading(heading: number): void
    SetConstHeading(heading: boolean): void
    GetConstHeading(): boolean
  }
  class CUISleepStatic extends CUIStatic {
    constructor()
  }
  /** @customConstructor CUITextWnd */
  class CUITextWnd extends CUIWindow {
    constructor()
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
  
  // --- Buttons ---
  class CUIButton extends CUIStatic {
    constructor()
  }
  class CUI3tButton extends CUIButton {
    constructor()
  }
  class CUICheckButton extends CUI3tButton {
    constructor()
    GetCheck(): boolean
    SetCheck(checked: boolean): void
    SetDependControl(window: CUIWindow): void
  }
  class CUITabButton extends CUIButton {
    constructor()
  }
  class CUITabControl extends CUIWindow {
    constructor()
    AddItem(button: CUITabButton): boolean
    AddItem(text: string, name: string, pos: vector2, size: vector2): boolean
    RemoveAll(): void
    GetActiveId(): string | null
    GetTabsCount(): number
    SetActiveTab(name: string): void
    GetButtonById(id: string): CUITabButton | null
    GetEnabled(): boolean
    SetEnabled(enabled: boolean): void
  }
  
  // --- Spins & track bar ---
  class CUICustomSpin extends CUIWindow {
    GetText(): string | null
  }
  class CUISpinNum extends CUICustomSpin {
    constructor()
  }
  class CUISpinFlt extends CUICustomSpin {
    constructor()
  }
  class CUISpinText extends CUICustomSpin {
    constructor()
  }
  class CUITrackBar extends CUIWindow {
    constructor()
    GetCheck(): boolean
    SetCheck(checked: boolean): void
    GetIValue(): number
    GetFValue(): number
    SetIValue(value: number): void
    SetFValue(value: number): void
    SetStep(step: number): void
    GetInvert(): boolean
    SetInvert(invert: boolean): void
    SetOptIBounds(min: number, max: number): void
    SetOptFBounds(min: number, max: number): void
    /** Commit the option value (opt -> current) */
    SetCurrentValue(): void
  }
  
  // --- Edit boxes ---
  class CUICustomEdit extends CUIWindow {
    SetText(text: string): void
    GetText(): string | null
    CaptureFocus(capture: boolean): void
    SetNextFocusCapturer(next: CUICustomEdit): void
  }
  class CUIEditBox extends CUICustomEdit {
    constructor()
    InitTexture(texture: string): void
  }
  
  // --- Lists ---
  class CUIListBox extends CUIScrollView {
    constructor()
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
  class CUIListBoxItem extends CUIFrameLineWnd {
    constructor(height: number)
    GetTextItem(): CUITextWnd | null
    AddTextField(text: string, width: number): CUITextWnd | null
    AddIconField(width: number): CUIStatic | null
    SetTextColor(color: number): void
  }
  class CUIListBoxItemMsgChain extends CUIListBoxItem {
    constructor(height: number)
  }
  
  // --- Combo box ---
  class CUIComboBox extends CUIWindow {
    constructor()
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
  
  // --- Properties / message / progress / map ---
  class CUIPropertiesBox extends CUIFrameWindow {
    constructor()
    RemoveItem(tag: number): void
    RemoveAll(): void
    Show(x: number, y: number): void
    Hide(): void
    GetSelectedItem(): CUIListBoxItem | null
    AutoUpdateSize(): void
    AddItem(title: string): boolean
    InitPropertiesBox(pos: vector2, size: vector2): void
  }
  class CUIMessageBox extends CUIStatic {
    constructor()
    InitMessageBox(xml_template: string): void
    SetText(text: string): void
    GetHost(): string | null
    GetPassword(): string | null
  }
  class CUIMessageBoxEx extends CUIDialogWnd {
    constructor()
    InitMessageBox(xml_template: string): void
    SetText(text: string): void
    GetHost(): string | null
    GetPassword(): string | null
  }
  class CUIProgressBar extends CUIWindow {
    constructor()
    SetProgressPos(pos: number): void
    GetProgressPos(): number
    GetRange_min(): number
    GetRange_max(): number
    SetRange(min: number, max: number): void
    ShowBackground(status: boolean): void
    SetColor(color: number): void
    UseColor(status: boolean): void
    SetMinColor(color: number): void
    SetMiddleColor(color: number): void
    SetMaxColor(color: number): void
  }
  class CUIMapInfo extends CUIWindow {
    constructor()
    Init(pos: vector2, size: vector2): void
    InitMap(map_name: string, map_ver: string): void
  }
  
  // --- Script window base ---
  // Bound as `class_<CUIDialogWndEx, WrapType, bases<CUIDialogWnd, DLL_Pure>>`
  // (`uiscriptwnd_script.h`), so a script window is a dialog window and inherits its
  // `Show`/`IsShown`/`ShowDialog` surface along with everything on `CUIWindow`.
  class CUIScriptWnd extends CUIDialogWnd {
    constructor()
    // Load(xml_name: string): true
    Update(): void
    Dispatch(): void
    Register(): void
    // NewCallback(control_id: string, event: ui_events, functor: () => void, self: CUIWindow): void
    AddCallback(control_id: string, event: ui_events, functor: () => void, self: CUIWindow): void
    OnKeyboard(dik: number, ui_message: EUIMessages): boolean
  }
  
  // --- Actor menu / PDA / in-game HUD windows ---
  class CUIActorMenu extends CUIDialogWnd {
    constructor()
    get_drag_item(): CGameObject | null
    /** @param type one of `game_object` highlight kinds */
    highlight_section_in_slot(section: Section.Item, type: number, slot_id?: number): void
    /** @param functor called per matching item; return `true` to stop */
    highlight_for_each_in_slot(functor: (this: void) => boolean, type: number, slot_id: number): void
    refresh_current_cell_item(): void
    IsShown(): boolean
    ShowDialog(hide_indicators: boolean): void
    HideDialog(): void
    ToSlot(object: CGameObject, force_place: boolean, slot_id: number): boolean
    ToBelt(object: CGameObject, use_cursor_pos: boolean): boolean
  }
  class CUIPdaWnd extends CUIDialogWnd {
    constructor()
    IsShown(): boolean
    ShowDialog(hide_indicators: boolean): void
    HideDialog(): void
    SetActiveSubdialog(section: Section.Item): void
    SetActiveDialog(ui: CUIWindow): void
    GetActiveDialog(): CUIWindow | null
    GetActiveSection(): string | null
    GetTabControl(): CUITabControl | null
  }
  class CUIMotionIcon extends CUIWindow {
    constructor()
  }
  class CUIZoneMap {
    constructor()
    disabled: boolean
    readonly visible: boolean
    MapFrame(): CUIWindow | null
    Background(): CUIStatic | null
  }
  class CUIHudStatesWnd extends CUIWindow {
    constructor()
    readonly m_back: CUIStatic
    readonly m_ui_weapon_ammo_color_active: number
    readonly m_ui_weapon_ammo_color_inactive: number
    readonly m_ui_weapon_cur_ammo: CUIStatic
    readonly m_ui_weapon_fmj_ammo: CUIStatic
    readonly m_ui_weapon_ap_ammo: CUIStatic
    readonly m_ui_weapon_third_ammo: CUIStatic
    readonly m_fire_mode: CUIStatic
    readonly m_ui_grenade: CUIStatic
    readonly m_ui_weapon_icon: CUIStatic
    readonly m_ui_health_bar: CUIProgressBar
    readonly m_ui_stamina_bar: CUIProgressBar
    readonly m_ui_psy_bar: CUIProgressBar
    readonly m_radia_damage: CUIStatic
    m_ui_health_bar_show: boolean
    m_ui_stamina_bar_show: boolean
    m_ui_psy_bar_show: boolean
  }
  class CUIMainIngameWnd extends CUIWindow {
    constructor()
    readonly UIStaticDiskIO: CUIStatic
    readonly UIStaticQuickHelp: CUIStatic
    readonly UIMotionIcon: CUIMotionIcon
    readonly UIZoneMap: CUIZoneMap
    readonly m_ui_hud_states: CUIHudStatesWnd
    readonly m_ind_bleeding: CUIStatic
    readonly m_ind_radiation: CUIStatic
    readonly m_ind_starvation: CUIStatic
    readonly m_ind_weapon_broken: CUIStatic
    readonly m_ind_helmet_broken: CUIStatic
    readonly m_ind_outfit_broken: CUIStatic
    readonly m_ind_overweight: CUIStatic
    readonly m_ind_boost_psy: CUIStatic
    readonly m_ind_boost_radia: CUIStatic
    readonly m_ind_boost_chem: CUIStatic
    readonly m_ind_boost_wound: CUIStatic
    readonly m_ind_boost_weight: CUIStatic
    readonly m_ind_boost_health: CUIStatic
    readonly m_ind_boost_power: CUIStatic
    readonly m_ind_boost_rad: CUIStatic
  }
  
  // --- Multiplayer / main-menu only (registered by the engine, not used by single-player addons) ---
  class SServerFilters {
    constructor()
    empty: boolean
    full: boolean
    with_pass: boolean
    without_pass: boolean
    without_ff: boolean
    listen_servers: boolean
  }
  class connect_error_cb {
    constructor()
    /** Bind a Lua handler; it is invoked as `fn(object, error, text)` on a connection error. */
    bind(object: any, fn: (this: void, error: number, text: string) => void): void
    clear(): void
  }
  class CServerList extends CUIWindow {
    constructor()
    SetConnectionErrCb(cb: connect_error_cb): void
    ConnectToSelected(): void
    SetFilters(filters: SServerFilters): void
    SetPlayerName(name: string): void
    RefreshList(): void
    RefreshQuick(): void
    ShowServerInfo(): void
    NetRadioChanged(net: boolean): void
    SetSortFunc(func_name: string, make_sort: boolean): void
  }
  /** Connection-error constants of the `CServerList` luabind class. */
  const CServerList: {
    readonly ece_unique_nick_not_registred: 1
    readonly ece_unique_nick_expired: 2
  }
  class CUIMapList extends CUIWindow {
    constructor()
    SetWeatherSelector(selector: CUIComboBox): void
    SetModeSelector(selector: CUIComboBox): void
    OnModeChange(): void
    LoadMapList(): void
    SaveMapList(): void
    GetCommandLine(name: string): string | null
    SetServerParams(params: string): void
    GetCurGameType(): number
    StartDedicatedServer(): void
    SetMapPic(pic: CUIStatic): void
    SetMapInfo(info: CUIMapInfo): void
    ClearList(): void
    IsEmpty(): boolean
  }
  class CUIMMShniaga extends CUIWindow {
    SetVisibleMagnifier(visible: boolean): void
    SetPage(page: number): void
    ShowPage(page: number): void
  }
  /** Page-id constants of the `CUIMMShniaga` luabind class (`EPageIds`). */
  const CUIMMShniaga: {
    readonly epi_main: 0
    readonly epi_new_game: 1
    readonly epi_new_network_game: 2
  }
  
  namespace utils_ui {
    /** Anomaly `class "UIHint"` is also reachable on the `utils_ui` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`utils_ui.UIHint.Method = ...`). */
    export const UIHint: UIHint
  }
}
