/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace ui_debug_launcher {
    export const content: AnyTable
    // Internal ini_file_ex cache handle.
    export const ini_cc: AnyTable
    export const itm_to_spawn_table: AnyTable
    export const obj_to_spawn_table: AnyTable
    export function can_see_actor(): void
    export function check_respawn(): void
    export function exec(func: (this: void, ...args: any[]) => unknown, ...args: unknown[]): unknown
    export function force_trade_rf(): void
    export function func_cond_dec(obj: CGameObject): void
    export function func_cond_inc(obj: CGameObject): void
    export function func_release(obj: CGameObject): void
    export function get_info(): void
    export function get_obj_spawn_table(name: string): AnyTable
    export function get_spawn_table(name: string): AnyTable
    export function go_trade(): void
    export function go_trade_all(): void
    export function inject(key: string, v: unknown): void
    export function iterate_weapon(): boolean
    export function kill_npc(): void
    export function list_npc_items(): void
    export function menu_cond_dec(obj: CGameObject): string | undefined
    export function menu_cond_inc(obj: CGameObject): string | undefined
    export function menu_release(obj: CGameObject): string | undefined
    export function npc_check(npc: CGameObject): boolean
    export function on_game_start(): void
    export function prepare(): void
    export function print_dbg(...args: unknown[]): void
    export function record_position(): void
    export function release_obj(): void
    export function reload_textures(): void
    export function reload_wpn_hud(): void
    export function resume(): void
    export function send_output(txt: string, ...args: unknown[]): void
    export function set_goodwill(goodwill: number): void
    export function set_goodwill_npc_npc(npc_1: CGameObject, npc_2: CGameObject, goodwill: number): void
    export function set_goodwill_squad(goodwill: number): void
    export function set_goodwill_squad_npc(npc_1: CGameObject, npc_2: CGameObject, goodwill: number): void
    export function set_npc_companion(): void
    export function set_relation(relation: number): void
    export function set_relation_npc_npc(npc_1: CGameObject, npc_2: CGameObject, relation: number): void
    export function show_owner(ui: string, owner: CUIScriptWnd, mode: number): void
    export function spawn_basic_equipment(): void
    export function stalker_check(npc: CGameObject): boolean
    export function start_debug_main(owner?: CUIScriptWnd): void
    export function start_executer(): void
    export function start_faction_changer(for_target?: boolean): void
    export function start_item_spawner(): void
    export function start_itm_artfact_editor(): void
    export function start_itm_outfit_editor(): void
    export function start_itm_weapon_editor(): void
    export function start_lighting_editor(): void
    export function start_obj_spawner(): void
    export function start_ui(ui: CUIScriptWnd | undefined, xml: (this: void, owner?: CUIScriptWnd) => CUIScriptWnd, owner?: CUIScriptWnd): CUIScriptWnd | undefined
    export function start_weather_editor(): void
    export function start_workshop(): void
    export function start_wpn_hud_editor(): void
    export function toggle_debug_hud(): void
    export function toggle_debug_hud_map(): void
    export function toggle_respawn(): void
  }

  /** @customConstructor UIDebugMain */
  class UIDebugMain extends CUIScriptWnd {
    background: TODO // @generated field — refine type
    console: TODO // @generated field — refine type
    console_cap: TODO // @generated field — refine type
    console_frame: TODO // @generated field — refine type
    console_frame_in: TODO // @generated field — refine type
    console_input: TODO // @generated field — refine type
    console_relay: boolean // @generated field — refine type
    console_size: number // @generated field — refine type
    elements: TODO // @generated field — refine type
    key_list: TODO // @generated field — refine type
    name: string // @generated field — refine type
    obj1_txt: TODO // @generated field — refine type
    obj2_txt: TODO // @generated field — refine type
    owner: TODO // @generated field — refine type
    txt_console: TODO // @generated field — refine type
    xml: TODO // @generated field — refine type
    constructor(owner?: CUIScriptWnd)
    __finalize(): void
    InitControls(): void
    InitCallBacks(): void
    Reset(): void
    Execute(tab: number, index: number): void
    OnList(tab: number): void
    OnList_target(): void
    OnList_action(): void
    OnList_toggle(): void
    OnList_editor(): void
    OnConsoleInput(): string | undefined
    GetColor(mark: string): number
    SendOutput(txt: string, ...args: unknown[]): string
    SendOutputList(list: string[], start: number, finish: number): void
    OnKeyboard(dik: number, keyboard_action: number): boolean
    Close(mode?: number): void
  }

  /** @customConstructor UIDebug_Executer */
  class UIDebug_Executer extends CUIScriptWnd {
    background: TODO // @generated field — refine type
    dl1: TODO // @generated field — refine type
    dl1_btn_revert: TODO // @generated field — refine type
    dl1_btn_set: TODO // @generated field — refine type
    dl1_cap: TODO // @generated field — refine type
    dl1_file_cap: TODO // @generated field — refine type
    dl1_file_input: TODO // @generated field — refine type
    dl1_frame: TODO // @generated field — refine type
    dl1_logic_cap: TODO // @generated field — refine type
    dl1_logic_input: TODO // @generated field — refine type
    dl1_obj: TODO // @generated field — refine type
    dl1_sec_cap: TODO // @generated field — refine type
    dl1_sec_input: TODO // @generated field — refine type
    dl2: TODO // @generated field — refine type
    dl2_btn: TODO // @generated field — refine type
    dl2_cap: TODO // @generated field — refine type
    dl2_frame: TODO // @generated field — refine type
    dl2_input: TODO // @generated field — refine type
    id: TODO // @generated field — refine type
    msg_wnd: TODO // @generated field — refine type
    msg_wnd_text: TODO // @generated field — refine type
    msg_wnd_timer: TODO // @generated field — refine type
    name: string // @generated field — refine type
    owner: TODO // @generated field — refine type
    xml: TODO // @generated field — refine type
    constructor(owner?: CUIScriptWnd)
    __finalize(): void
    InitControls(): void
    InitCallBacks(): void
    Reset(): void
    SetMsg(text: string, mark?: string, tmr?: number): void
    Update(): void
    OnLogicSet(): void
    OnLogicRevert(): void
    OnExecute(): void
    OnKeyboard(dik: number, keyboard_action: number): boolean
    Close(): void
  }

  /** @customConstructor UIDebug_FactionSwitch */
  class UIDebug_FactionSwitch extends CUIScriptWnd {
    background: TODO // @generated field — refine type
    dl1: TODO // @generated field — refine type
    dl1_btn: TODO // @generated field — refine type
    dl1_cap: TODO // @generated field — refine type
    dl1_frame: TODO // @generated field — refine type
    factions: TODO // @generated field — refine type
    name: string // @generated field — refine type
    npc_id: TODO // @generated field — refine type
    owner: TODO // @generated field — refine type
    xml: TODO // @generated field — refine type
    constructor(owner?: CUIScriptWnd)
    __finalize(): void
    InitControls(): void
    Reset(for_target?: boolean): void
    OnButton_Faction(faction: Community): void
    OnKeyboard(dik: number, keyboard_action: number): boolean
    Close(): void
  }

  /** @customConstructor UIDebug_ItemSpawn */
  class UIDebug_ItemSpawn extends CUIScriptWnd {
    background: TODO // @generated field — refine type
    d1: TODO // @generated field — refine type
    d12: TODO // @generated field — refine type
    d12_cap: TODO // @generated field — refine type
    d12_frame: TODO // @generated field — refine type
    d12_frame_list: TODO // @generated field — refine type
    d14_input: TODO // @generated field — refine type
    d1_cap: TODO // @generated field — refine type
    d1_frame: TODO // @generated field — refine type
    d1_frame_list: TODO // @generated field — refine type
    d2: TODO // @generated field — refine type
    d2_CC: TODO // @generated field — refine type
    d2_cap: TODO // @generated field — refine type
    d2_frame: TODO // @generated field — refine type
    d2_frame_inv: TODO // @generated field — refine type
    d2_info_box: TODO // @generated field — refine type
    dl4: TODO // @generated field — refine type
    dl4_btn: TODO // @generated field — refine type
    dl4_cap: TODO // @generated field — refine type
    dl4_cap_i: TODO // @generated field — refine type
    dl4_cap_p: TODO // @generated field — refine type
    dl4_chk_i: TODO // @generated field — refine type
    dl4_chk_p: TODO // @generated field — refine type
    dl4_frame: TODO // @generated field — refine type
    index: TODO // @generated field — refine type
    list: TODO // @generated field — refine type
    msg_wnd: TODO // @generated field — refine type
    msg_wnd_text: TODO // @generated field — refine type
    msg_wnd_timer: TODO // @generated field — refine type
    name: string // @generated field — refine type
    owner: TODO // @generated field — refine type
    type: TODO // @generated field — refine type
    xml: TODO // @generated field — refine type
    constructor(owner?: CUIScriptWnd)
    __finalize(): void
    InitControls(): void
    InitCallBacks(): void
    Setup(): void
    Reset(): void
    InitItems(index: number): void
    Spawn(section: Section.Item): void
    Update(): void
    SetMsg(text: string, mark?: string, tmr?: number): void
    OnButton_Name(): void
    OnButton_Point(): void
    OnButton_Inv(): void
    OnItemType(): void
    OnItemList(): void
    On_CC_Mouse1(cont: string, idx: number): void
    OnKeyboard(dik: number, keyboard_action: number): boolean
    Close(): void
  }

  /** @customConstructor UIDebug_ObjSpawn */
  class UIDebug_ObjSpawn extends CUIScriptWnd {
    background: TODO // @generated field — refine type
    d1: TODO // @generated field — refine type
    d12: TODO // @generated field — refine type
    d12_cap: TODO // @generated field — refine type
    d12_frame: TODO // @generated field — refine type
    d12_frame_list: TODO // @generated field — refine type
    d13: TODO // @generated field — refine type
    d13_btn: TODO // @generated field — refine type
    d13_cap: TODO // @generated field — refine type
    d13_frame: TODO // @generated field — refine type
    d13_input: TODO // @generated field — refine type
    d14: TODO // @generated field — refine type
    d14_cap: TODO // @generated field — refine type
    d14_cap_lvl: TODO // @generated field — refine type
    d14_cap_smrt: TODO // @generated field — refine type
    d14_chk_s: TODO // @generated field — refine type
    d14_frame: TODO // @generated field — refine type
    d14_list_lvl: TODO // @generated field — refine type
    d14_list_smrt: TODO // @generated field — refine type
    d15: TODO // @generated field — refine type
    d15_cap_n: TODO // @generated field — refine type
    d15_cap_p: TODO // @generated field — refine type
    d15_chk_n: TODO // @generated field — refine type
    d15_chk_p: TODO // @generated field — refine type
    d15_frame: TODO // @generated field — refine type
    d1_cap: TODO // @generated field — refine type
    d1_frame: TODO // @generated field — refine type
    d1_frame_list: TODO // @generated field — refine type
    index: TODO // @generated field — refine type
    list: TODO // @generated field — refine type
    msg_wnd: TODO // @generated field — refine type
    msg_wnd_text: TODO // @generated field — refine type
    msg_wnd_timer: TODO // @generated field — refine type
    name: string // @generated field — refine type
    owner: TODO // @generated field — refine type
    type: TODO // @generated field — refine type
    xml: TODO // @generated field — refine type
    constructor(owner?: CUIScriptWnd)
    __finalize(): void
    InitControls(): void
    InitCallBacks(): void
    Setup(): void
    Reset(): void
    InitObjects(index: number): void
    Spawn(section: Section.Item): void
    Update(): void
    SetMsg(text: string, mark?: string, tmr?: number): void
    OnList_ObjectType(): void
    OnList_Object(): void
    OnList_level(): void
    OnButton_Name(): void
    OnButton_Smart(): void
    OnButton_Point(): void
    OnButton_Nearby(): void
    OnKeyboard(dik: number, keyboard_action: number): boolean
    Close(): void
  }

  namespace ui_debug_launcher {
    /** Anomaly `class "UIDebugMain"` is also reachable on the `ui_debug_launcher` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`ui_debug_launcher.UIDebugMain.Method = ...`). */
    export const UIDebugMain: UIDebugMain
    /** Anomaly `class "UIDebug_Executer"` is also reachable on the `ui_debug_launcher` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`ui_debug_launcher.UIDebug_Executer.Method = ...`). */
    export const UIDebug_Executer: UIDebug_Executer
    /** Anomaly `class "UIDebug_FactionSwitch"` is also reachable on the `ui_debug_launcher` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`ui_debug_launcher.UIDebug_FactionSwitch.Method = ...`). */
    export const UIDebug_FactionSwitch: UIDebug_FactionSwitch
    /** Anomaly `class "UIDebug_ItemSpawn"` is also reachable on the `ui_debug_launcher` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`ui_debug_launcher.UIDebug_ItemSpawn.Method = ...`). */
    export const UIDebug_ItemSpawn: UIDebug_ItemSpawn
    /** Anomaly `class "UIDebug_ObjSpawn"` is also reachable on the `ui_debug_launcher` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`ui_debug_launcher.UIDebug_ObjSpawn.Method = ...`). */
    export const UIDebug_ObjSpawn: UIDebug_ObjSpawn
  }
}
