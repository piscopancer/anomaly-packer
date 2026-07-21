/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace xr_help_wounded {
    export const ini: system_ini
    export function add_to_binder(npc: CGameObject, char_ini: system_ini, scheme: string, section: Section.Item, st: AnyTable, temp?: AnyTable): void
    export function configure_actions(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, stype: number, temp?: AnyTable): void
    export function help_wounded(npc: CGameObject): boolean
    export function is_under_help_wounded(npc: CGameObject): boolean
    export function reset_generic_scheme(npc: CGameObject, scheme: string, section: Section.Item, stype: number, t: AnyTable): void
    export function setup_generic_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, stype: number, temp?: AnyTable): void
  }
  
  /** @customConstructor action_help_wounded */
  class action_help_wounded extends action_base {
    a: TODO // @generated field — refine type
    constructor(npc_name: string, action_name: string, storage: AnyTable)
    initialize(): void
    execute(): void
    finalize(): void
  }
  
  /** @customConstructor evaluator_wounded_exist */
  class evaluator_wounded_exist extends property_evaluator {
    a: TODO // @generated field — refine type
    constructor(name: string, storage: AnyTable, npc: CGameObject)
    find_valid_target(): boolean
    evaluate(): boolean
  }

  namespace xr_help_wounded {
    /** Anomaly `class "action_help_wounded"` is also reachable on the `xr_help_wounded` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`xr_help_wounded.action_help_wounded.Method = ...`). */
    export const action_help_wounded: action_help_wounded
    /** Anomaly `class "evaluator_wounded_exist"` is also reachable on the `xr_help_wounded` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`xr_help_wounded.evaluator_wounded_exist.Method = ...`). */
    export const evaluator_wounded_exist: evaluator_wounded_exist
  }
}
