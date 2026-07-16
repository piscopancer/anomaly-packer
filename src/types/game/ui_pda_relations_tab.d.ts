/** @noSelfInFile */

declare namespace ui_pda_relations_tab {
  export function get_ui(): pda_relations_tab
}

/** @customConstructor pda_relations_tab */
declare class pda_relations_tab extends CUIScriptWnd {
  _tmr: TODO // @generated field — refine type
  auto_chk: TODO // @generated field — refine type
  btn: TODO // @generated field — refine type
  clr_green: TODO // @generated field — refine type
  clr_red: TODO // @generated field — refine type
  clr_yellow: TODO // @generated field — refine type
  color_codes: TODO // @generated field — refine type
  companion_info: TODO // @generated field — refine type
  companion_listbox: TODO // @generated field — refine type
  hint_wnd: TODO // @generated field — refine type
  list: TODO // @generated field — refine type
  mouse_over_id: TODO // @generated field — refine type
  relations: TODO // @generated field — refine type
  tab: TODO // @generated field — refine type
  to_text: TODO // @generated field — refine type
  constructor()
  __finalize(): void
  InitControls(): void
  Update(): void
  autoupdate(): void
  Reset(): void
  btn_to_text(): void
}

/** @customConstructor ui_companion_row */
declare class ui_companion_row extends CUIListBoxItem {
  constructor(owner: CGameObject, row: number, xml: CScriptXmlInit)
}

declare namespace ui_pda_relations_tab {
  /** Anomaly `class "pda_relations_tab"` is also reachable on the `ui_pda_relations_tab` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`ui_pda_relations_tab.pda_relations_tab.Method = ...`). */
  export const pda_relations_tab: pda_relations_tab
  /** Anomaly `class "ui_companion_row"` is also reachable on the `ui_pda_relations_tab` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`ui_pda_relations_tab.ui_companion_row.Method = ...`). */
  export const ui_companion_row: ui_companion_row
}
