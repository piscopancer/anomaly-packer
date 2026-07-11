/** @noSelfInFile */

declare namespace sim_squad_scripted {
  export const dbg_map_hud: boolean
}

/** @customConstructor sim_squad_scripted */
declare class sim_squad_scripted extends cse_alife_online_offline_group {
  constructor(section: TODO)
  init_squad(): void
  init_squad_on_load(): void
  get_script_target(): TODO
  update(): boolean
  specific_update(script_target_id: TODO): void
  generic_update(): TODO
  remove_squad(): void
  remove_npc(npc_id: TODO, force: TODO): void
  on_npc_death(se_npc: TODO, se_killer: TODO): void
  assign_squad_member_to_smart(member_id: TODO, smart: TODO, old_smart_id: TODO): void
  assign_smart(smart: TODO, old_smart_id: number): void
  check_invulnerability(): void
  set_location_types_section(section: TODO): void
  set_location_types(new_smart_name: TODO): void
  add_new_member_forced(section: TODO, pos: TODO, lvid: TODO, gvid: TODO): void
  add_squad_member(spawn_section: TODO, spawn_position: TODO, lv_id: TODO, gv_id: TODO): TODO
  create_npc(spawn_smart: TODO, pos: TODO, lvid: TODO, gvid: TODO): void
  set_squad_sympathy(sympathy: TODO): void
  set_squad_relation(relation: TODO): TODO
  set_squad_position(position: TODO): void
  has_detector(): boolean
  get_squad_community(): TODO
  has_items_to_sell(): boolean
  has_tech_items(): boolean
  save_state(m_data: TODO): void
  load_state(m_data: TODO): void
  STATE_Write(packet: net_packet): void
  STATE_Read(packet: net_packet, size: TODO): void
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
  get_squad_props(): TODO
  get_squad_relation(): string
  get_location(): TODO
  get_current_task(): TODO
  am_i_reached(squad: TODO): TODO
  on_after_reach(squad: TODO): void
  on_reach_target(squad: TODO): void
  get_alife_task(): TODO
  sim_available(): boolean
  target_precondition(squad: TODO): boolean
  evaluate_prior(squad: TODO): TODO
}
