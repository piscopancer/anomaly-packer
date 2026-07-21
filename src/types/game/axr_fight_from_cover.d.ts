/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace axr_fight_from_cover {
    export const actid: number
    export const evaid: number
    export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, storage: AnyTable, temp?: AnyTable): void
    export function configure_actions(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, stype: number, temp?: AnyTable): void
    export function disable_generic_scheme(npc: CGameObject, scheme: string, stype: number): void
    export function npc_add_precondition(action: any): void
    export function setup_generic_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, stype: number, temp?: AnyTable): void
  }

  /** @customConstructor action_fight_from_cover */
  class action_fight_from_cover extends action_base {
    st: TODO // @generated field — refine type
    stand: boolean // @generated field — refine type
    constructor(npc: CGameObject, name: string, storage: AnyTable)
    initialize(): void
    try_go_cover(npc: CGameObject, ene_pos: vector): number | undefined
    try_go_backward(npc: CGameObject): number | undefined
    try_to_strafe(npc: CGameObject): number | undefined
    execute(): void
    finalize(): void
  }

  /** @customConstructor evaluator_fight_from_cover */
  class evaluator_fight_from_cover extends property_evaluator {
    st: TODO // @generated field — refine type
    constructor(npc: CGameObject, name: string, storage: AnyTable)
    evaluate(): boolean
  }

  namespace axr_fight_from_cover {
    /** Anomaly `class "action_fight_from_cover"` is also reachable on the `axr_fight_from_cover` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`axr_fight_from_cover.action_fight_from_cover.Method = ...`). */
    export const action_fight_from_cover: action_fight_from_cover
    /** Anomaly `class "evaluator_fight_from_cover"` is also reachable on the `axr_fight_from_cover` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`axr_fight_from_cover.evaluator_fight_from_cover.Method = ...`). */
    export const evaluator_fight_from_cover: evaluator_fight_from_cover
  }
}
