// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace cover_manager {
  export function get_cover(obj: TODO, smrttrn: TODO): TODO
  export function has_cover(se_obj: TODO, smrttrn: TODO): TODO
  export function has_smart_cover(se_obj: TODO, smrttrn: TODO): TODO
}

/** @customConstructor CCover_manager */
declare class CCover_manager {
  constructor(smart: TODO)
  register_squad(squad: TODO): TODO
  unregister_squad(squad: TODO): TODO
  calculate_covers(position: TODO): TODO
  save(packet: TODO): TODO
  load(packet: TODO): TODO
}
