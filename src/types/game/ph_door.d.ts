// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace ph_door {
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO): TODO
  export function set_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, gulag_name: TODO): TODO
  export function try_to_close_door(npc: TODO, doors: TODO): TODO
  export function try_to_open_door(npc: TODO, opened_doors: TODO): TODO
}

/** @customConstructor action_door */
declare class action_door {
  constructor(obj: TODO, storage: TODO)
  reset_scheme(loading: TODO): TODO
  update(delta: TODO): TODO
  fastcall(): TODO
  open_fastcall(): TODO
  close_action(): TODO
  open_door(disable_snd: TODO): TODO
  is_closed(): TODO
  is_open(): TODO
  close_door(disable_snd: TODO): TODO
  try_switch(): TODO
  use_callback(door: TODO, actor: TODO): TODO
  hit_callback(obj: TODO, amount: TODO, local_direction: TODO, who: TODO, bone_index: TODO): TODO
  deactivate(): TODO
}
