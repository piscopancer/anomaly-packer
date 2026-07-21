/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace ph_on_hit {
    export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, storage: AnyTable, temp: AnyTable): void
    export function disable_generic_scheme(npc: CGameObject, scheme: string, stype: number): void
    export function setup_generic_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, stype: number, temp: AnyTable): void
  }
  
  /** @customConstructor ph_on_hit */
  class ph_on_hit {
    object: TODO // @generated field — refine type
    st: TODO // @generated field — refine type
    constructor(obj: CGameObject, storage: AnyTable)
    reset_scheme(): void
    update(delta: number): void
    hit_callback(obj: CGameObject, amount: number, local_direction: vector, who: CGameObject, bone_index: number): void
    deactivate(): void
  }

  namespace ph_on_hit {
    /** Anomaly `class "ph_on_hit"` is also reachable on the `ph_on_hit` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`ph_on_hit.ph_on_hit.Method = ...`). */
    export const ph_on_hit: ph_on_hit
  }
}
