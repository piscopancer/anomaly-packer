/** @noSelfInFile */

declare namespace bind_item {
  export function bind(obj: TODO): void
  export function func_separate(obj: TODO): void
  export function menu_separate(obj: TODO): TODO
  export function on_game_start(): void
  export function print_dbg(txt: TODO, ...args: TODO[]): void
}

/** @customConstructor item_binder */
declare class item_binder extends object_binder {
  constructor(obj: TODO)
  update(delta: TODO): void
  reload(section: TODO): void
  reinit(): void
  net_spawn(se_abstract: TODO): boolean
  net_destroy(): void
  save(stpk: TODO): void
  load(stpk: TODO): void
}
