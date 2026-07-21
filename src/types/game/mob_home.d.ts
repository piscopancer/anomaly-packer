/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace mob_home {
    export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, storage: AnyTable): void
    export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, gulag_name: string): void
  }
  
  /** @customConstructor mob_home */
  class mob_home {
    object: TODO // @generated field — refine type
    st: TODO // @generated field — refine type
    constructor(obj: CGameObject, storage: AnyTable)
    reset_scheme(): void
    update(delta: number): void
    deactivate(): void
  }

  namespace mob_home {
    /** Anomaly `class "mob_home"` is also reachable on the `mob_home` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`mob_home.mob_home.Method = ...`). */
    export const mob_home: mob_home
  }
}
