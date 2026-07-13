/** @noSelfInFile */

declare namespace bind_dynamic_light {
  export function init(obj: CGameObject): void
  export function need_flicker(lamp_obj: CGameObject): boolean
  export function on_game_start(): void
}

/** @customConstructor generic_light_binder */
declare class generic_light_binder extends object_binder {
  constructor(obj: CGameObject)
  reload(section: Section): void
  reinit(): void
  update(delta: number): void
  net_spawn(data: CseAbstract): void
  net_destroy(): void
  net_save_relevant(): boolean
  save(packet: net_packet): void
  load(reader: net_packet): void
  use_callback(obj: CGameObject, who: CGameObject): void
  hit_callback(obj: CGameObject, amount: number, local_direction: vector, who: CGameObject, bone_index: number): void
  death_callback(victim: CGameObject, who: CGameObject): void
}
