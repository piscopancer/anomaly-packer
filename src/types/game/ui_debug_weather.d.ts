/** @noSelfInFile */

declare namespace ui_debug_weather {
  /** The live weather-editor instance (`nil` until opened). */
  export const GUI: WeatherEditor | undefined
  export function start(owner?: any): void
}

/** In-game weather editor debug UI. @customConstructor WeatherEditor */
declare class WeatherEditor extends CUIScriptWnd {
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
  ParseFromString(ltx: any, sec: string, par: string, typ: number): any
  IsInvalidValue(idx: number, typ: number, val: string): boolean
  ScrollToElement(idx: number): void
  PauseEngine(state: boolean): void
  Close(): void
  SetHint(text: string, cl: boolean): void
  MSG(fmt: string, ...args: any[]): void
  Print(fmt: string, ...args: any[]): void
}
