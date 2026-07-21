/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace ph_hit {
    export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, storage: AnyTable): void
    export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, gulag_name: string): void
  }
  
  /** @customConstructor action_hit */
  class action_hit {
    object: TODO // @generated field — refine type
    st: TODO // @generated field — refine type
    constructor(obj: CGameObject, storage: AnyTable)
    reset_scheme(): void
    update(delta: number): void
    hit_callback(door: CGameObject, actor: CGameObject): void
  }

  namespace ph_hit {
    /** Anomaly `class "action_hit"` is also reachable on the `ph_hit` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`ph_hit.action_hit.Method = ...`). */
    export const action_hit: action_hit
  }
}
