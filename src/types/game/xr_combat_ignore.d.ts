/** @noSelfInFile */

declare namespace xr_combat_ignore {
  export const fighting_with_actor_npcs: TODO
  export const safe_zone_npcs: TODO
  export function add_to_binder(npc: CGameObject, ini: TODO, scheme: string, section: string, st: TODO, temp?: TODO): void
  export function disable_generic_scheme(npc: CGameObject, scheme: string, stype: TODO): void
  export function ignore_enemy_by_overrides(obj: CGameObject, enemy: CGameObject, no_check_job?: boolean): boolean
  export function is_enemy(obj: CGameObject, enemy: CGameObject, no_memory?: boolean): boolean
  export function npc_in_safe_zone(npc: CGameObject): boolean
  export function on_game_start(): void
  export function reset_generic_scheme(npc: CGameObject, scheme: string, section: string, stype: TODO, st: TODO): void
  export function setup_generic_scheme(npc: CGameObject, ini: TODO, scheme: string, section: string, stype: TODO, temp?: TODO): void
}

/** @customConstructor action_process_enemy */
declare class action_process_enemy {
  constructor(obj: CGameObject, storage: TODO)
  trader_enemy_callback(obj: CGameObject, enemy: CGameObject): TODO
  enemy_callback(npc: CGameObject, enemy: CGameObject): TODO
  hit_callback(obj: CGameObject, amount: number, local_direction: vector, who: CGameObject, bone_index: number): TODO
}
