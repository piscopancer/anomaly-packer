/** @noSelfInFile */

declare namespace bind_physic_object {
  export function init(obj: CGameObject): void
}

/** @customConstructor generic_physics_binder */
declare class generic_physics_binder extends object_binder {
  constructor(obj: CGameObject)
  reload(section: string): void
  reinit(): void
  update(delta: number): void
  net_spawn(se_abstract: CseAbstract): boolean
  net_destroy(): void
  net_save_relevant(): boolean
  save(packet: net_packet): void
  load(reader: net_packet): void
  use_callback(obj: CGameObject, who: CGameObject): void
  hit_callback(obj: CGameObject, amount: number, local_direction: vector, who: CGameObject, bone_index: number): void
  death_callback(victim: CGameObject, who: CGameObject): void
}
