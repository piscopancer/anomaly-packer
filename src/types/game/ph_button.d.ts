// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace ph_button {
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO): TODO
  export function set_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, gulag_name: TODO): TODO
}

/** @customConstructor ph_button */
declare class ph_button {
  constructor(obj: TODO, storage: TODO)
  reset_scheme(): TODO
  update(delta: TODO): TODO
  try_switch(): TODO
  hit_callback(obj: TODO, amount: TODO, local_direction: TODO, who: TODO, bone_index: TODO): TODO
  use_callback(victim: TODO, who: TODO): TODO
}
