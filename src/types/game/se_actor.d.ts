/** @noSelfInFile */

/** @customConstructor se_actor */
declare class se_actor extends cse_alife_creature_actor {
  constructor(section: TODO)
  on_register(): void
  on_unregister(): void
  STATE_Write(packet: net_packet): void
  STATE_Read(packet: net_packet, size: TODO): void
  get_location(): LuaMultiReturn<[vector, number, number]>
  am_i_reached(squad: TODO): boolean
  on_after_reach(squad: TODO): void
  on_reach_target(squad: TODO): void
  get_alife_task(): TODO
  sim_available(): boolean
  target_precondition(squad: TODO): boolean
  evaluate_prior(squad: TODO): number
}
