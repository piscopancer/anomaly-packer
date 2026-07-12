/** @noSelfInFile */

declare namespace ui_debug_launcher {
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
declare class UIDebugMain extends CUIScriptWnd {
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
declare class UIDebug_Executer extends CUIScriptWnd {
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
declare class UIDebug_FactionSwitch extends CUIScriptWnd {
  constructor(owner?: CUIScriptWnd)
  __finalize(): void
  InitControls(): void
  Reset(for_target?: boolean): void
  OnButton_Faction(faction: string): void
  OnKeyboard(dik: number, keyboard_action: number): boolean
  Close(): void
}

/** @customConstructor UIDebug_ItemSpawn */
declare class UIDebug_ItemSpawn extends CUIScriptWnd {
  constructor(owner?: CUIScriptWnd)
  __finalize(): void
  InitControls(): void
  InitCallBacks(): void
  Setup(): void
  Reset(): void
  InitItems(index: number): void
  Spawn(section: string): void
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
declare class UIDebug_ObjSpawn extends CUIScriptWnd {
  constructor(owner?: CUIScriptWnd)
  __finalize(): void
  InitControls(): void
  InitCallBacks(): void
  Setup(): void
  Reset(): void
  InitObjects(index: number): void
  Spawn(section: string): void
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
