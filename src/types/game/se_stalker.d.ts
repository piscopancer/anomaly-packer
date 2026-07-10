// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

/** @customConstructor se_stalker */
declare class se_stalker extends cse_alife_human_stalker {
  constructor(section: TODO)
  can_switch_offline(): TODO
  can_switch_online(): TODO
  switch_online(): TODO
  switch_offline(): TODO
  STATE_Write(packet: TODO): TODO
  STATE_Read(packet: TODO, size: TODO): TODO
  on_before_register(): TODO
  on_register(): TODO
  on_unregister(): TODO
  on_spawn(): TODO
  on_death(killer: TODO): TODO
  update(): TODO
}

/** @customConstructor se_trader */
declare class se_trader extends cse_alife_trader {
  constructor(section: TODO)
  on_register(): TODO
  on_unregister(): TODO
  keep_saved_data_anyway(): TODO
}
