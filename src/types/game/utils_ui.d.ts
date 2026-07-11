/** @noSelfInFile */

declare namespace utils_ui {
  export const stats_table: TODO
  export function add_stats_table(k1: TODO, k2: TODO, v: TODO): void
  export function get_stats_func_value(obj: TODO, sec: TODO, file: TODO, func: TODO, ...args: TODO[]): TODO
  export function get_stats_string_value(obj: TODO, sec: TODO, gr: TODO, stat: TODO, to_text: TODO): string
  export function get_stats_table(sec: TODO): TODO
  export function get_stats_value(obj: TODO, sec: TODO, gr: TODO, stat: TODO): number
  export function get_stats_xml(handler: TODO, obj: TODO, sec: TODO, gr: TODO, stat: TODO): TODO
  export function get_time(): number
  export function get_utils_xml(): TODO
  export function main_menu_off(): void
  export function main_menu_on(): void
  export function on_game_start(): void
  export function prepare_stats_table(): void
  export function prop_accuracry(obj: TODO, sec: TODO): number
  export function prop_condition(obj: TODO, sec: TODO): number
  export function prop_damage(obj: TODO, sec: TODO): number
  export function prop_handling(obj: TODO, sec: TODO): number
  export function prop_rpm(obj: TODO, sec: TODO): number
  export function set_item_order(): void
  export function sort_by_index(t: TODO, a: TODO, b: TODO): boolean
  export function sort_by_kind(t: TODO, a: TODO, b: TODO): boolean
  export function sort_by_props(t: TODO, a: TODO, b: TODO): boolean
  export function sort_by_size(t: TODO, a: TODO, b: TODO): boolean
  export function sort_by_sizekind(t: TODO, a: TODO, b: TODO): boolean
  export function sort_info(asec: TODO, bsec: TODO): boolean
}

/** @customConstructor UICellContainer */
declare class UICellContainer {
  constructor(id: TODO, owner: TODO, path: TODO, prof: TODO, ele_base: TODO, manual: TODO, use_frame: TODO)
  InitControls(owner: TODO, prof: TODO, ele_base: TODO): TODO
  Reinit(t: TODO, tf: TODO): TODO
  AddIndex(id: TODO, sec: TODO, indx: TODO): TODO
  RemoveIndex(id: TODO, sec: TODO, indx: TODO): TODO
  GetCell_ID(id: TODO, only_indx: TODO): TODO
  GetCell_SEC(sec: TODO): TODO
  GetCell_Selected(only_obj: TODO): TODO
  GetCell_Focused(only_cell: TODO): TODO
  GetObj(idx: TODO): TODO
  GetID(obj: TODO, sec: TODO, create: TODO): TODO
  AddItemInCell(obj: TODO, sec: TODO, indx: TODO, area: TODO): TODO
  AddItem(obj: TODO, sec: TODO, info: TODO): TODO
  AddItemManual(obj: TODO, sec: TODO, indx: TODO): TODO
  RemoveItem(obj: TODO, sec: TODO): TODO
  RemoveItem_byID(id: TODO): TODO
  RemoveItemManual(indx: TODO): TODO
  TransferItem(cont_to: TODO, obj: TODO, sec: TODO): TODO
  UpdateItem(obj: TODO, sec: TODO): TODO
  FindFreeCell(obj: TODO, sec: TODO): TODO
  IsFreeRoom(r: TODO, c: TODO, w: TODO, h: TODO): TODO
  TakeRoom(r: TODO, c: TODO, w: TODO, h: TODO): TODO
  FreeRoom(r: TODO, c: TODO, w: TODO, h: TODO): TODO
  FindSimilar(obj: TODO, sec: TODO): TODO
  Grow(): TODO
  IsTradable(obj: TODO): TODO
  GetCellCost(ci: TODO): TODO
  On_Select(idx: TODO): TODO
  On_Drag(idx: TODO, tg: TODO, set: TODO): TODO
  On_Hover(idx: TODO): TODO
  On_Mouse1(idx: TODO): TODO
  On_Mouse1_DB(idx: TODO): TODO
  On_Mouse2(idx: TODO): TODO
  On_Scroll(): TODO
  Update(item_info: TODO, no_info: TODO, hide: TODO): TODO
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
  Callback(func: TODO, ...args: TODO[]): TODO
  Reset(): TODO
  IsCellVisible(ci: TODO): TODO
  Scroll_Reinit(keep_pos: TODO): TODO
  Scroll_SetPos(Y: TODO, force: TODO): TODO
  Scroll_GetHeight(num: TODO, ele: TODO): TODO
  Scroll_DragDrop_Ctrl(): TODO
  Scroll_Pad_Ctrl(update: TODO): TODO
  GetSortMethod(): TODO
  AdjustWnd(x: TODO, y: TODO, w: TODO, h: TODO): TODO
  AdjustHeightToCell(): TODO
  AdjustWidthToCell(): TODO
  SetBackground(path: TODO, clr: TODO): TODO
  SetGridSpecs(size: TODO, line: TODO): TODO
  Show(state: TODO): TODO
  IsShown(): TODO
  EnableScrolling(state: TODO): TODO
  IsCursorOverWindow(): TODO
  Print(mark: TODO, fmt: TODO, ...args: TODO[]): TODO
}

/** @customConstructor UICellItem */
declare class UICellItem {
  constructor(container: TODO, st: TODO, indx: TODO, manual: TODO)
  InitControls(path: TODO, st: TODO): TODO
  Set(obj: TODO, area: TODO): TODO
  Update(obj: TODO): TODO
  Add_Icon(sec: TODO, w: TODO, h: TODO): TODO
  Add_Shadow(sec: TODO, w: TODO, h: TODO): TODO
  Add_Layers(xml: TODO, obj: TODO, sec: TODO, clsid: TODO): TODO
  Add_ProgressBar(xml: TODO, obj: TODO, sec: TODO, clsid: TODO): TODO
  Add_Counter(xml: TODO, obj: TODO, sec: TODO): TODO
  Add_Upgrade(xml: TODO, obj: TODO, sec: TODO): TODO
  Add_Attachements(xml: TODO, obj: TODO, sec: TODO, clsid: TODO): TODO
  Add_CustomText(txt: TODO, align_h: TODO, align_v: TODO, clr: TODO, fnt: TODO): TODO
  Create_Layer(ele: TODO, base: TODO, sec_m: TODO, sec_l: TODO, str_x: TODO, str_y: TODO, str_scale: TODO): TODO
  Colorize(clr_id: TODO): TODO
  Highlight(state: TODO, clr_id: TODO, main_clr: TODO): TODO
  Check_TradeMode(obj: TODO, sec: TODO): TODO
  GetCost(): TODO
  AddChild(obj: TODO): TODO
  PopChild(obj: TODO, id: TODO): TODO
  HasChild(obj: TODO, id: TODO): TODO
  CountChilds(): TODO
  ResetToChild(): TODO
  Reset(): TODO
  Show(state: TODO, obj: TODO): TODO
  IsShown(): TODO
  IsCursorOverWindow(): TODO
  GetXML(): TODO
  Print(mark: TODO, fmt: TODO, ...args: TODO[]): TODO
}

/** @customConstructor UICellProperties */
declare class UICellProperties extends CUIScriptWnd {
  constructor(owner: TODO)
  __finalize(): TODO
  InitControls(): TODO
  Update(): TODO
  Reset(pos_override: TODO, action_list: TODO, name_list: TODO, params_list: TODO): TODO
  FillList(action_list: TODO, name_list: TODO, params_list: TODO): TODO
  OnListItemClicked(): TODO
  OnListItemDbClicked(): TODO
  InitCallBacks(): TODO
  AddItemToList(index: TODO, str_id: TODO, func: TODO, params: TODO): TODO
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
  OnHide(): TODO
}

/** @customConstructor UICellProperties_item */
declare class UICellProperties_item extends CUIListBoxItem {
  constructor()
  __finalize(): TODO
}

/** @customConstructor UIHint */
declare class UIHint {
  constructor(owner: TODO, delay: TODO, path: TODO)
  InitControls(): TODO
  Update(txt: TODO): TODO
  Pass(txt: TODO): TODO
  Show(state: TODO): TODO
}

/** @customConstructor UIInfoItem */
declare class UIInfoItem {
  constructor(owner: TODO, delay: TODO)
  InitControls(): TODO
  Update(obj: TODO, sec: TODO, flags: TODO): TODO
  Pass(obj: TODO, sec: TODO): TODO
  GetType(sec: TODO): TODO
  GetUpgrades(obj: TODO): TODO
  Sync_Finale(cond: TODO, ele_syncer: TODO, ele_resizer: TODO, ele_adapter: TODO, offset: TODO): TODO
  Sync_Y(parent: TODO, child: TODO, offset: TODO): TODO
  Sync_H(parent: TODO, child: TODO, offset: TODO): TODO
  Reset_Y(ele: TODO): TODO
  Reset(): TODO
  IsShown(): TODO
  Show(state: TODO): TODO
}

/** @customConstructor UIInfoUpgr */
declare class UIInfoUpgr {
  constructor(owner: TODO, delay: TODO)
  InitControls(): TODO
  Update(upgr: TODO, prereq: TODO, installed: TODO): TODO
  Pass(sec: TODO): TODO
  ExtractFunctor(sec: TODO, param: TODO, ...args: TODO[]): TODO
  Sync_Y(parent: TODO, child: TODO, offset: TODO): TODO
  Sync_H(parent: TODO, child: TODO, offset: TODO): TODO
  Reset(): TODO
  IsShown(): TODO
  Show(state: TODO): TODO
}
