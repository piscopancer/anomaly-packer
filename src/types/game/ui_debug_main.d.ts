// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace ui_debug_main {
  export const UI_ICON_EQUIPMENT_HEIGHT: TODO
  export const UI_ICON_EQUIPMENT_WIDTH: TODO
  export const UI_ICON_WIDTH_SCALE: TODO
  export const id_to_spawn_table: TODO
  export function get_spawn_table(name: TODO): TODO
}

/** @customConstructor anim_ui */
declare class anim_ui extends CUIScriptWnd {
  constructor(arg0: TODO)
  __finalize(): TODO
  Update(): TODO
  InitCallBacks(): TODO
  InitControls(): TODO
  FillAnim(): TODO
  OnStartAnim(): TODO
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
  OnQuit(): TODO
}

/** @customConstructor debug_ui */
declare class debug_ui extends CUIScriptWnd {
  constructor(owner: TODO, binds: TODO)
  __finalize(): TODO
  Reinit(level_present: TODO): TODO
  CreateTab(uID: TODO): TODO
  InitControls(): TODO
  SetCurrentValues(): TODO
  ShowConsole(): TODO
  HideConsole(): TODO
  Update(): TODO
  InitCallBacks(): TODO
  OnConsoleInput(): TODO
  OnBtnTeleport(): TODO
  OnBtnSpawn(): TODO
  OnBtnSpawnSquad(): TODO
  SendOutput(txt: TODO, ...args: TODO[]): TODO
  SendOutputList(list: TODO, start: TODO, finish: TODO): TODO
  OnBtnFocus(): TODO
  OnBtnExecuteString(): TODO
  OnBtnSwitchDistance(): TODO
  OnBtnFindNearest(): TODO
  OnBtnSetLogic(): TODO
  OnBtnRevertLogic(): TODO
  OnBtnReloadIni(): TODO
  OnQuit(): TODO
  OnTabChange(): TODO
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
  spawn_section(text: TODO): TODO
  spawn_squad(section: TODO, smart_name: TODO): TODO
  FindNearest(txt: TODO): TODO
  FillList(name: TODO): TODO
  FillEditorList(name: TODO): TODO
  FillLevelList(): TODO
  JumpLevel(): TODO
  OnSelectSectionList(): TODO
  OnSelectEditorSectionList(): TODO
  OnButton_create_clicked(): TODO
  OnEditorTriggerAddonSectionSelection(): TODO
  OnEditorTriggerSectionSelection(): TODO
  OnEditIconX(): TODO
  OnEditIconY(): TODO
  OnEditIconW(): TODO
  OnEditIconH(): TODO
  OnEditIconOffX(): TODO
  OnEditIconOffY(): TODO
  OnEditIcon(): TODO
  OnEditorSave(): TODO
  FillAnim(): TODO
  OnListItemClicked(): TODO
  OnStartAnim(): TODO
  OnStartHudAnim(): TODO
}

/** @customConstructor debug_ui_advanced */
declare class debug_ui_advanced extends CUIWindow {
  constructor(owner: TODO, binds: TODO)
  __finalize(): TODO
  InitControls(x: TODO, y: TODO, xml: TODO, owner: TODO): TODO
}

/** @customConstructor debug_ui_attach */
declare class debug_ui_attach extends CUIScriptWnd {
  constructor(owner: TODO, binds: TODO)
  __finalize(): TODO
  OnAttachListSelect(): TODO
  OnStateListSelect(): TODO
  OnWeaponListSelect(): TODO
  OnAttachSave(section: TODO): TODO
  On_fld_attach_x(): TODO
  On_fld_attach_y(): TODO
  On_fld_attach_z(): TODO
  On_fld_attach_rot_x(): TODO
  On_fld_attach_rot_y(): TODO
  On_fld_attach_rot_z(): TODO
  OnEditAttach(fld: TODO): TODO
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
  OnAttach(): TODO
  OnQuit(): TODO
}

/** @customConstructor debug_ui_editor */
declare class debug_ui_editor extends CUIWindow {
  constructor(owner: TODO, binds: TODO)
  __finalize(): TODO
  InitControls(x: TODO, y: TODO, xml: TODO, owner: TODO): TODO
}

/** @customConstructor debug_ui_hud */
declare class debug_ui_hud extends CUIWindow {
  constructor(owner: TODO, binds: TODO)
  __finalize(): TODO
  InitControls(x: TODO, y: TODO, xml: TODO, owner: TODO): TODO
}

/** @customConstructor debug_ui_object */
declare class debug_ui_object extends CUIWindow {
  constructor(owner: TODO, binds: TODO)
  __finalize(): TODO
  InitControls(x: TODO, y: TODO, xml: TODO, owner: TODO): TODO
}

/** @customConstructor debug_ui_spawner */
declare class debug_ui_spawner extends CUIWindow {
  constructor(owner: TODO, binds: TODO)
  __finalize(): TODO
  InitControls(x: TODO, y: TODO, xml: TODO, owner: TODO): TODO
}

/** @customConstructor set_list_text */
declare class set_list_text extends CUIListBoxItem {
  constructor(height: TODO)
}
