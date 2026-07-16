/** @noSelfInFile */

declare namespace ui_mm_faction_select {
  export function on_game_start(): void
}

/** @customConstructor UINewGame */
declare class UINewGame extends CUIScriptWnd {
  CC: TODO // @generated field — refine type
  access: boolean // @generated field — refine type
  black_1: TODO // @generated field — refine type
  black_2: TODO // @generated field — refine type
  box_faction: TODO // @generated field — refine type
  box_icon: TODO // @generated field — refine type
  box_item: TODO // @generated field — refine type
  box_item_temp: TODO // @generated field — refine type
  box_map: TODO // @generated field — refine type
  btn_faction: TODO // @generated field — refine type
  btn_icon: TODO // @generated field — refine type
  cap_faction: TODO // @generated field — refine type
  cap_icon: TODO // @generated field — refine type
  character_name: TODO // @generated field — refine type
  ck_azazel_mode: TODO // @generated field — refine type
  ck_azazel_mode_cap: TODO // @generated field — refine type
  ck_campfire: TODO // @generated field — refine type
  ck_campfire_cap: TODO // @generated field — refine type
  ck_conditions: TODO // @generated field — refine type
  ck_conditions_cap: TODO // @generated field — refine type
  ck_hardcore: TODO // @generated field — refine type
  ck_hardcore_cap: TODO // @generated field — refine type
  ck_reset: TODO // @generated field — refine type
  ck_routes: TODO // @generated field — refine type
  ck_routes_cap: TODO // @generated field — refine type
  ck_states: TODO // @generated field — refine type
  ck_story: TODO // @generated field — refine type
  ck_story_cap: TODO // @generated field — refine type
  ck_survival: TODO // @generated field — refine type
  ck_survival_cap: TODO // @generated field — refine type
  ck_warfare: TODO // @generated field — refine type
  ck_warfare_cap: TODO // @generated field — refine type
  dialog: TODO // @generated field — refine type
  dialog_1: TODO // @generated field — refine type
  dialog_2: TODO // @generated field — refine type
  faction_cell: TODO // @generated field — refine type
  hint_wnd: TODO // @generated field — refine type
  ini_ico: TODO // @generated field — refine type
  ini_opt: TODO // @generated field — refine type
  item_info: TODO // @generated field — refine type
  list_difficulty: TODO // @generated field — refine type
  list_difficulty_cap: TODO // @generated field — refine type
  list_economy: TODO // @generated field — refine type
  list_economy_cap: TODO // @generated field — refine type
  list_hardcore_lives: TODO // @generated field — refine type
  list_hardcore_lives_cap: TODO // @generated field — refine type
  list_hardcore_regen: TODO // @generated field — refine type
  list_hardcore_regen_cap: TODO // @generated field — refine type
  list_map: TODO // @generated field — refine type
  list_timer: TODO // @generated field — refine type
  list_timer_cap: TODO // @generated field — refine type
  main_frame: TODO // @generated field — refine type
  owner: TODO // @generated field — refine type
  points_left: TODO // @generated field — refine type
  points_used: TODO // @generated field — refine type
  scroll_desc: TODO // @generated field — refine type
  scroll_faction: TODO // @generated field — refine type
  scroll_icon: TODO // @generated field — refine type
  scroll_options: TODO // @generated field — refine type
  selected_difficulty: TODO // @generated field — refine type
  selected_economy: TODO // @generated field — refine type
  selected_faction: TODO // @generated field — refine type
  selected_hardcore_lives: TODO // @generated field — refine type
  selected_hardcore_regen: TODO // @generated field — refine type
  selected_icon: TODO // @generated field — refine type
  selected_map: TODO // @generated field — refine type
  selected_money: TODO // @generated field — refine type
  selected_timer: TODO // @generated field — refine type
  table_difficulty: TODO // @generated field — refine type
  table_economy: TODO // @generated field — refine type
  table_faction: TODO // @generated field — refine type
  table_hardcore_lives: TODO // @generated field — refine type
  table_hardcore_regen: TODO // @generated field — refine type
  table_icon: TODO // @generated field — refine type
  table_map: TODO // @generated field — refine type
  table_timer: TODO // @generated field — refine type
  temp_icon: TODO // @generated field — refine type
  templ_options: TODO // @generated field — refine type
  tempy_icon: TODO // @generated field — refine type
  text_descr: TODO // @generated field — refine type
  text_money: TODO // @generated field — refine type
  text_points_left: TODO // @generated field — refine type
  text_points_used: TODO // @generated field — refine type
  text_relations: TODO // @generated field — refine type
  xml: TODO // @generated field — refine type
  constructor(owner: CGameObject)
  __finalize(): void
  Main_Controls(): void
  Main_CallBacks(): void
  Update(): void
  PopupFaction_Controls(): void
  PopupFaction_Callbacks(): void
  PopupFaction_Show(state: string): void
  OnFactionSelect(faction: Community): void
  OnFaction_stalker(): void
  OnFaction_bandit(): void
  OnFaction_csky(): void
  OnFaction_dolg(): void
  OnFaction_freedom(): void
  OnFaction_killer(): void
  OnFaction_army(): void
  OnFaction_ecolog(): void
  OnFaction_monolith(): void
  OnFaction_renegade(): void
  OnFaction_greh(): void
  OnFaction_isg(): void
  OnFaction_zombied(): void
  PopupIcon_Controls(): void
  PopupIcon_Callbacks(): void
  PopupIcon_Show(state: string): void
  OnIconSelect(num: number): void
  OnIcon_1(): void
  OnIcon_2(): void
  OnIcon_3(): void
  OnIcon_4(): void
  OnIcon_5(): void
  OnIcon_6(): void
  OnIcon_7(): void
  OnIcon_8(): void
  OnIcon_9(): void
  OnIcon_10(): void
  OnIcon_11(): void
  OnIcon_12(): void
  OnIcon_13(): void
  OnIcon_14(): void
  OnIcon_15(): void
  OnIcon_16(): void
  OnIcon_17(): void
  OnIcon_18(): void
  OnIcon_19(): void
  OnIcon_20(): void
  OnIcon_21(): void
  OnIcon_22(): void
  OnIcon_23(): void
  OnIcon_24(): void
  OnIcon_25(): void
  OnIcon_26(): void
  OnIcon_27(): void
  OnIcon_28(): void
  OnIcon_29(): void
  OnIcon_30(): void
  OnIcon_31(): void
  OnIcon_32(): void
  OnIcon_33(): void
  OnIcon_34(): void
  OnIcon_35(): void
  OnIcon_36(): void
  OnIcon_37(): void
  OnIcon_38(): void
  OnIcon_39(): void
  OnIcon_40(): void
  OnIcon_41(): void
  OnIcon_42(): void
  OnIcon_43(): void
  OnIcon_44(): void
  OnIcon_45(): void
  OnIcon_46(): void
  OnIcon_47(): void
  OnIcon_48(): void
  OnIcon_49(): void
  OnIcon_50(): void
  LoadFaction(rand: boolean, faction: Community): void
  LoadIcon(rand: boolean): void
  LoadMap(rand: boolean): void
  LoadLoadout(rand: boolean): void
  LoadDifficulty(rand: boolean): void
  LoadEconomy(rand: boolean): void
  LoadHardcoreLives(rand: boolean): void
  LoadHardcoreRegen(rand: boolean): void
  LoadTimer(rand: boolean): void
  OnFactionClicked(): void
  OnIconClicked(): void
  OnSelectMap(): void
  On_CC_Mouse1(cont: string, idx: number): void
  OnSelectDifficulty(): void
  OnSelectEconomy(): void
  OnSelectHardcoreLives(): void
  OnSelectHardcoreRegen(): void
  OnSelectTimer(): void
  OnCheckSetStory(): void
  OnCheckSetAzazel(): void
  OnCheckSetWarfare(): void
  OnCheckSetSurvival(): void
  OnCheckResetList(): void
  UpdateAll(rand: boolean, faction: Community): void
  UpdateFaction(): void
  UpdateIcon(): void
  UpdateMap(): void
  UpdateMoney(): void
  UpdateDescr(): void
  GetAxis_Icon(main: AnyTable, element: AnyTable, all_row: number, all_col: number, row: number, col: number): number
  OnQuit(): void
  OnRandomize(): void
  OnKeyboard(dik: number, keyboard_action: number): boolean
  OnStartGame(): void
}

declare namespace ui_mm_faction_select {
  /** Anomaly `class "UINewGame"` is also reachable on the `ui_mm_faction_select` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`ui_mm_faction_select.UINewGame.Method = ...`). */
  export const UINewGame: UINewGame
}
