// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace mob_trader {
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO): TODO
  export function set_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, gulag_name: TODO): TODO
}

/** @customConstructor mob_trader */
declare class mob_trader {
  constructor(obj: TODO, storage: TODO)
  reset_scheme(): TODO
  use_callback(): TODO
  update(delta: TODO): TODO
  select_global_animation(): TODO
  select_head_animation(): TODO
  on_global_anim_request(): TODO
  on_head_anim_request(): TODO
  on_sound_end(): TODO
  deactivate(): TODO
  net_destroy(): TODO
}
