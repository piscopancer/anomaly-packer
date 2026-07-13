/** @noSelfInFile */

declare namespace ui_scenes {
  export const gOldVer: AnyTable
  export function main(): void
}

/** @customConstructor scene_item */
declare class scene_item extends CUIListBoxItem {
  constructor(height: number)
}

/** @customConstructor scenes_item_dialog */
declare class scenes_item_dialog extends CUIScriptWnd {
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
