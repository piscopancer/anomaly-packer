/** @noSelfInFile */

declare namespace ui_mm_faction_select {
  export function on_game_start(): void
}

/** @customConstructor UINewGame */
declare class UINewGame extends CUIScriptWnd {
  constructor(owner: TODO)
  __finalize(): void
  Main_Controls(): void
  Main_CallBacks(): void
  Update(): void
  PopupFaction_Controls(): void
  PopupFaction_Callbacks(): void
  PopupFaction_Show(state: TODO): void
  OnFactionSelect(faction: TODO): void
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
  PopupIcon_Show(state: TODO): void
  OnIconSelect(num: TODO): void
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
  LoadFaction(rand: TODO, faction: TODO): void
  LoadIcon(rand: TODO): void
  LoadMap(rand: TODO): void
  LoadLoadout(rand: TODO): void
  LoadDifficulty(rand: TODO): void
  LoadEconomy(rand: TODO): void
  LoadHardcoreLives(rand: TODO): void
  LoadHardcoreRegen(rand: TODO): void
  LoadTimer(rand: TODO): void
  OnFactionClicked(): void
  OnIconClicked(): void
  OnSelectMap(): void
  On_CC_Mouse1(cont: string, idx: TODO): void
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
  UpdateAll(rand: TODO, faction: TODO): void
  UpdateFaction(): void
  UpdateIcon(): void
  UpdateMap(): void
  UpdateMoney(): void
  UpdateDescr(): void
  GetAxis_Icon(main: TODO, element: TODO, all_row: TODO, all_col: TODO, row: TODO, col: TODO): TODO
  OnQuit(): void
  OnRandomize(): void
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
  OnStartGame(): void
}
