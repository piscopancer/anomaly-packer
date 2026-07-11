/** @noSelfInFile */

declare namespace ui_debug_wpn_hud {
  export const GUI: TODO
  export function on_game_start(): void
  export function on_key_hold(key: TODO): void
  export function on_key_release(key: TODO): void
  export function print_dbg(...args: TODO[]): void
  export function start(owner: TODO): void
}

/** @customConstructor WpnHudEditor */
declare class WpnHudEditor extends CUIScriptWnd {
  constructor(owner: TODO, section: TODO)
  __finalize(): void
  InitControls(): TODO
  InitCallBacks(): void
  Reset(force: TODO, use_cache: TODO): void
  GetStringByType(indx: TODO, typ: number): TODO
  GetParameterValue(cnt: TODO): TODO
  SetParameterValue(cnt: TODO, value: TODO): void
  ApplyParameterValue(typ: number, parent: TODO): void
  IsInvalidValue(cnt: TODO, typ: TODO, value: string): boolean
  Send_MSG(text: TODO, ...args: TODO[]): void
  ShowHint(): void
  Update(): void
  OnButtonCopy(): void
  OnButtonPaste(): void
  OnButtonSave(): TODO
  OnButtonAlign(): void
  OnButtonResume(): void
  CleanMemo(): void
  SwitchParam(state: TODO, vert: TODO): TODO
  SwitchValue(state: TODO, selected: TODO): void
  SwitchValueGroup(state: TODO, selected_group: TODO): void
  OnInput(cnt: TODO): void
  Close(): void
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
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
