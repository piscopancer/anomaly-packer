/** @noSelfInFile */

declare namespace ui_debug_main {
  export const UI_ICON_EQUIPMENT_HEIGHT: number
  export const UI_ICON_EQUIPMENT_WIDTH: number
  export const UI_ICON_WIDTH_SCALE: number
  /** Spawn presets keyed by id. */
  export const id_to_spawn_table: AnyTable
  export function get_spawn_table(name: string): boolean
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
  OnKeyboard(dik: number, keyboard_action: number): boolean
  OnQuit(): void
}

/** @customConstructor debug_ui */
declare class debug_ui extends CUIScriptWnd {
  constructor(owner?: any, binds?: AnyTable)
  __finalize(): void
  Reinit(level_present?: boolean): void
  CreateTab(uID: string): void
  InitControls(): void
  SetCurrentValues(): void
  ShowConsole(): void
  HideConsole(): void
  Update(): void
  InitCallBacks(): void
  OnConsoleInput(): string
  OnBtnTeleport(): void
  OnBtnSpawn(): void
  OnBtnSpawnSquad(): void
  SendOutput(txt: string, ...args: any[]): string
  SendOutputList(list: AnyTable, start: number, finish: number): void
  OnBtnFocus(): void
  OnBtnExecuteString(): void
  OnBtnSwitchDistance(): void
  OnBtnFindNearest(): void
  OnBtnSetLogic(): void
  OnBtnRevertLogic(): void
  OnBtnReloadIni(): void
  OnQuit(): void
  OnTabChange(): void
  OnKeyboard(dik: number, keyboard_action: number): boolean
  spawn_section(text: string): boolean
  spawn_squad(section: string, smart_name: string): boolean
  FindNearest(txt: string): void
  FillList(name: string): void
  FillEditorList(name: string): void
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
  OnEditorSave(): void
  FillAnim(): void
  OnListItemClicked(): void
  OnStartAnim(): void
  OnStartHudAnim(): void
}

/** @customConstructor debug_ui_advanced */
declare class debug_ui_advanced extends CUIWindow {
  constructor(owner?: any, binds?: AnyTable)
  __finalize(): void
  InitControls(x: number, y: number, xml: CScriptXmlInit, owner?: any): void
}

/** @customConstructor debug_ui_attach */
declare class debug_ui_attach extends CUIScriptWnd {
  constructor(owner?: any, binds?: AnyTable)
  __finalize(): void
  OnAttachListSelect(): void
  OnStateListSelect(): void
  OnWeaponListSelect(): void
  OnAttachSave(section: string): void
  On_fld_attach_x(): void
  On_fld_attach_y(): void
  On_fld_attach_z(): void
  On_fld_attach_rot_x(): void
  On_fld_attach_rot_y(): void
  On_fld_attach_rot_z(): void
  OnEditAttach(fld: string): void
  OnKeyboard(dik: number, keyboard_action: number): boolean
  OnAttach(): void
  OnQuit(): void
}

/** @customConstructor debug_ui_editor */
declare class debug_ui_editor extends CUIWindow {
  constructor(owner?: any, binds?: AnyTable)
  __finalize(): void
  InitControls(x: number, y: number, xml: CScriptXmlInit, owner?: any): void
}

/** @customConstructor debug_ui_hud */
declare class debug_ui_hud extends CUIWindow {
  constructor(owner?: any, binds?: AnyTable)
  __finalize(): void
  InitControls(x: number, y: number, xml: CScriptXmlInit, owner?: any): void
}

/** @customConstructor debug_ui_object */
declare class debug_ui_object extends CUIWindow {
  constructor(owner?: any, binds?: AnyTable)
  __finalize(): void
  InitControls(x: number, y: number, xml: CScriptXmlInit, owner?: any): void
}

/** @customConstructor debug_ui_spawner */
declare class debug_ui_spawner extends CUIWindow {
  constructor(owner?: any, binds?: AnyTable)
  __finalize(): void
  InitControls(x: number, y: number, xml: CScriptXmlInit, owner?: any): void
}

/** @customConstructor set_list_text */
declare class set_list_text extends CUIListBoxItem {
  constructor(height: number)
}
