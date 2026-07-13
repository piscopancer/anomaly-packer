/** @noSelfInFile */

declare namespace ui_sleep_dialog {
  export const GUI: AnyTable
  export function dream_callback(): void
  export function dream_callback2(): void
  export function main(): void
  export function on_game_start(): void
  export function sleep(force: boolean): void
  export function sleep_bag(ph_sleepbag_id: number, sec: string): void
  export function sleep_forced(hours: number): void
  export function sleep_in_zone(actor: CGameObject, npc: CGameObject): void
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
  OnKeyboard(dik: number, keyboard_action: number): boolean
  Close(): void
}
