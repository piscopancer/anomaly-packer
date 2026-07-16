/** @noSelfInFile */

/** @customConstructor se_stalker */
declare class se_stalker extends cse_alife_human_stalker {
  first_update: boolean // @generated field — refine type
  constructor(section: Section)
  can_switch_offline(): boolean
  can_switch_online(): boolean
  switch_online(): void
  switch_offline(): void
  STATE_Write(packet: net_packet): void
  STATE_Read(packet: net_packet, size: number): void
  on_before_register(): void
  on_register(): void
  on_unregister(): void
  on_spawn(): void
  on_death(killer: CseAbstract): void
  update(): void
}

/** @customConstructor se_trader */
declare class se_trader extends cse_alife_trader {
  constructor(section: Section)
  on_register(): void
  on_unregister(): void
  keep_saved_data_anyway(): boolean
}

declare namespace se_stalker {
  /** Anomaly `class "se_stalker"` is also reachable on the `se_stalker` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`se_stalker.se_stalker.Method = ...`). */
  export const se_stalker: se_stalker
  /** Anomaly `class "se_trader"` is also reachable on the `se_stalker` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`se_stalker.se_trader.Method = ...`). */
  export const se_trader: se_trader
}
