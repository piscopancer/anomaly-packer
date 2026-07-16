/** @noSelfInFile */

declare namespace item_cooking {
  export const GUI: UICook
  export function on_game_start(): void
  export function start(obj: CGameObject, sec: Section): void
}

/** @customConstructor UICook */
declare class UICook extends CUIScriptWnd {
  CC: TODO // @generated field — refine type
  active_wep: TODO // @generated field — refine type
  b_inv: TODO // @generated field — refine type
  b_item: TODO // @generated field — refine type
  box_campfire: TODO // @generated field — refine type
  box_item_main: TODO // @generated field — refine type
  box_item_main_temp: TODO // @generated field — refine type
  btn_cancel: TODO // @generated field — refine type
  btn_cook: TODO // @generated field — refine type
  cap: TODO // @generated field — refine type
  cap_menu: TODO // @generated field — refine type
  ci_cook: TODO // @generated field — refine type
  clr: TODO // @generated field — refine type
  cooking_campfire: TODO // @generated field — refine type
  cooking_campfire_tier: TODO // @generated field — refine type
  cooking_fuel: TODO // @generated field — refine type
  cooking_limited: TODO // @generated field — refine type
  cooking_use_actor_effects: TODO // @generated field — refine type
  dialog: TODO // @generated field — refine type
  fuel: TODO // @generated field — refine type
  ingre_b: TODO // @generated field — refine type
  ingre_ico: TODO // @generated field — refine type
  ingre_ico_temp: TODO // @generated field — refine type
  ingre_name: TODO // @generated field — refine type
  ingre_num: TODO // @generated field — refine type
  ini: TODO // @generated field — refine type
  is_campfire: TODO // @generated field — refine type
  item_info: TODO // @generated field — refine type
  meals: TODO // @generated field — refine type
  msg_wnd_timer: TODO // @generated field — refine type
  obj: TODO // @generated field — refine type
  objs: TODO // @generated field — refine type
  section: TODO // @generated field — refine type
  text_fuel_note: TODO // @generated field — refine type
  text_item: TODO // @generated field — refine type
  xml: TODO // @generated field — refine type
  constructor()
  __finalize(): void
  InitControls(): void
  InitCallBacks(): void
  Reset(obj: CGameObject, section: Section): boolean
  Update(): void
  Load_MealList(): void
  Load_MealRecipes(): void
  Load_ActorItems(): void
  CheckAvail_main(meal: AnyTable): boolean
  CheckAvail(sec: Section, amt: number): boolean
  CheckAvailFuel(fuel_tier: number): boolean
  GetAvail(sec: Section, amt: number): number
  GetAvailFuel(fuel_tier: number, get_sec: boolean): number
  GetSelectedMeal(): any
  On_CC_Mouse1(cont: any, idx: number): void
  OnCook(): void
  OnKeyboard(dik: number, keyboard_action: number): boolean
  Close(): void
}

declare namespace item_cooking {
  /** Anomaly `class "UICook"` is also reachable on the `item_cooking` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`item_cooking.UICook.Method = ...`). */
  export const UICook: UICook
}
