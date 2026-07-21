/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace xr_gather_items {
    export const actid: number
    export const evaid: number
    export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, st: AnyTable, temp?: AnyTable): void
    export function configure_actions(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, stype: number, temp?: AnyTable): void
    export function gather_item(npc: CGameObject): void
    export function is_under_gather_items(npc: CGameObject): boolean
    export function near_actor(obj: CGameObject): boolean
    export function npc_add_precondition(action: any): void
    export function on_game_start(): void
    export function reset_generic_scheme(npc: CGameObject, scheme: string, section: Section.Item, stype: number, st: AnyTable): void
    export function setup_generic_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, stype: number, temp?: AnyTable): void
  }
  
  /** @customConstructor act_gather_itm */
  class act_gather_itm extends action_base {
    st: TODO // @generated field — refine type
    constructor(name: string, storage: AnyTable)
    initialize(): void
    execute(): void
    finalize(): void
  }
  
  /** @customConstructor eva_gather_itm */
  class eva_gather_itm extends property_evaluator {
    st: TODO // @generated field — refine type
    constructor(name: string, storage: AnyTable, npc: CGameObject)
    find_valid_item(): boolean
    evaluate(): boolean
  }
  
  /** @customConstructor evaluator_gather_items */
  class evaluator_gather_items extends property_evaluator {
    st: TODO // @generated field — refine type
    constructor(name: string, storage: AnyTable, npc: CGameObject)
    evaluate(): boolean
  }

  namespace xr_gather_items {
    /** Anomaly `class "act_gather_itm"` is also reachable on the `xr_gather_items` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`xr_gather_items.act_gather_itm.Method = ...`). */
    export const act_gather_itm: act_gather_itm
    /** Anomaly `class "eva_gather_itm"` is also reachable on the `xr_gather_items` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`xr_gather_items.eva_gather_itm.Method = ...`). */
    export const eva_gather_itm: eva_gather_itm
    /** Anomaly `class "evaluator_gather_items"` is also reachable on the `xr_gather_items` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`xr_gather_items.evaluator_gather_items.Method = ...`). */
    export const evaluator_gather_items: evaluator_gather_items
  }
}
