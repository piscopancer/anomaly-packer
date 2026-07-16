/** @noSelfInFile */

/** @customConstructor se_artefact */
declare class se_artefact extends cse_alife_item_artefact {
  constructor(section: Section)
  on_register(): void
  on_unregister(): void
  can_switch_offline(): boolean
  can_switch_online(): boolean
  STATE_Read(stpk: net_packet, size: number): void
  STATE_Write(stpk: net_packet): void
}

declare namespace se_artefact {
  /** Anomaly `class "se_artefact"` is also reachable on the `se_artefact` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`se_artefact.se_artefact.Method = ...`). */
  export const se_artefact: se_artefact
}
