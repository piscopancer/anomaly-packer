/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace sr_timer {
    export function add_to_binder(obj: CGameObject, ini: system_ini, scheme: string, section: Section.Item, storage: AnyTable): void
    export function parse_data(npc: CGameObject, s: string): AnyTable
    export function set_scheme(obj: CGameObject, ini: system_ini, scheme: string, section: Section.Item, gulag_name: string): void
    export function time2str(n: number): string
  }
  
  /** @customConstructor action_timer */
  class action_timer {
    object: TODO // @generated field — refine type
    st: TODO // @generated field — refine type
    constructor(obj: CGameObject, storage: AnyTable)
    update(delta: number): void
    deactivate(delta: number): void
  }

  namespace sr_timer {
    /** Anomaly `class "action_timer"` is also reachable on the `sr_timer` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`sr_timer.action_timer.Method = ...`). */
    export const action_timer: action_timer
  }
}
