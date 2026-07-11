/** @noSelfInFile */

declare namespace xr_motivator {
  export function AddToMotivator(npc: TODO): void
}

/** @customConstructor motivator_binder */
declare class motivator_binder extends object_binder {
  constructor(obj: TODO)
  extrapolate_callback(cur_pt: TODO): boolean
  reinit(): void
  net_spawn(se_abstract: TODO): boolean
  on_item_take(item: TODO): void
  take_item_from_box(box: TODO, item: TODO): void
  on_item_drop(item: TODO): void
  net_destroy(): void
  hit_callback(obj: CGameObject, amount: TODO, local_direction: TODO, who: TODO, bone_index: number): void
  death_callback(victim: CGameObject, who: TODO): void
  use_callback(obj: TODO, who: TODO): void
  update(delta: TODO): void
  reload(section: TODO): void
  net_save_relevant(): boolean
  save(packet: TODO): void
  load(reader: TODO): void
  hear_callback(npc: TODO, who_id: TODO, sound_type: TODO, sound_position: TODO, sound_power: TODO): void
  save_state(m_data: TODO): void
  load_state(): void
  setup_known_info(npc: CGameObject, char_ini: TODO, known_info: TODO): void
}
