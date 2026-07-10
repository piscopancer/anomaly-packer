// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace xr_motivator {
  export function AddToMotivator(npc: TODO): TODO
}

/** @customConstructor motivator_binder */
declare class motivator_binder extends object_binder {
  constructor(obj: TODO)
  extrapolate_callback(cur_pt: TODO): TODO
  reinit(): TODO
  net_spawn(se_abstract: TODO): TODO
  on_item_take(item: TODO): TODO
  take_item_from_box(box: TODO, item: TODO): TODO
  on_item_drop(item: TODO): TODO
  net_destroy(): TODO
  hit_callback(obj: TODO, amount: TODO, local_direction: TODO, who: TODO, bone_index: TODO): TODO
  death_callback(victim: TODO, who: TODO): TODO
  use_callback(obj: TODO, who: TODO): TODO
  update(delta: TODO): TODO
  reload(section: TODO): TODO
  net_save_relevant(): TODO
  save(packet: TODO): TODO
  load(reader: TODO): TODO
  hear_callback(npc: TODO, who_id: TODO, sound_type: TODO, sound_position: TODO, sound_power: TODO): TODO
  save_state(m_data: TODO): TODO
  load_state(): TODO
  setup_known_info(npc: TODO, char_ini: TODO, known_info: TODO): TODO
}
