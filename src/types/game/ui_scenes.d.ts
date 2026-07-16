/** @noSelfInFile */

declare namespace ui_scenes {
  export const gOldVer: AnyTable
  export function main(): void
}

/** @customConstructor scene_item */
declare class scene_item extends CUIListBoxItem {
  text: TODO // @generated field — refine type
  constructor(height: number)
}

/** @customConstructor scenes_item_dialog */
declare class scenes_item_dialog extends CUIScriptWnd {
  check_spawn_items: TODO // @generated field — refine type
  check_teleport: TODO // @generated field — refine type
  list: TODO // @generated field — refine type
  wnd_size: TODO // @generated field — refine type
  constructor()
  __finalize(): void
  FillList(): void
  InitControls(): void
  InitCallBacks(): void
  OnButton_create_clicked(): void
  OnButton_close_clicked(): void
  OnKeyboard(dik: number, keyboard_action: number): boolean
  AddItemToList(item_name: string): void
}

declare namespace ui_scenes {
  /** Anomaly `class "scene_item"` is also reachable on the `ui_scenes` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`ui_scenes.scene_item.Method = ...`). */
  export const scene_item: scene_item
  /** Anomaly `class "scenes_item_dialog"` is also reachable on the `ui_scenes` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`ui_scenes.scenes_item_dialog.Method = ...`). */
  export const scenes_item_dialog: scenes_item_dialog
}
