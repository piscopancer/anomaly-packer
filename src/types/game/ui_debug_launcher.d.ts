/** @noSelfInFile */

declare namespace ui_debug_launcher {
  export const content: TODO
  export const ini_cc: TODO
  export const itm_to_spawn_table: TODO
  export const obj_to_spawn_table: TODO
  export function can_see_actor(): TODO
  export function check_respawn(): void
  export function exec(func: TODO, ...args: TODO[]): boolean
  export function force_trade_rf(): TODO
  export function func_cond_dec(obj: TODO): void
  export function func_cond_inc(obj: TODO): void
  export function func_release(obj: TODO): TODO
  export function get_info(): void
  export function get_obj_spawn_table(name: TODO): boolean
  export function get_spawn_table(name: TODO): boolean
  export function go_trade(): TODO
  export function go_trade_all(): TODO
  export function inject(key: TODO, v: TODO): void
  export function iterate_weapon(): boolean
  export function kill_npc(): TODO
  export function list_npc_items(): TODO
  export function menu_cond_dec(obj: TODO): TODO
  export function menu_cond_inc(obj: TODO): TODO
  export function menu_release(obj: TODO): TODO
  export function npc_check(npc: TODO): boolean
  export function on_game_start(): void
  export function prepare(): void
  export function print_dbg(...args: TODO[]): void
  export function record_position(): TODO
  export function release_obj(): TODO
  export function reload_textures(): void
  export function reload_wpn_hud(): void
  export function resume(): void
  export function send_output(txt: TODO, ...args: TODO[]): void
  export function set_goodwill(goodwill: TODO): void
  export function set_goodwill_npc_npc(npc_1: CGameObject, npc_2: TODO, goodwill: TODO): TODO
  export function set_goodwill_squad(goodwill: TODO): void
  export function set_goodwill_squad_npc(npc_1: TODO, npc_2: TODO, goodwill: TODO): TODO
  export function set_npc_companion(): TODO
  export function set_relation(relation: TODO): void
  export function set_relation_npc_npc(npc_1: CGameObject, npc_2: TODO, relation: TODO): TODO
  export function show_owner(ui: TODO, owner: TODO, mode: number): void
  export function spawn_basic_equipment(): void
  export function stalker_check(npc: TODO): boolean
  export function start_debug_main(owner: TODO): void
  export function start_executer(): void
  export function start_faction_changer(for_target: TODO): void
  export function start_item_spawner(): void
  export function start_itm_artfact_editor(): void
  export function start_itm_outfit_editor(): void
  export function start_itm_weapon_editor(): void
  export function start_lighting_editor(): void
  export function start_obj_spawner(): void
  export function start_ui(ui: TODO, xml: TODO, owner: TODO): TODO
  export function start_weather_editor(): void
  export function start_workshop(): void
  export function start_wpn_hud_editor(): void
  export function toggle_debug_hud(): void
  export function toggle_debug_hud_map(): void
  export function toggle_respawn(): void
}

/** @customConstructor UIDebugMain */
declare class UIDebugMain extends CUIScriptWnd {
  constructor(owner: TODO)
  __finalize(): void
  InitControls(): void
  InitCallBacks(): void
  Reset(): void
  Execute(tab: TODO, index: TODO): void
  OnList(tab: TODO): void
  OnList_target(): void
  OnList_action(): void
  OnList_toggle(): void
  OnList_editor(): void
  OnConsoleInput(): TODO
  GetColor(mark: TODO): TODO
  SendOutput(txt: string, ...args: TODO[]): string
  SendOutputList(list: TODO, start: TODO, finish: number): void
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
  Close(mode: TODO): void
}

/** @customConstructor UIDebug_Executer */
declare class UIDebug_Executer extends CUIScriptWnd {
  constructor(owner: TODO)
  __finalize(): void
  InitControls(): void
  InitCallBacks(): void
  Reset(): void
  SetMsg(text: string, mark: TODO, tmr: TODO): void
  Update(): void
  OnLogicSet(): void
  OnLogicRevert(): void
  OnExecute(): void
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
  Close(): void
}

/** @customConstructor UIDebug_FactionSwitch */
declare class UIDebug_FactionSwitch extends CUIScriptWnd {
  constructor(owner: TODO)
  __finalize(): void
  InitControls(): void
  Reset(for_target: TODO): void
  OnButton_Faction(faction: TODO): void
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
  Close(): void
}

/** @customConstructor UIDebug_ItemSpawn */
declare class UIDebug_ItemSpawn extends CUIScriptWnd {
  constructor(owner: TODO)
  __finalize(): void
  InitControls(): void
  InitCallBacks(): void
  Setup(): void
  Reset(): void
  InitItems(index: TODO): void
  Spawn(section: TODO): void
  Update(): void
  SetMsg(text: string, mark: TODO, tmr: TODO): void
  OnButton_Name(): void
  OnButton_Point(): void
  OnButton_Inv(): void
  OnItemType(): void
  OnItemList(): void
  On_CC_Mouse1(cont: TODO, idx: TODO): void
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
  Close(): void
}

/** @customConstructor UIDebug_ObjSpawn */
declare class UIDebug_ObjSpawn extends CUIScriptWnd {
  constructor(owner: TODO)
  __finalize(): void
  InitControls(): void
  InitCallBacks(): void
  Setup(): void
  Reset(): void
  InitObjects(index: TODO): void
  Spawn(section: TODO): void
  Update(): void
  SetMsg(text: string, mark: TODO, tmr: TODO): void
  OnList_ObjectType(): void
  OnList_Object(): void
  OnList_level(): void
  OnButton_Name(): void
  OnButton_Smart(): void
  OnButton_Point(): void
  OnButton_Nearby(): void
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
  Close(): void
}
