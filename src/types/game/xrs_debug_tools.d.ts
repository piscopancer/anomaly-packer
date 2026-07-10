// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace xrs_debug_tools {
  export const CMD: TODO
  export const NEAREST_STALKER_ID: TODO
  export const actions_by_stalker_ids: TODO
  export const feature_is_active: TODO
  export function activate_feature(): TODO
  export function actor_feel_touch_hud_show(hud: TODO): TODO
  export function actor_info_hud_show(hud: TODO): TODO
  export function actor_inside_zone_hud_show(hud: TODO): TODO
  export function actor_slot_hud_show(hud: TODO): TODO
  export function alife_monitor_show(hud: TODO): TODO
  export function anim_hud_show(hud: TODO): TODO
  export function arena_hud_show(hud: TODO): TODO
  export function behavior_hud_show(hud: TODO): TODO
  export function corpse_hud_show(hud: TODO): TODO
  export function deactivate_feature(): TODO
  export function enemy_hud_show(hud: TODO): TODO
  export function feel_touch_hud_show(hud: TODO): TODO
  export function get_debug_hud(): TODO
  export function get_debug_npc(): TODO
  export function get_target_at_cursor(): TODO
  export function give_game_news(t: TODO, d: TODO): TODO
  export function gulag_info_hud_show(hud: TODO): TODO
  export function heli_hud_show(hud: TODO): TODO
  export function inventory_hover_hud_show(hud: TODO): TODO
  export function monster_hud_show(hud: TODO): TODO
  export function npc_info_hud_show(hud: TODO): TODO
  export function npc_memory_hud_show(hud: TODO): TODO
  export function null_show(hud: TODO): TODO
  export function on_game_start(): TODO
  export function OnItemFocusReceive(itm: TODO): TODO
  export function planner_hud_show(hud: TODO): TODO
  export function planner_target_hud_show(hud: TODO): TODO
  export function position_hud_show(hud: TODO): TODO
  export function position_other_hud_show(hud: TODO): TODO
  export function position_target_hud_show(hud: TODO): TODO
  export function set_debug_npc(id: TODO): TODO
  export function set_draw_debug_hud(val: TODO): TODO
  export function simboard_hud_show(hud: TODO): TODO
  export function space_restrictor_hud_show(hud: TODO): TODO
  export function squad_info_hud_show(hud: TODO): TODO
  export function stalker_data_hud_show(hud: TODO): TODO
  export function stalker_info_hud_show(hud: TODO): TODO
  export function surge_hud_show(hud: TODO): TODO
  export function task_hud_show(hud: TODO): TODO
  export function team_squad_group_hud_show(hud: TODO): TODO
  export function trader_hud_show(hud: TODO): TODO
  export function weapon_hud_show(hud: TODO): TODO
  export function wounded_hud_show(hud: TODO): TODO
}

/** @customConstructor hud_tool */
declare class hud_tool {
  constructor(custom_static: TODO)
  add_msg(text: TODO, value: TODO, ...args: TODO[]): TODO
  set_header(header: TODO): TODO
  display(disable: TODO): TODO
  export(): TODO
  clear(): TODO
}
