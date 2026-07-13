/** @noSelfInFile */

declare namespace bind_monster {
  export function bind(obj: CGameObject): void
}

/** @customConstructor generic_object_binder */
declare class generic_object_binder extends object_binder {
  constructor(obj: CGameObject)
  reinit(): void
  use_kick(obj: CGameObject, who: CGameObject): void
  update(delta: number): void
  extrapolate_callback(): boolean
  waypoint_callback(obj: CGameObject, action_type: number, index: number): void
  death_callback(victim: CGameObject, who: CGameObject): void
  hit_callback(obj: CGameObject, amount: number, local_direction: vector, who: CGameObject, bone_index: number): void
  hear_callback(npc: CGameObject, who_id: number, sound_type: number, sound_position: vector, sound_power: number): void
  use_callback(obj: CGameObject, who: CGameObject): void
  net_spawn(se_abstract: CseAbstract): boolean
  net_destroy(): void
  reload(section: Section): void
  net_save_relevant(): boolean
  save(packet: net_packet): void
  load(reader: net_packet): void
  save_state(m_data: AnyTable): void
  load_state(): void
}
