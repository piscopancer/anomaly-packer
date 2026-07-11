/** @noSelfInFile */

declare namespace ui_mutant_loot {
  export const GUI: TODO
  export function loot_mutant(section: TODO, clsid: TODO, loot_table: TODO, npc: TODO, dont_create: TODO, victim: TODO): void
  export function monster_on_loot_init(obj: TODO, t: TODO): void
  export function on_game_start(): void
  export function start(obj: TODO, for_bug1: TODO, for_bug2: TODO): void
}

/** @customConstructor UIMutantLoot */
declare class UIMutantLoot extends CUIScriptWnd {
  constructor()
  __finalize(): void
  InitControls(): void
  InitCallBacks(): void
  Reset(obj: TODO, for_bug1: TODO, for_bug2: TODO): boolean
  Update(): void
  SetMutantImage(): void
  Loot(loot_all: TODO): void
  FillList(): boolean
  SetMutantState(is_more_loot: TODO, obj_mutant: TODO): void
  On_CC_Mouse1(cont: TODO, idx: TODO): void
  OnButton_LootSelected(): void
  OnButton_LootAll(): void
  Close(): void
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
}
