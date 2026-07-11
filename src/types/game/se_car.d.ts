/** @noSelfInFile */

/** @customConstructor se_car */
declare class se_car extends cse_alife_car {
  constructor(section: TODO)
  on_register(): void
  on_unregister(): void
  can_switch_offline(): TODO
  can_switch_online(): TODO
  STATE_Write(packet: TODO): void
  STATE_Read(packet: TODO, size: TODO): void
  keep_saved_data_anyway(): boolean
}
