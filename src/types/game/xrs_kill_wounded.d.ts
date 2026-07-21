/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace xrs_kill_wounded {
    export const actid: number
    export const evaid: number
    export const hostage_list: AnyTable
    export const ini: system_ini
    export function add_common_precondition(action: any): void
    export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, st: AnyTable, temp?: AnyTable): void
    export function configure_actions(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, stype: number, temp?: AnyTable): void
    export function is_under_kill_wounded(npc: CGameObject): boolean
    export function on_game_start(): boolean
    export function setup_generic_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, stype: number, temp?: AnyTable): void
  }
  
  /** @customConstructor act_kill_wounded */
  class act_kill_wounded extends action_base {
    st: TODO // @generated field — refine type
    constructor(name: string, storage: AnyTable)
    initialize(): void
    reset(): void
    execute(): void
    begin_kill_wounded(vo: CGameObject): void
    finalize(): void
  }
  
  /** @customConstructor eva_kill_wounded */
  class eva_kill_wounded extends property_evaluator {
    st: TODO // @generated field — refine type
    constructor(name: string, storage: AnyTable)
    find_target(): boolean
    evaluate(): boolean
  }

  namespace xrs_kill_wounded {
    /** Anomaly `class "act_kill_wounded"` is also reachable on the `xrs_kill_wounded` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`xrs_kill_wounded.act_kill_wounded.Method = ...`). */
    export const act_kill_wounded: act_kill_wounded
    /** Anomaly `class "eva_kill_wounded"` is also reachable on the `xrs_kill_wounded` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`xrs_kill_wounded.eva_kill_wounded.Method = ...`). */
    export const eva_kill_wounded: eva_kill_wounded
  }
}
