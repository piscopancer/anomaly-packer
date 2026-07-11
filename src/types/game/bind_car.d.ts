/** @noSelfInFile */

declare namespace bind_car {
  export function init(obj: TODO): void
}

/** @customConstructor car_binder */
declare class car_binder extends object_binder {
  constructor(obj: TODO)
  reload(section: TODO): void
  reinit(): void
  update(delta: TODO): void
  net_spawn(se_abstract: TODO): boolean
  net_destroy(): void
  net_save_relevant(): boolean
  save(packet: TODO): void
  load(reader: TODO): void
  use_callback(obj: TODO, who: TODO): void
  hit_callback(obj: TODO, amount: TODO, local_direction: TODO, who: TODO, bone_index: TODO): void
  death_callback(victim: TODO, who: TODO): void
}
