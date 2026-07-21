/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace bind_car {
    export function init(obj: CGameObject): void
  }

  /** @customConstructor car_binder */
  class car_binder extends object_binder {
    initialized: boolean // @generated field — refine type
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
    use_callback(obj: CGameObject, who: CGameObject): void
    hit_callback(obj: CGameObject, amount: number, local_direction: vector, who: CGameObject, bone_index: number): void
    death_callback(victim: CGameObject, who: CGameObject): void
  }

  namespace bind_car {
    /** Anomaly `class "car_binder"` is also reachable on the `bind_car` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`bind_car.car_binder.Method = ...`). */
    export const car_binder: car_binder
  }
}
