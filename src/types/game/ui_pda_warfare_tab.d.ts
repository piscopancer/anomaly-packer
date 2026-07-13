/** @noSelfInFile */

declare namespace ui_pda_warfare_tab {
  export function get_ui(): pda_warfare_tab
}

/** @customConstructor pda_warfare_tab */
declare class pda_warfare_tab extends CUIScriptWnd {
  constructor()
  __finalize(): void
  InitControls(): void
  Reset(): void
  Update(): void
  btn_map(): void
}
