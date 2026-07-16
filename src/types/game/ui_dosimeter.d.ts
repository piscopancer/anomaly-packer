/** @noSelfInFile */

declare namespace ui_dosimeter {
  export function get_UI(): ui_dosimeter
}

/** @customConstructor ui_dosimeter */
declare class ui_dosimeter extends CUIScriptWnd {
  m_seg1: TODO // @generated field — refine type
  m_seg2: TODO // @generated field — refine type
  m_seg3: TODO // @generated field — refine type
  m_seg4: TODO // @generated field — refine type
  m_workIndicator: TODO // @generated field — refine type
  m_wrk_area: TODO // @generated field — refine type
  xml: TODO // @generated field — refine type
  constructor()
  __finalize(): void
  Update(): void
}

declare namespace ui_dosimeter {
  /** Anomaly `class "ui_dosimeter"` is also reachable on the `ui_dosimeter` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`ui_dosimeter.ui_dosimeter.Method = ...`). */
  export const ui_dosimeter: ui_dosimeter
}
