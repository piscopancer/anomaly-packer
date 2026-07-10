// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace ui_inventory {
  export const GUI: TODO
  export function change_last_mode(mode: TODO): TODO
  export function func_index(t: TODO, a: TODO, b: TODO): TODO
  export function hide_actor_menu(): TODO
  export function hide_inventory(): TODO
  export function is_enabled(): TODO
  export function keybind_pass(): TODO
  export function on_game_start(): TODO
  export function overrides(): TODO
  export function start(mode: TODO, obj: TODO): TODO
}

/** @customConstructor UIInventory */
declare class UIInventory extends CUIScriptWnd {
  constructor(arg0: TODO)
  __finalize(): TODO
  InitControls(): TODO
  InitCallbacks(): TODO
  Reset(obj: TODO): TODO
  ParseInventory(npc: TODO, all: TODO, id_list: TODO, ignore_kind: TODO): TODO
  ParseInventory_Companion(npc: TODO, id_list: TODO, ignore_kind: TODO): TODO
  IsMode(bag: TODO, mode: TODO, ...args: TODO[]): TODO
  Item_On_Mode(name: TODO, bag: TODO): TODO
  CheckItem(obj: TODO, msg: TODO): TODO
  GetPartner(): TODO
  ValidOwner(obj: TODO, state: TODO): TODO
  IsInvOwner(npc: TODO): TODO
  InitProperties(obj: TODO, bag: TODO): TODO
  Discard(): TODO
  Name_Equip(obj: TODO, bag: TODO): TODO
  Name_UnEquip(obj: TODO, bag: TODO): TODO
  Name_Attach(obj: TODO, bag: TODO, temp: TODO, slot: TODO): TODO
  Name_Move(obj: TODO, bag: TODO): TODO
  Name_Custom(obj: TODO, bag: TODO, temp: TODO, i: TODO): TODO
  Mode_Custom(obj: TODO, bag: TODO, temp: TODO, i: TODO): TODO
  Cont_Custom(obj: TODO, bag: TODO, temp: TODO, i: TODO): TODO
  DB_Custom(obj: TODO, bag: TODO, temp: TODO, i: TODO): TODO
  Cond_Childs(obj: TODO, bag: TODO): TODO
  Cond_Use(obj: TODO, bag: TODO): TODO
  Cond_Move(obj: TODO, bag: TODO, temp: TODO, bag_to: TODO): TODO
  Cond_Quest(obj: TODO, bag: TODO): TODO
  Cond_NotQuest(obj: TODO, bag: TODO): TODO
  Cond_Attach(obj: TODO, bag: TODO, temp: TODO, slot: TODO, wpn: TODO): TODO
  Cond_Equip(obj: TODO, bag: TODO): TODO
  Cond_Unload(obj: TODO, bag: TODO): TODO
  Cond_Detach_Silencer(obj: TODO, bag: TODO): TODO
  Cond_Detach_Scope(obj: TODO, bag: TODO): TODO
  Cond_Detach_GL(obj: TODO, bag: TODO): TODO
  Action_Use(obj: TODO, bag: TODO): TODO
  Action_Donate(obj: TODO, bag: TODO): TODO
  Action_Move(obj: TODO, bag: TODO): TODO
  Action_Move_All(obj: TODO, bag: TODO): TODO
  Action_UnEquip(obj: TODO, bag: TODO): TODO
  Action_Equip(obj: TODO, bag: TODO): TODO
  Action_Attach(obj: TODO, bag: TODO, temp: TODO, slot: TODO, wpn: TODO): TODO
  Action_Custom(obj: TODO, bag: TODO, temp: TODO, i: TODO): TODO
  Action_Detach_Silencer(obj: TODO, bag: TODO): TODO
  Action_Detach_Scope(obj: TODO, bag: TODO): TODO
  Action_Detach_GL(obj: TODO, bag: TODO): TODO
  Action_Unload(obj: TODO, bag: TODO): TODO
  Action_Drop(obj: TODO, bag: TODO): TODO
  Action_Drop_All(obj: TODO, bag: TODO): TODO
  UpdateInfo(go: TODO): TODO
  UpdateCharacter(): TODO
  UpdateWeight(): TODO
  UpdateInventories(): TODO
  UpdateItems(): TODO
  UpdateSlots(): TODO
  UpdateBelt(): TODO
  UpdateQuick(): TODO
  UpdateStats(): TODO
  On_Sort(ii: TODO, ignore: TODO): TODO
  Highlight(sec: TODO, bag_id: TODO): TODO
  UnHighlight_All(): TODO
  highlight_section_in_slot(sec: TODO, bag_id: TODO): TODO
  Picker_Refresh(): TODO
  Picker_Toggle(bag: TODO, idx: TODO, update_mode: TODO, force_hide: TODO): TODO
  Picker_Ownership(bag: TODO, idx: TODO, obj: TODO): TODO
  Picker_OwnerCell(cc: TODO): TODO
  Picker_IsFocused(): TODO
  Picker_Update(force_hide: TODO): TODO
  IMode_Init(): TODO
  IMode_ResetInventories(): TODO
  IMode_RefreshInventories(): TODO
  LMode_Init(obj: TODO): TODO
  LMode_ResetInventories(reset_only: TODO): TODO
  LMode_ResetNPCInventory(): TODO
  LMode_RefreshInventories(): TODO
  LMode_PutAll(): TODO
  LMode_TakeAll(): TODO
  LMode_TransferInfo(npc: TODO): TODO
  TMode_Init(npc: TODO): TODO
  TMode_ResetInventories(only_bags: TODO): TODO
  TMode_RefreshInventories(): TODO
  TMode_InitProfile(npc: TODO): TODO
  TMode_UpdatePrice(ele_txt: TODO, ele_btn: TODO, bag: TODO): TODO
  TMode_Sell(): TODO
  TMode_Buy(): TODO
  RMode_Init(npc: TODO): TODO
  RMode_InitElements(): TODO
  RMode_InitItem(obj: TODO, bag: TODO, idx: TODO): TODO
  RMode_InitItemIcon(obj: TODO): TODO
  RMode_OnUpgrade(row: TODO, col: TODO, ii: TODO): TODO
  RMode_UpgradeYes(): TODO
  RMode_EvaluateUpgr(row: TODO, col: TODO, ii: TODO, info: TODO): TODO
  RMode_EvaluateUpgrAll(): TODO
  RMode_OnRepair(): TODO
  RMode_RepairYes(): TODO
  actor_item_to_ruck(obj: TODO): TODO
  actor_item_to_slot(obj: TODO): TODO
  actor_item_to_belt(obj: TODO): TODO
  actor_on_item_drop(obj: TODO): TODO
  actor_on_item_use(obj: TODO): TODO
  actor_on_item_put_in_box(npc: TODO, obj: TODO): TODO
  actor_on_item_take_from_box(npc: TODO, obj: TODO): TODO
  npc_on_item_take(npc: TODO, obj: TODO): TODO
  npc_on_item_drop(npc: TODO, obj: TODO): TODO
  npc_on_use(obj: TODO, who: TODO): TODO
  physic_object_on_use_callback(obj: TODO, who: TODO): TODO
  actor_on_net_destroy(): TODO
  On_CC_DragDrop(bag_from: TODO, idx_from: TODO): TODO
  On_CC_Hover(bag: TODO, idx: TODO): TODO
  On_CC_Mouse1(bag: TODO, idx: TODO): TODO
  On_CC_Mouse1_DB(bag: TODO, idx: TODO): TODO
  On_CC_Mouse2(bag: TODO, idx: TODO): TODO
  On_CC_Add(bag: TODO, idx: TODO, on_area: TODO): TODO
  On_CC_Remove(bag: TODO, idx: TODO, on_area: TODO): TODO
  On_CC_Trasfer(bag_from: TODO, bag_to: TODO, idx_from: TODO, idx_to: TODO, obj: TODO): TODO
  On_Item_Exchange(npc_from: TODO, npc_to: TODO, obj: TODO): TODO
  On_Item_Update(): TODO
  PlaySND(snd: TODO, vol: TODO): TODO
  SetHint(text: TODO, pos: TODO): TODO
  Update(): TODO
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
  Close(): TODO
  Print(mark: TODO, fmt: TODO, ...args: TODO[]): TODO
}
