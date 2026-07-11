/** @noSelfInFile */

declare namespace item_recipe {
  export const GUI: TODO
  export function func_letter(obj: TODO): void
  export function func_recipe(obj: TODO): void
  export function menu_read(obj: TODO): TODO
  export function start(sec: TODO): void
}

/** @customConstructor UIRecipe */
declare class UIRecipe extends CUIScriptWnd {
  constructor()
  __finalize(): void
  InitControls(): void
  InitCallBacks(): void
  Reset(section: TODO): void
  LoadRecipes(): void
  Update(): void
  Close(): void
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
}
