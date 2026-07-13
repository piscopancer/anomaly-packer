/** @noSelfInFile */

declare namespace item_recipe {
  export const GUI: UIRecipe
  export function func_letter(obj: CGameObject): void
  export function func_recipe(obj: CGameObject): void
  export function menu_read(obj: CGameObject): string | undefined
  export function start(sec: string): void
}

/** @customConstructor UIRecipe */
declare class UIRecipe extends CUIScriptWnd {
  constructor()
  __finalize(): void
  InitControls(): void
  InitCallBacks(): void
  Reset(section: string): void
  LoadRecipes(): void
  Update(): void
  Close(): void
  OnKeyboard(dik: number, keyboard_action: number): boolean
}
