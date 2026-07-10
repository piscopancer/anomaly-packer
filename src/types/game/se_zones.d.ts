// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

/** @customConstructor se_restrictor */
declare class se_restrictor extends cse_alife_space_restrictor {
  constructor(section: TODO)
  on_register(): TODO
  switch_online(): TODO
  keep_saved_data_anyway(): TODO
  on_unregister(): TODO
}

/** @customConstructor se_zone_anom */
declare class se_zone_anom extends cse_anomalous_zone {
  constructor(section: TODO)
  on_register(): TODO
  update(): TODO
  STATE_Write(packet: TODO): TODO
  STATE_Read(packet: TODO, size: TODO): TODO
  on_unregister(): TODO
}

/** @customConstructor se_zone_torrid */
declare class se_zone_torrid extends cse_torrid_zone {
  constructor(section: TODO)
  on_register(): TODO
  update(): TODO
  STATE_Write(packet: TODO): TODO
  STATE_Read(packet: TODO, size: TODO): TODO
  on_unregister(): TODO
}

/** @customConstructor se_zone_visual */
declare class se_zone_visual extends cse_zone_visual {
  constructor(section: TODO)
  on_register(): TODO
  update(): TODO
  STATE_Write(packet: TODO): TODO
  STATE_Read(packet: TODO, size: TODO): TODO
  on_unregister(): TODO
}
