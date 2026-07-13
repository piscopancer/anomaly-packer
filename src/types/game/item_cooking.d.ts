/** @noSelfInFile */

declare namespace item_cooking {
  export const GUI: UICook
  export function on_game_start(): void
  export function start(obj: CGameObject, sec: string): void
}

/** @customConstructor UICook */
declare class UICook extends CUIScriptWnd {
  constructor()
  __finalize(): void
  InitControls(): void
  InitCallBacks(): void
  Reset(obj: CGameObject, section: string): boolean
  Update(): void
  Load_MealList(): void
  Load_MealRecipes(): void
  Load_ActorItems(): void
  CheckAvail_main(meal: AnyTable): boolean
  CheckAvail(sec: string, amt: number): boolean
  CheckAvailFuel(fuel_tier: number): boolean
  GetAvail(sec: string, amt: number): number
  GetAvailFuel(fuel_tier: number, get_sec: boolean): number
  GetSelectedMeal(): any
  On_CC_Mouse1(cont: any, idx: number): void
  OnCook(): void
  OnKeyboard(dik: number, keyboard_action: number): boolean
  Close(): void
}
