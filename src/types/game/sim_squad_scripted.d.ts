/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace sim_squad_scripted {
    export const dbg_map_hud: boolean
  }

  /** @customConstructor sim_squad_scripted */
  class sim_squad_scripted extends cse_alife_online_offline_group {
    __lock: TODO // @generated field — refine type
    action_condlist: TODO // @generated field — refine type
    always_arrived: TODO // @generated field — refine type
    assigned_target_id: TODO // @generated field — refine type
    common: TODO // @generated field — refine type
    current_action: TODO // @generated field — refine type
    current_spot_id: TODO // @generated field — refine type
    current_target_id: TODO // @generated field — refine type
    death_condlist: TODO // @generated field — refine type
    dist_to_actor: TODO // @generated field — refine type
    first_update: boolean // @generated field — refine type
    forced_online_status: TODO // @generated field — refine type
    idle_time: TODO // @generated field — refine type
    invul_condlist: TODO // @generated field — refine type
    item_on_all: TODO // @generated field — refine type
    last_gvid: TODO // @generated field — refine type
    level_name: TODO // @generated field — refine type
    need_to_reset_location_masks: boolean // @generated field — refine type
    player_id: TODO // @generated field — refine type
    random_targets: TODO // @generated field — refine type
    relationship: TODO // @generated field — refine type
    relationship_condlist: TODO // @generated field — refine type
    respawn_point_id: TODO // @generated field — refine type
    respawn_point_prop_section: TODO // @generated field — refine type
    rush: TODO // @generated field — refine type
    rush_to_target: boolean // @generated field — refine type
    scripted_target: TODO // @generated field — refine type
    show_disabled: boolean // @generated field — refine type
    smart_id: TODO // @generated field — refine type
    spot_section: TODO // @generated field — refine type
    stay_time: TODO // @generated field — refine type
    sympathy: TODO // @generated field — refine type
    task_target_id: TODO // @generated field — refine type
    was_forced_offline: boolean // @generated field — refine type
    constructor(section: Section.Item)
    init_squad(): void
    init_squad_on_load(): void
    get_script_target(): number
    update(): boolean
    specific_update(script_target_id: number): void
    generic_update(): void
    remove_squad(): void
    remove_npc(npc_id: number, force: boolean): void
    on_npc_death(se_npc: CseAbstract, se_killer: CseAbstract): void
    assign_squad_member_to_smart(member_id: number, smart: se_smart_terrain, old_smart_id: number): void
    assign_smart(smart: se_smart_terrain, old_smart_id: number): void
    check_invulnerability(): void
    set_location_types_section(section: Section.Item): void
    set_location_types(new_smart_name: string): void
    add_new_member_forced(section: Section.Item, pos: vector, lvid: number, gvid: number): void
    add_squad_member(spawn_section: string, spawn_position: vector, lv_id: number, gv_id: number): number
    create_npc(spawn_smart: se_smart_terrain, pos: vector, lvid: number, gvid: number): void
    set_squad_sympathy(sympathy: number): void
    set_squad_relation(relation: string): void
    set_squad_position(position: vector): void
    has_detector(): boolean
    get_squad_community(): string
    has_items_to_sell(): boolean
    has_tech_items(): boolean
    save_state(m_data: AnyTable): void
    load_state(m_data: AnyTable): void
    STATE_Write(packet: net_packet): void
    STATE_Read(packet: net_packet, size: number): void
    on_register(): void
    on_unregister(): void
    check_online_status(): void
    can_switch_offline(): boolean
    can_switch_online(): boolean
    switch_offline(): void
    switch_online(): void
    refresh(): void
    hide(): void
    show(): void
    get_squad_props(): any
    get_squad_relation(): string
    get_location(): LuaMultiReturn<[vector, number, number]>
    get_current_task(): CALifeSmartTerrainTask
    am_i_reached(squad: sim_squad_scripted): boolean
    on_after_reach(squad: sim_squad_scripted): void
    on_reach_target(squad: sim_squad_scripted): void
    get_alife_task(): CALifeSmartTerrainTask
    sim_available(): boolean
    target_precondition(squad: sim_squad_scripted): boolean
    evaluate_prior(squad: sim_squad_scripted): number
  }

  namespace sim_squad_scripted {
    /** Anomaly `class "sim_squad_scripted"` is also reachable on the `sim_squad_scripted` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`sim_squad_scripted.sim_squad_scripted.Method = ...`). */
    export const sim_squad_scripted: sim_squad_scripted
  }
}
