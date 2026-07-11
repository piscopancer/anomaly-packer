/** @noSelfInFile */

declare namespace cover_manager {
  export function get_cover(obj: TODO, smrttrn: TODO): TODO
  export function has_cover(se_obj: TODO, smrttrn: TODO): boolean
  export function has_smart_cover(se_obj: TODO, smrttrn: TODO): boolean
}

/** @customConstructor CCover_manager */
declare class CCover_manager {
  constructor(smart: TODO)
  register_squad(squad: TODO): void
  unregister_squad(squad: TODO): void
  calculate_covers(position: TODO): void
  save(packet: net_packet): void
  load(packet: net_packet): void
}
