/** @noSelfInFile */

declare namespace se_heli {
  export const se_helicopters: TODO
}

/** @customConstructor se_heli */
declare class se_heli extends cse_alife_helicopter {
  constructor(section: TODO)
  on_register(): void
  on_unregister(): void
  can_switch_online(): TODO
  clear_smart_terrain(): void
  STATE_Write(packet: net_packet): void
  STATE_Read(packet: net_packet, size: TODO): void
  keep_saved_data_anyway(): boolean
}
