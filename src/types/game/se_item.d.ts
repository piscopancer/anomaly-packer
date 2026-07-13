/** @noSelfInFile */

/** @customConstructor se_ammo */
declare class se_ammo extends cse_alife_item_ammo {
  constructor(section: Section)
  on_register(): void
  on_unregister(): void
  can_switch_online(): boolean
  STATE_Write(stpk: net_packet): void
  STATE_Read(stpk: net_packet, size: number): void
}

/** @customConstructor se_detector */
declare class se_detector extends cse_alife_item_detector {
  constructor(section: Section)
  on_register(): void
  on_unregister(): void
  can_switch_online(): boolean
  STATE_Write(stpk: net_packet): void
  STATE_Read(stpk: net_packet, size: number): void
}

/** @customConstructor se_eatable */
declare class se_eatable extends cse_alife_item {
  constructor(section: Section)
  on_register(): void
  on_unregister(): void
  can_switch_online(): boolean
  STATE_Read(stpk: net_packet, size: number): void
  STATE_Write(stpk: net_packet): void
  keep_saved_data_anyway(): boolean
}

/** @customConstructor se_explosive */
declare class se_explosive extends cse_alife_item_explosive {
  constructor(section: Section)
  on_register(): void
  on_unregister(): void
  can_switch_online(): boolean
  STATE_Write(stpk: net_packet): void
  STATE_Read(stpk: net_packet, size: number): void
}

/** @customConstructor se_grenade */
declare class se_grenade extends cse_alife_item_grenade {
  constructor(section: Section)
  on_register(): void
  on_unregister(): void
  can_switch_online(): boolean
}

/** @customConstructor se_helmet */
declare class se_helmet extends cse_alife_item_helmet {
  constructor(section: Section)
  on_register(): void
  on_unregister(): void
  can_switch_online(): boolean
  STATE_Write(stpk: net_packet): void
  STATE_Read(stpk: net_packet, size: number): void
}

/** @customConstructor se_invbox */
declare class se_invbox extends cse_alife_inventory_box {
  constructor(section: Section)
  on_register(): void
  on_unregister(): void
  can_switch_online(): boolean
  STATE_Write(stpk: net_packet): void
  STATE_Read(stpk: net_packet, size: number): void
}

/** @customConstructor se_item */
declare class se_item extends cse_alife_item {
  constructor(section: Section)
  on_register(): void
  on_unregister(): void
  can_switch_online(): boolean
  STATE_Write(stpk: net_packet): void
  STATE_Read(stpk: net_packet, size: number): void
  switch_online(): void
}

/** @customConstructor se_item_torch */
declare class se_item_torch extends cse_alife_item_torch {
  constructor(section: Section)
  on_register(): void
  on_unregister(): void
  can_switch_online(): boolean
  STATE_Write(stpk: net_packet): void
  STATE_Read(stpk: net_packet, size: number): void
}

/** @customConstructor se_lamp */
declare class se_lamp extends cse_alife_object_hanging_lamp {
  constructor(section: Section)
  on_register(): void
  on_unregister(): void
  keep_saved_data_anyway(): boolean
  can_switch_online(): boolean
  STATE_Write(stpk: net_packet): void
  STATE_Read(stpk: net_packet, size: number): void
}

/** @customConstructor se_mgun */
declare class se_mgun extends cse_alife_mounted_weapon {
  constructor(section: Section)
  on_register(): void
  on_unregister(): void
  can_switch_online(): boolean
  STATE_Write(stpk: net_packet): void
  STATE_Read(stpk: net_packet, size: number): void
}

/** @customConstructor se_outfit */
declare class se_outfit extends cse_alife_item_custom_outfit {
  constructor(section: Section)
  on_register(): void
  on_unregister(): void
  can_switch_online(): boolean
  STATE_Write(stpk: net_packet): void
  STATE_Read(stpk: net_packet, size: number): void
}

/** @customConstructor se_pda */
declare class se_pda extends cse_alife_item_pda {
  constructor(section: Section)
  on_register(): void
  on_unregister(): void
  can_switch_online(): boolean
  STATE_Write(stpk: net_packet): void
  STATE_Read(stpk: net_packet, size: number): void
}

/** @customConstructor se_physic */
declare class se_physic extends cse_alife_object_physic {
  constructor(section: Section)
  on_register(): void
  on_unregister(): void
  keep_saved_data_anyway(): boolean
  can_switch_online(): boolean
  STATE_Write(stpk: net_packet): void
  STATE_Read(stpk: net_packet, size: number): void
}

/** @customConstructor se_weapon */
declare class se_weapon extends cse_alife_item_weapon {
  constructor(section: Section)
  on_register(): void
  on_unregister(): void
  can_switch_online(): boolean
  STATE_Read(packet: net_packet, size: number): void
  STATE_Write(stpk: net_packet): void
}

/** @customConstructor se_weapon_automatic_shotgun */
declare class se_weapon_automatic_shotgun extends cse_alife_item_weapon_auto_shotgun {
  constructor(section: Section)
  on_register(): void
  on_unregister(): void
  can_switch_online(): boolean
  STATE_Write(stpk: net_packet): void
  STATE_Read(stpk: net_packet, size: number): void
}

/** @customConstructor se_weapon_magazined */
declare class se_weapon_magazined extends cse_alife_item_weapon_magazined {
  constructor(section: Section)
  on_register(): void
  on_unregister(): void
  can_switch_online(): boolean
  STATE_Write(stpk: net_packet): void
  STATE_Read(stpk: net_packet, size: number): void
}

/** @customConstructor se_weapon_magazined_w_gl */
declare class se_weapon_magazined_w_gl extends cse_alife_item_weapon_magazined_w_gl {
  constructor(section: Section)
  on_register(): void
  on_unregister(): void
  can_switch_online(): boolean
  STATE_Write(stpk: net_packet): void
  STATE_Read(stpk: net_packet, size: number): void
}

/** @customConstructor se_weapon_shotgun */
declare class se_weapon_shotgun extends cse_alife_item_weapon_shotgun {
  constructor(section: Section)
  on_register(): void
  on_unregister(): void
  can_switch_online(): boolean
  STATE_Write(stpk: net_packet): void
  STATE_Read(stpk: net_packet, size: number): void
}
