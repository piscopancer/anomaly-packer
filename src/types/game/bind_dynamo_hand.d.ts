/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace bind_dynamo_hand {
    export function a_timer(): void
    export function check_on_level(pos: vector): boolean
    export function init(obj: CGameObject): void
    export function read_net_packet(obj: CGameObject): string | undefined
    export function s_timer(): void
  }

  /** @customConstructor dynamo_hand_binder */
  class dynamo_hand_binder extends object_binder {
    ammo_max: TODO // @generated field — refine type
    first_update: boolean // @generated field — refine type
    gun_end_pos: TODO // @generated field — refine type
    initialized: boolean // @generated field — refine type
    last_ammo_elapsed: TODO // @generated field — refine type
    last_in_slot: boolean // @generated field — refine type
    lbutton_pressed: boolean // @generated field — refine type
    loaded: boolean // @generated field — refine type
    nofire_stop_time: number // @generated field — refine type
    rbutton_pressed: boolean // @generated field — refine type
    sound_fire: TODO // @generated field — refine type
    constructor(obj: CGameObject)
    reload(section: Section.Item): void
    reinit(): void
    net_spawn(se_abstract: CseAbstract): boolean
    update(delta: number): void
    net_destroy(): void
    save(packet: net_packet): void
    load(reader: net_packet): void
    sound_particle_fastcall(): boolean
    OnLButtonDown(): void
    OnLButtonUp(): void
    OnHold(delta: number): void
    OnRemove(): void
  }

  namespace bind_dynamo_hand {
    /** Anomaly `class "dynamo_hand_binder"` is also reachable on the `bind_dynamo_hand` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`bind_dynamo_hand.dynamo_hand_binder.Method = ...`). */
    export const dynamo_hand_binder: dynamo_hand_binder
  }
}
