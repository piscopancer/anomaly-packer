/** @noSelfInFile */

declare namespace item_backpack {
  export const GUI: UICreateStash
  export function actor_on_item_take_from_box(box: CGameObject, obj: CGameObject): void
  export function actor_on_item_use(obj: CGameObject): boolean
  export function func_stash(obj: CGameObject): void
  export function is_ammo_for_wpn(sec: Section): boolean
  export function is_in_slot(obj: CGameObject): boolean
  export function menu_stash(obj: CGameObject): string | undefined
  export function on_game_start(): void
  export function start(obj: CGameObject): void
}

/** @customConstructor UICreateStash */
declare class UICreateStash extends CUIScriptWnd {
  constructor()
  __finalize(): void
  InitControls(): void
  InitCallBacks(): void
  Reset(obj: CGameObject): void
  Update(): void
  OnAccept(): void
  OnKeyboard(dik: number, keyboard_action: number): boolean
  Close(): void
}
