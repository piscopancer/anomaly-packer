/** @noSelfInFile */

declare namespace ui_sleep_dialog {
  export const GUI: TODO
  export function dream_callback(): void
  export function dream_callback2(): void
  export function main(): void
  export function on_game_start(): void
  export function sleep(force: TODO): void
  export function sleep_bag(ph_sleepbag_id: TODO, sec: TODO): TODO
  export function sleep_forced(hours: TODO): void
  export function sleep_in_zone(actor: TODO, npc: TODO): void
}

/** @customConstructor UISleep */
declare class UISleep extends CUIScriptWnd {
  constructor()
  __finalize(): void
  InitControls(): void
  InitCallbacks(): void
  Initialize(): void
  TestAndShow(force: boolean): void
  Update(): void
  OnTrackButton(): void
  OnButtonSleep(): void
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
  Close(): void
}
