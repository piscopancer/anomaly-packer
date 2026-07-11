/** @noSelfInFile */

/** @customConstructor se_level_changer */
declare class se_level_changer extends cse_alife_level_changer {
  constructor(section: TODO)
  on_register(): void
  on_unregister(): void
  STATE_Write(packet: net_packet): void
  STATE_Read(packet: net_packet, size: TODO): void
}
