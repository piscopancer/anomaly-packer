/** @noSelfInFile */

declare namespace ui_mutant_loot {
  export const GUI: AnyTable
  export function loot_mutant(section: Section, clsid: number, loot_table: AnyTable, npc: CGameObject, dont_create: boolean, victim: CGameObject): void
  export function monster_on_loot_init(obj: CGameObject, t: AnyTable): void
  export function on_game_start(): void
  export function start(obj: CGameObject, for_bug1: AnyTable, for_bug2: AnyTable): void
}

/** @customConstructor UIMutantLoot */
declare class UIMutantLoot extends CUIScriptWnd {
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
