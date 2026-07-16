/** @noSelfInFile */

/** @customConstructor se_monster */
declare class se_monster extends cse_alife_monster_base {
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
  on_death(killer: CseAbstract): void
  update(): void
}

declare namespace se_monster {
  /** Anomaly `class "se_monster"` is also reachable on the `se_monster` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`se_monster.se_monster.Method = ...`). */
  export const se_monster: se_monster
}
