/** @noSelfInFile */

declare namespace ui_options {
  export const options: TODO
  export function cc(path: string, opt: string): string
  export function check_opt_table(id: string): boolean
  export function cont_renderer(): TODO
  export function cont_sun_quality(): TODO
  export function cont_vid_mode(): TODO
  export function curr_crosshair_clr(n: string): number
  export function curr_economy(fact: string): number
  export function curr_gameplay(fact: string): number
  export function curr_localization(): string | number
  export function curr_player_name(): string
  export function curr_renderer(): string
  export function curr_screen_mode(): number
  export function debug_only(): boolean
  export function def_radio_playlist(i: number): string
  export function exec(func: TODO, ...args: TODO[]): TODO
  export function for_renderer(...args: string[]): boolean
  export function func_autosave_timer_new(): void
  export function func_crosshair_clr(n: string): void
  export function func_debug_hud(): void
  export function func_debug_map_hud(): void
  export function func_economy_diff(fac: string): void
  export function func_gameplay_diff(fac: string): void
  export function func_hardcore_ai_aim(): void
  export function func_hud_autohide_bar(): void
  export function func_hud_minimap(): void
  export function func_localization(): void
  export function func_player_name(): void
  export function func_screen_mode(): void
  export function func_slot_hud(): void
  export function get(id: string): TODO
  export function get_opt_table(id: string): TODO
  export function init_opt_base(): void
  export function init_opt_coder(): void
  export function is_int(num: number): boolean
  export function level_present(): boolean
  export function print_dbg(...args: TODO[]): void
  export function set(id: string, value: TODO): void
  export function start_lighting_ui(self: TODO): void
  export function str_opt_explode(id: string, by_num?: boolean): TODO
  export function trader_cond(x: TODO): TODO
}

/** @customConstructor UIOptions */
declare class UIOptions extends CUIScriptWnd {
  constructor()
  __finalize(): void
  InitControls(): void
  InitCallBacks(): void
  Update(): void
  Reset(): void
  Reset_opt(curr_tree: TODO, path: string, flags: TODO): void
  Reset_last_opt(): void
  Register_Cap(xml: TODO, handler: TODO, id: string, hint: TODO): void
  Register_Line(xml: TODO, handler: TODO): void
  Register_Image(xml: TODO, handler: TODO, v: TODO): void
  Register_Slide(xml: TODO, handler: TODO, v: TODO): void
  Register_Title(xml: TODO, handler: TODO, v: TODO): void
  Register_Desc(xml: TODO, handler: TODO, v: TODO): void
  Register_Check(xml: TODO, handler: TODO, path: string, opt: TODO, v: TODO, flags: TODO): void
  Callback_Check(ctrl: TODO, path: string, opt: TODO, v: TODO): void
  Register_Button(xml: TODO, handler: TODO, path: string, opt: TODO, v: TODO, flags: TODO): void
  Callback_Button(ctrl: TODO, path: string, opt: TODO, v: TODO): void
  Register_List(xml: TODO, handler: TODO, path: string, opt: TODO, v: TODO, flags: TODO): void
  Callback_List(ctrl: TODO, path: string, opt: TODO, v: TODO): void
  Register_Input(xml: TODO, handler: TODO, path: string, opt: TODO, v: TODO, flags: TODO): void
  Callback_Input(ctrl: TODO, path: string, opt: TODO, v: TODO): void
  Register_Track(xml: TODO, handler: TODO, path: string, opt: TODO, v: TODO, flags: TODO): void
  Callback_Track(ctrl: TODO, path: string, opt: TODO, v: TODO, value: TODO): void
  Register_Radio(xml: TODO, handler: TODO, path: string, opt: TODO, v: TODO, typ: TODO, flags: TODO): void
  Callback_Radio(ctrl: TODO, path: string, opt: TODO, v: TODO, n: TODO): void
  Register_BtnAll(xml: TODO, handler: TODO, path: string, opt: TODO, v: TODO, flags: TODO): void
  Callback_BtnAll(ctrl: TODO, path: string, opt: TODO, v: TODO, flags: TODO): void
  Register_Preset(ct: TODO): void
  Callback_Preset(): void
  Register_Tree(tr: TODO, path: string, group: TODO, idx: TODO): void
  Callback_Tree(tr: TODO, path: string, group: TODO, ctrl: TODO, i: TODO): void
  GetValue(path: string, opt: TODO, v: TODO, flags: TODO): TODO
  GetDefaultValue(path: string, opt: TODO, v: TODO): TODO
  GetCurrentValue(path: string, opt: TODO, v: TODO): TODO
  GetContent(path: string, opt: TODO, v: TODO): TODO
  GetOption(id: string): TODO
  CacheValue(path: string, opt: TODO, value: TODO, v: TODO): void
  Stacker(path: string, opt: TODO, v: TODO): TODO
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
  InitControls(x: number, y: number, xml: TODO, handler: TODO): void
}
