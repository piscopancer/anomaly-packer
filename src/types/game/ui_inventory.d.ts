/** @noSelfInFile */

declare namespace ui_inventory {
  export const GUI: UIInventory | undefined
  export function change_last_mode(mode: number): void
  export function func_index(t: AnyTable, a: number, b: number): boolean
  export function hide_actor_menu(): boolean
  export function hide_inventory(): void
  export function is_enabled(): boolean
  export function keybind_pass(): boolean
  export function on_game_start(): void
  export function overrides(): void
  export function start(mode: string, obj?: CGameObject): void
}

/** @customConstructor UIInventory */
declare class UIInventory extends CUIScriptWnd {
  CC: TODO // @generated field — refine type
  bag_id: TODO // @generated field — refine type
  blocker_arty: TODO // @generated field — refine type
  blocker_bkpk: TODO // @generated field — refine type
  blocker_helm: TODO // @generated field — refine type
  boost_id: TODO // @generated field — refine type
  boost_id_inv: TODO // @generated field — refine type
  box_init_update: TODO // @generated field — refine type
  equ_background: TODO // @generated field — refine type
  equ_dialog: TODO // @generated field — refine type
  flags: TODO // @generated field — refine type
  found_cell: TODO // @generated field — refine type
  hint_wnd: TODO // @generated field — refine type
  hint_wnd_text: TODO // @generated field — refine type
  holding_ctrl: boolean // @generated field — refine type
  holding_shift: boolean // @generated field — refine type
  hover: TODO // @generated field — refine type
  item_info: TODO // @generated field — refine type
  item_props: TODO // @generated field — refine type
  message_box: TODO // @generated field — refine type
  message_box_up: TODO // @generated field — refine type
  mode: TODO // @generated field — refine type
  npc_background: TODO // @generated field — refine type
  npc_community: TODO // @generated field — refine type
  npc_dialog: TODO // @generated field — refine type
  npc_icon: TODO // @generated field — refine type
  npc_id: TODO // @generated field — refine type
  npc_is_box: TODO // @generated field — refine type
  npc_is_companion: TODO // @generated field — refine type
  npc_is_not_npc: TODO // @generated field — refine type
  npc_money: TODO // @generated field — refine type
  npc_name: TODO // @generated field — refine type
  npc_takeall: TODO // @generated field — refine type
  npc_trade: TODO // @generated field — refine type
  npc_trade_buy: TODO // @generated field — refine type
  npc_trade_cap: TODO // @generated field — refine type
  npc_trade_price: TODO // @generated field — refine type
  npc_trade_weight: TODO // @generated field — refine type
  npc_up_background: TODO // @generated field — refine type
  npc_up_community: TODO // @generated field — refine type
  npc_up_dialog: TODO // @generated field — refine type
  npc_up_icon: TODO // @generated field — refine type
  npc_up_item: TODO // @generated field — refine type
  npc_up_money: TODO // @generated field — refine type
  npc_up_name: TODO // @generated field — refine type
  npc_up_repair: TODO // @generated field — refine type
  npc_up_scheme: TODO // @generated field — refine type
  npc_weight: TODO // @generated field — refine type
  npc_weight_cap: TODO // @generated field — refine type
  npc_weight_max: TODO // @generated field — refine type
  player_background: TODO // @generated field — refine type
  player_community: TODO // @generated field — refine type
  player_dialog: TODO // @generated field — refine type
  player_icon: TODO // @generated field — refine type
  player_money: TODO // @generated field — refine type
  player_name: TODO // @generated field — refine type
  player_putall: TODO // @generated field — refine type
  player_trade: TODO // @generated field — refine type
  player_trade_cap: TODO // @generated field — refine type
  player_trade_price: TODO // @generated field — refine type
  player_trade_sell: TODO // @generated field — refine type
  player_trade_weight: TODO // @generated field — refine type
  player_weight: TODO // @generated field — refine type
  player_weight_cap: TODO // @generated field — refine type
  player_weight_max: TODO // @generated field — refine type
  possible_kind: TODO // @generated field — refine type
  properties: TODO // @generated field — refine type
  quick_txt: TODO // @generated field — refine type
  slot_cell: TODO // @generated field — refine type
  slot_hl: TODO // @generated field — refine type
  sort_btn: TODO // @generated field — refine type
  sort_dialog: TODO // @generated field — refine type
  sort_num: TODO // @generated field — refine type
  stat: TODO // @generated field — refine type
  stat_arty: TODO // @generated field — refine type
  stat_boost: TODO // @generated field — refine type
  stat_helm: TODO // @generated field — refine type
  stat_list: TODO // @generated field — refine type
  stat_outfit: TODO // @generated field — refine type
  stats_dialog: TODO // @generated field — refine type
  tg_hint: TODO // @generated field — refine type
  tg_hint_step: number // @generated field — refine type
  tg_info: TODO // @generated field — refine type
  tg_info_step: number // @generated field — refine type
  tg_inv: TODO // @generated field — refine type
  tg_inv_step: number // @generated field — refine type
  tg_m1: TODO // @generated field — refine type
  tg_play: TODO // @generated field — refine type
  tg_stats: TODO // @generated field — refine type
  tg_stats_step: number // @generated field — refine type
  trash: TODO // @generated field — refine type
  update_bags: TODO // @generated field — refine type
  update_info: boolean // @generated field — refine type
  update_inv: boolean // @generated field — refine type
  update_items: TODO // @generated field — refine type
  upgr: TODO // @generated field — refine type
  upgr_info: TODO // @generated field — refine type
  upgr_installed: TODO // @generated field — refine type
  upgr_last_col: TODO // @generated field — refine type
  upgr_last_ii: TODO // @generated field — refine type
  upgr_last_row: TODO // @generated field — refine type
  upgr_order: TODO // @generated field — refine type
  upgr_tree: TODO // @generated field — refine type
  upx: TODO // @generated field — refine type
  xml: TODO // @generated field — refine type
  constructor()
  __finalize(): void
  InitControls(): void
  InitCallbacks(): void
  Reset(obj: CGameObject): void
  ParseInventory(npc: CGameObject, all?: boolean, id_list?: boolean, ignore_kind?: boolean): Record<number, CGameObject>
  ParseInventory_Companion(npc: CGameObject, id_list?: boolean, ignore_kind?: boolean): Record<number, CGameObject>
  IsMode(bag: string, mode: string | undefined, ...args: string[]): boolean
  Item_On_Mode(name: string, bag: string): boolean
  CheckItem(obj: CGameObject | number, msg: string): CGameObject | undefined
  GetPartner(): CGameObject | undefined
  ValidOwner(obj: CGameObject, state?: boolean): boolean
  IsInvOwner(npc: CGameObject): boolean
  InitProperties(obj: CGameObject, bag: string): void
  Discard(): void
  Name_Equip(obj: CGameObject, bag: string): string
  Name_UnEquip(obj: CGameObject, bag: string): string
  Name_Attach(obj: CGameObject, bag: string, temp?: boolean, slot?: number): string
  Name_Move(obj: CGameObject, bag: string): string
  Name_Custom(obj: CGameObject, bag: string, temp: boolean, i: number): boolean
  Mode_Custom(obj: CGameObject, bag: string, temp: boolean, i: number): boolean
  Cont_Custom(obj: CGameObject, bag: string, temp: boolean, i: number): boolean
  DB_Custom(obj: CGameObject, bag: string, temp: boolean, i: number): string
  Cond_Childs(obj: CGameObject, bag: string): boolean
  Cond_Use(obj: CGameObject, bag: string): boolean
  Cond_Move(obj: CGameObject, bag: string, temp?: boolean, bag_to?: string): boolean
  Cond_Quest(obj: CGameObject, bag: string): boolean
  Cond_NotQuest(obj: CGameObject, bag: string): boolean
  Cond_Attach(obj: CGameObject, bag: string, temp?: boolean, slot?: number, wpn?: CGameObject): boolean
  Cond_Equip(obj: CGameObject, bag: string): boolean
  Cond_Unload(obj: CGameObject, bag: string): boolean
  Cond_Detach_Silencer(obj: CGameObject, bag: string): boolean
  Cond_Detach_Scope(obj: CGameObject, bag: string): boolean
  Cond_Detach_GL(obj: CGameObject, bag: string): boolean
  Action_Use(obj: CGameObject, bag: string): void
  Action_Donate(obj: CGameObject, bag: string): void
  Action_Move(obj: CGameObject, bag: string): void
  Action_Move_All(obj: CGameObject, bag: string): void
  Action_UnEquip(obj: CGameObject, bag: string): void
  Action_Equip(obj: CGameObject, bag: string): void
  Action_Attach(obj: CGameObject, bag: string, temp?: boolean, slot?: number, wpn?: CGameObject): void
  Action_Custom(obj: CGameObject, bag: string, temp: boolean, i: number): void
  Action_Detach_Silencer(obj: CGameObject, bag: string): void
  Action_Detach_Scope(obj: CGameObject, bag: string): void
  Action_Detach_GL(obj: CGameObject, bag: string): void
  Action_Unload(obj: CGameObject, bag: string): void
  Action_Drop(obj: CGameObject, bag: string): void
  Action_Drop_All(obj: CGameObject, bag: string): void
  /** @param go a game object, or `true` to update instantly */
  UpdateInfo(go?: CGameObject | boolean): void
  UpdateCharacter(): void
  UpdateWeight(): void
  UpdateInventories(): void
  UpdateItems(): void
  UpdateSlots(): void
  UpdateBelt(): void
  UpdateQuick(): void
  UpdateStats(): void
  On_Sort(ii: number, ignore?: boolean): void
  Highlight(sec: Section, bag_id: string): void
  UnHighlight_All(): void
  highlight_section_in_slot(sec: Section, bag_id: string): void
  Picker_Refresh(): void
  Picker_Toggle(bag: string | undefined, idx?: number, update_mode?: boolean, force_hide?: boolean): void
  Picker_Ownership(bag: string, idx: number, obj?: CGameObject): LuaMultiReturn<[string, number]>
  Picker_OwnerCell(cc?: UICellContainer): UICellItem | undefined
  Picker_IsFocused(): boolean
  Picker_Update(force_hide?: boolean): boolean
  IMode_Init(): void
  IMode_ResetInventories(): void
  IMode_RefreshInventories(): void
  LMode_Init(obj: CGameObject): void
  LMode_ResetInventories(reset_only?: boolean): void
  LMode_ResetNPCInventory(): void
  LMode_RefreshInventories(): void
  LMode_PutAll(): void
  LMode_TakeAll(): void
  LMode_TransferInfo(npc: CGameObject): void
  TMode_Init(npc: CGameObject): void
  TMode_ResetInventories(only_bags?: boolean): void
  TMode_RefreshInventories(): void
  TMode_InitProfile(npc: CGameObject): void
  TMode_UpdatePrice(ele_txt: CUITextWnd, ele_btn: CUI3tButton, bag: string): void
  TMode_Sell(): void
  TMode_Buy(): void
  RMode_Init(npc: CGameObject): void
  RMode_InitElements(): void
  RMode_InitItem(obj: CGameObject, bag: string, idx: number): void
  RMode_InitItemIcon(obj: CGameObject): void
  RMode_OnUpgrade(row: number, col: number, ii: UICellItem): void
  RMode_UpgradeYes(): void
  RMode_EvaluateUpgr(row: number, col: number, ii: UICellItem, info?: AnyTable): void
  RMode_EvaluateUpgrAll(): void
  RMode_OnRepair(): void
  RMode_RepairYes(): void
  actor_item_to_ruck(obj: CGameObject): void
  actor_item_to_slot(obj: CGameObject): void
  actor_item_to_belt(obj: CGameObject): void
  actor_on_item_drop(obj: CGameObject): void
  actor_on_item_use(obj: CGameObject): void
  actor_on_item_put_in_box(npc: CGameObject, obj: CGameObject): void
  actor_on_item_take_from_box(npc: CGameObject, obj: CGameObject): void
  npc_on_item_take(npc: CGameObject, obj: CGameObject): void
  npc_on_item_drop(npc: CGameObject, obj: CGameObject): void
  npc_on_use(obj: CGameObject, who: CGameObject): void
  physic_object_on_use_callback(obj: CGameObject, who: CGameObject): void
  actor_on_net_destroy(): void
  On_CC_DragDrop(bag_from: string, idx_from: number): void
  On_CC_Hover(bag: string, idx: number): void
  On_CC_Mouse1(bag: string, idx: number): void
  On_CC_Mouse1_DB(bag: string, idx: number): boolean
  On_CC_Mouse2(bag: string, idx: number): void
  On_CC_Add(bag: string, idx: number, on_area: boolean): void
  On_CC_Remove(bag: string, idx: number, on_area: boolean): void
  On_CC_Trasfer(bag_from: string, bag_to: string, idx_from: number, idx_to: number, obj: CGameObject | string): void
  On_Item_Exchange(npc_from: CGameObject, npc_to: CGameObject, obj: CGameObject): void
  On_Item_Update(): void
  PlaySND(snd: sound_object, vol?: number): void
  SetHint(text: string, pos?: vector2): void
  Update(): void
  OnKeyboard(dik: number, keyboard_action: number): boolean
  Close(): void
  Print(mark: string | undefined, fmt: string, ...args: unknown[]): void
}

declare namespace ui_inventory {
  /** Anomaly `class "UIInventory"` is also reachable on the `ui_inventory` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`ui_inventory.UIInventory.Method = ...`). */
  export const UIInventory: UIInventory
}
