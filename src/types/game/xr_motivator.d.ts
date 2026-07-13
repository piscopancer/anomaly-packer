/** @noSelfInFile */

declare namespace xr_motivator {
  export function AddToMotivator(npc: CGameObject): void
}

/** @customConstructor motivator_binder */
declare class motivator_binder extends object_binder {
  constructor(obj: CGameObject)
  /** Runtime state table for the bound object (`db.storage[obj:id()]`). */
  st: ObjectState
  /** `true` when the binder is being restored from a save (`reinit`/`load`). */
  loaded: boolean
  extrapolate_callback(cur_pt: number): boolean
  reinit(): void
  net_spawn(se_abstract: CseAbstract): boolean
  on_item_take(item: CGameObject): void
  take_item_from_box(box: CGameObject, item: CGameObject): void
  on_item_drop(item: CGameObject): void
  net_destroy(): void
  hit_callback(obj: CGameObject, amount: number, local_direction: vector, who: CGameObject, bone_index: number): void
  death_callback(victim: CGameObject, who: CGameObject): void
  use_callback(obj: CGameObject, who: CGameObject): void
  update(delta: number): void
  reload(section: Section): void
  net_save_relevant(): boolean
  save(packet: net_packet): void
  load(reader: net_packet): void
  hear_callback(npc: CGameObject, who_id: number, sound_type: number, sound_position: vector, sound_power: number): void
  save_state(m_data: AnyTable): void
  load_state(): void
  setup_known_info(npc: CGameObject, char_ini: system_ini, known_info: AnyTable): void
}
