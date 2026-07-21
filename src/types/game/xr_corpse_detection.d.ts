/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace xr_corpse_detection {
    export const lootable_table: AnyTable
    export function add_to_binder(npc: CGameObject, char_ini: system_ini, scheme: string, section: Section.Item, st: AnyTable, temp?: AnyTable): void
    export function configure_actions(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, stype: number, temp?: AnyTable): void
    export function get_all_from_corpse(npc: CGameObject): void
    export function get_loot_table(ini: system_ini): AnyTable
    export function has_valuable_loot(obj: CGameObject): boolean
    export function is_under_corpse_detection(npc: CGameObject): boolean
    export function near_actor(obj: CGameObject): boolean
    export function on_game_start(): void
    export function reset_generic_scheme(npc: CGameObject, scheme: string, section: Section.Item, stype: number, st: AnyTable): void
    export function set_valuable_loot(id: number, val: boolean): void
    export function setup_generic_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, stype: number, temp?: AnyTable): void
  }

  /** @customConstructor action_search_corpse */
  class action_search_corpse extends action_base {
    a: TODO // @generated field — refine type
    sound: boolean // @generated field — refine type
    constructor(npc_name: string, action_name: string, storage: AnyTable)
    initialize(): void
    execute(): void
    finalize(): void
  }

  /** @customConstructor evaluator_corpse */
  class evaluator_corpse extends property_evaluator {
    a: TODO // @generated field — refine type
    constructor(name: string, storage: AnyTable, npc: CGameObject)
    find_valid_target(): boolean
    evaluate(): boolean
  }

  namespace xr_corpse_detection {
    /** Anomaly `class "action_search_corpse"` is also reachable on the `xr_corpse_detection` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`xr_corpse_detection.action_search_corpse.Method = ...`). */
    export const action_search_corpse: action_search_corpse
    /** Anomaly `class "evaluator_corpse"` is also reachable on the `xr_corpse_detection` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`xr_corpse_detection.evaluator_corpse.Method = ...`). */
    export const evaluator_corpse: evaluator_corpse
  }
}
