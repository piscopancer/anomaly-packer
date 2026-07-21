/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace bind_heli {
    export function bind(obj: CGameObject): void
    export function get_heli_health(heli: CHelicopter, st: AnyTable): number
    export function heli_die(obj: CGameObject): void
    export function heli_start_flame(obj: CGameObject): void
    export function is_heli_alive(obj: CGameObject): boolean
  }

  /** @customConstructor heli_binder */
  class heli_binder extends object_binder {
    flame_start_health: TODO // @generated field — refine type
    heli_fire: TODO // @generated field — refine type
    initialized: boolean // @generated field — refine type
    is_story_heli: TODO // @generated field — refine type
    last_hit_snd_timeout: TODO // @generated field — refine type
    loaded: boolean // @generated field — refine type
    self_destruct: boolean // @generated field — refine type
    snd_damage: TODO // @generated field — refine type
    snd_down: TODO // @generated field — refine type
    snd_hit: TODO // @generated field — refine type
    st: TODO // @generated field — refine type
    target_alt: number // @generated field — refine type
    constructor(obj: CGameObject)
    reload(section: Section.Item): void
    reinit(): void
    update(delta: number): void
    net_spawn(se_abstract: CseAbstract): boolean
    net_destroy(): void
    net_save_relevant(): boolean
    save(packet: net_packet): void
    load(packet: net_packet): void
    check_health(): void
    on_hit(power: number, impulse: number, hit_type: number, enemy_id: number): void
    on_point(distance: number, position: vector, path_idx: number): void
  }

  namespace bind_heli {
    /** Anomaly `class "heli_binder"` is also reachable on the `bind_heli` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`bind_heli.heli_binder.Method = ...`). */
    export const heli_binder: heli_binder
  }
}
