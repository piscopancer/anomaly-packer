/** @noSelfInFile */

/** @customConstructor se_stalker */
declare class se_stalker extends cse_alife_human_stalker {
  constructor(section: TODO)
  can_switch_offline(): boolean
  can_switch_online(): boolean
  switch_online(): void
  switch_offline(): void
  STATE_Write(packet: net_packet): void
  STATE_Read(packet: net_packet, size: TODO): void
  on_before_register(): void
  on_register(): void
  on_unregister(): void
  on_spawn(): void
  on_death(killer: TODO): void
  update(): void
}

/** @customConstructor se_trader */
declare class se_trader extends cse_alife_trader {
  constructor(section: TODO)
  on_register(): void
  on_unregister(): void
  keep_saved_data_anyway(): boolean
}
