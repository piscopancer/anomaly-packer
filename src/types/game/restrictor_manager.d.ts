/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace restrictor_manager {
    export function get_restrictor_manager(npc: CGameObject): Crestrictor_manager
  }
  
  /** @customConstructor Crestrictor_manager */
  class Crestrictor_manager {
    base_in_restrictions: TODO // @generated field — refine type
    base_out_restrictions: TODO // @generated field — refine type
    in_restrictions: TODO // @generated field — refine type
    object: TODO // @generated field — refine type
    out_restrictions: TODO // @generated field — refine type
    constructor(obj: CGameObject)
    reset_restrictions(st: AnyTable, section: Section.Item): void
  }

  namespace restrictor_manager {
    /** Anomaly `class "Crestrictor_manager"` is also reachable on the `restrictor_manager` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`restrictor_manager.Crestrictor_manager.Method = ...`). */
    export const Crestrictor_manager: Crestrictor_manager
  }
}
