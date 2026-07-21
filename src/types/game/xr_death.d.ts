/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace xr_death {
    export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, st: AnyTable, temp: AnyTable): void
    export function reset_generic_scheme(npc: CGameObject, scheme: string, section: Section.Item, stype: number, st: AnyTable): void
    export function setup_generic_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, stype: number, temp: AnyTable): void
  }
  
  /** @customConstructor action_process_death */
  class action_process_death {
    object: TODO // @generated field — refine type
    st: TODO // @generated field — refine type
    constructor(obj: CGameObject, storage: AnyTable)
    death_callback(victim: CGameObject, who: CGameObject): void
  }

  namespace xr_death {
    /** Anomaly `class "action_process_death"` is also reachable on the `xr_death` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`xr_death.action_process_death.Method = ...`). */
    export const action_process_death: action_process_death
  }
}
