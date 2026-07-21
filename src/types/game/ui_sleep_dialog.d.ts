/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace ui_sleep_dialog {
    export const GUI: AnyTable
    export function dream_callback(): void
    export function dream_callback2(): void
    export function main(): void
    export function on_game_start(): void
    export function sleep(force: boolean): void
    export function sleep_bag(ph_sleepbag_id: number, sec: Section.Item): void
    export function sleep_forced(hours: number): void
    export function sleep_in_zone(actor: CGameObject, npc: CGameObject): void
  }
  
  /** @customConstructor UISleep */
  class UISleep extends CUIScriptWnd {
    back: TODO // @generated field — refine type
    btn_cancel: TODO // @generated field — refine type
    btn_sleep: TODO // @generated field — refine type
    sleep_st_tbl: TODO // @generated field — refine type
    sleep_static: TODO // @generated field — refine type
    sleep_static2: TODO // @generated field — refine type
    st_marker: TODO // @generated field — refine type
    static_cover: TODO // @generated field — refine type
    time_track: TODO // @generated field — refine type
    wide: TODO // @generated field — refine type
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

  namespace ui_sleep_dialog {
    /** Anomaly `class "UISleep"` is also reachable on the `ui_sleep_dialog` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`ui_sleep_dialog.UISleep.Method = ...`). */
    export const UISleep: UISleep
  }
}
