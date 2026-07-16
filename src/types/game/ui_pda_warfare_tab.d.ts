/** @noSelfInFile */

declare namespace ui_pda_warfare_tab {
  export function get_ui(): pda_warfare_tab
}

/** @customConstructor pda_warfare_tab */
declare class pda_warfare_tab extends CUIScriptWnd {
  btn: TODO // @generated field — refine type
  curr_map: TODO // @generated field — refine type
  faction_icon: TODO // @generated field — refine type
  faction_name: TODO // @generated field — refine type
  faction_smarts: TODO // @generated field — refine type
  faction_smarts_lvl: TODO // @generated field — refine type
  faction_smarts_lvls: TODO // @generated field — refine type
  faction_squads: TODO // @generated field — refine type
  faction_squads_lvl: TODO // @generated field — refine type
  hint_wnd: TODO // @generated field — refine type
  progress_dominance: TODO // @generated field — refine type
  scroll: TODO // @generated field — refine type
  tot_smarts: TODO // @generated field — refine type
  tot_smarts_lvl: TODO // @generated field — refine type
  txt_captured_smarts: TODO // @generated field — refine type
  txt_major_territory: TODO // @generated field — refine type
  txt_order: TODO // @generated field — refine type
  txt_squads: TODO // @generated field — refine type
  xml: TODO // @generated field — refine type
  constructor()
  __finalize(): void
  InitControls(): void
  Reset(): void
  Update(): void
  btn_map(): void
}

declare namespace ui_pda_warfare_tab {
  /** Anomaly `class "pda_warfare_tab"` is also reachable on the `ui_pda_warfare_tab` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`ui_pda_warfare_tab.pda_warfare_tab.Method = ...`). */
  export const pda_warfare_tab: pda_warfare_tab
}
