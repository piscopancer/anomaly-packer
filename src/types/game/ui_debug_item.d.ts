/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace ui_debug_item {
    // Editable parameter descriptor, as declared in the `parameters` config.
    export interface ParameterDescriptor {
      index: number
      type: number
      def: number[]
      min: number
      max: number
      step: number
      from?: string
      show: number
      name: string
      reversed?: boolean
      precision?: number
    }
    export const GUI: UIItemEditor | undefined
    export const parameters: Record<string, Record<string, ParameterDescriptor>>
    export function on_game_start(): void
    export function on_key_hold(key: number): void
    export function on_key_release(key: number): void
    export function print_dbg(...args: unknown[]): void
    export function reset_anim(anim_state: string): boolean
    export function start(owner: CUIScriptWnd | undefined, object: CGameObject, section: Section.Item, item_type: string, item_kinds: Record<string, boolean>): void
    export function start_artfact(owner?: CUIScriptWnd): void
    export function start_outfit(owner?: CUIScriptWnd): void
    export function start_weapon(owner?: CUIScriptWnd): void
  }

  /** @customConstructor UIItemEditor */
  class UIItemEditor extends CUIScriptWnd {
    bar: TODO // @generated field — refine type
    bar_perc: TODO // @generated field — refine type
    bar_str: TODO // @generated field — refine type
    bar_txt: TODO // @generated field — refine type
    btn_apply: TODO // @generated field — refine type
    btn_copy: TODO // @generated field — refine type
    btn_paste: TODO // @generated field — refine type
    btn_reset: TODO // @generated field — refine type
    cap_i: TODO // @generated field — refine type
    cfg: TODO // @generated field — refine type
    cnt: TODO // @generated field — refine type
    cnt_g: TODO // @generated field — refine type
    cnt_gn: TODO // @generated field — refine type
    cnt_n: TODO // @generated field — refine type
    d1: TODO // @generated field — refine type
    d2: TODO // @generated field — refine type
    d3: TODO // @generated field — refine type
    ele_i: TODO // @generated field — refine type
    ele_i_2: TODO // @generated field — refine type
    help_wnd: TODO // @generated field — refine type
    help_wnd_text: TODO // @generated field — refine type
    hint_wnd: TODO // @generated field — refine type
    hint_wnd_height: TODO // @generated field — refine type
    hint_wnd_text: TODO // @generated field — refine type
    hint_wnd_text_height: TODO // @generated field — refine type
    hint_wnd_text_width: TODO // @generated field — refine type
    hint_wnd_width: TODO // @generated field — refine type
    hl_i: TODO // @generated field — refine type
    i: TODO // @generated field — refine type
    ico_1: TODO // @generated field — refine type
    ico_1_s: TODO // @generated field — refine type
    ico_1_tmp: TODO // @generated field — refine type
    ico_2: TODO // @generated field — refine type
    ico_2_s: TODO // @generated field — refine type
    ico_2_tmp: TODO // @generated field — refine type
    id: TODO // @generated field — refine type
    item_type: TODO // @generated field — refine type
    list: TODO // @generated field — refine type
    list_i: TODO // @generated field — refine type
    list_n: TODO // @generated field — refine type
    msg_wnd_frame: TODO // @generated field — refine type
    msg_wnd_text: TODO // @generated field — refine type
    msg_wnd_timer: TODO // @generated field — refine type
    name_1: TODO // @generated field — refine type
    name_2: TODO // @generated field — refine type
    name_i: TODO // @generated field — refine type
    owner: TODO // @generated field — refine type
    p: TODO // @generated field — refine type
    scroll_d1: TODO // @generated field — refine type
    scroll_d3: TODO // @generated field — refine type
    section: TODO // @generated field — refine type
    selected: TODO // @generated field — refine type
    selected_group: TODO // @generated field — refine type
    show_help: boolean // @generated field — refine type
    typ_i: TODO // @generated field — refine type
    value_g: TODO // @generated field — refine type
    value_i: TODO // @generated field — refine type
    value_tmp: TODO // @generated field — refine type
    xml: TODO // @generated field — refine type
    constructor(owner: CUIScriptWnd | undefined, object: CGameObject, section: Section.Item, item_type: string, item_kinds: Record<string, boolean>)
    __finalize(): void
    InitControls(): void
    InitCallbacks(): void
    ResetList(item_type: string, item_kinds: Record<string, boolean>): void
    ResetParameters(force_def?: boolean): void
    ResetComparison(p?: string): void
    Update(): void
    Update_Pending(cnt: number): void
    GetStringByType(index: number, typ: number): string
    GetParameterValue(cnt: number): string | number
    SetParameterValue(cnt: number, value: string | number): void
    IsInvalidValue(cnt: number, typ: number, value: string): boolean
    Send_MSG(text: string, ...args: unknown[]): void
    SetHint(text: string, pos?: vector2, _w?: number): void
    SetHelp(text: string, stop?: boolean): void
    SwitchParam(state: boolean, vert: boolean): void
    SwitchValue(state: boolean, selected?: number): void
    SwitchValueGroup(state: boolean, selected_group?: number): void
    OnInput(cnt: number): void
    OnButton_Copy(): void
    OnButton_Paste(): void
    OnButton_Reset(): void
    OnButton_Apply(): void
    Refresh_Item(): void
    OnKeyboard(dik: number, keyboard_action: number): boolean
    Close(): void
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
    OnInput_59(): void
    OnInput_60(): void
    OnInput_61(): void
    OnInput_62(): void
    OnInput_63(): void
    OnInput_64(): void
    OnInput_65(): void
    OnInput_66(): void
    OnInput_67(): void
    OnInput_68(): void
    OnInput_69(): void
    OnInput_70(): void
    OnInput_71(): void
    OnInput_72(): void
    OnInput_73(): void
    OnInput_74(): void
    OnInput_75(): void
    OnInput_76(): void
    OnInput_77(): void
    OnInput_78(): void
    OnInput_79(): void
    OnInput_80(): void
  }

  /** @customConstructor list_element */
  class list_element extends CUIListBoxItem {
    flag: TODO // @generated field — refine type
    idx: TODO // @generated field — refine type
    index: TODO // @generated field — refine type
    name: TODO // @generated field — refine type
    obj_related: TODO // @generated field — refine type
    section: TODO // @generated field — refine type
    text: TODO // @generated field — refine type
    // shared global name with distinct constructors across ui_debug_item / ui_debug_launcher / ui_workshop
    constructor(section: Section.Item, width: number)
    constructor(section: Section.Item, width: number)
    constructor(section: Section.Item, width: number)
    __finalize(): void
  }

  namespace ui_debug_item {
    /** Anomaly `class "UIItemEditor"` is also reachable on the `ui_debug_item` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`ui_debug_item.UIItemEditor.Method = ...`). */
    export const UIItemEditor: UIItemEditor
    /** Anomaly `class "list_element"` is also reachable on the `ui_debug_item` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`ui_debug_item.list_element.Method = ...`). */
    export const list_element: list_element
  }
}
