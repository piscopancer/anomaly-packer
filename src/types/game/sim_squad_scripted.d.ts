/** @noSelfInFile */

declare namespace sim_squad_scripted {
  export const dbg_map_hud: boolean
}

/** @customConstructor sim_squad_scripted */
declare class sim_squad_scripted extends cse_alife_online_offline_group {
  constructor(section: string)
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
  set_location_types_section(section: string): void
  set_location_types(new_smart_name: string): void
  add_new_member_forced(section: string, pos: vector, lvid: number, gvid: number): void
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
