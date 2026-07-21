/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace item_backpack {
    export const GUI: UICreateStash
    export function actor_on_item_take_from_box(box: CGameObject, obj: CGameObject): void
    export function actor_on_item_use(obj: CGameObject): boolean
    export function func_stash(obj: CGameObject): void
    export function is_ammo_for_wpn(sec: Section.Item): boolean
    export function is_in_slot(obj: CGameObject): boolean
    export function menu_stash(obj: CGameObject): string | undefined
    export function on_game_start(): void
    export function start(obj: CGameObject): void
  }
  
  /** @customConstructor UICreateStash */
  class UICreateStash extends CUIScriptWnd {
    dialog: TODO // @generated field — refine type
    id: TODO // @generated field — refine type
    input: TODO // @generated field — refine type
    section: TODO // @generated field — refine type
    constructor()
    __finalize(): void
    InitControls(): void
    InitCallBacks(): void
    Reset(obj: CGameObject): void
    Update(): void
    OnAccept(): void
    OnKeyboard(dik: number, keyboard_action: number): boolean
    Close(): void
  }

  namespace item_backpack {
    /** Anomaly `class "UICreateStash"` is also reachable on the `item_backpack` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`item_backpack.UICreateStash.Method = ...`). */
    export const UICreateStash: UICreateStash
  }
}
