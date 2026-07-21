/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace ph_death {
    export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, storage: AnyTable): void
    export function disable_scheme(npc: CGameObject, scheme: string): void
    export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, gulag_name: string): void
  }
  
  /** @customConstructor ph_on_death */
  class ph_on_death {
    object: TODO // @generated field — refine type
    st: TODO // @generated field — refine type
    constructor(obj: CGameObject, storage: AnyTable)
    reset_scheme(): void
    update(delta: number): void
    death_callback(obj: CGameObject, who: CGameObject): void
  }

  namespace ph_death {
    /** Anomaly `class "ph_on_death"` is also reachable on the `ph_death` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`ph_death.ph_on_death.Method = ...`). */
    export const ph_on_death: ph_on_death
  }
}
