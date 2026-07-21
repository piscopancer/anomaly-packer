/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace ph_code {
    export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, storage: AnyTable): void
    export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, gulag_name: string): void
  }
  
  /** @customConstructor codepad */
  class codepad {
    object: TODO // @generated field — refine type
    st: TODO // @generated field — refine type
    constructor(obj: CGameObject, storage: AnyTable)
    reset_scheme(): void
    update(delta: number): void
    use_callback(obj: CGameObject, who: CGameObject): void
    OnNumberReceive(text: string): void
    deactivate(): void
  }

  namespace ph_code {
    /** Anomaly `class "codepad"` is also reachable on the `ph_code` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`ph_code.codepad.Method = ...`). */
    export const codepad: codepad
  }
}
