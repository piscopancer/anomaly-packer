/** @noSelfInFile */

/** @customConstructor se_artefact */
declare class se_artefact extends cse_alife_item_artefact {
  constructor(section: string)
  on_register(): void
  on_unregister(): void
  can_switch_offline(): boolean
  can_switch_online(): boolean
  STATE_Read(stpk: net_packet, size: number): void
  STATE_Write(stpk: net_packet): void
}
