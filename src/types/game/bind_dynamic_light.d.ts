/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace bind_dynamic_light {
    export function init(obj: CGameObject): void
    export function need_flicker(lamp_obj: CGameObject): boolean
    export function on_game_start(): void
  }
  
  /** @customConstructor generic_light_binder */
  class generic_light_binder extends object_binder {
    humming: TODO // @generated field — refine type
    humming_max: TODO // @generated field — refine type
    last_state: TODO // @generated field — refine type
    tg: TODO // @generated field — refine type
    constructor(obj: CGameObject)
    reload(section: Section.Item): void
    reinit(): void
    update(delta: number): void
    net_spawn(data: CseAbstract): void
    net_destroy(): void
    net_save_relevant(): boolean
    save(packet: net_packet): void
    load(reader: net_packet): void
    use_callback(obj: CGameObject, who: CGameObject): void
    hit_callback(obj: CGameObject, amount: number, local_direction: vector, who: CGameObject, bone_index: number): void
    death_callback(victim: CGameObject, who: CGameObject): void
  }

  namespace bind_dynamic_light {
    /** Anomaly `class "generic_light_binder"` is also reachable on the `bind_dynamic_light` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`bind_dynamic_light.generic_light_binder.Method = ...`). */
    export const generic_light_binder: generic_light_binder
  }
}
