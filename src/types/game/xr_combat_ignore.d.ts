/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace xr_combat_ignore {
    export const fighting_with_actor_npcs: AnyTable
    export const safe_zone_npcs: AnyTable
    export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, st: AnyTable, temp?: AnyTable): void
    export function disable_generic_scheme(npc: CGameObject, scheme: string, stype: number): void
    export function ignore_enemy_by_overrides(obj: CGameObject, enemy: CGameObject, no_check_job?: boolean): boolean
    export function is_enemy(obj: CGameObject, enemy: CGameObject, no_memory?: boolean): boolean
    export function npc_in_safe_zone(npc: CGameObject): boolean
    export function on_game_start(): void
    export function reset_generic_scheme(npc: CGameObject, scheme: string, section: Section.Item, stype: number, st: AnyTable): void
    export function setup_generic_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, stype: number, temp?: AnyTable): void
  }
  
  /** @customConstructor action_process_enemy */
  class action_process_enemy {
    object: TODO // @generated field — refine type
    st: TODO // @generated field — refine type
    constructor(obj: CGameObject, storage: AnyTable)
    trader_enemy_callback(obj: CGameObject, enemy: CGameObject): void
    enemy_callback(npc: CGameObject, enemy: CGameObject): void
    hit_callback(obj: CGameObject, amount: number, local_direction: vector, who: CGameObject, bone_index: number): void
  }

  namespace xr_combat_ignore {
    /** Anomaly `class "action_process_enemy"` is also reachable on the `xr_combat_ignore` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`xr_combat_ignore.action_process_enemy.Method = ...`). */
    export const action_process_enemy: action_process_enemy
  }
}
