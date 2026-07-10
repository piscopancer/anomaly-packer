// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace ui_debug_weather {
  export const GUI: TODO
  export function start(owner: TODO): TODO
}

/** @customConstructor WeatherEditor */
declare class WeatherEditor extends CUIScriptWnd {
  constructor(owner: TODO)
  __finalize(): TODO
  InitControls(): TODO
  InitCallBacks(): TODO
  Reset(force: TODO): TODO
  Refresh(clear: TODO): TODO
  Update(): TODO
  Viewer_Play(): TODO
  Viewer_Pause(): TODO
  Viewer_Exit(): TODO
  Viewer_Value(): TODO
  Viewer_Update(): TODO
  Viewer_Start(): TODO
  On_Weather(): TODO
  On_Time(h: TODO, m: TODO): TODO
  On_Param(idx: TODO, val: TODO, ignore: TODO): TODO
  OnBTN_Copy(): TODO
  OnBTN_Paste(): TODO
  OnBTN_Copy_Param(): TODO
  OnBTN_Paste_Param(): TODO
  OnBTN_Save(): TODO
  OnBTN_Resume(): TODO
  OnBTN_Help(): TODO
  OnBTN_Clear(): TODO
  OnBTN_Clear_Moment(): TODO
  OnBTN_Exit(): TODO
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
  CurrentMoment(): TODO
  Apply(par: TODO, typ: TODO, memo: TODO): TODO
  LerpMoment(f: TODO, h: TODO, m: TODO): TODO
  Lerp(h: TODO, m: TODO, ts: TODO, te: TODO, ps: TODO, pe: TODO): TODO
  ClearMomentsInRange(f: TODO, hh: TODO, mm: TODO): TODO
  GetTimeRange(t: TODO): TODO
  GetNearestMoment(t: TODO, hh: TODO, mm: TODO): TODO
  SwitchParam(state: TODO, vert: TODO): TODO
  SwitchValue(state: TODO, idx: TODO, ignore: TODO): TODO
  SwitchValueGroup(state: TODO): TODO
  ReviseTime(h: TODO, m: TODO): TODO
  HasChanges(): TODO
  SaveToFile(): TODO
  Discard(): TODO
  GetStringByType(indx: TODO, typ: TODO): TODO
  IsList(typ: TODO): TODO
  AddToList(par: TODO, indx: TODO, cnt: TODO, value: TODO): TODO
  Reset_FolderList(indx: TODO, par: TODO, val: TODO, val_2: TODO): TODO
  StringToTime(str: TODO): TODO
  TimeToString(h: TODO, m: TODO): TODO
  ParseFromString(ltx: TODO, sec: TODO, par: TODO, typ: TODO): TODO
  IsInvalidValue(idx: TODO, typ: TODO, val: TODO): TODO
  ScrollToElement(idx: TODO): TODO
  PauseEngine(state: TODO): TODO
  Close(): TODO
  SetHint(text: TODO, cl: TODO): TODO
  MSG(fmt: TODO, ...args: TODO[]): TODO
  Print(fmt: TODO, ...args: TODO[]): TODO
}
