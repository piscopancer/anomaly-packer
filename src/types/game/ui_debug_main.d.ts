/** @noSelfInFile */

declare namespace ui_debug_main {
  export const UI_ICON_EQUIPMENT_HEIGHT: TODO
  export const UI_ICON_EQUIPMENT_WIDTH: TODO
  export const UI_ICON_WIDTH_SCALE: TODO
  export const id_to_spawn_table: TODO
  export function get_spawn_table(name: TODO): boolean
}

/** @customConstructor anim_ui */
declare class anim_ui extends CUIScriptWnd {
  constructor()
  __finalize(): void
  Update(): void
  InitCallBacks(): void
  InitControls(): void
  FillAnim(): void
  OnStartAnim(): void
  OnKeyboard(dik: TODO, keyboard_action: TODO): boolean
  OnQuit(): void
}

/** @customConstructor debug_ui */
declare class debug_ui extends CUIScriptWnd {
  constructor(owner: TODO, binds: TODO)
  __finalize(): void
  Reinit(level_present: TODO): void
  CreateTab(uID: TODO): void
  InitControls(): void
  SetCurrentValues(): void
  ShowConsole(): void
  HideConsole(): void
  Update(): void
  InitCallBacks(): void
  OnConsoleInput(): TODO
  OnBtnTeleport(): void
  OnBtnSpawn(): void
  OnBtnSpawnSquad(): void
  SendOutput(txt: TODO, ...args: TODO[]): TODO
  SendOutputList(list: TODO, start: TODO, finish: TODO): void
  OnBtnFocus(): void
  OnBtnExecuteString(): void
  OnBtnSwitchDistance(): void
  OnBtnFindNearest(): void
  OnBtnSetLogic(): void
  OnBtnRevertLogic(): void
  OnBtnReloadIni(): void
  OnQuit(): void
  OnTabChange(): void
  OnKeyboard(dik: TODO, keyboard_action: TODO): boolean
  spawn_section(text: TODO): boolean
  spawn_squad(section: TODO, smart_name: TODO): boolean
  FindNearest(txt: TODO): void
  FillList(name: TODO): void
  FillEditorList(name: TODO): void
  FillLevelList(): void
  JumpLevel(): void
  OnSelectSectionList(): void
  OnSelectEditorSectionList(): void
  OnButton_create_clicked(): void
  OnEditorTriggerAddonSectionSelection(): void
  OnEditorTriggerSectionSelection(): void
  OnEditIconX(): void
  OnEditIconY(): void
  OnEditIconW(): void
  OnEditIconH(): void
  OnEditIconOffX(): void
  OnEditIconOffY(): void
  OnEditIcon(): void
  OnEditorSave(): TODO
  FillAnim(): void
  OnListItemClicked(): void
  OnStartAnim(): void
  OnStartHudAnim(): void
}

/** @customConstructor debug_ui_advanced */
declare class debug_ui_advanced extends CUIWindow {
  constructor(owner: TODO, binds: TODO)
  __finalize(): void
  InitControls(x: TODO, y: TODO, xml: TODO, owner: TODO): void
}

/** @customConstructor debug_ui_attach */
declare class debug_ui_attach extends CUIScriptWnd {
  constructor(owner: TODO, binds: TODO)
  __finalize(): void
  OnAttachListSelect(): void
  OnStateListSelect(): void
  OnWeaponListSelect(): void
  OnAttachSave(section: TODO): TODO
  On_fld_attach_x(): void
  On_fld_attach_y(): void
  On_fld_attach_z(): void
  On_fld_attach_rot_x(): void
  On_fld_attach_rot_y(): void
  On_fld_attach_rot_z(): void
  OnEditAttach(fld: TODO): void
  OnKeyboard(dik: TODO, keyboard_action: TODO): boolean
  OnAttach(): TODO
  OnQuit(): void
}

/** @customConstructor debug_ui_editor */
declare class debug_ui_editor extends CUIWindow {
  constructor(owner: TODO, binds: TODO)
  __finalize(): void
  InitControls(x: TODO, y: TODO, xml: TODO, owner: TODO): void
}

/** @customConstructor debug_ui_hud */
declare class debug_ui_hud extends CUIWindow {
  constructor(owner: TODO, binds: TODO)
  __finalize(): void
  InitControls(x: TODO, y: TODO, xml: TODO, owner: TODO): void
}

/** @customConstructor debug_ui_object */
declare class debug_ui_object extends CUIWindow {
  constructor(owner: TODO, binds: TODO)
  __finalize(): void
  InitControls(x: TODO, y: TODO, xml: TODO, owner: TODO): void
}

/** @customConstructor debug_ui_spawner */
declare class debug_ui_spawner extends CUIWindow {
  constructor(owner: TODO, binds: TODO)
  __finalize(): void
  InitControls(x: TODO, y: TODO, xml: TODO, owner: TODO): void
}

/** @customConstructor set_list_text */
declare class set_list_text extends CUIListBoxItem {
  constructor(height: TODO)
}
