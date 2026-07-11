/** @noSelfInFile */

declare namespace ui_debug_lighting {
  export const GUI: TODO
  export function on_game_start(): void
  export function on_key_hold(key: TODO): void
  export function on_key_release(key: TODO): void
  export function on_localization_change(): void
  export function print_dbg(...args: TODO[]): void
  export function start(owner: TODO): void
}

/** @customConstructor LightEditor */
declare class LightEditor extends CUIScriptWnd {
  constructor(owner: TODO)
  __finalize(): void
  InitControls(): TODO
  InitCallBacks(): void
  Reset(): void
  Update(): void
  OnSelectWeather(): void
  OnInput(n: TODO): void
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
  Hightlight(idx: TODO): void
  SwitchCommand(state: TODO): void
  SwitchValue(state: TODO): void
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
  Close(): void
}
