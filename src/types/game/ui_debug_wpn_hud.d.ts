// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace ui_debug_wpn_hud {
  export const GUI: TODO
  export function on_game_start(): TODO
  export function on_key_hold(key: TODO): TODO
  export function on_key_release(key: TODO): TODO
  export function print_dbg(...args: TODO[]): TODO
  export function start(owner: TODO): TODO
}

/** @customConstructor WpnHudEditor */
declare class WpnHudEditor extends CUIScriptWnd {
  constructor(owner: TODO, section: TODO)
  __finalize(): TODO
  InitControls(): TODO
  InitCallBacks(): TODO
  Reset(force: TODO, use_cache: TODO): TODO
  GetStringByType(indx: TODO, typ: TODO): TODO
  GetParameterValue(cnt: TODO): TODO
  SetParameterValue(cnt: TODO, value: TODO): TODO
  ApplyParameterValue(typ: TODO, parent: TODO): TODO
  IsInvalidValue(cnt: TODO, typ: TODO, value: TODO): TODO
  Send_MSG(text: TODO, ...args: TODO[]): TODO
  ShowHint(): TODO
  Update(): TODO
  OnButtonCopy(): TODO
  OnButtonPaste(): TODO
  OnButtonSave(): TODO
  OnButtonAlign(): TODO
  OnButtonResume(): TODO
  CleanMemo(): TODO
  SwitchParam(state: TODO, vert: TODO): TODO
  SwitchValue(state: TODO, selected: TODO): TODO
  SwitchValueGroup(state: TODO, selected_group: TODO): TODO
  OnInput(cnt: TODO): TODO
  Close(): TODO
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
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
}
