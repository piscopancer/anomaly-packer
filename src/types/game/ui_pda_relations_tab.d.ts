/** @noSelfInFile */

declare namespace ui_pda_relations_tab {
  export function get_ui(): pda_relations_tab
}

/** @customConstructor pda_relations_tab */
declare class pda_relations_tab extends CUIScriptWnd {
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
