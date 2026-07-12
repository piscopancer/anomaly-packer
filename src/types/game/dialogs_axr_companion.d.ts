/** @noSelfInFile */

declare namespace dialogs_axr_companion {
  export function add_dialog(p_id: string | number, id: string | number, phrase_id: string, cond?: string | string[], act?: string | string[]): CPhraseScript | undefined
  export function become_actor_companion(actor: CGameObject, npc: CGameObject): void
  export function can_dismiss_companion(actor: CGameObject, npc: CGameObject): boolean
  export function companion_add_waypoints(actor: CGameObject, npc: CGameObject): void
  export function companion_combat_type_not_camper(actor: CGameObject, npc: CGameObject): boolean
  export function companion_combat_type_not_default(actor: CGameObject, npc: CGameObject): boolean
  export function companion_combat_type_not_monolith(actor: CGameObject, npc: CGameObject): boolean
  export function companion_distance_far(actor: CGameObject, npc: CGameObject): boolean
  export function companion_distance_near(actor: CGameObject, npc: CGameObject): boolean
  export function companion_gather_items_disabled(actor: CGameObject, npc: CGameObject): boolean
  export function companion_gather_items_enabled(actor: CGameObject, npc: CGameObject): boolean
  export function companion_has_waypoint(actor: CGameObject, npc: CGameObject): boolean
  export function companion_is_ignoring_combat(actor: CGameObject, npc: CGameObject): boolean
  export function companion_is_not_following(actor: CGameObject, npc: CGameObject): boolean
  export function companion_is_not_ignoring_combat(actor: CGameObject, npc: CGameObject): boolean
  export function companion_is_patrolling(actor: CGameObject, npc: CGameObject): boolean
  export function companion_is_stealthy(actor: CGameObject, npc: CGameObject): boolean
  export function companion_loot_corpses_disabled(actor: CGameObject, npc: CGameObject): boolean
  export function companion_loot_corpses_enabled(actor: CGameObject, npc: CGameObject): boolean
  export function companion_not_patrolling(actor: CGameObject, npc: CGameObject): boolean
  export function companion_not_stealthy(actor: CGameObject, npc: CGameObject): boolean
  export function companion_not_using_cover(actor: CGameObject, npc: CGameObject): boolean
  export function companion_not_waiting(actor: CGameObject, npc: CGameObject): boolean
  export function companion_remove_waypoints(actor: CGameObject, npc: CGameObject): void
  export function companion_using_cover(actor: CGameObject, npc: CGameObject): boolean
  export function dm_init_companion_patrol(dialog: string): void
  export function dm_init_is_actor_companion(dialog: string): void
  export function is_actor_companion(actor: CGameObject, npc: CGameObject): boolean
  export function is_actor_friend(actor: CGameObject, npc: CGameObject): boolean
  export function is_hostage_task_giver(a: CGameObject, b: CGameObject): boolean
  export function is_module_enabled(actor: CGameObject, npc: CGameObject): boolean
  export function is_non_story(actor: CGameObject, npc: CGameObject): boolean
  export function is_not_actor_companion(actor: CGameObject, npc: CGameObject): boolean
  export function is_not_hostage_task_giver(a: CGameObject, b: CGameObject): boolean
  export function is_room_in_actor_squad(actor: CGameObject, npc: CGameObject): boolean
  export function is_squad_count_greater(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function is_squad_count_one(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function remove_companions_from_squad(actor: CGameObject, npc: CGameObject): void
  export function set_actor_dialogs(npc: CGameObject, ini: system_ini, name: string, dialog_section: string): void
  export function set_companion_combat_type_camper(actor: CGameObject, npc: CGameObject): void
  export function set_companion_combat_type_default(actor: CGameObject, npc: CGameObject): void
  export function set_companion_combat_type_monolith(actor: CGameObject, npc: CGameObject): void
  export function set_companion_hide_in_cover(actor: CGameObject, npc: CGameObject): void
  export function set_companion_to_attack_only_actor_combat_enemy_state(actor: CGameObject, npc: CGameObject): void
  export function set_companion_to_attack_state(actor: CGameObject, npc: CGameObject): void
  export function set_companion_to_default_substate(actor: CGameObject, npc: CGameObject): void
  export function set_companion_to_follow_state(actor: CGameObject, npc: CGameObject): void
  export function set_companion_to_ignore_combat_state(actor: CGameObject, npc: CGameObject): void
  export function set_companion_to_stealth_substate(actor: CGameObject, npc: CGameObject): void
  export function set_companion_to_wait_state(actor: CGameObject, npc: CGameObject): void
  export function set_squad_relation_by_chance(npc: CGameObject, actor: CGameObject): void
  export function switch_companion_distance(actor: CGameObject, npc: CGameObject): void
  export function switch_companion_gather_items(actor: CGameObject, npc: CGameObject): void
  export function switch_companion_loot_corpses(actor: CGameObject, npc: CGameObject): void
  export function switch_companion_patrol_mode(actor: CGameObject, npc: CGameObject): void
}
