/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace rx_ff {
    export const actid: number
    export const evaid: number
    export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, st: AnyTable, temp?: AnyTable): void
    export function configure_actions(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, stype: number, temp?: AnyTable): void
    export function disable_generic_scheme(npc: CGameObject, scheme: string, stype: number): void
    export function npc_add_precondition(action: any): void
    export function setup_generic_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, stype: number, temp?: AnyTable): void
  }
  
  /** @customConstructor action_verso */
  class action_verso extends action_base {
    st: TODO // @generated field — refine type
    constructor(npc: CGameObject, name: string, storage: AnyTable)
    initialize(): void
    execute(): void
    finalize(): void
  }
  
  /** @customConstructor evaluator_dont_shoot */
  class evaluator_dont_shoot extends property_evaluator {
    st: TODO // @generated field — refine type
    constructor(npc: CGameObject, name: string, storage: AnyTable)
    check_in_los(friend: CGameObject, be: CGameObject, be_pos: vector): boolean
    check_all_in_los(): boolean
    evaluate(): boolean
  }

  namespace rx_ff {
    /** Anomaly `class "action_verso"` is also reachable on the `rx_ff` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`rx_ff.action_verso.Method = ...`). */
    export const action_verso: action_verso
    /** Anomaly `class "evaluator_dont_shoot"` is also reachable on the `rx_ff` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`rx_ff.evaluator_dont_shoot.Method = ...`). */
    export const evaluator_dont_shoot: evaluator_dont_shoot
  }
}
