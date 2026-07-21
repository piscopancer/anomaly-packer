/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace bind_camp {
    export const camps: AnyTable
    export function bind(obj: CGameObject): void
  }
  
  /** @customConstructor camp_binder */
  class camp_binder extends object_binder {
    constructor(obj: CGameObject, char_ini: system_ini)
    reload(section: Section.Item): void
    reinit(): void
    net_spawn(se_abstract: CseAbstract): boolean
    net_destroy(): void
    update(delta: number): void
    net_save_relevant(): boolean
    save(packet: net_packet): void
    load(reader: net_packet): void
  }

  namespace bind_camp {
    /** Anomaly `class "camp_binder"` is also reachable on the `bind_camp` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`bind_camp.camp_binder.Method = ...`). */
    export const camp_binder: camp_binder
  }
}
