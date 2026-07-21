/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace bind_trader {
    export function bind(obj: CGameObject): void
  }

  /** @customConstructor trader_object_binder */
  class trader_object_binder extends object_binder {
    loaded: boolean // @generated field — refine type
    st: TODO // @generated field — refine type
    constructor(obj: CGameObject)
    reload(section: Section.Item): void
    reinit(): void
    update(delta: number): void
    net_spawn(se_abstract: CseAbstract): boolean
    net_destroy(): void
    net_save_relevant(): boolean
    save(packet: net_packet): void
    load(reader: net_packet): void
    save_state(m_data: AnyTable): void
    load_state(): void
  }

  namespace bind_trader {
    /** Anomaly `class "trader_object_binder"` is also reachable on the `bind_trader` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`bind_trader.trader_object_binder.Method = ...`). */
    export const trader_object_binder: trader_object_binder
  }
}
