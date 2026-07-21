/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace xr_walker {
    export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, storage: AnyTable): void
    export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, gulag_name: string): void
  }
  
  /** @customConstructor action_walker_activity */
  class action_walker_activity extends action_base {
    avail_actions: TODO // @generated field — refine type
    camp: TODO // @generated field — refine type
    in_camp: TODO // @generated field — refine type
    move_mgr: TODO // @generated field — refine type
    st: TODO // @generated field — refine type
    constructor(npc: CGameObject, action_name: string, storage: AnyTable)
    initialize(): void
    activate_scheme(loading: boolean, npc: CGameObject): void
    reset_scheme(loading: boolean, npc: CGameObject): void
    execute(): void
    update(): void
    finalize(): void
    position_riched(): boolean
    net_destroy(npc: CGameObject): void
  }
  
  /** @customConstructor evaluator_need_walker */
  class evaluator_need_walker extends property_evaluator {
    st: TODO // @generated field — refine type
    constructor(storage: AnyTable, name: string)
    evaluate(): boolean
  }

  namespace xr_walker {
    /** Anomaly `class "action_walker_activity"` is also reachable on the `xr_walker` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`xr_walker.action_walker_activity.Method = ...`). */
    export const action_walker_activity: action_walker_activity
    /** Anomaly `class "evaluator_need_walker"` is also reachable on the `xr_walker` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`xr_walker.evaluator_need_walker.Method = ...`). */
    export const evaluator_need_walker: evaluator_need_walker
  }
}
