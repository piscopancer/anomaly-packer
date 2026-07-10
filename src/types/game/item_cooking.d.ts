// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace item_cooking {
  export const GUI: TODO
  export function on_game_start(): TODO
  export function start(obj: TODO, sec: TODO): TODO
}

/** @customConstructor UICook */
declare class UICook extends CUIScriptWnd {
  constructor(arg0: TODO)
  __finalize(): TODO
  InitControls(): TODO
  InitCallBacks(): TODO
  Reset(obj: TODO, section: TODO): TODO
  Update(): TODO
  Load_MealList(): TODO
  Load_MealRecipes(): TODO
  Load_ActorItems(): TODO
  CheckAvail_main(meal: TODO): TODO
  CheckAvail(sec: TODO, amt: TODO): TODO
  CheckAvailFuel(fuel_tier: TODO): TODO
  GetAvail(sec: TODO, amt: TODO): TODO
  GetAvailFuel(fuel_tier: TODO, get_sec: TODO): TODO
  GetSelectedMeal(): TODO
  On_CC_Mouse1(cont: TODO, idx: TODO): TODO
  OnCook(): TODO
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
  Close(): TODO
}
