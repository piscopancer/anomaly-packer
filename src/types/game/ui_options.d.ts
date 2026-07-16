/** @noSelfInFile */

declare namespace ui_options {
  export const options: AnyTable
  export function cc(path: string, opt: string): string
  export function check_opt_table(id: string): boolean
  export function cont_renderer(): string[][]
  export function cont_sun_quality(): string[][]
  export function cont_vid_mode(): string[][]
  export function curr_crosshair_clr(n: string): number
  export function curr_economy(fact: string): number
  export function curr_gameplay(fact: string): number
  export function curr_localization(): string | number
  export function curr_player_name(): string
  export function curr_renderer(): string
  export function curr_screen_mode(): number
  export function debug_only(): boolean
  export function def_radio_playlist(i: number): string
  export function exec(func: (this: void, ...args: any[]) => unknown, ...args: unknown[]): unknown
  export function for_renderer(...args: string[]): boolean
  export function func_autosave_timer_new(): void
  export function func_crosshair_clr(n: string): void
  export function func_debug_hud(): void
  export function func_debug_map_hud(): void
  export function func_economy_diff(fac: Community): void
  export function func_gameplay_diff(fac: Community): void
  export function func_hardcore_ai_aim(): void
  export function func_hud_autohide_bar(): void
  export function func_hud_minimap(): void
  export function func_localization(): void
  export function func_player_name(): void
  export function func_screen_mode(): void
  export function func_slot_hud(): void
  export function get(id: string): unknown
  export function get_opt_table(id: string): AnyTable
  export function init_opt_base(): void
  export function init_opt_coder(): void
  export function is_int(num: number): boolean
  export function level_present(): boolean
  export function print_dbg(...args: unknown[]): void
  export function set(id: string, value: unknown): void
  export function start_lighting_ui(self: UIOptions): void
  export function str_opt_explode(id: string, by_num?: boolean): Array<string | number>
  export function trader_cond(x: string): number | undefined
}

/** @customConstructor UIOptions */
declare class UIOptions extends CUIScriptWnd {
  Change_Done: boolean // @generated field — refine type
  Keybinds_Shown: boolean // @generated field — refine type
  Need_Restart: boolean // @generated field — refine type
  Need_VidRestart: boolean // @generated field — refine type
  Save_AXR: boolean // @generated field — refine type
  Save_CFG: boolean // @generated field — refine type
  _Cap: TODO // @generated field — refine type
  _Check: TODO // @generated field — refine type
  _Input: TODO // @generated field — refine type
  _List: TODO // @generated field — refine type
  _Radio: TODO // @generated field — refine type
  _Track: TODO // @generated field — refine type
  background: TODO // @generated field — refine type
  bl: TODO // @generated field — refine type
  btn_accept: TODO // @generated field — refine type
  btn_cancel: TODO // @generated field — refine type
  btn_default: TODO // @generated field — refine type
  btn_reset: TODO // @generated field — refine type
  dialog: TODO // @generated field — refine type
  dlg_controls: TODO // @generated field — refine type
  hint_wnd: TODO // @generated field — refine type
  last_curr_tree: TODO // @generated field — refine type
  last_path: TODO // @generated field — refine type
  last_tree: TODO // @generated field — refine type
  message_box: TODO // @generated field — refine type
  pending: TODO // @generated field — refine type
  preset: TODO // @generated field — refine type
  preset_cap: TODO // @generated field — refine type
  scroll_opt: TODO // @generated field — refine type
  tree: TODO // @generated field — refine type
  xml: TODO // @generated field — refine type
  constructor()
  __finalize(): void
  InitControls(): void
  InitCallBacks(): void
  Update(): void
  Reset(): void
  Reset_opt(curr_tree: AnyTable, path: string, flags: AnyTable): void
  Reset_last_opt(): void
  Register_Cap(xml: CScriptXmlInit, handler: CUIWindow, id: string, hint: string): void
  Register_Line(xml: CScriptXmlInit, handler: CUIWindow): void
  Register_Image(xml: CScriptXmlInit, handler: CUIWindow, v: AnyTable): void
  Register_Slide(xml: CScriptXmlInit, handler: CUIWindow, v: AnyTable): void
  Register_Title(xml: CScriptXmlInit, handler: CUIWindow, v: AnyTable): void
  Register_Desc(xml: CScriptXmlInit, handler: CUIWindow, v: AnyTable): void
  Register_Check(xml: CScriptXmlInit, handler: CUIWindow, path: string, opt: string, v: AnyTable, flags: AnyTable): void
  Callback_Check(ctrl: CUIWindow, path: string, opt: string, v: AnyTable): void
  Register_Button(xml: CScriptXmlInit, handler: CUIWindow, path: string, opt: string, v: AnyTable, flags: AnyTable): void
  Callback_Button(ctrl: CUIWindow, path: string, opt: string, v: AnyTable): void
  Register_List(xml: CScriptXmlInit, handler: CUIWindow, path: string, opt: string, v: AnyTable, flags: AnyTable): void
  Callback_List(ctrl: CUIWindow, path: string, opt: string, v: AnyTable): void
  Register_Input(xml: CScriptXmlInit, handler: CUIWindow, path: string, opt: string, v: AnyTable, flags: AnyTable): void
  Callback_Input(ctrl: CUIWindow, path: string, opt: string, v: AnyTable): void
  Register_Track(xml: CScriptXmlInit, handler: CUIWindow, path: string, opt: string, v: AnyTable, flags: AnyTable): void
  Callback_Track(ctrl: CUIWindow, path: string, opt: string, v: AnyTable, value: unknown): void
  Register_Radio(xml: CScriptXmlInit, handler: CUIWindow, path: string, opt: string, v: AnyTable, typ: string, flags: AnyTable): void
  Callback_Radio(ctrl: CUIWindow, path: string, opt: string, v: AnyTable, n: number): void
  Register_BtnAll(xml: CScriptXmlInit, handler: CUIWindow, path: string, opt: string, v: AnyTable, flags: AnyTable): void
  Callback_BtnAll(ctrl: CUIWindow, path: string, opt: string, v: AnyTable, flags: AnyTable): void
  Register_Preset(ct: CUIWindow): void
  Callback_Preset(): void
  Register_Tree(tr: CUIWindow, path: string, group: number, idx: number): void
  Callback_Tree(tr: CUIWindow, path: string, group: number, ctrl: CUIWindow, i: number): void
  GetValue(path: string, opt: string, v: AnyTable, flags: AnyTable): unknown
  GetDefaultValue(path: string, opt: string, v: AnyTable): unknown
  GetCurrentValue(path: string, opt: string, v: AnyTable): unknown
  GetContent(path: string, opt: string, v: AnyTable): unknown
  GetOption(id: string): AnyTable
  CacheValue(path: string, opt: string, value: unknown, v: AnyTable): void
  Stacker(path: string, opt: string, v: AnyTable): unknown
  UpdatePending(): void
  OnButton_Accept(): void
  OnButton_Reset(): void
  OnButton_Default(): void
  OnButton_Cancel(): void
  On_Accept(): void
  On_Cancel(): void
  On_Discard(): void
  OnKeyboard(dik: number, keyboard_action: number): boolean
}

/** @customConstructor opt_controls */
declare class opt_controls extends CUIWindow {
  constructor()
  __finalize(): void
  InitControls(x: number, y: number, xml: CScriptXmlInit, handler: CUIWindow): void
}

declare namespace ui_options {
  /** Anomaly `class "UIOptions"` is also reachable on the `ui_options` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`ui_options.UIOptions.Method = ...`). */
  export const UIOptions: UIOptions
  /** Anomaly `class "opt_controls"` is also reachable on the `ui_options` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`ui_options.opt_controls.Method = ...`). */
  export const opt_controls: opt_controls
}
