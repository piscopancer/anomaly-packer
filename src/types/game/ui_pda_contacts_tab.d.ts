/** @noSelfInFile */

declare namespace ui_pda_contacts_tab {
  export function get_ui(): TODO
}

/** @customConstructor pda_contacts_tab */
declare class pda_contacts_tab extends CUIScriptWnd {
  constructor()
  InitControls(): void
  SaveCheckBoxSettings(): void
  Update(): void
  Reset(): void
}

/** @customConstructor ui_contact_row */
declare class ui_contact_row extends CUIListBoxItem {
  constructor(parent: TODO, row: TODO, xml: TODO)
}
