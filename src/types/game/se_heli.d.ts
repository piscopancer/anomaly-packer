/** @noSelfInFile */

declare namespace se_heli {
  export const se_helicopters: AnyTable
}

/** @customConstructor se_heli */
declare class se_heli extends cse_alife_helicopter {
  assigned_target_id: TODO // @generated field — refine type
  community: TODO // @generated field — refine type
  current_target_id: TODO // @generated field — refine type
  m_smart_terrain_id: TODO // @generated field — refine type
  player_id: TODO // @generated field — refine type
  respawn_point_id: TODO // @generated field — refine type
  respawn_point_prop_section: TODO // @generated field — refine type
  constructor(section: Section)
  on_register(): void
  on_unregister(): void
  can_switch_online(): boolean
  clear_smart_terrain(): void
  STATE_Write(packet: net_packet): void
  STATE_Read(packet: net_packet, size: number): void
  keep_saved_data_anyway(): boolean
}

declare namespace se_heli {
  /** Anomaly `class "se_heli"` is also reachable on the `se_heli` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`se_heli.se_heli.Method = ...`). */
  export const se_heli: se_heli
}
