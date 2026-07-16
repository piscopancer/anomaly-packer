/** @noSelfInFile */

/** @customConstructor se_car */
declare class se_car extends cse_alife_car {
  constructor(section: Section)
  on_register(): void
  on_unregister(): void
  can_switch_offline(): boolean
  can_switch_online(): boolean
  STATE_Write(packet: net_packet): void
  STATE_Read(packet: net_packet, size: number): void
  keep_saved_data_anyway(): boolean
}

declare namespace se_car {
  /** Anomaly `class "se_car"` is also reachable on the `se_car` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`se_car.se_car.Method = ...`). */
  export const se_car: se_car
}
