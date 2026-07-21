/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace ui_debug_wpn_hud {
    export const GUI: AnyTable
    export function on_game_start(): void
    export function on_key_hold(key: string): void
    export function on_key_release(key: string): void
    export function print_dbg(...args: any[]): void
    export function start(owner: CGameObject): void
  }
  
  /** @customConstructor WpnHudEditor */
  class WpnHudEditor extends CUIScriptWnd {
    _h: TODO // @generated field — refine type
    _w: TODO // @generated field — refine type
    btn_align: TODO // @generated field — refine type
    btn_ini_copy: TODO // @generated field — refine type
    btn_ini_paste: TODO // @generated field — refine type
    btn_ratio: TODO // @generated field — refine type
    btn_reload: TODO // @generated field — refine type
    btn_save: TODO // @generated field — refine type
    cnt: TODO // @generated field — refine type
    cnt_group: TODO // @generated field — refine type
    crosshair: TODO // @generated field — refine type
    dialog: TODO // @generated field — refine type
    hint_wnd: TODO // @generated field — refine type
    hint_wnd_show: TODO // @generated field — refine type
    hint_wnd_text: TODO // @generated field — refine type
    index: TODO // @generated field — refine type
    msg_wnd: TODO // @generated field — refine type
    msg_wnd_text: TODO // @generated field — refine type
    msg_wnd_timer: TODO // @generated field — refine type
    name: TODO // @generated field — refine type
    owner: TODO // @generated field — refine type
    par: TODO // @generated field — refine type
    par_cap: TODO // @generated field — refine type
    par_hl: TODO // @generated field — refine type
    par_list: TODO // @generated field — refine type
    par_list_n: TODO // @generated field — refine type
    parent: TODO // @generated field — refine type
    scroll_par: TODO // @generated field — refine type
    section: TODO // @generated field — refine type
    selected: TODO // @generated field — refine type
    selected_group: TODO // @generated field — refine type
    txt_section: TODO // @generated field — refine type
    typ: TODO // @generated field — refine type
    value: TODO // @generated field — refine type
    value_i: TODO // @generated field — refine type
    xml: TODO // @generated field — refine type
    constructor(owner: CGameObject, section: Section.Item)
    __finalize(): void
    InitControls(): void
    InitCallBacks(): void
    Reset(force: boolean, use_cache: boolean): void
    GetStringByType(indx: number, typ: number): string
    GetParameterValue(cnt: number): any
    SetParameterValue(cnt: number, value: string): void
    ApplyParameterValue(typ: number, parent: CUIScriptWnd): void
    IsInvalidValue(cnt: number, typ: number, value: string): boolean
    Send_MSG(text: string, ...args: any[]): void
    ShowHint(): void
    Update(): void
    OnButtonCopy(): void
    OnButtonPaste(): void
    OnButtonSave(): void
    OnButtonAlign(): void
    OnButtonResume(): void
    CleanMemo(): void
    SwitchParam(state: string, vert: boolean): void
    SwitchValue(state: string, selected: number): void
    SwitchValueGroup(state: string, selected_group: number): void
    OnInput(cnt: number): void
    Close(): void
    OnKeyboard(dik: number, keyboard_action: number): boolean
    OnInput_1(): void
    OnInput_2(): void
    OnInput_3(): void
    OnInput_4(): void
    OnInput_5(): void
    OnInput_6(): void
    OnInput_7(): void
    OnInput_8(): void
    OnInput_9(): void
    OnInput_10(): void
    OnInput_11(): void
    OnInput_12(): void
    OnInput_13(): void
    OnInput_14(): void
    OnInput_15(): void
    OnInput_16(): void
    OnInput_17(): void
    OnInput_18(): void
    OnInput_19(): void
    OnInput_20(): void
    OnInput_21(): void
    OnInput_22(): void
    OnInput_23(): void
    OnInput_24(): void
    OnInput_25(): void
    OnInput_26(): void
    OnInput_27(): void
    OnInput_28(): void
    OnInput_29(): void
    OnInput_30(): void
    OnInput_31(): void
    OnInput_32(): void
    OnInput_33(): void
    OnInput_34(): void
    OnInput_35(): void
    OnInput_36(): void
    OnInput_37(): void
    OnInput_38(): void
    OnInput_39(): void
    OnInput_40(): void
    OnInput_41(): void
    OnInput_42(): void
    OnInput_43(): void
    OnInput_44(): void
    OnInput_45(): void
    OnInput_46(): void
    OnInput_47(): void
    OnInput_48(): void
    OnInput_49(): void
    OnInput_50(): void
    OnInput_51(): void
    OnInput_52(): void
    OnInput_53(): void
    OnInput_54(): void
    OnInput_55(): void
    OnInput_56(): void
    OnInput_57(): void
    OnInput_58(): void
  }

  namespace ui_debug_wpn_hud {
    /** Anomaly `class "WpnHudEditor"` is also reachable on the `ui_debug_wpn_hud` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`ui_debug_wpn_hud.WpnHudEditor.Method = ...`). */
    export const WpnHudEditor: WpnHudEditor
  }
}
