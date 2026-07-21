/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace sr_silence {
    export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, storage: AnyTable): void
    export function set_scheme(obj: CGameObject, ini: system_ini, scheme: string, section: Section.Item, gulag_name: string): void
  }
  
  /** @customConstructor CSilence_zone */
  class CSilence_zone {
    object: TODO // @generated field — refine type
    st: TODO // @generated field — refine type
    constructor(obj: CGameObject, storage: AnyTable)
    reset_scheme(): void
    update(): void
  }

  namespace sr_silence {
    /** Anomaly `class "CSilence_zone"` is also reachable on the `sr_silence` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`sr_silence.CSilence_zone.Method = ...`). */
    export const CSilence_zone: CSilence_zone
  }
}
