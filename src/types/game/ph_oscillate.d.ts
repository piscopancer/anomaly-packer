/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace ph_oscillate {
    export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, storage: AnyTable): void
    export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, gulag_name: string): void
  }

  /** @customConstructor action_oscillator */
  class action_oscillator {
    coefficient: TODO // @generated field — refine type
    dir: TODO // @generated field — refine type
    joint: TODO // @generated field — refine type
    object: TODO // @generated field — refine type
    pause: boolean // @generated field — refine type
    st: TODO // @generated field — refine type
    time: TODO // @generated field — refine type
    constructor(obj: CGameObject, storage: AnyTable)
    reset_scheme(): void
    update(delta: number): void
  }

  namespace ph_oscillate {
    /** Anomaly `class "action_oscillator"` is also reachable on the `ph_oscillate` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`ph_oscillate.action_oscillator.Method = ...`). */
    export const action_oscillator: action_oscillator
  }
}
