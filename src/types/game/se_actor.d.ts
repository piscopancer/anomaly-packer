/** @noSelfInFile */

/** @customConstructor se_actor */
declare class se_actor extends cse_alife_creature_actor {
  constructor(section: Section)
  on_register(): void
  on_unregister(): void
  STATE_Write(packet: net_packet): void
  STATE_Read(packet: net_packet, size: number): void
  get_location(): LuaMultiReturn<[vector, number, number]>
  am_i_reached(squad: CseAlifeOnlineOfflineGroup): boolean
  on_after_reach(squad: CseAlifeOnlineOfflineGroup): void
  on_reach_target(squad: CseAlifeOnlineOfflineGroup): void
  get_alife_task(): CALifeSmartTerrainTask
  sim_available(): boolean
  target_precondition(squad: CseAlifeOnlineOfflineGroup): boolean
  evaluate_prior(squad: CseAlifeOnlineOfflineGroup): number
}
