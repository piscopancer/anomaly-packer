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
    section?: Section
    sign_inverse?: boolean
    sign_inverse_txt?: boolean
    // { file, func, ...args } used to compute the value via a global function.
    value_functor?: string[]
  }
  export const stats_table: Record<string, Record<string, StatDescriptor>>
  export function add_stats_table(k1: string, k2: string, v: StatDescriptor): void
  export function get_stats_func_value(obj: CGameObject, sec: Section, file: string, func: string, ...args: unknown[]): number | undefined
  export function get_stats_string_value(obj: CGameObject, sec: Section, gr: string | StatDescriptor, stat: string, to_text: boolean): LuaMultiReturn<[string | number, boolean]>
  export function get_stats_table(sec: Section): Record<string, StatDescriptor> | undefined
  export function get_stats_value(obj: CGameObject, sec: Section, gr: string | StatDescriptor, stat: string): number | false
  export function get_stats_xml(handler: CUIWindow, obj: CGameObject, sec: Section, gr: string | StatDescriptor, stat: string): CUIStatic | undefined
  export function get_time(): number
  export function get_utils_xml(): CScriptXmlInit
  export function main_menu_off(): void
  export function main_menu_on(): void
  export function on_game_start(): void
  export function prepare_stats_table(): void
  export function prop_accuracry(obj: CGameObject, sec: Section): number
  export function prop_condition(obj: CGameObject, sec: Section): number
  export function prop_damage(obj: CGameObject, sec: Section): number
  export function prop_handling(obj: CGameObject, sec: Section): number
  export function prop_rpm(obj: CGameObject, sec: Section): number
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
  ID: TODO // @generated field — refine type
  can_select: boolean // @generated field — refine type
  cell: TODO // @generated field — refine type
  cell_vis_offset: number // @generated field — refine type
  col_end: TODO // @generated field — refine type
  cols: TODO // @generated field — refine type
  db: TODO // @generated field — refine type
  disable_bar: boolean // @generated field — refine type
  disable_callback: TODO // @generated field — refine type
  disable_drag: boolean // @generated field — refine type
  disable_highlight: boolean // @generated field — refine type
  disable_info: boolean // @generated field — refine type
  disable_scroll: TODO // @generated field — refine type
  disable_scroll_dragdrop: boolean // @generated field — refine type
  disable_stack: boolean // @generated field — refine type
  drag_area: TODO // @generated field — refine type
  drag_down: TODO // @generated field — refine type
  drag_up: TODO // @generated field — refine type
  grid: TODO // @generated field — refine type
  grid_line: TODO // @generated field — refine type
  grid_size: TODO // @generated field — refine type
  hold: TODO // @generated field — refine type
  hover: TODO // @generated field — refine type
  idxer: TODO // @generated field — refine type
  ignore_scroll: boolean // @generated field — refine type
  indx_id: TODO // @generated field — refine type
  indx_sec: TODO // @generated field — refine type
  line: TODO // @generated field — refine type
  line_cnt: number // @generated field — refine type
  manual: TODO // @generated field — refine type
  owner: TODO // @generated field — refine type
  pad: TODO // @generated field — refine type
  path: TODO // @generated field — refine type
  pd: TODO // @generated field — refine type
  prof: TODO // @generated field — refine type
  rKind: TODO // @generated field — refine type
  row_end: TODO // @generated field — refine type
  scolling_power: TODO // @generated field — refine type
  scolling_power_up: number // @generated field — refine type
  scroll: TODO // @generated field — refine type
  scroll_pause: boolean // @generated field — refine type
  scroll_pos: TODO // @generated field — refine type
  scroll_tg: TODO // @generated field — refine type
  selected: TODO // @generated field — refine type
  showcase: boolean // @generated field — refine type
  sort_method: string // @generated field — refine type
  st: TODO // @generated field — refine type
  stack_all: boolean // @generated field — refine type
  use_frame: TODO // @generated field — refine type
  xml: TODO // @generated field — refine type
  constructor(id: string, owner: CUIScriptWnd, path: string, prof: string, ele_base: CUIWindow, manual: boolean, use_frame: boolean)
  InitControls(owner: CUIScriptWnd, prof: string, ele_base: CUIWindow): void
  Reinit(t?: AnyTable, tf?: AnyTable): void
  AddIndex(id: number, sec: Section | undefined, indx: number): void
  RemoveIndex(id: number, sec?: Section, indx?: number): void
  GetCell_ID(id: number, only_indx?: boolean): number | UICellItem | undefined
  GetCell_SEC(sec: Section): UICellItem | false
  GetCell_Selected(only_obj?: boolean): CGameObject | UICellItem | undefined
  GetCell_Focused(only_cell?: boolean): UICellItem | LuaMultiReturn<[string, number, CGameObject | undefined]> | undefined
  GetObj(idx: number): CGameObject | undefined
  GetID(obj: CGameObject | undefined, sec: Section, create?: boolean): number | undefined
  AddItemInCell(obj: CGameObject | undefined, sec: Section, indx: number, area?: { y: number; x: number; w: number; h: number }): boolean
  AddItem(obj?: CGameObject, sec?: Section, info?: unknown): number | undefined
  AddItemManual(obj?: CGameObject, sec?: Section, indx?: number): boolean | undefined
  RemoveItem(obj?: CGameObject, sec?: Section): void
  RemoveItem_byID(id: number): void
  RemoveItemManual(indx: number): void
  TransferItem(cont_to: UICellContainer, obj?: CGameObject, sec?: Section): UICellItem | undefined
  UpdateItem(obj?: CGameObject, sec?: Section): void
  FindFreeCell(obj?: CGameObject, sec?: Section): { y: number; x: number; w: number; h: number } | false
  IsFreeRoom(r: number, c: number, w: number, h: number): boolean
  TakeRoom(r: number, c: number, w: number, h: number): { y: number; x: number; w: number; h: number }
  FreeRoom(r: number, c: number, w: number, h: number): void
  FindSimilar(obj?: CGameObject, sec?: Section): UICellItem | false
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
  H: TODO // @generated field — refine type
  W: TODO // @generated field — refine type
  area: TODO // @generated field — refine type
  bar: TODO // @generated field — refine type
  childs: TODO // @generated field — refine type
  cnt: TODO // @generated field — refine type
  ctxt: TODO // @generated field — refine type
  ctxts: TODO // @generated field — refine type
  ico_gl: TODO // @generated field — refine type
  ico_scope: TODO // @generated field — refine type
  ico_sil: TODO // @generated field — refine type
  layer: TODO // @generated field — refine type
  upgr: TODO // @generated field — refine type
  constructor(container: UICellContainer, st: CUIStatic | { path: string; base: CUIStatic }, indx: number, manual: boolean)

  // Instance fields set in __init/InitControls (utils_ui.script). The skeleton previously listed
  // only methods; these are the `self.*` data members the class actually carries.
  container: UICellContainer
  /** Container path this cell's xml nodes hang off of. */
  path: string
  indx: number
  /** `manual` placement disables some behaviour; `false` for object-attached cells. */
  manual: boolean
  /** `[0]` attached to object / `[1]` attached to section (showcase) / `[2]` showcase, no room adjust. */
  showcase: number
  /** Cell xml node name: `"cell"`, or `"cell_<indx>"` in manual placement. */
  cx: string
  grid_size: number
  grid_line: number
  /** Free-form table for custom per-cell info. */
  flags: AnyTable
  disable_bar: boolean
  /** Highlight static (`:highlight`). */
  hl: CUIStatic
  /** Main cell static. */
  cell: CUIStatic
  /** Shadow static (`:pic` over `cell`). */
  shadow: CUIStatic
  /** Icon static (`:pic`). */
  ico: CUIStatic
  /** Set for free cells built from a `{ path, base }` descriptor. */
  st?: CUIStatic
  /** Game-object id once the cell is bound to an object; `undefined` for showcase cells. */
  ID?: number
  /** Section of the bound object/showcase; `undefined` when reset. */
  section?: string
  InitControls(path: string, st: CUIStatic | { path: string; base: CUIStatic }): void
  // `obj` is a game object, or its section string for showcase cells.
  Set(obj: CGameObject | string, area?: { x: number; y: number; w: number; h: number }): boolean
  Update(obj?: CGameObject): boolean
  Add_Icon(sec: Section, w: number, h: number): void
  Add_Shadow(sec: Section, w: number, h: number): void
  Add_Layers(xml: CScriptXmlInit, obj: CGameObject, sec: Section, clsid: number): void
  Add_ProgressBar(xml: CScriptXmlInit, obj: CGameObject, sec: Section, clsid: number): void
  Add_Counter(xml: CScriptXmlInit, obj: CGameObject, sec: Section): void
  Add_Upgrade(xml: CScriptXmlInit, obj: CGameObject, sec: Section): void
  Add_Attachements(xml: CScriptXmlInit, obj: CGameObject, sec: Section, clsid: number): void
  Add_CustomText(txt: string, align_h?: number, align_v?: number, clr?: number, fnt?: string): void
  Create_Layer(ele: CUIStatic, base: CUIStatic, sec_m: string, sec_l: string, str_x?: string, str_y?: string, str_scale?: string): void
  Colorize(clr_id: string): void
  Highlight(state: boolean, clr_id?: string, main_clr?: boolean): void
  Check_TradeMode(obj: CGameObject, sec: Section): boolean
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
  H: TODO // @generated field — refine type
  H_L: number // @generated field — refine type
  PDH: number // @generated field — refine type
  PDW: number // @generated field — refine type
  W: TODO // @generated field — refine type
  W_L: number // @generated field — refine type
  action_moment: TODO // @generated field — refine type
  file_item_fn_sz: TODO // @generated field — refine type
  file_item_main_sz: TODO // @generated field — refine type
  form: TODO // @generated field — refine type
  frame: TODO // @generated field — refine type
  highlight: TODO // @generated field — refine type
  list_box: TODO // @generated field — refine type
  owner: TODO // @generated field — refine type
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
  textControl: TODO // @generated field — refine type
  constructor()
  __finalize(): void
}

/** @customConstructor UIHint */
declare class UIHint {
  delay: TODO // @generated field — refine type
  dialog: TODO // @generated field — refine type
  dialog_text: TODO // @generated field — refine type
  owner: TODO // @generated field — refine type
  path: TODO // @generated field — refine type
  timer: TODO // @generated field — refine type
  txt: TODO // @generated field — refine type
  constructor(owner: CUIScriptWnd, delay?: number, path?: string)
  InitControls(): void
  Update(txt: string): void
  Pass(txt: string): boolean
  Show(state: boolean): void
}

/** @customConstructor UIInfoItem */
declare class UIInfoItem {
  ammo: TODO // @generated field — refine type
  ammo_cap: TODO // @generated field — refine type
  ammo_ico: TODO // @generated field — refine type
  ammo_ico_temp: TODO // @generated field — refine type
  ammo_parse: TODO // @generated field — refine type
  ammo_txt: TODO // @generated field — refine type
  can_compare: boolean // @generated field — refine type
  delay: TODO // @generated field — refine type
  desc: TODO // @generated field — refine type
  dialog: TODO // @generated field — refine type
  frame: TODO // @generated field — refine type
  id: TODO // @generated field — refine type
  name: TODO // @generated field — refine type
  note: TODO // @generated field — refine type
  owner: TODO // @generated field — refine type
  section: TODO // @generated field — refine type
  stats: TODO // @generated field — refine type
  stats_dialog: TODO // @generated field — refine type
  timer: TODO // @generated field — refine type
  value: TODO // @generated field — refine type
  weight: TODO // @generated field — refine type
  constructor(owner: CUIScriptWnd, delay?: number)
  InitControls(): void
  Update(obj?: CGameObject, sec?: Section, flags?: AnyTable): void
  Pass(obj?: CGameObject, sec?: Section): boolean
  GetType(sec: Section): string
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
  cost: TODO // @generated field — refine type
  delay: TODO // @generated field — refine type
  desc: TODO // @generated field — refine type
  dialog: TODO // @generated field — refine type
  frame: TODO // @generated field — refine type
  name: TODO // @generated field — refine type
  owner: TODO // @generated field — refine type
  prereq: TODO // @generated field — refine type
  prop: TODO // @generated field — refine type
  prop_frame: TODO // @generated field — refine type
  prop_h: TODO // @generated field — refine type
  section: TODO // @generated field — refine type
  timer: TODO // @generated field — refine type
  constructor(owner: CUIScriptWnd, delay?: number)
  InitControls(): void
  Update(upgr: string, prereq: string, installed: boolean): void
  Pass(sec: Section): boolean
  ExtractFunctor(sec: Section, param: string, ...args: unknown[]): unknown
  Sync_Y(parent: CUIWindow | undefined, child: CUIWindow, offset?: number): number
  Sync_H(parent: CUIWindow, child: CUIWindow, offset: number): number
  Reset(): void
  IsShown(): boolean
  Show(state: boolean): void
}

declare namespace utils_ui {
  /** Anomaly `class "UICellContainer"` is also reachable on the `utils_ui` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`utils_ui.UICellContainer.Method = ...`). */
  export const UICellContainer: UICellContainer
  /** Anomaly `class "UICellItem"` is also reachable on the `utils_ui` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`utils_ui.UICellItem.Method = ...`). */
  export const UICellItem: UICellItem
  /** Anomaly `class "UICellProperties"` is also reachable on the `utils_ui` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`utils_ui.UICellProperties.Method = ...`). */
  export const UICellProperties: UICellProperties
  /** Anomaly `class "UICellProperties_item"` is also reachable on the `utils_ui` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`utils_ui.UICellProperties_item.Method = ...`). */
  export const UICellProperties_item: UICellProperties_item
  /** Anomaly `class "UIHint"` is also reachable on the `utils_ui` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`utils_ui.UIHint.Method = ...`). */
  export const UIHint: UIHint
  /** Anomaly `class "UIInfoItem"` is also reachable on the `utils_ui` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`utils_ui.UIInfoItem.Method = ...`). */
  export const UIInfoItem: UIInfoItem
  /** Anomaly `class "UIInfoUpgr"` is also reachable on the `utils_ui` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`utils_ui.UIInfoUpgr.Method = ...`). */
  export const UIInfoUpgr: UIInfoUpgr
}
