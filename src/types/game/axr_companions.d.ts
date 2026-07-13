/** @noSelfInFile */

declare namespace axr_companions {
  export const GUI: AnyTable
  export const HUD: AnyTable
  export const allow_only_friends_as_companions: boolean
  export const allow_simulation_squads_as_companions: boolean
  export const companion_squads: AnyTable
  export const max_actor_squad_size: number
  export const non_task_companions: AnyTable
  export function activate_hud(): void
  export function actor_on_net_destroy(): void
  export function add_special_squad(squad: sim_squad_scripted, special?: AnyTable, cannot_teleport?: boolean): void
  export function add_special_task_npc_to_actor_squad(npc: CGameObject): void
  export function add_to_actor_squad(npc: CGameObject): void
  export function can_handle_all_items(a: CGameObject, b: CGameObject): boolean
  export function can_join_actor(npc: CGameObject): boolean
  export function can_not_handle_all_items(a: CGameObject, b: CGameObject): boolean
  export function companion_add_waypoints(npc: CGameObject, pos: vector): void
  export function companion_inventory_mode(npc: CGameObject): number
  export function companion_remove_waypoints(npc: CGameObject): void
  export function companion_squad_can_teleport(squad: sim_squad_scripted): boolean
  export function compare_smaller(a: AnyTable, b: AnyTable): boolean
  export function cw_prepare(): void
  export function cycle_companions_combat_mode(force_mode?: number, no_msg?: boolean): void
  export function cycle_companions_distance_mode(force_mode?: number, no_msg?: boolean): void
  export function cycle_companions_loot_mode(force_mode?: number, no_msg?: boolean): void
  export function cycle_companions_move_mode(force_mode?: number, no_msg?: boolean): void
  export function cycle_companions_stealth_mode(force_mode?: number, no_msg?: boolean): void
  export function cycle_state(states: AnyTable, key: string, include_hostages?: boolean, force_mode?: number, no_msg?: boolean): void
  export function deactivate_hud(): void
  export function dismiss_special_squad(squad: sim_squad_scripted): void
  export function epic_hack(): void
  export function get_companion_combat_mode(npc: CGameObject): number
  export function get_companion_count(): number
  export function get_companion_distance_mode(npc: CGameObject): number
  export function get_companion_loot_mode(npc: CGameObject): number
  export function get_companion_move_mode(npc: CGameObject): number
  export function get_companion_stealth_mode(npc: CGameObject): number
  export function get_inventory_table(npc: CGameObject, npc_id: number, mode: number): AnyTable
  export function get_inventory_weight(tbl_inv: AnyTable): number
  export function get_nearby_companion(): CGameObject | boolean
  export function give_all_to_companion(a: CGameObject, b: CGameObject): void
  export function is_assigned_companion(a: CGameObject, b: CGameObject): boolean
  export function is_assigned_item(npc_id: number, item_id: number): boolean
  export function is_overweight(npc: CGameObject, npc_id?: number, comp_weight?: number): LuaMultiReturn<[boolean, number, number]>
  export function list_actor_squad_by_id(): AnyTable
  export function move_to_point(p: AnyTable): void
  export function on_console_execute(name: string): void
  export function on_game_start(): void
  export function on_key_release(key: number): void
  export function OnItemAfterMove(npc_id: number, obj: CGameObject, mode: number, bag_from: number): void
  export function OnItemBeforeMove(flags: number, npc_id: number, obj: CGameObject, mode: number, bag_from: number): void
  export function release_all_squads(): void
  export function release_special_squad(squad: sim_squad_scripted): void
  export function remove_all_from_actor_squad(): sim_squad_scripted[]
  export function remove_from_actor_squad(npc: CGameObject): void
  export function set_companion_allow_teleport(npc: CGameObject): void
  export function set_companion_combat_type_camper(npc: CGameObject): void
  export function set_companion_combat_type_default(npc: CGameObject): void
  export function set_companion_combat_type_monolith(npc: CGameObject): void
  export function set_companion_disable_teleport(npc: CGameObject): void
  export function set_companion_hide_in_cover(npc: CGameObject): void
  export function set_companion_squad_combat_mode(mode: number, npc: CGameObject, squad: sim_squad_scripted): void
  export function set_companion_squad_distance_mode(mode: number, npc: CGameObject, squad: sim_squad_scripted): void
  export function set_companion_squad_loot_mode(mode: number, npc: CGameObject, squad: sim_squad_scripted): void
  export function set_companion_squad_move_mode(mode: number, npc: CGameObject, squad: sim_squad_scripted): void
  export function set_companion_squad_stealth_mode(mode: number, npc: CGameObject, squad: sim_squad_scripted): void
  export function set_companion_to_attack_only_actor_combat_enemy_state(npc: CGameObject): void
  export function set_companion_to_attack_state(npc: CGameObject): void
  export function set_companion_to_default_substate(npc: CGameObject): void
  export function set_companion_to_follow_state(npc: CGameObject): void
  export function set_companion_to_ignore_combat_state(npc: CGameObject): void
  export function set_companion_to_loot_corpses_only(npc: CGameObject): void
  export function set_companion_to_loot_items_and_corpses(npc: CGameObject): void
  export function set_companion_to_loot_items_only(npc: CGameObject): void
  export function set_companion_to_loot_nothing(npc: CGameObject): void
  export function set_companion_to_patrol_state(npc: CGameObject): void
  export function set_companion_to_relax_substate(npc: CGameObject): void
  export function set_companion_to_stay_close(npc: CGameObject): void
  export function set_companion_to_stay_far(npc: CGameObject): void
  export function set_companion_to_stealth_substate(npc: CGameObject): void
  export function set_companion_to_wait_state(npc: CGameObject): void
  export function setup_companion_logic(npc: CGameObject, st?: AnyTable, loaded?: boolean, cannot_dismiss?: boolean): void
  export function start_CW(): void
  export function start_trade(a: CGameObject, b: CGameObject): void
  export function switch_companion_distance(npc: CGameObject): void
  export function switch_companion_gather_items(npc: CGameObject): void
  export function switch_companion_loot_corpses(npc: CGameObject): void
  export function switch_companion_patrol_mode(npc: CGameObject): void
  export function take_all_from_companion(a: CGameObject, b: CGameObject): void
  export function transfer_all_item(npc_from: CGameObject, npc_to: CGameObject): void
  export function transfer_item(item_id: number, npc_from: CGameObject, npc_to: CGameObject, no_snd?: boolean): void
  export function update_hud(): void
}

/** @customConstructor UICompanionList */
declare class UICompanionList extends CUIScriptWnd {
  constructor()
  __finalize(): void
  InitControls(): void
  Update(force?: boolean): void
}

/** @customConstructor UIWheelCompanion */
declare class UIWheelCompanion extends CUIScriptWnd {
  constructor()
  __finalize(): void
  InitControls(): void
  InitCallBacks(): void
  Reset(npc: CGameObject): void
  Update(): void
  Order(cmd: AnyTable): void
  OnKeyboard(dik: number, keyboard_action: number): boolean
  Close(): void
}
