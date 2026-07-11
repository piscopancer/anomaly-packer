/** @noSelfInFile */

declare namespace bind_monster {
  export function bind(obj: TODO): void
}

/** @customConstructor generic_object_binder */
declare class generic_object_binder extends object_binder {
  constructor(obj: TODO)
  reinit(): void
  use_kick(obj: TODO, who: TODO): void
  update(delta: TODO): void
  extrapolate_callback(): boolean
  waypoint_callback(obj: TODO, action_type: TODO, index: TODO): void
  death_callback(victim: TODO, who: TODO): void
  hit_callback(obj: TODO, amount: TODO, local_direction: TODO, who: TODO, bone_index: TODO): void
  hear_callback(npc: TODO, who_id: TODO, sound_type: TODO, sound_position: TODO, sound_power: TODO): void
  use_callback(obj: TODO, who: TODO): void
  net_spawn(se_abstract: TODO): boolean
  net_destroy(): void
  reload(section: TODO): void
  net_save_relevant(): boolean
  save(packet: TODO): void
  load(reader: TODO): void
  save_state(m_data: TODO): void
  load_state(): void
}
