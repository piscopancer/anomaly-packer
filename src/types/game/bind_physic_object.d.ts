// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace bind_physic_object {
  export function init(obj: TODO): TODO
}

/** @customConstructor generic_physics_binder */
declare class generic_physics_binder extends object_binder {
  constructor(obj: TODO)
  reload(section: TODO): TODO
  reinit(): TODO
  update(delta: TODO): TODO
  net_spawn(se_abstract: TODO): TODO
  net_destroy(): TODO
  net_save_relevant(): TODO
  save(packet: TODO): TODO
  load(reader: TODO): TODO
  use_callback(obj: TODO, who: TODO): TODO
  hit_callback(obj: TODO, amount: TODO, local_direction: TODO, who: TODO, bone_index: TODO): TODO
  death_callback(victim: TODO, who: TODO): TODO
}
