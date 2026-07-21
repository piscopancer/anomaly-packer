/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace xrs_facer {
    export const actid_facer: number
    export const actid_steal_up_facer: number
    export const evid_facer: number
    export const evid_steal_up_facer: number
    export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, storage: AnyTable, temp?: AnyTable): void
    export function check_enemy(enemy: CGameObject, obj: CGameObject): boolean
    export function configure_actions(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, stype: number, temp?: AnyTable): void
    export function get_anim(npc: CGameObject): LuaMultiReturn<[string, string | undefined]>
    export function hit_callback(obj: CGameObject, amount: number, dir: vector, who: CGameObject, bone_index: string): void
    export function npc_add_precondition(action: any): void
    export function on_game_start(): void
    export function setup_generic_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, stype: number, temp?: AnyTable): void
  }
  
  /** @customConstructor action_facer */
  class action_facer extends action_base {
    end_time: TODO // @generated field — refine type
    hit_time: TODO // @generated field — refine type
    rank: TODO // @generated field — refine type
    st: TODO // @generated field — refine type
    constructor(npc: CGameObject, action_name: string, storage: AnyTable)
    initialize(): void
    execute(): void
    cancel(): void
    finalize(): void
  }
  
  /** @customConstructor action_steal_up */
  class action_steal_up extends action_base {
    st: TODO // @generated field — refine type
    constructor(npc: CGameObject, action_name: string, storage: AnyTable)
    initialize(): void
    execute(): void
    finalize(): void
  }
  
  /** @customConstructor evaluator_facer */
  class evaluator_facer extends property_evaluator {
    st: TODO // @generated field — refine type
    constructor(npc: CGameObject, name: string, storage: AnyTable)
    evaluate(): boolean
  }
  
  /** @customConstructor evaluator_steal_up */
  class evaluator_steal_up extends property_evaluator {
    st: TODO // @generated field — refine type
    constructor(npc: CGameObject, name: string, storage: AnyTable)
    evaluate(): boolean
  }

  namespace xrs_facer {
    /** Anomaly `class "action_facer"` is also reachable on the `xrs_facer` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`xrs_facer.action_facer.Method = ...`). */
    export const action_facer: action_facer
    /** Anomaly `class "action_steal_up"` is also reachable on the `xrs_facer` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`xrs_facer.action_steal_up.Method = ...`). */
    export const action_steal_up: action_steal_up
    /** Anomaly `class "evaluator_facer"` is also reachable on the `xrs_facer` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`xrs_facer.evaluator_facer.Method = ...`). */
    export const evaluator_facer: evaluator_facer
    /** Anomaly `class "evaluator_steal_up"` is also reachable on the `xrs_facer` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`xrs_facer.evaluator_steal_up.Method = ...`). */
    export const evaluator_steal_up: evaluator_steal_up
  }
}
