/** @noSelfInFile */

/** @customConstructor se_ammo */
import type { Section } from 'anomaly-packer'

declare global {
  class se_ammo extends cse_alife_item_ammo {
    constructor(section: Section.Item)
    on_register(): void
    on_unregister(): void
    can_switch_online(): boolean
    STATE_Write(stpk: net_packet): void
    STATE_Read(stpk: net_packet, size: number): void
  }
  
  /** @customConstructor se_detector */
  class se_detector extends cse_alife_item_detector {
    constructor(section: Section.Item)
    on_register(): void
    on_unregister(): void
    can_switch_online(): boolean
    STATE_Write(stpk: net_packet): void
    STATE_Read(stpk: net_packet, size: number): void
  }
  
  /** @customConstructor se_eatable */
  class se_eatable extends cse_alife_item {
    constructor(section: Section.Item)
    on_register(): void
    on_unregister(): void
    can_switch_online(): boolean
    STATE_Read(stpk: net_packet, size: number): void
    STATE_Write(stpk: net_packet): void
    keep_saved_data_anyway(): boolean
  }
  
  /** @customConstructor se_explosive */
  class se_explosive extends cse_alife_item_explosive {
    constructor(section: Section.Item)
    on_register(): void
    on_unregister(): void
    can_switch_online(): boolean
    STATE_Write(stpk: net_packet): void
    STATE_Read(stpk: net_packet, size: number): void
  }
  
  /** @customConstructor se_grenade */
  class se_grenade extends cse_alife_item_grenade {
    constructor(section: Section.Item)
    on_register(): void
    on_unregister(): void
    can_switch_online(): boolean
  }
  
  /** @customConstructor se_helmet */
  class se_helmet extends cse_alife_item_helmet {
    constructor(section: Section.Item)
    on_register(): void
    on_unregister(): void
    can_switch_online(): boolean
    STATE_Write(stpk: net_packet): void
    STATE_Read(stpk: net_packet, size: number): void
  }
  
  /** @customConstructor se_invbox */
  class se_invbox extends cse_alife_inventory_box {
    constructor(section: Section.Item)
    on_register(): void
    on_unregister(): void
    can_switch_online(): boolean
    STATE_Write(stpk: net_packet): void
    STATE_Read(stpk: net_packet, size: number): void
  }
  
  /** @customConstructor se_item */
  class se_item extends cse_alife_item {
    constructor(section: Section.Item)
    on_register(): void
    on_unregister(): void
    can_switch_online(): boolean
    STATE_Write(stpk: net_packet): void
    STATE_Read(stpk: net_packet, size: number): void
    switch_online(): void
  }
  
  /** @customConstructor se_item_torch */
  class se_item_torch extends cse_alife_item_torch {
    constructor(section: Section.Item)
    on_register(): void
    on_unregister(): void
    can_switch_online(): boolean
    STATE_Write(stpk: net_packet): void
    STATE_Read(stpk: net_packet, size: number): void
  }
  
  /** @customConstructor se_lamp */
  class se_lamp extends cse_alife_object_hanging_lamp {
    constructor(section: Section.Item)
    on_register(): void
    on_unregister(): void
    keep_saved_data_anyway(): boolean
    can_switch_online(): boolean
    STATE_Write(stpk: net_packet): void
    STATE_Read(stpk: net_packet, size: number): void
  }
  
  /** @customConstructor se_mgun */
  class se_mgun extends cse_alife_mounted_weapon {
    constructor(section: Section.Item)
    on_register(): void
    on_unregister(): void
    can_switch_online(): boolean
    STATE_Write(stpk: net_packet): void
    STATE_Read(stpk: net_packet, size: number): void
  }
  
  /** @customConstructor se_outfit */
  class se_outfit extends cse_alife_item_custom_outfit {
    constructor(section: Section.Item)
    on_register(): void
    on_unregister(): void
    can_switch_online(): boolean
    STATE_Write(stpk: net_packet): void
    STATE_Read(stpk: net_packet, size: number): void
  }
  
  /** @customConstructor se_pda */
  class se_pda extends cse_alife_item_pda {
    constructor(section: Section.Item)
    on_register(): void
    on_unregister(): void
    can_switch_online(): boolean
    STATE_Write(stpk: net_packet): void
    STATE_Read(stpk: net_packet, size: number): void
  }
  
  /** @customConstructor se_physic */
  class se_physic extends cse_alife_object_physic {
    repack: TODO // @generated field — refine type
    constructor(section: Section.Item)
    on_register(): void
    on_unregister(): void
    keep_saved_data_anyway(): boolean
    can_switch_online(): boolean
    STATE_Write(stpk: net_packet): void
    STATE_Read(stpk: net_packet, size: number): void
  }
  
  /** @customConstructor se_weapon */
  class se_weapon extends cse_alife_item_weapon {
    constructor(section: Section.Item)
    on_register(): void
    on_unregister(): void
    can_switch_online(): boolean
    STATE_Read(packet: net_packet, size: number): void
    STATE_Write(stpk: net_packet): void
  }
  
  /** @customConstructor se_weapon_automatic_shotgun */
  class se_weapon_automatic_shotgun extends cse_alife_item_weapon_auto_shotgun {
    constructor(section: Section.Item)
    on_register(): void
    on_unregister(): void
    can_switch_online(): boolean
    STATE_Write(stpk: net_packet): void
    STATE_Read(stpk: net_packet, size: number): void
  }
  
  /** @customConstructor se_weapon_magazined */
  class se_weapon_magazined extends cse_alife_item_weapon_magazined {
    constructor(section: Section.Item)
    on_register(): void
    on_unregister(): void
    can_switch_online(): boolean
    STATE_Write(stpk: net_packet): void
    STATE_Read(stpk: net_packet, size: number): void
  }
  
  /** @customConstructor se_weapon_magazined_w_gl */
  class se_weapon_magazined_w_gl extends cse_alife_item_weapon_magazined_w_gl {
    constructor(section: Section.Item)
    on_register(): void
    on_unregister(): void
    can_switch_online(): boolean
    STATE_Write(stpk: net_packet): void
    STATE_Read(stpk: net_packet, size: number): void
  }
  
  /** @customConstructor se_weapon_shotgun */
  class se_weapon_shotgun extends cse_alife_item_weapon_shotgun {
    constructor(section: Section.Item)
    on_register(): void
    on_unregister(): void
    can_switch_online(): boolean
    STATE_Write(stpk: net_packet): void
    STATE_Read(stpk: net_packet, size: number): void
  }

  namespace se_item {
    /** Anomaly `class "se_ammo"` is also reachable on the `se_item` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`se_item.se_ammo.Method = ...`). */
    export const se_ammo: se_ammo
    /** Anomaly `class "se_detector"` is also reachable on the `se_item` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`se_item.se_detector.Method = ...`). */
    export const se_detector: se_detector
    /** Anomaly `class "se_eatable"` is also reachable on the `se_item` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`se_item.se_eatable.Method = ...`). */
    export const se_eatable: se_eatable
    /** Anomaly `class "se_explosive"` is also reachable on the `se_item` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`se_item.se_explosive.Method = ...`). */
    export const se_explosive: se_explosive
    /** Anomaly `class "se_grenade"` is also reachable on the `se_item` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`se_item.se_grenade.Method = ...`). */
    export const se_grenade: se_grenade
    /** Anomaly `class "se_helmet"` is also reachable on the `se_item` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`se_item.se_helmet.Method = ...`). */
    export const se_helmet: se_helmet
    /** Anomaly `class "se_invbox"` is also reachable on the `se_item` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`se_item.se_invbox.Method = ...`). */
    export const se_invbox: se_invbox
    /** Anomaly `class "se_item"` is also reachable on the `se_item` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`se_item.se_item.Method = ...`). */
    export const se_item: se_item
    /** Anomaly `class "se_item_torch"` is also reachable on the `se_item` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`se_item.se_item_torch.Method = ...`). */
    export const se_item_torch: se_item_torch
    /** Anomaly `class "se_lamp"` is also reachable on the `se_item` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`se_item.se_lamp.Method = ...`). */
    export const se_lamp: se_lamp
    /** Anomaly `class "se_mgun"` is also reachable on the `se_item` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`se_item.se_mgun.Method = ...`). */
    export const se_mgun: se_mgun
    /** Anomaly `class "se_outfit"` is also reachable on the `se_item` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`se_item.se_outfit.Method = ...`). */
    export const se_outfit: se_outfit
    /** Anomaly `class "se_pda"` is also reachable on the `se_item` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`se_item.se_pda.Method = ...`). */
    export const se_pda: se_pda
    /** Anomaly `class "se_physic"` is also reachable on the `se_item` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`se_item.se_physic.Method = ...`). */
    export const se_physic: se_physic
    /** Anomaly `class "se_weapon"` is also reachable on the `se_item` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`se_item.se_weapon.Method = ...`). */
    export const se_weapon: se_weapon
    /** Anomaly `class "se_weapon_automatic_shotgun"` is also reachable on the `se_item` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`se_item.se_weapon_automatic_shotgun.Method = ...`). */
    export const se_weapon_automatic_shotgun: se_weapon_automatic_shotgun
    /** Anomaly `class "se_weapon_magazined"` is also reachable on the `se_item` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`se_item.se_weapon_magazined.Method = ...`). */
    export const se_weapon_magazined: se_weapon_magazined
    /** Anomaly `class "se_weapon_magazined_w_gl"` is also reachable on the `se_item` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`se_item.se_weapon_magazined_w_gl.Method = ...`). */
    export const se_weapon_magazined_w_gl: se_weapon_magazined_w_gl
    /** Anomaly `class "se_weapon_shotgun"` is also reachable on the `se_item` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`se_item.se_weapon_shotgun.Method = ...`). */
    export const se_weapon_shotgun: se_weapon_shotgun
  }
}
