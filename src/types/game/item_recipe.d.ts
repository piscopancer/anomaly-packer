/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace item_recipe {
    export const GUI: UIRecipe
    export function func_letter(obj: CGameObject): void
    export function func_recipe(obj: CGameObject): void
    export function menu_read(obj: CGameObject): string | undefined
    export function start(sec: Section.Item): void
  }
  
  /** @customConstructor UIRecipe */
  class UIRecipe extends CUIScriptWnd {
    cap: TODO // @generated field — refine type
    cap_shadow: TODO // @generated field — refine type
    cells: TODO // @generated field — refine type
    cells_tool: TODO // @generated field — refine type
    dialog: TODO // @generated field — refine type
    item_info: TODO // @generated field — refine type
    recipes: TODO // @generated field — refine type
    scroll: TODO // @generated field — refine type
    section: TODO // @generated field — refine type
    toolkit: TODO // @generated field — refine type
    xml: TODO // @generated field — refine type
    constructor()
    __finalize(): void
    InitControls(): void
    InitCallBacks(): void
    Reset(section: Section.Item): void
    LoadRecipes(): void
    Update(): void
    Close(): void
    OnKeyboard(dik: number, keyboard_action: number): boolean
  }

  namespace item_recipe {
    /** Anomaly `class "UIRecipe"` is also reachable on the `item_recipe` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`item_recipe.UIRecipe.Method = ...`). */
    export const UIRecipe: UIRecipe
  }
}
