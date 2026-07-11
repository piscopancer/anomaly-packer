/** @noSelfInFile */

declare namespace ui_debug_weather {
  export const GUI: TODO
  export function start(owner: TODO): void
}

/** @customConstructor WeatherEditor */
declare class WeatherEditor extends CUIScriptWnd {
  constructor(owner: TODO)
  __finalize(): void
  InitControls(): TODO
  InitCallBacks(): void
  Reset(force: TODO): void
  Refresh(clear: TODO): void
  Update(): void
  Viewer_Play(): void
  Viewer_Pause(): void
  Viewer_Exit(): void
  Viewer_Value(): TODO
  Viewer_Update(): void
  Viewer_Start(): void
  On_Weather(): void
  On_Time(h: TODO, m: TODO): void
  On_Param(idx: TODO, val: TODO, ignore: TODO): void
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
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
  CurrentMoment(): TODO
  Apply(par: TODO, typ: number, memo: TODO): void
  LerpMoment(f: TODO, h: TODO, m: TODO): TODO
  Lerp(h: TODO, m: TODO, ts: TODO, te: TODO, ps: TODO, pe: TODO): TODO
  ClearMomentsInRange(f: TODO, hh: TODO, mm: TODO): void
  GetTimeRange(t: TODO): TODO
  GetNearestMoment(t: TODO, hh: number, mm: TODO): TODO
  SwitchParam(state: TODO, vert: TODO): TODO
  SwitchValue(state: TODO, idx: TODO, ignore: TODO): void
  SwitchValueGroup(state: TODO): void
  ReviseTime(h: TODO, m: TODO): TODO
  HasChanges(): TODO
  SaveToFile(): void
  Discard(): void
  GetStringByType(indx: TODO, typ: number): TODO
  IsList(typ: number): TODO
  AddToList(par: TODO, indx: TODO, cnt: TODO, value: TODO): void
  Reset_FolderList(indx: TODO, par: TODO, val: TODO, val_2: TODO): void
  StringToTime(str: TODO): number
  TimeToString(h: TODO, m: TODO): string
  ParseFromString(ltx: TODO, sec: TODO, par: TODO, typ: number): TODO
  IsInvalidValue(idx: TODO, typ: TODO, val: string): boolean
  ScrollToElement(idx: TODO): void
  PauseEngine(state: boolean): void
  Close(): void
  SetHint(text: string, cl: boolean): void
  MSG(fmt: TODO, ...args: TODO[]): void
  Print(fmt: TODO, ...args: TODO[]): void
}
