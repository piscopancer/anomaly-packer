/** @noSelfInFile */

declare namespace item_map_kit {
  export const GUI: UIMapKit
  export function on_game_start(): void
  export function start(obj: CGameObject, sec: Section): void
}

/** @customConstructor UIMapKit */
declare class UIMapKit extends CUIScriptWnd {
  box_map: TODO // @generated field — refine type
  btn_next: TODO // @generated field — refine type
  btn_next_pic: TODO // @generated field — refine type
  btn_ok: TODO // @generated field — refine type
  btn_ok_pic: TODO // @generated field — refine type
  btn_previous: TODO // @generated field — refine type
  btn_previous_pic: TODO // @generated field — refine type
  dialog: TODO // @generated field — refine type
  index: TODO // @generated field — refine type
  indexes: TODO // @generated field — refine type
  map: TODO // @generated field — refine type
  maps: TODO // @generated field — refine type
  object: TODO // @generated field — refine type
  section: TODO // @generated field — refine type
  text_map: TODO // @generated field — refine type
  xml: TODO // @generated field — refine type
  constructor(owner: any, obj: CGameObject, section: Section)
  __finalize(): void
  InitControls(): void
  InitCallBacks(): void
  Reset(obj: CGameObject, sec: Section): void
  OnNext(): void
  OnPrevious(): void
  Close(): void
  OnKeyboard(dik: number, keyboard_action: number): boolean
}

declare namespace item_map_kit {
  /** Anomaly `class "UIMapKit"` is also reachable on the `item_map_kit` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`item_map_kit.UIMapKit.Method = ...`). */
  export const UIMapKit: UIMapKit
}
