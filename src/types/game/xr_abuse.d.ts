/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace xr_abuse {
    export function add_abuse(npc: CGameObject, value: number): void
    export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, st: AnyTable, temp?: AnyTable): void
    export function clear_abuse(npc: CGameObject): void
    export function configure_actions(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, stype: number, temp?: AnyTable): void
    export function disable_abuse(npc: CGameObject): void
    export function enable_abuse(npc: CGameObject): void
    export function is_abuse(npc: CGameObject): boolean
    export function setup_generic_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, stype: number, temp?: AnyTable): void
  }

  /** @customConstructor CAbuseManager */
  class CAbuseManager {
    a: TODO // @generated field — refine type
    abuse_rate: TODO // @generated field — refine type
    abuse_threshold: number // @generated field — refine type
    abuse_value: TODO // @generated field — refine type
    enable: boolean // @generated field — refine type
    hit_done: boolean // @generated field — refine type
    last_update: TODO // @generated field — refine type
    npc: TODO // @generated field — refine type
    constructor(npc: CGameObject, storage: AnyTable)
    SetAbuseRate(rate: number): void
    abused(): boolean
    update(): boolean
    addAbuse(value: number): void
    clearAbuse(): void
    disableAbuse(): void
    enableAbuse(): void
  }

  /** @customConstructor action_abuse_hit */
  class action_abuse_hit extends action_base {
    a: TODO // @generated field — refine type
    hit_done: boolean // @generated field — refine type
    constructor(npc_name: string, action_name: string, storage: AnyTable, char_ini: system_ini)
    initialize(): void
    execute(): void
    finalize(): void
  }

  /** @customConstructor evaluator_abuse */
  class evaluator_abuse extends property_evaluator {
    a: TODO // @generated field — refine type
    constructor(name: string, storage: AnyTable)
    evaluate(): boolean
  }

  namespace xr_abuse {
    /** Anomaly `class "CAbuseManager"` is also reachable on the `xr_abuse` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`xr_abuse.CAbuseManager.Method = ...`). */
    export const CAbuseManager: CAbuseManager
    /** Anomaly `class "action_abuse_hit"` is also reachable on the `xr_abuse` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`xr_abuse.action_abuse_hit.Method = ...`). */
    export const action_abuse_hit: action_abuse_hit
    /** Anomaly `class "evaluator_abuse"` is also reachable on the `xr_abuse` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`xr_abuse.evaluator_abuse.Method = ...`). */
    export const evaluator_abuse: evaluator_abuse
  }
}
