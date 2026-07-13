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
  constructor(obj: CGameObject)
  update(delta: number): void
  reload(section: Section): void
  reinit(): void
  net_spawn(se_abstract: CseAbstract): boolean
  net_destroy(): void
  save(stpk: net_packet): void
  load(stpk: net_packet): void
}
