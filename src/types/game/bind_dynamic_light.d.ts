/** @noSelfInFile */

declare namespace bind_dynamic_light {
  export function init(obj: TODO): void
  export function need_flicker(lamp_obj: TODO): boolean
  export function on_game_start(): void
}

/** @customConstructor generic_light_binder */
declare class generic_light_binder extends object_binder {
  constructor(obj: TODO)
  reload(section: TODO): void
  reinit(): void
  update(delta: TODO): TODO
  net_spawn(data: TODO): void
  net_destroy(): void
  net_save_relevant(): boolean
  save(packet: TODO): void
  load(reader: TODO): void
  use_callback(obj: TODO, who: TODO): void
  hit_callback(obj: TODO, amount: TODO, local_direction: TODO, who: TODO, bone_index: TODO): void
  death_callback(victim: TODO, who: TODO): void
}
