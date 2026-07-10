// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace ui_mutant_loot {
  export const GUI: TODO
  export function loot_mutant(section: TODO, clsid: TODO, loot_table: TODO, npc: TODO, dont_create: TODO, victim: TODO): TODO
  export function monster_on_loot_init(obj: TODO, t: TODO): TODO
  export function on_game_start(): TODO
  export function start(obj: TODO, for_bug1: TODO, for_bug2: TODO): TODO
}

/** @customConstructor UIMutantLoot */
declare class UIMutantLoot extends CUIScriptWnd {
  constructor(arg0: TODO)
  __finalize(): TODO
  InitControls(): TODO
  InitCallBacks(): TODO
  Reset(obj: TODO, for_bug1: TODO, for_bug2: TODO): TODO
  Update(): TODO
  SetMutantImage(): TODO
  Loot(loot_all: TODO): TODO
  FillList(): TODO
  SetMutantState(is_more_loot: TODO, obj_mutant: TODO): TODO
  On_CC_Mouse1(cont: TODO, idx: TODO): TODO
  OnButton_LootSelected(): TODO
  OnButton_LootAll(): TODO
  Close(): TODO
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
}
