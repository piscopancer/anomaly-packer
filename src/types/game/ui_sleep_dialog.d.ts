// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace ui_sleep_dialog {
  export const GUI: TODO
  export function dream_callback(): TODO
  export function dream_callback2(): TODO
  export function main(): TODO
  export function on_game_start(): TODO
  export function sleep(force: TODO): TODO
  export function sleep_bag(ph_sleepbag_id: TODO, sec: TODO): TODO
  export function sleep_forced(hours: TODO): TODO
  export function sleep_in_zone(actor: TODO, npc: TODO): TODO
}

/** @customConstructor UISleep */
declare class UISleep extends CUIScriptWnd {
  constructor(arg0: TODO)
  __finalize(): TODO
  InitControls(): TODO
  InitCallbacks(): TODO
  Initialize(): TODO
  TestAndShow(force: TODO): TODO
  Update(): TODO
  OnTrackButton(): TODO
  OnButtonSleep(): TODO
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
  Close(): TODO
}
