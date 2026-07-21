/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace bind_anomaly_zone {
    export const artefact_points_by_id: AnyTable
    export const artefact_ways_by_id: AnyTable
    export const parent_zones_by_artefact_id: AnyTable
    export function bind(obj: CGameObject): void
    export function force_spawn_artefacts(): void
    export function on_game_start(): void
    export function print_debug(fmt: string, ...args: any[]): void
  }

  /** @customConstructor anomaly_zone_binder */
  class anomaly_zone_binder extends object_binder {
    applying_force_xz: TODO // @generated field — refine type
    applying_force_y: TODO // @generated field — refine type
    artefact_points_by_id: TODO // @generated field — refine type
    artefact_ways_by_id: TODO // @generated field — refine type
    artefacts_coeff_table: TODO // @generated field — refine type
    artefacts_table: TODO // @generated field — refine type
    cur_layer: TODO // @generated field — refine type
    custom_placement: TODO // @generated field — refine type
    disabled: boolean // @generated field — refine type
    fields_table: TODO // @generated field — refine type
    forced_artefact: TODO // @generated field — refine type
    forced_spawn: TODO // @generated field — refine type
    forced_spawn_override: TODO // @generated field — refine type
    forces_table: TODO // @generated field — refine type
    ini: TODO // @generated field — refine type
    layers_count: TODO // @generated field — refine type
    max_artefacts: TODO // @generated field — refine type
    max_artefacts_table: TODO // @generated field — refine type
    mines_table: TODO // @generated field — refine type
    path_table: TODO // @generated field — refine type
    respawn_artefacts: TODO // @generated field — refine type
    respawn_tries: TODO // @generated field — refine type
    respawn_tries_table: TODO // @generated field — refine type
    s_chance: TODO // @generated field — refine type
    spawned_count: TODO // @generated field — refine type
    st: TODO // @generated field — refine type
    start_artefacts_table: TODO // @generated field — refine type
    turned_off: TODO // @generated field — refine type
    constructor(obj: CGameObject)
    disable_anomaly_fields(): void
    respawn_artefacts_and_replace_anomaly_zone(): void
    spawn_artefact_randomly(): void
    refresh(from?: any): void
    get_artefact_path(): string
    set_forced_override(artefact_name: string): void
    reload(section: Section.Item): void
    reinit(): void
    net_spawn(se_abstract: CseAbstract): boolean
    net_destroy(): void
    update(delta: number): void
    cleanup(): void
    turn_off(): void
    turn_on(f_af: boolean): void
    on_artefact_take(obj: CGameObject): void
    net_save_relevant(): boolean
    save(thread: net_packet): void
    load(thread: net_packet): void
  }

  namespace bind_anomaly_zone {
    /** Anomaly `class "anomaly_zone_binder"` is also reachable on the `bind_anomaly_zone` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`bind_anomaly_zone.anomaly_zone_binder.Method = ...`). */
    export const anomaly_zone_binder: anomaly_zone_binder
  }
}
