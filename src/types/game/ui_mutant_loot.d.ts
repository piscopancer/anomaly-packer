/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace ui_mutant_loot {
    export const GUI: AnyTable
    export function loot_mutant(section: Section.Item, clsid: number, loot_table: AnyTable, npc: CGameObject, dont_create: boolean, victim: CGameObject): void
    export function monster_on_loot_init(obj: CGameObject, t: AnyTable): void
    export function on_game_start(): void
    export function start(obj: CGameObject, for_bug1: AnyTable, for_bug2: AnyTable): void
  }
  
  /** @customConstructor UIMutantLoot */
  class UIMutantLoot extends CUIScriptWnd {
    CC: TODO // @generated field — refine type
    btn_cancel: TODO // @generated field — refine type
    btn_loot_all: TODO // @generated field — refine type
    btn_loot_one: TODO // @generated field — refine type
    clsid: TODO // @generated field — refine type
    dialog: TODO // @generated field — refine type
    frame: TODO // @generated field — refine type
    id: TODO // @generated field — refine type
    image: TODO // @generated field — refine type
    item_info: TODO // @generated field — refine type
    loot: TODO // @generated field — refine type
    obj: TODO // @generated field — refine type
    section: TODO // @generated field — refine type
    xml: TODO // @generated field — refine type
    constructor()
    __finalize(): void
    InitControls(): void
    InitCallBacks(): void
    Reset(obj: CGameObject, for_bug1: AnyTable, for_bug2: AnyTable): boolean
    Update(): void
    SetMutantImage(): void
    Loot(loot_all: boolean): void
    FillList(): boolean
    SetMutantState(is_more_loot: boolean, obj_mutant: CGameObject): void
    On_CC_Mouse1(cont: AnyTable, idx: number): void
    OnButton_LootSelected(): void
    OnButton_LootAll(): void
    Close(): void
    OnKeyboard(dik: number, keyboard_action: number): boolean
  }

  namespace ui_mutant_loot {
    /** Anomaly `class "UIMutantLoot"` is also reachable on the `ui_mutant_loot` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`ui_mutant_loot.UIMutantLoot.Method = ...`). */
    export const UIMutantLoot: UIMutantLoot
  }
}
