/** @noSelfInFile */

declare namespace item_cooking {
  export const GUI: TODO
  export function on_game_start(): void
  export function start(obj: TODO, sec: TODO): void
}

/** @customConstructor UICook */
declare class UICook extends CUIScriptWnd {
  constructor()
  __finalize(): void
  InitControls(): void
  InitCallBacks(): void
  Reset(obj: TODO, section: TODO): boolean
  Update(): void
  Load_MealList(): void
  Load_MealRecipes(): void
  Load_ActorItems(): void
  CheckAvail_main(meal: TODO): boolean
  CheckAvail(sec: TODO, amt: TODO): boolean
  CheckAvailFuel(fuel_tier: TODO): boolean
  GetAvail(sec: TODO, amt: TODO): TODO
  GetAvailFuel(fuel_tier: TODO, get_sec: TODO): TODO
  GetSelectedMeal(): TODO
  On_CC_Mouse1(cont: TODO, idx: TODO): void
  OnCook(): void
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
  Close(): void
}
