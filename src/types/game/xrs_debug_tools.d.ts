/** @noSelfInFile */

declare namespace xrs_debug_tools {
  export const CMD: TODO
  export const NEAREST_STALKER_ID: TODO
  export const actions_by_stalker_ids: TODO
  export const feature_is_active: TODO
  export function activate_feature(): void
  export function actor_feel_touch_hud_show(hud: TODO): void
  export function actor_info_hud_show(hud: TODO): void
  export function actor_inside_zone_hud_show(hud: TODO): void
  export function actor_slot_hud_show(hud: TODO): void
  export function alife_monitor_show(hud: TODO): void
  export function anim_hud_show(hud: TODO): void
  export function arena_hud_show(hud: TODO): void
  export function behavior_hud_show(hud: TODO): void
  export function corpse_hud_show(hud: TODO): void
  export function deactivate_feature(): void
  export function enemy_hud_show(hud: TODO): void
  export function feel_touch_hud_show(hud: TODO): void
  export function get_debug_hud(): TODO
  export function get_debug_npc(): CGameObject
  export function get_target_at_cursor(): CGameObject
  export function give_game_news(t: TODO, d: TODO): void
  export function gulag_info_hud_show(hud: TODO): void
  export function heli_hud_show(hud: TODO): void
  export function inventory_hover_hud_show(hud: TODO): void
  export function monster_hud_show(hud: TODO): void
  export function npc_info_hud_show(hud: TODO): void
  export function npc_memory_hud_show(hud: TODO): void
  export function null_show(hud: TODO): void
  export function on_game_start(): void
  export function OnItemFocusReceive(itm: TODO): void
  export function planner_hud_show(hud: TODO): void
  export function planner_target_hud_show(hud: TODO): void
  export function position_hud_show(hud: TODO): void
  export function position_other_hud_show(hud: TODO): void
  export function position_target_hud_show(hud: TODO): void
  export function set_debug_npc(id: TODO): void
  export function set_draw_debug_hud(val: TODO): void
  export function simboard_hud_show(hud: TODO): void
  export function space_restrictor_hud_show(hud: TODO): void
  export function squad_info_hud_show(hud: TODO): void
  export function stalker_data_hud_show(hud: TODO): void
  export function stalker_info_hud_show(hud: TODO): void
  export function surge_hud_show(hud: TODO): void
  export function task_hud_show(hud: TODO): void
  export function team_squad_group_hud_show(hud: TODO): void
  export function trader_hud_show(hud: TODO): void
  export function weapon_hud_show(hud: TODO): void
  export function wounded_hud_show(hud: TODO): void
}

/** @customConstructor hud_tool */
declare class hud_tool {
  constructor(custom_static: TODO)
  add_msg(text: string, value: TODO, ...args: TODO[]): void
  set_header(header: TODO): void
  display(disable: TODO): void
  export(): TODO
  clear(): void
}
