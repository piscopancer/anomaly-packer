/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace ui_debug_main {
    export const UI_ICON_EQUIPMENT_HEIGHT: number
    export const UI_ICON_EQUIPMENT_WIDTH: number
    export const UI_ICON_WIDTH_SCALE: number
    /** Spawn presets keyed by id. */
    export const id_to_spawn_table: AnyTable
    export function get_spawn_table(name: string): boolean
  }

  /** @customConstructor anim_ui */
  class anim_ui extends CUIScriptWnd {
    anims_list: TODO // @generated field — refine type
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
  class debug_ui extends CUIScriptWnd {
    _addons: TODO // @generated field — refine type
    _scopes: TODO // @generated field — refine type
    binds: TODO // @generated field — refine type
    console: TODO // @generated field — refine type
    console_input: TODO // @generated field — refine type
    console_relay: boolean // @generated field — refine type
    console_size: number // @generated field — refine type
    dialog: TODO // @generated field — refine type
    editor_old_h: TODO // @generated field — refine type
    editor_old_w: TODO // @generated field — refine type
    editor_old_x: TODO // @generated field — refine type
    editor_old_y: TODO // @generated field — refine type
    form: TODO // @generated field — refine type
    icon_scale: number // @generated field — refine type
    level_present: TODO // @generated field — refine type
    need_save_h: TODO // @generated field — refine type
    need_save_offset_x: TODO // @generated field — refine type
    need_save_offset_y: TODO // @generated field — refine type
    need_save_w: TODO // @generated field — refine type
    need_save_x: TODO // @generated field — refine type
    need_save_y: TODO // @generated field — refine type
    owner: TODO // @generated field — refine type
    spawn_gvid: TODO // @generated field — refine type
    spawn_lvid: TODO // @generated field — refine type
    spawn_pos: TODO // @generated field — refine type
    tab: TODO // @generated field — refine type
    tab_list: TODO // @generated field — refine type
    txt_console: TODO // @generated field — refine type
    txt_focus: TODO // @generated field — refine type
    txt_near: TODO // @generated field — refine type
    xml: TODO // @generated field — refine type
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
    spawn_squad(section: Section.Item, smart_name: string): boolean
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
  class debug_ui_advanced extends CUIWindow {
    owner: TODO // @generated field — refine type
    constructor(owner?: any, binds?: AnyTable)
    __finalize(): void
    InitControls(x: number, y: number, xml: CScriptXmlInit, owner?: any): void
  }

  /** @customConstructor debug_ui_attach */
  class debug_ui_attach extends CUIScriptWnd {
    _last: string // @generated field — refine type
    anim_states: TODO // @generated field — refine type
    attachable: TODO // @generated field — refine type
    flds: TODO // @generated field — refine type
    form: TODO // @generated field — refine type
    need_save: TODO // @generated field — refine type
    owner: TODO // @generated field — refine type
    xml: TODO // @generated field — refine type
    constructor(owner?: any, binds?: AnyTable)
    __finalize(): void
    OnAttachListSelect(): void
    OnStateListSelect(): void
    OnWeaponListSelect(): void
    OnAttachSave(section: Section.Item): void
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
  class debug_ui_editor extends CUIWindow {
    owner: TODO // @generated field — refine type
    constructor(owner?: any, binds?: AnyTable)
    __finalize(): void
    InitControls(x: number, y: number, xml: CScriptXmlInit, owner?: any): void
  }

  /** @customConstructor debug_ui_hud */
  class debug_ui_hud extends CUIWindow {
    owner: TODO // @generated field — refine type
    constructor(owner?: any, binds?: AnyTable)
    __finalize(): void
    InitControls(x: number, y: number, xml: CScriptXmlInit, owner?: any): void
  }

  /** @customConstructor debug_ui_object */
  class debug_ui_object extends CUIWindow {
    owner: TODO // @generated field — refine type
    constructor(owner?: any, binds?: AnyTable)
    __finalize(): void
    InitControls(x: number, y: number, xml: CScriptXmlInit, owner?: any): void
  }

  /** @customConstructor debug_ui_spawner */
  class debug_ui_spawner extends CUIWindow {
    owner: TODO // @generated field — refine type
    constructor(owner?: any, binds?: AnyTable)
    __finalize(): void
    InitControls(x: number, y: number, xml: CScriptXmlInit, owner?: any): void
  }

  /** @customConstructor set_list_text */
  class set_list_text extends CUIListBoxItem {
    sect: TODO // @generated field — refine type
    constructor(height: number)
  }

  namespace ui_debug_main {
    /** Anomaly `class "anim_ui"` is also reachable on the `ui_debug_main` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`ui_debug_main.anim_ui.Method = ...`). */
    export const anim_ui: anim_ui
    /** Anomaly `class "debug_ui"` is also reachable on the `ui_debug_main` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`ui_debug_main.debug_ui.Method = ...`). */
    export const debug_ui: debug_ui
    /** Anomaly `class "debug_ui_advanced"` is also reachable on the `ui_debug_main` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`ui_debug_main.debug_ui_advanced.Method = ...`). */
    export const debug_ui_advanced: debug_ui_advanced
    /** Anomaly `class "debug_ui_attach"` is also reachable on the `ui_debug_main` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`ui_debug_main.debug_ui_attach.Method = ...`). */
    export const debug_ui_attach: debug_ui_attach
    /** Anomaly `class "debug_ui_editor"` is also reachable on the `ui_debug_main` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`ui_debug_main.debug_ui_editor.Method = ...`). */
    export const debug_ui_editor: debug_ui_editor
    /** Anomaly `class "debug_ui_hud"` is also reachable on the `ui_debug_main` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`ui_debug_main.debug_ui_hud.Method = ...`). */
    export const debug_ui_hud: debug_ui_hud
    /** Anomaly `class "debug_ui_object"` is also reachable on the `ui_debug_main` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`ui_debug_main.debug_ui_object.Method = ...`). */
    export const debug_ui_object: debug_ui_object
    /** Anomaly `class "debug_ui_spawner"` is also reachable on the `ui_debug_main` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`ui_debug_main.debug_ui_spawner.Method = ...`). */
    export const debug_ui_spawner: debug_ui_spawner
    /** Anomaly `class "set_list_text"` is also reachable on the `ui_debug_main` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`ui_debug_main.set_list_text.Method = ...`). */
    export const set_list_text: set_list_text
  }
}
