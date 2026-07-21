/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace axr_turn_on_campfire {
    export const actid: number
    export const already_selected: AnyTable
    export const evaid: number
    export function add_to_binder(npc: CGameObject, char_ini: system_ini, scheme: string, section: Section.Item, st: AnyTable, temp?: AnyTable): void
    export function configure_actions(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, stype: number, temp?: AnyTable): void
    export function is_under_turn_on_campfire(npc: CGameObject): boolean
    export function light_campfire(npc: CGameObject): boolean
    export function npc_add_precondition(action: any): void
    export function on_game_start(): void
    export function reset_generic_scheme(npc: CGameObject, scheme: string, section: Section.Item, stype: number, st: AnyTable): void
    export function setup_generic_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, stype: number, temp?: AnyTable): void
  }
  
  /** @customConstructor act_turn_on_campfire */
  class act_turn_on_campfire extends action_base {
    st: TODO // @generated field — refine type
    constructor(npc: CGameObject, name: string, storage: AnyTable)
    initialize(): void
    execute(): void
    finalize(): void
  }
  
  /** @customConstructor eva_turn_on_campfire */
  class eva_turn_on_campfire extends property_evaluator {
    st: TODO // @generated field — refine type
    constructor(npc: CGameObject, name: string, storage: AnyTable)
    find_valid_target(): boolean
    evaluate(): boolean
  }

  namespace axr_turn_on_campfire {
    /** Anomaly `class "act_turn_on_campfire"` is also reachable on the `axr_turn_on_campfire` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`axr_turn_on_campfire.act_turn_on_campfire.Method = ...`). */
    export const act_turn_on_campfire: act_turn_on_campfire
    /** Anomaly `class "eva_turn_on_campfire"` is also reachable on the `axr_turn_on_campfire` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`axr_turn_on_campfire.eva_turn_on_campfire.Method = ...`). */
    export const eva_turn_on_campfire: eva_turn_on_campfire
  }
}
