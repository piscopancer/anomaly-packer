/** @noSelfInFile */

declare namespace item_backpack {
  export const GUI: TODO
  export function actor_on_item_take_from_box(box: TODO, obj: TODO): void
  export function actor_on_item_use(obj: TODO): boolean
  export function func_stash(obj: TODO): void
  export function is_ammo_for_wpn(sec: TODO): boolean
  export function is_in_slot(obj: TODO): boolean
  export function menu_stash(obj: TODO): TODO
  export function on_game_start(): void
  export function start(obj: TODO): void
}

/** @customConstructor UICreateStash */
declare class UICreateStash extends CUIScriptWnd {
  constructor()
  __finalize(): void
  InitControls(): void
  InitCallBacks(): void
  Reset(obj: TODO): void
  Update(): void
  OnAccept(): void
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
  Close(): void
}
