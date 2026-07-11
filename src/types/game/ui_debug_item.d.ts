/** @noSelfInFile */

declare namespace ui_debug_item {
  export const GUI: TODO
  export const parameters: TODO
  export function on_game_start(): TODO
  export function on_key_hold(key: TODO): TODO
  export function on_key_release(key: TODO): TODO
  export function print_dbg(...args: TODO[]): TODO
  export function reset_anim(anim_state: TODO): TODO
  export function start(owner: TODO, object: TODO, section: TODO, item_type: TODO, item_kinds: TODO): TODO
  export function start_artfact(owner: TODO): TODO
  export function start_outfit(owner: TODO): TODO
  export function start_weapon(owner: TODO): TODO
}

/** @customConstructor UIItemEditor */
declare class UIItemEditor extends CUIScriptWnd {
  constructor(owner: TODO, object: TODO, section: TODO, item_type: TODO, item_kinds: TODO)
  __finalize(): TODO
  InitControls(): TODO
  InitCallbacks(): TODO
  ResetList(item_type: TODO, item_kinds: TODO): TODO
  ResetParameters(force_def: TODO): TODO
  ResetComparison(p: TODO): TODO
  Update(): TODO
  Update_Pending(cnt: TODO): TODO
  GetStringByType(index: TODO, typ: TODO): TODO
  GetParameterValue(cnt: TODO): TODO
  SetParameterValue(cnt: TODO, value: TODO): TODO
  IsInvalidValue(cnt: TODO, typ: TODO, value: TODO): TODO
  Send_MSG(text: TODO, ...args: TODO[]): TODO
  SetHint(text: TODO, pos: TODO, _w: TODO): TODO
  SetHelp(text: TODO, stop: TODO): TODO
  SwitchParam(state: TODO, vert: TODO): TODO
  SwitchValue(state: TODO, selected: TODO): TODO
  SwitchValueGroup(state: TODO, selected_group: TODO): TODO
  OnInput(cnt: TODO): TODO
  OnButton_Copy(): TODO
  OnButton_Paste(): TODO
  OnButton_Reset(): TODO
  OnButton_Apply(): TODO
  Refresh_Item(): TODO
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
  Close(): TODO
  OnInput_1(): TODO
  OnInput_2(): TODO
  OnInput_3(): TODO
  OnInput_4(): TODO
  OnInput_5(): TODO
  OnInput_6(): TODO
  OnInput_7(): TODO
  OnInput_8(): TODO
  OnInput_9(): TODO
  OnInput_10(): TODO
  OnInput_11(): TODO
  OnInput_12(): TODO
  OnInput_13(): TODO
  OnInput_14(): TODO
  OnInput_15(): TODO
  OnInput_16(): TODO
  OnInput_17(): TODO
  OnInput_18(): TODO
  OnInput_19(): TODO
  OnInput_20(): TODO
  OnInput_21(): TODO
  OnInput_22(): TODO
  OnInput_23(): TODO
  OnInput_24(): TODO
  OnInput_25(): TODO
  OnInput_26(): TODO
  OnInput_27(): TODO
  OnInput_28(): TODO
  OnInput_29(): TODO
  OnInput_30(): TODO
  OnInput_31(): TODO
  OnInput_32(): TODO
  OnInput_33(): TODO
  OnInput_34(): TODO
  OnInput_35(): TODO
  OnInput_36(): TODO
  OnInput_37(): TODO
  OnInput_38(): TODO
  OnInput_39(): TODO
  OnInput_40(): TODO
  OnInput_41(): TODO
  OnInput_42(): TODO
  OnInput_43(): TODO
  OnInput_44(): TODO
  OnInput_45(): TODO
  OnInput_46(): TODO
  OnInput_47(): TODO
  OnInput_48(): TODO
  OnInput_49(): TODO
  OnInput_50(): TODO
  OnInput_51(): TODO
  OnInput_52(): TODO
  OnInput_53(): TODO
  OnInput_54(): TODO
  OnInput_55(): TODO
  OnInput_56(): TODO
  OnInput_57(): TODO
  OnInput_58(): TODO
  OnInput_59(): TODO
  OnInput_60(): TODO
  OnInput_61(): TODO
  OnInput_62(): TODO
  OnInput_63(): TODO
  OnInput_64(): TODO
  OnInput_65(): TODO
  OnInput_66(): TODO
  OnInput_67(): TODO
  OnInput_68(): TODO
  OnInput_69(): TODO
  OnInput_70(): TODO
  OnInput_71(): TODO
  OnInput_72(): TODO
  OnInput_73(): TODO
  OnInput_74(): TODO
  OnInput_75(): TODO
  OnInput_76(): TODO
  OnInput_77(): TODO
  OnInput_78(): TODO
  OnInput_79(): TODO
  OnInput_80(): TODO
}

/** @customConstructor list_element */
declare class list_element extends CUIListBoxItem {
  // shared global name with distinct constructors across ui_debug_item / ui_debug_launcher / ui_workshop
  constructor(section: TODO, width: TODO)
  constructor(section: TODO, width: TODO)
  constructor(section: TODO, width: TODO)
  __finalize(): TODO
}
