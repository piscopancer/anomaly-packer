/** @noSelfInFile */

declare namespace ui_pda_contacts_tab {
  export function get_ui(): pda_contacts_tab
}

/** @customConstructor pda_contacts_tab */
declare class pda_contacts_tab extends CUIScriptWnd {
  _tmr: TODO // @generated field — refine type
  auto_chk: TODO // @generated field — refine type
  clr_green: TODO // @generated field — refine type
  clr_red: TODO // @generated field — refine type
  clr_yellow: TODO // @generated field — refine type
  contact_info: TODO // @generated field — refine type
  hint_wnd: TODO // @generated field — refine type
  listbox: TODO // @generated field — refine type
  show_all: TODO // @generated field — refine type
  constructor()
  InitControls(): void
  SaveCheckBoxSettings(): void
  Update(): void
  Reset(): void
}

/** @customConstructor ui_contact_row */
declare class ui_contact_row extends CUIListBoxItem {
  constructor(parent: CUIScriptWnd, row: number, xml: CScriptXmlInit)
}

declare namespace ui_pda_contacts_tab {
  /** Anomaly `class "pda_contacts_tab"` is also reachable on the `ui_pda_contacts_tab` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`ui_pda_contacts_tab.pda_contacts_tab.Method = ...`). */
  export const pda_contacts_tab: pda_contacts_tab
  /** Anomaly `class "ui_contact_row"` is also reachable on the `ui_pda_contacts_tab` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`ui_pda_contacts_tab.ui_contact_row.Method = ...`). */
  export const ui_contact_row: ui_contact_row
}
