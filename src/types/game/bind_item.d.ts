/** @noSelfInFile */

declare namespace bind_item {
  export function bind(obj: CGameObject): void
  export function func_separate(obj: CGameObject): void
  export function menu_separate(obj: CGameObject): string | undefined
  export function on_game_start(): void
  export function print_dbg(txt: string, ...args: any[]): void
}

/** @customConstructor item_binder */
declare class item_binder extends object_binder {
  degradable: boolean // @generated field — refine type
  first_update: boolean // @generated field — refine type
  first_update_done: TODO // @generated field — refine type
  multiuse: boolean // @generated field — refine type
  constructor(obj: CGameObject)
  update(delta: number): void
  reload(section: Section): void
  reinit(): void
  net_spawn(se_abstract: CseAbstract): boolean
  net_destroy(): void
  save(stpk: net_packet): void
  load(stpk: net_packet): void
}

declare namespace bind_item {
  /** Anomaly `class "item_binder"` is also reachable on the `bind_item` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`bind_item.item_binder.Method = ...`). */
  export const item_binder: item_binder
}
