/** @noSelfInFile */

declare namespace utils_ui {
  // Descriptor for a single item stat, as built by prepare_stats_table().
  export interface StatDescriptor {
    index: number
    typ: string
    name: string
    icon_p: string
    icon_n: string
    track: boolean
    magnitude: number
    unit: string
    compare?: boolean
    sign?: boolean
    show_always?: boolean
    condition?: boolean
    section?: string
    sign_inverse?: boolean
    sign_inverse_txt?: boolean
    // { file, func, ...args } used to compute the value via a global function.
    value_functor?: string[]
  }
  export const stats_table: Record<string, Record<string, StatDescriptor>>
  export function add_stats_table(k1: string, k2: string, v: StatDescriptor): void
  export function get_stats_func_value(obj: CGameObject, sec: string, file: string, func: string, ...args: unknown[]): number | undefined
  export function get_stats_string_value(obj: CGameObject, sec: string, gr: string | StatDescriptor, stat: string, to_text: boolean): LuaMultiReturn<[string | number, boolean]>
  export function get_stats_table(sec: string): Record<string, StatDescriptor> | undefined
  export function get_stats_value(obj: CGameObject, sec: string, gr: string | StatDescriptor, stat: string): number | false
  export function get_stats_xml(handler: CUIWindow, obj: CGameObject, sec: string, gr: string | StatDescriptor, stat: string): CUIStatic | undefined
  export function get_time(): number
  export function get_utils_xml(): CScriptXmlInit
  export function main_menu_off(): void
  export function main_menu_on(): void
  export function on_game_start(): void
  export function prepare_stats_table(): void
  export function prop_accuracry(obj: CGameObject, sec: string): number
  export function prop_condition(obj: CGameObject, sec: string): number
  export function prop_damage(obj: CGameObject, sec: string): number
  export function prop_handling(obj: CGameObject, sec: string): number
  export function prop_rpm(obj: CGameObject, sec: string): number
  export function set_item_order(): void
  export function sort_by_index(t: AnyTable, a: number, b: number): boolean
  export function sort_by_kind(t: AnyTable, a: number, b: number): boolean
  export function sort_by_props(t: AnyTable, a: number, b: number): boolean
  export function sort_by_size(t: AnyTable, a: number, b: number): boolean
  export function sort_by_sizekind(t: AnyTable, a: number, b: number): boolean
  export function sort_info(asec: string, bsec: string): void
}

/** @customConstructor UICellContainer */
declare class UICellContainer {
  constructor(id: string, owner: CUIScriptWnd, path: string, prof: string, ele_base: CUIWindow, manual: boolean, use_frame: boolean)
  InitControls(owner: CUIScriptWnd, prof: string, ele_base: CUIWindow): void
  Reinit(t?: AnyTable, tf?: AnyTable): void
  AddIndex(id: number, sec: string | undefined, indx: number): void
  RemoveIndex(id: number, sec?: string, indx?: number): void
  GetCell_ID(id: number, only_indx?: boolean): number | UICellItem | undefined
  GetCell_SEC(sec: string): UICellItem | false
  GetCell_Selected(only_obj?: boolean): CGameObject | UICellItem | undefined
  GetCell_Focused(only_cell?: boolean): UICellItem | LuaMultiReturn<[string, number, CGameObject | undefined]> | undefined
  GetObj(idx: number): CGameObject | undefined
  GetID(obj: CGameObject | undefined, sec: string, create?: boolean): number | undefined
  AddItemInCell(obj: CGameObject | undefined, sec: string, indx: number, area?: { y: number; x: number; w: number; h: number }): boolean
  AddItem(obj?: CGameObject, sec?: string, info?: unknown): number | undefined
  AddItemManual(obj?: CGameObject, sec?: string, indx?: number): boolean | undefined
  RemoveItem(obj?: CGameObject, sec?: string): void
  RemoveItem_byID(id: number): void
  RemoveItemManual(indx: number): void
  TransferItem(cont_to: UICellContainer, obj?: CGameObject, sec?: string): UICellItem | undefined
  UpdateItem(obj?: CGameObject, sec?: string): void
  FindFreeCell(obj?: CGameObject, sec?: string): { y: number; x: number; w: number; h: number } | false
  IsFreeRoom(r: number, c: number, w: number, h: number): boolean
  TakeRoom(r: number, c: number, w: number, h: number): { y: number; x: number; w: number; h: number }
  FreeRoom(r: number, c: number, w: number, h: number): void
  FindSimilar(obj?: CGameObject, sec?: string): UICellItem | false
  Grow(): void
  IsTradable(obj: CGameObject): boolean | undefined
  GetCellCost(ci: UICellItem): number
  On_Select(idx?: number | false): void
  On_Drag(idx: number | false, tg: number, set?: boolean): void
  On_Hover(idx: number | false): void
  On_Mouse1(idx: number): void
  On_Mouse1_DB(idx: number): unknown
  On_Mouse2(idx: number): void
  On_Scroll(): void
  Update(item_info?: UIInfoItem, no_info?: boolean, hide?: boolean): boolean
  OnKeyboard(dik: number, keyboard_action: number): void
  Callback(func: string, ...args: unknown[]): unknown
  Reset(): void
  IsCellVisible(ci: UICellItem): boolean
  Scroll_Reinit(keep_pos?: boolean): void
  Scroll_SetPos(Y?: number, force?: boolean): void
  Scroll_GetHeight(num?: number, ele?: boolean): number
  Scroll_DragDrop_Ctrl(): boolean
  Scroll_Pad_Ctrl(update?: boolean): void
  GetSortMethod(): (this: void, t: AnyTable, a: number, b: number) => boolean
  AdjustWnd(x?: number, y?: number, w?: number, h?: number): void
  AdjustHeightToCell(): void
  AdjustWidthToCell(): void
  SetBackground(path: string, clr: number): void
  SetGridSpecs(size?: number, line?: number): void
  Show(state: boolean): void
  IsShown(): boolean
  EnableScrolling(state: boolean): void
  IsCursorOverWindow(): boolean
  Print(mark: string | undefined, fmt: string, ...args: unknown[]): void
}

/** @customConstructor UICellItem */
declare class UICellItem {
  constructor(container: UICellContainer, st: CUIStatic | { path: string; base: CUIStatic }, indx: number, manual: boolean)
  InitControls(path: string, st: CUIStatic | { path: string; base: CUIStatic }): void
  // `obj` is a game object, or its section string for showcase cells.
  Set(obj: CGameObject | string, area?: { x: number; y: number; w: number; h: number }): boolean
  Update(obj?: CGameObject): boolean
  Add_Icon(sec: string, w: number, h: number): void
  Add_Shadow(sec: string, w: number, h: number): void
  Add_Layers(xml: CScriptXmlInit, obj: CGameObject, sec: string, clsid: number): void
  Add_ProgressBar(xml: CScriptXmlInit, obj: CGameObject, sec: string, clsid: number): void
  Add_Counter(xml: CScriptXmlInit, obj: CGameObject, sec: string): void
  Add_Upgrade(xml: CScriptXmlInit, obj: CGameObject, sec: string): void
  Add_Attachements(xml: CScriptXmlInit, obj: CGameObject, sec: string, clsid: number): void
  Add_CustomText(txt: string, align_h?: number, align_v?: number, clr?: number, fnt?: string): void
  Create_Layer(ele: CUIStatic, base: CUIStatic, sec_m: string, sec_l: string, str_x?: string, str_y?: string, str_scale?: string): void
  Colorize(clr_id: string): void
  Highlight(state: boolean, clr_id?: string, main_clr?: boolean): void
  Check_TradeMode(obj: CGameObject, sec: string): boolean
  GetCost(): void
  AddChild(obj: CGameObject): boolean
  PopChild(obj?: CGameObject, id?: number): void
  HasChild(obj?: CGameObject, id?: number): number | boolean | undefined
  CountChilds(): number
  ResetToChild(): boolean
  Reset(): void
  Show(state: boolean, obj?: CGameObject): void
  IsShown(): boolean
  IsCursorOverWindow(): boolean
  GetXML(): CScriptXmlInit
  Print(mark: string | undefined, fmt: string, ...args: unknown[]): void
}

/** @customConstructor UICellProperties */
declare class UICellProperties extends CUIScriptWnd {
  constructor(owner: CUIScriptWnd)
  __finalize(): void
  InitControls(): void
  Update(): void
  Reset(pos_override: vector2 | undefined, action_list: string[], name_list: string[], params_list: AnyTable[]): void
  FillList(action_list: string[], name_list: string[], params_list: AnyTable[]): void
  OnListItemClicked(): void
  OnListItemDbClicked(): void
  InitCallBacks(): void
  AddItemToList(index: number, str_id: string, func: string, params?: unknown[]): void
  OnKeyboard(dik: number, keyboard_action: number): boolean
  OnHide(): void
}

/** @customConstructor UICellProperties_item */
declare class UICellProperties_item extends CUIListBoxItem {
  constructor()
  __finalize(): void
}

/** @customConstructor UIHint */
declare class UIHint {
  constructor(owner: CUIScriptWnd, delay?: number, path?: string)
  InitControls(): void
  Update(txt: string): void
  Pass(txt: string): boolean
  Show(state: boolean): void
}

/** @customConstructor UIInfoItem */
declare class UIInfoItem {
  constructor(owner: CUIScriptWnd, delay?: number)
  InitControls(): void
  Update(obj?: CGameObject, sec?: string, flags?: AnyTable): void
  Pass(obj?: CGameObject, sec?: string): boolean
  GetType(sec: string): string
  GetUpgrades(obj?: CGameObject): unknown
  Sync_Finale(cond: boolean, ele_syncer: CUIWindow | undefined, ele_resizer: CUIWindow, ele_adapter: CUIWindow, offset: number): boolean
  Sync_Y(parent: CUIWindow | undefined, child: CUIWindow, offset?: number): number
  Sync_H(parent: CUIWindow, child: CUIWindow, offset: number): number
  Reset_Y(ele: CUIWindow): void
  Reset(): void
  IsShown(): boolean
  Show(state: boolean): void
}

/** @customConstructor UIInfoUpgr */
declare class UIInfoUpgr {
  constructor(owner: CUIScriptWnd, delay?: number)
  InitControls(): void
  Update(upgr: string, prereq: string, installed: boolean): void
  Pass(sec: string): boolean
  ExtractFunctor(sec: string, param: string, ...args: unknown[]): unknown
  Sync_Y(parent: CUIWindow | undefined, child: CUIWindow, offset?: number): number
  Sync_H(parent: CUIWindow, child: CUIWindow, offset: number): number
  Reset(): void
  IsShown(): boolean
  Show(state: boolean): void
}
