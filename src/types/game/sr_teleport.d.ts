/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace sr_teleport {
    export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, storage: AnyTable): void
    export function set_scheme(obj: CGameObject, ini: system_ini, scheme: string, section: Section.Item, gulag_name: string): void
  }
  
  /** @customConstructor action_teleport */
  class action_teleport {
    object: TODO // @generated field — refine type
    st: TODO // @generated field — refine type
    state: TODO // @generated field — refine type
    timer: TODO // @generated field — refine type
    constructor(obj: CGameObject, storage: AnyTable)
    update(delta: number): void
  }

  namespace sr_teleport {
    /** Anomaly `class "action_teleport"` is also reachable on the `sr_teleport` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`sr_teleport.action_teleport.Method = ...`). */
    export const action_teleport: action_teleport
  }
}
