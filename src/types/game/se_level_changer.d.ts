/** @noSelfInFile */

/** @customConstructor se_level_changer */
import type { Section } from 'anomaly-packer'

declare global {
  class se_level_changer extends cse_alife_level_changer {
    enabled: TODO // @generated field — refine type
    hint: TODO // @generated field — refine type
    constructor(section: Section.Item)
    on_register(): void
    on_unregister(): void
    STATE_Write(packet: net_packet): void
    STATE_Read(packet: net_packet, size: number): void
  }

  namespace se_level_changer {
    /** Anomaly `class "se_level_changer"` is also reachable on the `se_level_changer` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`se_level_changer.se_level_changer.Method = ...`). */
    export const se_level_changer: se_level_changer
  }
}
