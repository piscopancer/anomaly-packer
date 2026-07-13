/** @noSelfInFile */

declare namespace ui_mm_faction_select {
  export function on_game_start(): void
}

/** @customConstructor UINewGame */
declare class UINewGame extends CUIScriptWnd {
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
