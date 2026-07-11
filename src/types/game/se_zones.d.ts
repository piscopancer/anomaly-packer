/** @noSelfInFile */

/** @customConstructor se_restrictor */
declare class se_restrictor extends cse_alife_space_restrictor {
  constructor(section: TODO)
  on_register(): void
  switch_online(): void
  keep_saved_data_anyway(): boolean
  on_unregister(): void
}

/** @customConstructor se_zone_anom */
declare class se_zone_anom extends cse_anomalous_zone {
  constructor(section: TODO)
  on_register(): void
  update(): void
  STATE_Write(packet: TODO): void
  STATE_Read(packet: TODO, size: TODO): void
  on_unregister(): void
}

/** @customConstructor se_zone_torrid */
declare class se_zone_torrid extends cse_torrid_zone {
  constructor(section: TODO)
  on_register(): void
  update(): void
  STATE_Write(packet: TODO): void
  STATE_Read(packet: TODO, size: TODO): void
  on_unregister(): void
}

/** @customConstructor se_zone_visual */
declare class se_zone_visual extends cse_zone_visual {
  constructor(section: TODO)
  on_register(): void
  update(): void
  STATE_Write(packet: TODO): void
  STATE_Read(packet: TODO, size: TODO): void
  on_unregister(): void
}
