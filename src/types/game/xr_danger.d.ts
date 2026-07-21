/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace xr_danger {
    export const DangerIgnore: AnyTable
    export const DangerInertion: AnyTable
    export const actid: number
    export const evaid: number
    export const ini: system_ini
    export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, storage: AnyTable, temp: AnyTable): void
    export function configure_actions(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, stype: number, temp: AnyTable): void
    export function get_danger_time(danger: AnyTable, npc: CGameObject): number
    export function has_danger(npc: CGameObject): boolean
    export function on_game_start(): void
    export function reset_generic_scheme(npc: CGameObject, scheme: string, section: Section.Item, stype: number, st: AnyTable): void
    export function set_script_danger(npc: CGameObject, time: number, who_id: number, pos: vector): void
    export function setup_generic_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, stype: number, temp: AnyTable): void
  }
  
  /** @customConstructor action_danger */
  class action_danger extends action_base {
    a: TODO // @generated field — refine type
    constructor(name: string, storage: AnyTable, name_?: string)
    initialize(): void
    execute(): void
    finalize(): void
  }
  
  /** @customConstructor evaluator_check_danger */
  class evaluator_check_danger extends property_evaluator {
    a: TODO // @generated field — refine type
    constructor(name: string, storage: AnyTable, name_?: string)
    evaluate(): boolean
  }
  
  /** @customConstructor evaluator_danger */
  class evaluator_danger extends property_evaluator {
    a: TODO // @generated field — refine type
    constructor(name: string, storage: AnyTable, npc: CGameObject, name_?: string)
    evaluate(): boolean
  }

  namespace xr_danger {
    /** Anomaly `class "action_danger"` is also reachable on the `xr_danger` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`xr_danger.action_danger.Method = ...`). */
    export const action_danger: action_danger
    /** Anomaly `class "evaluator_check_danger"` is also reachable on the `xr_danger` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`xr_danger.evaluator_check_danger.Method = ...`). */
    export const evaluator_check_danger: evaluator_check_danger
    /** Anomaly `class "evaluator_danger"` is also reachable on the `xr_danger` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`xr_danger.evaluator_danger.Method = ...`). */
    export const evaluator_danger: evaluator_danger
  }
}
