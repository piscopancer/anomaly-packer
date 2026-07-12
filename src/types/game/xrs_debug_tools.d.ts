/** @noSelfInFile */

declare namespace xrs_debug_tools {
  export const CMD: AnyTable
  export const NEAREST_STALKER_ID: number | undefined
  export const actions_by_stalker_ids: AnyTable
  export const feature_is_active: boolean
  export function activate_feature(): void
  export function actor_feel_touch_hud_show(hud: hud_tool): void
  export function actor_info_hud_show(hud: hud_tool): void
  export function actor_inside_zone_hud_show(hud: hud_tool): void
  export function actor_slot_hud_show(hud: hud_tool): void
  export function alife_monitor_show(hud: hud_tool): void
  export function anim_hud_show(hud: hud_tool): void
  export function arena_hud_show(hud: hud_tool): void
  export function behavior_hud_show(hud: hud_tool): void
  export function corpse_hud_show(hud: hud_tool): void
  export function deactivate_feature(): void
  export function enemy_hud_show(hud: hud_tool): void
  export function feel_touch_hud_show(hud: hud_tool): void
  export function get_debug_hud(): hud_tool
  export function get_debug_npc(): CGameObject
  export function get_target_at_cursor(): CGameObject
  export function give_game_news(t: string, d: number): void
  export function gulag_info_hud_show(hud: hud_tool): void
  export function heli_hud_show(hud: hud_tool): void
  export function inventory_hover_hud_show(hud: hud_tool): void
  export function monster_hud_show(hud: hud_tool): void
  export function npc_info_hud_show(hud: hud_tool): void
  export function npc_memory_hud_show(hud: hud_tool): void
  export function null_show(hud: hud_tool): void
  export function on_game_start(): void
  export function OnItemFocusReceive(itm: CGameObject): void
  export function planner_hud_show(hud: hud_tool): void
  export function planner_target_hud_show(hud: hud_tool): void
  export function position_hud_show(hud: hud_tool): void
  export function position_other_hud_show(hud: hud_tool): void
  export function position_target_hud_show(hud: hud_tool): void
  export function set_debug_npc(id: number): void
  export function set_draw_debug_hud(val: boolean): void
  export function simboard_hud_show(hud: hud_tool): void
  export function space_restrictor_hud_show(hud: hud_tool): void
  export function squad_info_hud_show(hud: hud_tool): void
  export function stalker_data_hud_show(hud: hud_tool): void
  export function stalker_info_hud_show(hud: hud_tool): void
  export function surge_hud_show(hud: hud_tool): void
  export function task_hud_show(hud: hud_tool): void
  export function team_squad_group_hud_show(hud: hud_tool): void
  export function trader_hud_show(hud: hud_tool): void
  export function weapon_hud_show(hud: hud_tool): void
  export function wounded_hud_show(hud: hud_tool): void
}

/** @customConstructor hud_tool */
declare class hud_tool {
  constructor(custom_static: string)
  add_msg(text: string, value?: unknown, ...args: unknown[]): void
  set_header(header: string): void
  display(disable?: boolean): void
  export(): void
  clear(): void
}
