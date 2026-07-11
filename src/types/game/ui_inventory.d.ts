/** @noSelfInFile */

declare namespace ui_inventory {
  export const GUI: TODO
  export function change_last_mode(mode: TODO): void
  export function func_index(t: TODO, a: TODO, b: TODO): TODO
  export function hide_actor_menu(): boolean
  export function hide_inventory(): void
  export function is_enabled(): TODO
  export function keybind_pass(): boolean
  export function on_game_start(): void
  export function overrides(): TODO
  export function start(mode: TODO, obj: TODO): void
}

/** @customConstructor UIInventory */
declare class UIInventory extends CUIScriptWnd {
  constructor()
  __finalize(): void
  InitControls(): void
  InitCallbacks(): void
  Reset(obj: CGameObject): void
  ParseInventory(npc: CGameObject, all: TODO, id_list: TODO, ignore_kind: TODO): TODO
  ParseInventory_Companion(npc: CGameObject, id_list: TODO, ignore_kind: TODO): TODO
  IsMode(bag: TODO, mode: TODO, ...args: TODO[]): boolean
  Item_On_Mode(name: TODO, bag: TODO): TODO
  CheckItem(obj: TODO, msg: TODO): TODO
  GetPartner(): TODO
  ValidOwner(obj: TODO, state: TODO): boolean
  IsInvOwner(npc: TODO): TODO
  InitProperties(obj: TODO, bag: TODO): void
  Discard(): void
  Name_Equip(obj: TODO, bag: TODO): TODO
  Name_UnEquip(obj: TODO, bag: TODO): TODO
  Name_Attach(obj: TODO, bag: TODO, temp: TODO, slot: TODO): TODO
  Name_Move(obj: TODO, bag: TODO): TODO
  Name_Custom(obj: TODO, bag: TODO, temp: TODO, i: TODO): boolean
  Mode_Custom(obj: TODO, bag: TODO, temp: TODO, i: TODO): boolean
  Cont_Custom(obj: TODO, bag: TODO, temp: TODO, i: TODO): boolean
  DB_Custom(obj: TODO, bag: TODO, temp: TODO, i: TODO): TODO
  Cond_Childs(obj: TODO, bag: TODO): TODO
  Cond_Use(obj: TODO, bag: TODO): TODO
  Cond_Move(obj: TODO, bag: TODO, temp: TODO, bag_to: TODO): boolean
  Cond_Quest(obj: TODO, bag: TODO): TODO
  Cond_NotQuest(obj: TODO, bag: TODO): TODO
  Cond_Attach(obj: TODO, bag: TODO, temp: TODO, slot: TODO, wpn: TODO): boolean
  Cond_Equip(obj: TODO, bag: TODO): boolean
  Cond_Unload(obj: TODO, bag: TODO): boolean
  Cond_Detach_Silencer(obj: TODO, bag: TODO): TODO
  Cond_Detach_Scope(obj: TODO, bag: TODO): TODO
  Cond_Detach_GL(obj: TODO, bag: TODO): TODO
  Action_Use(obj: TODO, bag: TODO): void
  Action_Donate(obj: TODO, bag: TODO): void
  Action_Move(obj: TODO, bag: TODO): TODO
  Action_Move_All(obj: TODO, bag: TODO): void
  Action_UnEquip(obj: TODO, bag: TODO): void
  Action_Equip(obj: TODO, bag: TODO): void
  Action_Attach(obj: TODO, bag: TODO, temp: TODO, slot: TODO, wpn: TODO): void
  Action_Custom(obj: TODO, bag: TODO, temp: TODO, i: TODO): void
  Action_Detach_Silencer(obj: TODO, bag: TODO): void
  Action_Detach_Scope(obj: TODO, bag: TODO): void
  Action_Detach_GL(obj: TODO, bag: TODO): void
  Action_Unload(obj: TODO, bag: TODO): void
  Action_Drop(obj: TODO, bag: TODO): void
  Action_Drop_All(obj: TODO, bag: TODO): void
  UpdateInfo(go: TODO): void
  UpdateCharacter(): void
  UpdateWeight(): void
  UpdateInventories(): void
  UpdateItems(): void
  UpdateSlots(): void
  UpdateBelt(): void
  UpdateQuick(): void
  UpdateStats(): void
  On_Sort(ii: TODO, ignore: TODO): void
  Highlight(sec: TODO, bag_id: TODO): void
  UnHighlight_All(): void
  highlight_section_in_slot(sec: TODO, bag_id: TODO): void
  Picker_Refresh(): void
  Picker_Toggle(bag: TODO, idx: TODO, update_mode: TODO, force_hide: TODO): void
  Picker_Ownership(bag: TODO, idx: TODO, obj: TODO): TODO
  Picker_OwnerCell(cc: TODO): TODO
  Picker_IsFocused(): boolean
  Picker_Update(force_hide: TODO): boolean
  IMode_Init(): void
  IMode_ResetInventories(): void
  IMode_RefreshInventories(): void
  LMode_Init(obj: TODO): void
  LMode_ResetInventories(reset_only: TODO): void
  LMode_ResetNPCInventory(): void
  LMode_RefreshInventories(): void
  LMode_PutAll(): void
  LMode_TakeAll(): void
  LMode_TransferInfo(npc: CGameObject): void
  TMode_Init(npc: TODO): void
  TMode_ResetInventories(only_bags: TODO): void
  TMode_RefreshInventories(): void
  TMode_InitProfile(npc: TODO): void
  TMode_UpdatePrice(ele_txt: TODO, ele_btn: TODO, bag: TODO): void
  TMode_Sell(): void
  TMode_Buy(): void
  RMode_Init(npc: TODO): void
  RMode_InitElements(): void
  RMode_InitItem(obj: TODO, bag: TODO, idx: TODO): void
  RMode_InitItemIcon(obj: TODO): void
  RMode_OnUpgrade(row: TODO, col: TODO, ii: TODO): void
  RMode_UpgradeYes(): void
  RMode_EvaluateUpgr(row: TODO, col: TODO, ii: TODO, info: TODO): void
  RMode_EvaluateUpgrAll(): void
  RMode_OnRepair(): void
  RMode_RepairYes(): void
  actor_item_to_ruck(obj: TODO): void
  actor_item_to_slot(obj: TODO): void
  actor_item_to_belt(obj: TODO): void
  actor_on_item_drop(obj: TODO): void
  actor_on_item_use(obj: TODO): void
  actor_on_item_put_in_box(npc: TODO, obj: TODO): void
  actor_on_item_take_from_box(npc: TODO, obj: TODO): void
  npc_on_item_take(npc: TODO, obj: TODO): void
  npc_on_item_drop(npc: TODO, obj: TODO): void
  npc_on_use(obj: TODO, who: TODO): void
  physic_object_on_use_callback(obj: TODO, who: TODO): void
  actor_on_net_destroy(): void
  On_CC_DragDrop(bag_from: TODO, idx_from: TODO): void
  On_CC_Hover(bag: TODO, idx: TODO): void
  On_CC_Mouse1(bag: TODO, idx: TODO): void
  On_CC_Mouse1_DB(bag: TODO, idx: TODO): boolean
  On_CC_Mouse2(bag: TODO, idx: TODO): void
  On_CC_Add(bag: TODO, idx: TODO, on_area: TODO): void
  On_CC_Remove(bag: TODO, idx: TODO, on_area: TODO): void
  On_CC_Trasfer(bag_from: TODO, bag_to: TODO, idx_from: TODO, idx_to: TODO, obj: TODO): void
  On_Item_Exchange(npc_from: TODO, npc_to: TODO, obj: TODO): void
  On_Item_Update(): void
  PlaySND(snd: TODO, vol: TODO): void
  SetHint(text: TODO, pos: TODO): void
  Update(): void
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
  Close(): void
  Print(mark: TODO, fmt: TODO, ...args: TODO[]): void
}
