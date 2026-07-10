/** @noSelfInFile */

declare namespace utils_stpk {
  export function data_left(stpk: TODO): boolean
  export function fill_cse_abstract_properties_packet(ret: TODO, stpk: TODO): void
  export function fill_cse_alife_anomalous_zone_properties_packet(ret: TODO, stpk: TODO): void
  export function fill_cse_alife_creature_abstract_properties_packet(ret: TODO, stpk: TODO): void
  export function fill_cse_alife_creature_actor_properties_packet(ret: TODO, stpk: TODO, upd: TODO): void
  export function fill_cse_alife_custom_zone_properties_packet(ret: TODO, stpk: TODO): void
  export function fill_cse_alife_graph_point_properties_packet(ret: TODO, stpk: TODO): void
  export function fill_cse_alife_helicopter_properties_packet(ret: TODO, stpk: TODO): void
  export function fill_cse_alife_human_abstract_properties_packet(ret: TODO, stpk: TODO): void
  export function fill_cse_alife_inventory_box_properties_packet(ret: TODO, stpk: TODO): void
  export function fill_cse_alife_item_properties_packet(ret: TODO, stpk: TODO): void
  export function fill_cse_alife_item_weapon_properties_packet(ret: TODO, stpk: TODO): void
  export function fill_cse_alife_level_changer_properties_packet(ret: TODO, stpk: TODO): void
  export function fill_cse_alife_monster_abstract_properties_packet(ret: TODO, stpk: TODO): void
  export function fill_cse_alife_monster_base_properties_packet(ret: TODO, stpk: TODO): void
  export function fill_cse_alife_monster_zombie_properties_packet(ret: TODO, stpk: TODO): void
  export function fill_cse_alife_object_breakable_properties_packet(ret: TODO, stpk: TODO): void
  export function fill_cse_alife_object_climable_properties_packet(ret: TODO, stpk: TODO): void
  export function fill_cse_alife_object_hanging_lamp_properties_packet(ret: TODO, stpk: TODO): void
  export function fill_cse_alife_object_physic_properties_packet(ret: TODO, stpk: TODO): void
  export function fill_cse_alife_object_properties_packet(ret: TODO, stpk: TODO): void
  export function fill_cse_alife_online_offline_group_properties_packet(ret: TODO, stpk: TODO): void
  export function fill_cse_alife_space_restrictor_properties_packet(ret: TODO, stpk: TODO): void
  export function fill_cse_alife_team_base_zone_properties_packet(ret: TODO, stpk: TODO): void
  export function fill_cse_alife_trader_abstract_properties_packet(ret: TODO, stpk: TODO): void
  export function fill_cse_alife_zone_visual_properties_packet(ret: TODO, stpk: TODO): void
  export function fill_cse_motion_properties_packet(ret: TODO, stpk: TODO): void
  export function fill_cse_ph_skeleton_properties_packet(ret: TODO, stpk: TODO): void
  export function fill_cse_shape_properties_packet(ret: TODO, stpk: TODO): void
  export function fill_cse_smart_cover_properties_packet(ret: TODO, stpk: TODO): void
  export function fill_cse_visual_properties_packet(ret: TODO, stpk: TODO): void
  export function fill_se_actor_properties_packet(ret: TODO, stpk: TODO): void
  export function fill_se_anomaly_field_properties_packet(ret: TODO, stpk: TODO): void
  export function fill_se_level_changer_properties_packet(ret: TODO, stpk: TODO): void
  export function fill_se_monster_properties_packet(ret: TODO, stpk: TODO): void
  export function fill_se_respawn_properties_packet(ret: TODO, stpk: TODO): void
  export function fill_se_sim_faction_properties_packet(ret: TODO, stpk: TODO): void
  export function fill_se_smart_cover_properties_packet(ret: TODO, stpk: TODO): void
  export function fill_se_stalker_properties_packet(ret: TODO, stpk: TODO): void
  export function fill_se_zone_anom_properties_packet(ret: TODO, stpk: TODO): void
  export function fill_se_zone_visual_properties_packet(ret: TODO, stpk: TODO): void
  export function get_abstract_data(stpk: TODO): TODO
  export function get_actor_data(sobj: CseAbstract): TODO
  export function get_ammo_data(sobj: CseAbstract): TODO
  export function get_anom_zone_data(sobj: CseAbstract): TODO
  export function get_climable_data(sobj: CseAbstract): TODO
  export function get_heli_data(sobj: CseAbstract): TODO
  export function get_inv_box_data(sobj: CseAbstract): TODO
  export function get_item_data(sobj: CseAbstract): TODO
  export function get_item_document_data(sobj: CseAbstract): TODO
  export function get_item_pda_data(sobj: CseAbstract): TODO
  export function get_item_update_data(sobj: CseAbstract): TODO
  export function get_lamp_data(sobj: CseAbstract): TODO
  export function get_level_changer_data(sobj: CseAbstract): TODO
  export function get_monster_data(sobj: CseAbstract): TODO
  export function get_object_data(sobj: CseAbstract): TODO
  export function get_physic_data(sobj: CseAbstract): TODO
  export function get_smart_cover_data(sobj: CseAbstract): TODO
  export function get_space_restrictor_data(sobj: CseAbstract): TODO
  export function get_squad_data(sobj: CseAbstract): TODO
  export function get_stalker_data(sobj: CseAbstract): TODO
  export function get_visual_zone_data(sobj: CseAbstract): TODO
  export function get_weapon_data(sobj: CseAbstract): TODO
  export function parse_cse_abstract_properties_packet(ret: TODO, stpk: TODO): TODO
  export function parse_cse_alife_anomalous_zone_properties_packet(ret: TODO, stpk: TODO): TODO
  export function parse_cse_alife_creature_abstract_properties_packet(ret: TODO, stpk: TODO): TODO
  export function parse_cse_alife_creature_actor_properties_packet(ret: TODO, stpk: TODO, upd: TODO): TODO
  export function parse_cse_alife_custom_zone_properties_packet(ret: TODO, stpk: TODO): TODO
  export function parse_cse_alife_graph_point_properties_packet(ret: TODO, stpk: TODO): TODO
  export function parse_cse_alife_helicopter_properties_packet(ret: TODO, stpk: TODO): TODO
  export function parse_cse_alife_human_abstract_properties_packet(ret: TODO, stpk: TODO): TODO
  export function parse_cse_alife_inventory_box_properties_packet(ret: TODO, stpk: TODO): TODO
  export function parse_cse_alife_item_properties_packet(ret: TODO, stpk: TODO): TODO
  export function parse_cse_alife_item_weapon_properties_packet(ret: TODO, stpk: TODO): TODO
  export function parse_cse_alife_level_changer_properties_packet(ret: TODO, stpk: TODO): TODO
  export function parse_cse_alife_monster_abstract_properties_packet(ret: TODO, stpk: TODO): TODO
  export function parse_cse_alife_monster_base_properties_packet(ret: TODO, stpk: TODO): TODO
  export function parse_cse_alife_monster_zombie_properties_packet(ret: TODO, stpk: TODO): TODO
  export function parse_cse_alife_object_breakable_properties_packet(ret: TODO, stpk: TODO): TODO
  export function parse_cse_alife_object_climable_properties_packet(ret: TODO, stpk: TODO): TODO
  export function parse_cse_alife_object_hanging_lamp_properties_packet(ret: TODO, stpk: TODO): TODO
  export function parse_cse_alife_object_physic_properties_packet(ret: TODO, stpk: TODO): TODO
  export function parse_cse_alife_object_properties_packet(ret: TODO, stpk: TODO): TODO
  export function parse_cse_alife_online_offline_group_properties_packet(ret: TODO, stpk: TODO): TODO
  export function parse_cse_alife_space_restrictor_properties_packet(ret: TODO, stpk: TODO): TODO
  export function parse_cse_alife_team_base_zone_properties_packet(ret: TODO, stpk: TODO): TODO
  export function parse_cse_alife_trader_abstract_properties_packet(ret: TODO, stpk: TODO): TODO
  export function parse_cse_alife_zone_visual_properties_packet(ret: TODO, stpk: TODO): TODO
  export function parse_cse_motion_properties_packet(ret: TODO, stpk: TODO): TODO
  export function parse_cse_ph_skeleton_properties_packet(ret: TODO, stpk: TODO): TODO
  export function parse_cse_shape_properties_packet(ret: TODO, stpk: TODO): TODO
  export function parse_cse_smart_cover_properties_packet(ret: TODO, stpk: TODO): TODO
  export function parse_cse_visual_properties_packet(ret: TODO, stpk: TODO): TODO
  export function parse_se_actor_properties_packet(ret: TODO, stpk: TODO): TODO
  export function parse_se_anomaly_field_properties_packet(ret: TODO, stpk: TODO): TODO
  export function parse_se_level_changer_properties_packet(ret: TODO, stpk: TODO): TODO
  export function parse_se_monster_properties_packet(ret: TODO, stpk: TODO): TODO
  export function parse_se_respawn_properties_packet(ret: TODO, stpk: TODO): TODO
  export function parse_se_sim_faction_properties_packet(ret: TODO, stpk: TODO): TODO
  export function parse_se_smart_cover_properties_packet(ret: TODO, stpk: TODO): TODO
  export function parse_se_stalker_properties_packet(ret: TODO, stpk: TODO): TODO
  export function parse_se_zone_anom_properties_packet(ret: TODO, stpk: TODO): TODO
  export function parse_se_zone_visual_properties_packet(ret: TODO, stpk: TODO): TODO
  export function read_chunk(stpk: TODO, length: number, c_type: TODO): TODO
  export function readvu32stringZ(stpk: TODO): string
  export function readvu8uN(stpk: TODO, cnt: number): TODO
  export function set_abstract_data(t: TODO, stpk: TODO): void
  export function set_actor_data(t: TODO, sobj: CseAbstract): void
  export function set_ammo_data(t: TODO, sobj: CseAbstract): void
  export function set_anom_zone_data(t: TODO, sobj: CseAbstract): void
  export function set_climable_data(t: TODO, sobj: CseAbstract): void
  export function set_heli_data(t: TODO, sobj: CseAbstract): void
  export function set_inv_box_data(t: TODO, sobj: CseAbstract): void
  export function set_item_data(t: TODO, sobj: CseAbstract): void
  export function set_item_document_data(t: TODO, sobj: CseAbstract): void
  export function set_item_pda_data(t: TODO, sobj: CseAbstract): void
  export function set_item_update_data(t: TODO, sobj: CseAbstract): void
  export function set_lamp_data(t: TODO, sobj: CseAbstract): void
  export function set_level_changer_data(t: TODO, sobj: CseAbstract): void
  export function set_monster_data(t: TODO, sobj: CseAbstract): void
  export function set_object_data(t: TODO, sobj: CseAbstract): void
  export function set_physic_data(t: TODO, sobj: CseAbstract): void
  export function set_smart_cover_data(t: TODO, sobj: CseAbstract): void
  export function set_space_restrictor_data(t: TODO, sobj: CseAbstract): void
  export function set_squad_data(t: TODO, sobj: CseAbstract): void
  export function set_stalker_data(t: TODO, sobj: CseAbstract): void
  export function set_visual_zone_data(t: TODO, sobj: CseAbstract): void
  export function set_weapon_data(t: TODO, sobj: CseAbstract): void
  export function spawn_heli(): CseAbstract | null
  export function spawn_smart_cover(anm: TODO, sec: string, pos: vector, lvid: number, gvid: number): CseAbstract | null
  export function write_chunk(stpk: TODO, tab: TODO, c_type: TODO): void
  export function writevu32stringZ(pk: TODO, v: string): void
  export function writevu8uN(stpk: TODO, v: TODO): void
}
