/** @noSelfInFile */

declare namespace bind_container {
  export const containers: TODO
  export const curBoxID: TODO
  export function access_inventory(obj: TODO): void
  export function bind(obj: TODO): void
  export function calculate_weight(se_inv_box: TODO, base: TODO): boolean
}

/** @customConstructor container_binder */
declare class container_binder extends object_binder {
  constructor(obj: TODO)
  update(delta: TODO): void
  reload(section: TODO): void
  reinit(): void
  net_spawn(se_abstract: TODO): boolean
  net_destroy(): void
  net_save_relevant(): boolean
  save(stpk: net_packet): void
  load(stpk: net_packet): void
}
