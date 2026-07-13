/** @noSelfInFile */

declare namespace bind_container {
  export const containers: AnyTable
  export const curBoxID: number
  export function access_inventory(obj: CGameObject): void
  export function bind(obj: CGameObject): void
  export function calculate_weight(se_inv_box: CseAbstract, base: boolean): boolean
}

/** @customConstructor container_binder */
declare class container_binder extends object_binder {
  constructor(obj: CGameObject)
  update(delta: number): void
  reload(section: Section): void
  reinit(): void
  net_spawn(se_abstract: CseAbstract): boolean
  net_destroy(): void
  net_save_relevant(): boolean
  save(stpk: net_packet): void
  load(stpk: net_packet): void
}
