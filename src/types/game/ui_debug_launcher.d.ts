// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace ui_debug_launcher {
  export const content: TODO
  export const ini_cc: TODO
  export const itm_to_spawn_table: TODO
  export const obj_to_spawn_table: TODO
  export function can_see_actor(): TODO
  export function check_respawn(): TODO
  export function exec(func: TODO, ...args: TODO[]): TODO
  export function force_trade_rf(): TODO
  export function func_cond_dec(obj: TODO): TODO
  export function func_cond_inc(obj: TODO): TODO
  export function func_release(obj: TODO): TODO
  export function get_info(): TODO
  export function get_obj_spawn_table(name: TODO): TODO
  export function get_spawn_table(name: TODO): TODO
  export function go_trade(): TODO
  export function go_trade_all(): TODO
  export function inject(key: TODO, v: TODO): TODO
  export function iterate_weapon(): TODO
  export function kill_npc(): TODO
  export function list_npc_items(): TODO
  export function menu_cond_dec(obj: TODO): TODO
  export function menu_cond_inc(obj: TODO): TODO
  export function menu_release(obj: TODO): TODO
  export function npc_check(npc: TODO): TODO
  export function on_game_start(): TODO
  export function prepare(): TODO
  export function print_dbg(...args: TODO[]): TODO
  export function record_position(): TODO
  export function release_obj(): TODO
  export function reload_textures(): TODO
  export function reload_wpn_hud(): TODO
  export function resume(): TODO
  export function send_output(txt: TODO, ...args: TODO[]): TODO
  export function set_goodwill(goodwill: TODO): TODO
  export function set_goodwill_npc_npc(npc_1: TODO, npc_2: TODO, goodwill: TODO): TODO
  export function set_goodwill_squad(goodwill: TODO): TODO
  export function set_goodwill_squad_npc(npc_1: TODO, npc_2: TODO, goodwill: TODO): TODO
  export function set_npc_companion(): TODO
  export function set_relation(relation: TODO): TODO
  export function set_relation_npc_npc(npc_1: TODO, npc_2: TODO, relation: TODO): TODO
  export function show_owner(ui: TODO, owner: TODO, mode: TODO): TODO
  export function spawn_basic_equipment(): TODO
  export function stalker_check(npc: TODO): TODO
  export function start_debug_main(owner: TODO): TODO
  export function start_executer(): TODO
  export function start_faction_changer(for_target: TODO): TODO
  export function start_item_spawner(): TODO
  export function start_itm_artfact_editor(): TODO
  export function start_itm_outfit_editor(): TODO
  export function start_itm_weapon_editor(): TODO
  export function start_lighting_editor(): TODO
  export function start_obj_spawner(): TODO
  export function start_ui(ui: TODO, xml: TODO, owner: TODO): TODO
  export function start_weather_editor(): TODO
  export function start_workshop(): TODO
  export function start_wpn_hud_editor(): TODO
  export function toggle_debug_hud(): TODO
  export function toggle_debug_hud_map(): TODO
  export function toggle_respawn(): TODO
}

/** @customConstructor UIDebugMain */
declare class UIDebugMain extends CUIScriptWnd {
  constructor(owner: TODO)
  __finalize(): TODO
  InitControls(): TODO
  InitCallBacks(): TODO
  Reset(): TODO
  Execute(tab: TODO, index: TODO): TODO
  OnList(tab: TODO): TODO
  OnList_target(): TODO
  OnList_action(): TODO
  OnList_toggle(): TODO
  OnList_editor(): TODO
  OnConsoleInput(): TODO
  GetColor(mark: TODO): TODO
  SendOutput(txt: TODO, ...args: TODO[]): TODO
  SendOutputList(list: TODO, start: TODO, finish: TODO): TODO
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
  Close(mode: TODO): TODO
}

/** @customConstructor UIDebug_Executer */
declare class UIDebug_Executer extends CUIScriptWnd {
  constructor(owner: TODO)
  __finalize(): TODO
  InitControls(): TODO
  InitCallBacks(): TODO
  Reset(): TODO
  SetMsg(text: TODO, mark: TODO, tmr: TODO): TODO
  Update(): TODO
  OnLogicSet(): TODO
  OnLogicRevert(): TODO
  OnExecute(): TODO
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
  Close(): TODO
}

/** @customConstructor UIDebug_FactionSwitch */
declare class UIDebug_FactionSwitch extends CUIScriptWnd {
  constructor(owner: TODO)
  __finalize(): TODO
  InitControls(): TODO
  Reset(for_target: TODO): TODO
  OnButton_Faction(faction: TODO): TODO
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
  Close(): TODO
}

/** @customConstructor UIDebug_ItemSpawn */
declare class UIDebug_ItemSpawn extends CUIScriptWnd {
  constructor(owner: TODO)
  __finalize(): TODO
  InitControls(): TODO
  InitCallBacks(): TODO
  Setup(): TODO
  Reset(): TODO
  InitItems(index: TODO): TODO
  Spawn(section: TODO): TODO
  Update(): TODO
  SetMsg(text: TODO, mark: TODO, tmr: TODO): TODO
  OnButton_Name(): TODO
  OnButton_Point(): TODO
  OnButton_Inv(): TODO
  OnItemType(): TODO
  OnItemList(): TODO
  On_CC_Mouse1(cont: TODO, idx: TODO): TODO
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
  Close(): TODO
}

/** @customConstructor UIDebug_ObjSpawn */
declare class UIDebug_ObjSpawn extends CUIScriptWnd {
  constructor(owner: TODO)
  __finalize(): TODO
  InitControls(): TODO
  InitCallBacks(): TODO
  Setup(): TODO
  Reset(): TODO
  InitObjects(index: TODO): TODO
  Spawn(section: TODO): TODO
  Update(): TODO
  SetMsg(text: TODO, mark: TODO, tmr: TODO): TODO
  OnList_ObjectType(): TODO
  OnList_Object(): TODO
  OnList_level(): TODO
  OnButton_Name(): TODO
  OnButton_Smart(): TODO
  OnButton_Point(): TODO
  OnButton_Nearby(): TODO
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
  Close(): TODO
}
