// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace bind_monster {
  export function bind(obj: TODO): TODO
}

/** @customConstructor generic_object_binder */
declare class generic_object_binder extends object_binder {
  constructor(obj: TODO)
  reinit(): TODO
  use_kick(obj: TODO, who: TODO): TODO
  update(delta: TODO): TODO
  extrapolate_callback(): TODO
  waypoint_callback(obj: TODO, action_type: TODO, index: TODO): TODO
  death_callback(victim: TODO, who: TODO): TODO
  hit_callback(obj: TODO, amount: TODO, local_direction: TODO, who: TODO, bone_index: TODO): TODO
  hear_callback(npc: TODO, who_id: TODO, sound_type: TODO, sound_position: TODO, sound_power: TODO): TODO
  use_callback(obj: TODO, who: TODO): TODO
  net_spawn(se_abstract: TODO): TODO
  net_destroy(): TODO
  reload(section: TODO): TODO
  net_save_relevant(): TODO
  save(packet: TODO): TODO
  load(reader: TODO): TODO
  save_state(m_data: TODO): TODO
  load_state(): TODO
}
