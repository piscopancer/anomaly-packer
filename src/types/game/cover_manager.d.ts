/** @noSelfInFile */

declare namespace cover_manager {
  export function get_cover(obj: CGameObject, smrttrn: se_smart_terrain): any
  export function has_cover(se_obj: CseAbstract, smrttrn: se_smart_terrain): boolean
  export function has_smart_cover(se_obj: CseAbstract, smrttrn: se_smart_terrain): boolean
}

/** @customConstructor CCover_manager */
declare class CCover_manager {
  constructor(smart: se_smart_terrain)
  register_squad(squad: CseAlifeOnlineOfflineGroup): void
  unregister_squad(squad: CseAlifeOnlineOfflineGroup): void
  calculate_covers(position: vector): void
  save(packet: net_packet): void
  load(packet: net_packet): void
}
