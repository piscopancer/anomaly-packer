/** @noSelfInFile */

declare namespace ui_debug_lighting {
  export const GUI: AnyTable
  export function on_game_start(): void
  export function on_key_hold(key: string): void
  export function on_key_release(key: string): void
  export function on_localization_change(): void
  export function print_dbg(...args: any[]): void
  export function start(owner: CGameObject): void
}

/** @customConstructor LightEditor */
declare class LightEditor extends CUIScriptWnd {
  cnt: TODO // @generated field — refine type
  commands_ind: TODO // @generated field — refine type
  dialog: TODO // @generated field — refine type
  list_weather: TODO // @generated field — refine type
  op: TODO // @generated field — refine type
  op_cap: TODO // @generated field — refine type
  op_hl: TODO // @generated field — refine type
  owner: TODO // @generated field — refine type
  scroll: TODO // @generated field — refine type
  selected: TODO // @generated field — refine type
  weather_presets: TODO // @generated field — refine type
  xml: TODO // @generated field — refine type
  constructor(owner: CGameObject)
  __finalize(): void
  InitControls(): void
  InitCallBacks(): void
  Reset(): void
  Update(): void
  OnSelectWeather(): void
  OnInput(n: number): void
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
  Hightlight(idx: number): void
  SwitchCommand(state: string): void
  SwitchValue(state: string): void
  OnKeyboard(dik: number, keyboard_action: number): boolean
  Close(): void
}

declare namespace ui_debug_lighting {
  /** Anomaly `class "LightEditor"` is also reachable on the `ui_debug_lighting` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`ui_debug_lighting.LightEditor.Method = ...`). */
  export const LightEditor: LightEditor
}
