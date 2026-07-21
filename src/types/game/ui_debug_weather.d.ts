/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace ui_debug_weather {
    /** The live weather-editor instance (`nil` until opened). */
    export const GUI: WeatherEditor | undefined
    export function start(owner?: any): void
  }

  /** In-game weather editor debug UI. @customConstructor WeatherEditor */
  class WeatherEditor extends CUIScriptWnd {
    btn_clear: TODO // @generated field — refine type
    btn_copy: TODO // @generated field — refine type
    btn_exit: TODO // @generated field — refine type
    btn_help: TODO // @generated field — refine type
    btn_paste: TODO // @generated field — refine type
    btn_resume: TODO // @generated field — refine type
    btn_save: TODO // @generated field — refine type
    btn_view: TODO // @generated field — refine type
    c_hour: TODO // @generated field — refine type
    c_minute: TODO // @generated field — refine type
    c_weather: TODO // @generated field — refine type
    cap: TODO // @generated field — refine type
    cap_time: TODO // @generated field — refine type
    cap_weather: TODO // @generated field — refine type
    copy: TODO // @generated field — refine type
    copy_1: TODO // @generated field — refine type
    debug: boolean // @generated field — refine type
    dialog: TODO // @generated field — refine type
    dialog_btn: TODO // @generated field — refine type
    dialog_v: TODO // @generated field — refine type
    folder: TODO // @generated field — refine type
    folder_last: TODO // @generated field — refine type
    frame: TODO // @generated field — refine type
    help: TODO // @generated field — refine type
    help_wnd: TODO // @generated field — refine type
    help_wnd_text: TODO // @generated field — refine type
    hight: TODO // @generated field — refine type
    hint_wnd: TODO // @generated field — refine type
    hint_wnd_text: TODO // @generated field — refine type
    idx: TODO // @generated field — refine type
    idx_g: TODO // @generated field — refine type
    idx_i: TODO // @generated field — refine type
    idx_p: TODO // @generated field — refine type
    input_hour: TODO // @generated field — refine type
    input_minute: TODO // @generated field — refine type
    input_preset: TODO // @generated field — refine type
    jump: TODO // @generated field — refine type
    list: TODO // @generated field — refine type
    list_i: number // @generated field — refine type
    list_n: TODO // @generated field — refine type
    list_weather: TODO // @generated field — refine type
    memo: TODO // @generated field — refine type
    message_box_save: TODO // @generated field — refine type
    msg_width: TODO // @generated field — refine type
    msg_wnd: TODO // @generated field — refine type
    msg_wnd_text: TODO // @generated field — refine type
    msg_wnd_timer: TODO // @generated field — refine type
    name: TODO // @generated field — refine type
    owner: TODO // @generated field — refine type
    par: TODO // @generated field — refine type
    par_cap: TODO // @generated field — refine type
    par_hl: TODO // @generated field — refine type
    parent: TODO // @generated field — refine type
    range: TODO // @generated field — refine type
    scroll_par: TODO // @generated field — refine type
    select: TODO // @generated field — refine type
    select_g: TODO // @generated field — refine type
    st: TODO // @generated field — refine type
    type: TODO // @generated field — refine type
    vw_autoplay: boolean // @generated field — refine type
    vw_btn_pause: TODO // @generated field — refine type
    vw_btn_play: TODO // @generated field — refine type
    vw_cap_autoplay: TODO // @generated field — refine type
    vw_frame: TODO // @generated field — refine type
    vw_g_step: number // @generated field — refine type
    vw_i: TODO // @generated field — refine type
    vw_marks: TODO // @generated field — refine type
    vw_pos: TODO // @generated field — refine type
    vw_ruler: TODO // @generated field — refine type
    vw_ruler_min: TODO // @generated field — refine type
    vw_ruler_start: boolean // @generated field — refine type
    vw_scroll: TODO // @generated field — refine type
    vw_tg: TODO // @generated field — refine type
    vw_time: TODO // @generated field — refine type
    vw_track: TODO // @generated field — refine type
    vw_val: TODO // @generated field — refine type
    vw_width: TODO // @generated field — refine type
    weather_files: TODO // @generated field — refine type
    width: TODO // @generated field — refine type
    xml: TODO // @generated field — refine type
    constructor(owner?: any)
    __finalize(): void
    InitControls(): void
    InitCallBacks(): void
    Reset(force?: boolean): void
    Refresh(clear?: boolean): void
    Update(): void
    Viewer_Play(): void
    Viewer_Pause(): void
    Viewer_Exit(): void
    Viewer_Value(): LuaMultiReturn<[number, number]>
    Viewer_Update(): void
    Viewer_Start(): void
    On_Weather(): void
    On_Time(h: number, m: number): void
    On_Param(idx: number, val: any, ignore?: boolean): void
    OnBTN_Copy(): void
    OnBTN_Paste(): void
    OnBTN_Copy_Param(): void
    OnBTN_Paste_Param(): void
    OnBTN_Save(): void
    OnBTN_Resume(): void
    OnBTN_Help(): void
    OnBTN_Clear(): void
    OnBTN_Clear_Moment(): void
    OnBTN_Exit(): void
    OnKeyboard(dik: number, keyboard_action: number): boolean
    CurrentMoment(): AnyTable | undefined
    Apply(par: string, typ: number, memo: AnyTable): void
    LerpMoment(f: string, h: number, m: number): AnyTable | undefined
    Lerp(h: number, m: number, ts: number, te: number, ps: number, pe: number): any
    ClearMomentsInRange(f: string, hh: number, mm: number): void
    GetTimeRange(t: number): { s: number; e: number }
    GetNearestMoment(t: number, hh: number, mm: number): LuaMultiReturn<[number, number]>
    SwitchParam(state: boolean, vert?: boolean): any
    SwitchValue(state: boolean, idx: number, ignore?: boolean): void
    SwitchValueGroup(state: boolean): void
    ReviseTime(h: number, m: number): LuaMultiReturn<[number, number]>
    HasChanges(): number
    SaveToFile(): void
    Discard(): void
    GetStringByType(indx: number, typ: number): string
    IsList(typ: number): boolean
    AddToList(par: string, indx: number, cnt: number, value: any): void
    Reset_FolderList(indx: number, par: string, val: any, val_2: any): void
    StringToTime(str: string): LuaMultiReturn<[number, number]>
    TimeToString(h: number, m: number): string
    ParseFromString(ltx: any, sec: Section.Item, par: string, typ: number): any
    IsInvalidValue(idx: number, typ: number, val: string): boolean
    ScrollToElement(idx: number): void
    PauseEngine(state: boolean): void
    Close(): void
    SetHint(text: string, cl: boolean): void
    MSG(fmt: string, ...args: any[]): void
    Print(fmt: string, ...args: any[]): void
  }

  namespace ui_debug_weather {
    /** Anomaly `class "WeatherEditor"` is also reachable on the `ui_debug_weather` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`ui_debug_weather.WeatherEditor.Method = ...`). */
    export const WeatherEditor: WeatherEditor
  }
}
