// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace sim_squad_scripted {
  export const dbg_map_hud: TODO
}

/** @customConstructor sim_squad_scripted */
declare class sim_squad_scripted extends cse_alife_online_offline_group {
  constructor(section: TODO)
  init_squad(): TODO
  init_squad_on_load(): TODO
  get_script_target(): TODO
  update(): TODO
  specific_update(script_target_id: TODO): TODO
  generic_update(): TODO
  remove_squad(): TODO
  remove_npc(npc_id: TODO, force: TODO): TODO
  on_npc_death(se_npc: TODO, se_killer: TODO): TODO
  assign_squad_member_to_smart(member_id: TODO, smart: TODO, old_smart_id: TODO): TODO
  assign_smart(smart: TODO, old_smart_id: TODO): TODO
  check_invulnerability(): TODO
  set_location_types_section(section: TODO): TODO
  set_location_types(new_smart_name: TODO): TODO
  add_new_member_forced(section: TODO, pos: TODO, lvid: TODO, gvid: TODO): TODO
  add_squad_member(spawn_section: TODO, spawn_position: TODO, lv_id: TODO, gv_id: TODO): TODO
  create_npc(spawn_smart: TODO, pos: TODO, lvid: TODO, gvid: TODO): TODO
  set_squad_sympathy(sympathy: TODO): TODO
  set_squad_relation(relation: TODO): TODO
  set_squad_position(position: TODO): TODO
  has_detector(): TODO
  get_squad_community(): TODO
  has_items_to_sell(): TODO
  has_tech_items(): TODO
  save_state(m_data: TODO): TODO
  load_state(m_data: TODO): TODO
  STATE_Write(packet: TODO): TODO
  STATE_Read(packet: TODO, size: TODO): TODO
  on_register(): TODO
  on_unregister(): TODO
  check_online_status(): TODO
  can_switch_offline(): TODO
  can_switch_online(): TODO
  switch_offline(): TODO
  switch_online(): TODO
  refresh(): TODO
  hide(): TODO
  show(): TODO
  get_squad_props(): TODO
  get_squad_relation(): TODO
  get_location(): TODO
  get_current_task(): TODO
  am_i_reached(squad: TODO): TODO
  on_after_reach(squad: TODO): TODO
  on_reach_target(squad: TODO): TODO
  get_alife_task(): TODO
  sim_available(): TODO
  target_precondition(squad: TODO): TODO
  evaluate_prior(squad: TODO): TODO
}
