/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace heli_combat {
    export function cross_ray_circle(p: vector, v: vector, o: vector, r: number): vector
  }

  /** @customConstructor heli_combat */
  class heli_combat {
    __eindex: TODO // @generated field — refine type
    __keep_state_until: TODO // @generated field — refine type
    __keep_target_until: TODO // @generated field — refine type
    actor_always_enemy: TODO // @generated field — refine type
    attack_before_retreat: boolean // @generated field — refine type
    center_pos: TODO // @generated field — refine type
    change_combat_type_allowed: TODO // @generated field — refine type
    change_pos_time: TODO // @generated field — refine type
    change_speed_time: TODO // @generated field — refine type
    combat_ignore: TODO // @generated field — refine type
    combat_type: TODO // @generated field — refine type
    combat_use_mgun: TODO // @generated field — refine type
    combat_use_rocket: TODO // @generated field — refine type
    default_safe_altitude: TODO // @generated field — refine type
    default_velocity: TODO // @generated field — refine type
    enemy: TODO // @generated field — refine type
    enemy_from_custom_data: boolean // @generated field — refine type
    enemy_last_seen_pos: TODO // @generated field — refine type
    enemy_last_seen_time: TODO // @generated field — refine type
    flame_start_health: TODO // @generated field — refine type
    flight_direction: TODO // @generated field — refine type
    fly_target_pos: TODO // @generated field — refine type
    flyby_attack_dist: TODO // @generated field — refine type
    flyby_initialized: boolean // @generated field — refine type
    flyby_states_for_one_pass: TODO // @generated field — refine type
    forget_timeout: TODO // @generated field — refine type
    heliObject: TODO // @generated field — refine type
    initialized: TODO // @generated field — refine type
    level_max_y: TODO // @generated field — refine type
    m_max_mgun_dist: TODO // @generated field — refine type
    max_velocity: TODO // @generated field — refine type
    object: TODO // @generated field — refine type
    retreat_initialized: boolean // @generated field — refine type
    round_begin_shoot_time: TODO // @generated field — refine type
    round_initialized: boolean // @generated field — refine type
    round_velocity: TODO // @generated field — refine type
    safe_altitude: TODO // @generated field — refine type
    search_attack_dist: TODO // @generated field — refine type
    search_initialized: boolean // @generated field — refine type
    search_velocity: TODO // @generated field — refine type
    section_changed: boolean // @generated field — refine type
    st: TODO // @generated field — refine type
    state: TODO // @generated field — refine type
    vis: TODO // @generated field — refine type
    vis_dec: TODO // @generated field — refine type
    vis_inc: TODO // @generated field — refine type
    vis_next_time: TODO // @generated field — refine type
    vis_threshold: TODO // @generated field — refine type
    vis_time_quant: TODO // @generated field — refine type
    was_callback: boolean // @generated field — refine type
    constructor(object: CGameObject, heliObject: CHelicopter)
    is_enemy(obj: CGameObject): boolean
    set_enemy(target: CGameObject): void
    find_valid_target(): boolean
    read_custom_data(ini: system_ini, section: Section.Item): void
    set_enemy_from_custom_data(combat_enemy: string): void
    set_combat_type(new_combat_type: number): void
    initialize(): void
    fastcall(): boolean
    SeeEnemy(): boolean
    save(packet: net_packet): void
    load(packet: net_packet): void
    waypoint_callback(): boolean
    update_custom_data_settings(): void
    forget_enemy(): void
    update_combat_type(see_enemy: boolean): void
    combat_ignore_check(): boolean
    update(): boolean
    calc_position_in_radius(r: number): vector
    round_update(see_enemy: boolean): void
    search_update(see_enemy: boolean): void
    flyby_update(see_enemy: boolean): void
    retreat_initialize(): void
    retreat_update(): void
  }

  namespace heli_combat {
    /** Anomaly `class "heli_combat"` is also reachable on the `heli_combat` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`heli_combat.heli_combat.Method = ...`). */
    export const heli_combat: heli_combat
  }
}
