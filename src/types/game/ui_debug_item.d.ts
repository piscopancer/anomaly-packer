// @generated skeleton — auto-produced from Lua scripts, refine by hand

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
  OnInput_1(arg0: TODO): TODO
  OnInput_2(arg0: TODO): TODO
  OnInput_3(arg0: TODO): TODO
  OnInput_4(arg0: TODO): TODO
  OnInput_5(arg0: TODO): TODO
  OnInput_6(arg0: TODO): TODO
  OnInput_7(arg0: TODO): TODO
  OnInput_8(arg0: TODO): TODO
  OnInput_9(arg0: TODO): TODO
  OnInput_10(arg0: TODO): TODO
  OnInput_11(arg0: TODO): TODO
  OnInput_12(arg0: TODO): TODO
  OnInput_13(arg0: TODO): TODO
  OnInput_14(arg0: TODO): TODO
  OnInput_15(arg0: TODO): TODO
  OnInput_16(arg0: TODO): TODO
  OnInput_17(arg0: TODO): TODO
  OnInput_18(arg0: TODO): TODO
  OnInput_19(arg0: TODO): TODO
  OnInput_20(arg0: TODO): TODO
  OnInput_21(arg0: TODO): TODO
  OnInput_22(arg0: TODO): TODO
  OnInput_23(arg0: TODO): TODO
  OnInput_24(arg0: TODO): TODO
  OnInput_25(arg0: TODO): TODO
  OnInput_26(arg0: TODO): TODO
  OnInput_27(arg0: TODO): TODO
  OnInput_28(arg0: TODO): TODO
  OnInput_29(arg0: TODO): TODO
  OnInput_30(arg0: TODO): TODO
  OnInput_31(arg0: TODO): TODO
  OnInput_32(arg0: TODO): TODO
  OnInput_33(arg0: TODO): TODO
  OnInput_34(arg0: TODO): TODO
  OnInput_35(arg0: TODO): TODO
  OnInput_36(arg0: TODO): TODO
  OnInput_37(arg0: TODO): TODO
  OnInput_38(arg0: TODO): TODO
  OnInput_39(arg0: TODO): TODO
  OnInput_40(arg0: TODO): TODO
  OnInput_41(arg0: TODO): TODO
  OnInput_42(arg0: TODO): TODO
  OnInput_43(arg0: TODO): TODO
  OnInput_44(arg0: TODO): TODO
  OnInput_45(arg0: TODO): TODO
  OnInput_46(arg0: TODO): TODO
  OnInput_47(arg0: TODO): TODO
  OnInput_48(arg0: TODO): TODO
  OnInput_49(arg0: TODO): TODO
  OnInput_50(arg0: TODO): TODO
  OnInput_51(arg0: TODO): TODO
  OnInput_52(arg0: TODO): TODO
  OnInput_53(arg0: TODO): TODO
  OnInput_54(arg0: TODO): TODO
  OnInput_55(arg0: TODO): TODO
  OnInput_56(arg0: TODO): TODO
  OnInput_57(arg0: TODO): TODO
  OnInput_58(arg0: TODO): TODO
  OnInput_59(arg0: TODO): TODO
  OnInput_60(arg0: TODO): TODO
  OnInput_61(arg0: TODO): TODO
  OnInput_62(arg0: TODO): TODO
  OnInput_63(arg0: TODO): TODO
  OnInput_64(arg0: TODO): TODO
  OnInput_65(arg0: TODO): TODO
  OnInput_66(arg0: TODO): TODO
  OnInput_67(arg0: TODO): TODO
  OnInput_68(arg0: TODO): TODO
  OnInput_69(arg0: TODO): TODO
  OnInput_70(arg0: TODO): TODO
  OnInput_71(arg0: TODO): TODO
  OnInput_72(arg0: TODO): TODO
  OnInput_73(arg0: TODO): TODO
  OnInput_74(arg0: TODO): TODO
  OnInput_75(arg0: TODO): TODO
  OnInput_76(arg0: TODO): TODO
  OnInput_77(arg0: TODO): TODO
  OnInput_78(arg0: TODO): TODO
  OnInput_79(arg0: TODO): TODO
  OnInput_80(arg0: TODO): TODO
}

/** @customConstructor list_element */
declare class list_element extends CUIListBoxItem {
  constructor(idx: TODO, name: TODO, name_: TODO)
  __finalize(): TODO
}
