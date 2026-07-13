/** @noSelfInFile */

declare namespace se_heli {
  export const se_helicopters: AnyTable
}

/** @customConstructor se_heli */
declare class se_heli extends cse_alife_helicopter {
  constructor(section: string)
  on_register(): void
  on_unregister(): void
  can_switch_online(): boolean
  clear_smart_terrain(): void
  STATE_Write(packet: net_packet): void
  STATE_Read(packet: net_packet, size: number): void
  keep_saved_data_anyway(): boolean
}
