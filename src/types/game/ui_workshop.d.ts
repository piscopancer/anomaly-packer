/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace ui_workshop {
    /** The live workshop UI instance (`nil` until opened). */
    export const GUI: UIWorkshop | undefined
    /** Toolkit definitions for the workshop, keyed by toolkit. */
    export const workshop_toolkits: AnyTable
    export function AdjustCon(sec_part: string, con: number, num: number, is_outfit?: boolean): number
    export function get_workshop_ui(...args: any[]): UIWorkshop
    export function print_ws(fmt: string, ...args: any[]): void
    export function SetTip(tip: string, warning: string, solution: string, sec: Section.Item, pass: boolean, XMLtxt: CScriptXmlInit): void
  }

  /** @customConstructor UIWorkshop */
  class UIWorkshop extends CUIScriptWnd {
    background: TODO // @generated field — refine type
    btn_tab_craft: TODO // @generated field — refine type
    btn_tab_repair: TODO // @generated field — refine type
    btn_tab_state: TODO // @generated field — refine type
    btn_tab_upgrade: TODO // @generated field — refine type
    cap_tab: TODO // @generated field — refine type
    dbg: TODO // @generated field — refine type
    dialog: TODO // @generated field — refine type
    dlg_craft: TODO // @generated field — refine type
    dlg_repair: TODO // @generated field — refine type
    dlg_state: TODO // @generated field — refine type
    dlg_upgrade: TODO // @generated field — refine type
    info_ico: TODO // @generated field — refine type
    item_info: TODO // @generated field — refine type
    mechanic: TODO // @generated field — refine type
    owner: TODO // @generated field — refine type
    toolkits_state: TODO // @generated field — refine type
    toolkits_workshop: TODO // @generated field — refine type
    upgr_info: TODO // @generated field — refine type
    xml: TODO // @generated field — refine type
    constructor()
    __finalize(): void
    InitControls(): void
    InitCallBacks(): void
    Reset(owner: CGameObject, mechanic: CGameObject, toolkits_workshop: AnyTable, dbg?: boolean): void
    OnButton_state(): void
    OnButton_repair(): void
    OnButton_upgrade(): void
    OnButton_craft(): void
    Close(): void
  }

  /** @customConstructor UIWorkshopCraft */
  class UIWorkshopCraft extends CUIScriptWnd {
    CC: TODO // @generated field — refine type
    btn_back: TODO // @generated field — refine type
    btn_craft: TODO // @generated field — refine type
    cap_components: TODO // @generated field — refine type
    cap_r: TODO // @generated field — refine type
    craft_allow: TODO // @generated field — refine type
    craft_allow_r: TODO // @generated field — refine type
    craft_item: TODO // @generated field — refine type
    craft_item_r: TODO // @generated field — refine type
    craft_item_remain: TODO // @generated field — refine type
    info_text: TODO // @generated field — refine type
    itm_b: TODO // @generated field — refine type
    itm_b_r: TODO // @generated field — refine type
    itm_b_t: TODO // @generated field — refine type
    itm_ico: TODO // @generated field — refine type
    itm_ico_r: TODO // @generated field — refine type
    itm_ico_t: TODO // @generated field — refine type
    itm_ico_temp: TODO // @generated field — refine type
    itm_ico_temp_r: TODO // @generated field — refine type
    itm_ico_temp_t: TODO // @generated field — refine type
    itm_line: TODO // @generated field — refine type
    itm_line_c: TODO // @generated field — refine type
    itm_line_r1: TODO // @generated field — refine type
    itm_line_r3: TODO // @generated field — refine type
    itm_name: TODO // @generated field — refine type
    itm_name_r: TODO // @generated field — refine type
    itm_name_t: TODO // @generated field — refine type
    itm_num: TODO // @generated field — refine type
    itm_num_r: TODO // @generated field — refine type
    last_index: TODO // @generated field — refine type
    last_type: TODO // @generated field — refine type
    list_menu: TODO // @generated field — refine type
    owner: TODO // @generated field — refine type
    recipes: TODO // @generated field — refine type
    recipes_items: TODO // @generated field — refine type
    recipes_type: TODO // @generated field — refine type
    selected_index: TODO // @generated field — refine type
    toolkits_state: TODO // @generated field — refine type
    toolkits_workshop: TODO // @generated field — refine type
    xml: TODO // @generated field — refine type
    constructor(xml: CScriptXmlInit, owner: CGameObject, x: number, y: number)
    __finalize(): void
    InitControls(x?: number, y?: number): void
    InitCallBacks(): void
    Reset(): void
    Update(): void
    LoadRecipes(): void
    ListRecipes(): void
    ListItems(): void
    On_CC_Mouse1(cont: string, idx: number): void
    UpdateItem(n: number, sec: Section.Item, amount: number, result: any, toolkit_idx: number, toolkit_sec: string): void
    ShowComponents(sh: boolean): void
    Close(): void
    Craft(): void
    OnKeyboard(dik: number, keyboard_action: number): boolean
  }

  /** @customConstructor UIWorkshopRepair */
  class UIWorkshopRepair extends CUIScriptWnd {
    CC: TODO // @generated field — refine type
    btn_back: TODO // @generated field — refine type
    btn_repair: TODO // @generated field — refine type
    dot: TODO // @generated field — refine type
    highlight_btn: TODO // @generated field — refine type
    info_text: TODO // @generated field — refine type
    itm_b: TODO // @generated field — refine type
    itm_b_r: TODO // @generated field — refine type
    itm_b_rq: TODO // @generated field — refine type
    itm_btn: TODO // @generated field — refine type
    itm_con: TODO // @generated field — refine type
    itm_con_r: TODO // @generated field — refine type
    itm_ico: TODO // @generated field — refine type
    itm_ico_r: TODO // @generated field — refine type
    itm_ico_rq: TODO // @generated field — refine type
    itm_ico_temp: TODO // @generated field — refine type
    itm_ico_temp_r: TODO // @generated field — refine type
    itm_ico_temp_rq: TODO // @generated field — refine type
    itm_line: TODO // @generated field — refine type
    itm_name: TODO // @generated field — refine type
    itm_num_rq: TODO // @generated field — refine type
    itm_selected: TODO // @generated field — refine type
    line_r: TODO // @generated field — refine type
    new_con: TODO // @generated field — refine type
    owner: TODO // @generated field — refine type
    parts: TODO // @generated field — refine type
    selected_btn: TODO // @generated field — refine type
    toolkit: TODO // @generated field — refine type
    toolkit_inv: TODO // @generated field — refine type
    toolkit_pick: TODO // @generated field — refine type
    toolkits_state: TODO // @generated field — refine type
    toolkits_workshop: TODO // @generated field — refine type
    xml: TODO // @generated field — refine type
    constructor(xml: CScriptXmlInit, owner: CGameObject, x: number, y: number)
    __finalize(): void
    InitControls(x?: number, y?: number): void
    InitCallBacks(): void
    Reset(): void
    Update(): void
    ListInventory(): void
    ListPartScheme(): void
    ListSpareParts(): void
    ReplacePart(): void
    UpdateToolkits(num: number): number
    On_CC_Mouse1(cont: string, idx: number): void
    Close(): void
    Repair(): void
    OnKeyboard(dik: number, keyboard_action: number): boolean
  }

  /** @customConstructor UIWorkshopState */
  class UIWorkshopState extends CUIScriptWnd {
    btn_back: TODO // @generated field — refine type
    info_text: TODO // @generated field — refine type
    owner: TODO // @generated field — refine type
    toolkit_b: TODO // @generated field — refine type
    toolkit_ico: TODO // @generated field — refine type
    toolkit_ico_temp: TODO // @generated field — refine type
    toolkit_txt: TODO // @generated field — refine type
    toolkits_state: TODO // @generated field — refine type
    toolkits_workshop: TODO // @generated field — refine type
    xml: TODO // @generated field — refine type
    constructor(xml: CScriptXmlInit, owner: CGameObject, x: number, y: number)
    __finalize(): void
    InitControls(x?: number, y?: number): void
    InitCallBacks(): void
    Reset(): void
    Close(): void
    OnKeyboard(dik: number, keyboard_action: number): boolean
  }

  /** @customConstructor UIWorkshopUpgrade */
  class UIWorkshopUpgrade extends CUIScriptWnd {
    CC: TODO // @generated field — refine type
    btn_back: TODO // @generated field — refine type
    btn_upgrade: TODO // @generated field — refine type
    info_text: TODO // @generated field — refine type
    ini: TODO // @generated field — refine type
    inst_upgr: TODO // @generated field — refine type
    inst_upgr_xml: TODO // @generated field — refine type
    itm_b_rq: TODO // @generated field — refine type
    itm_cap_rq: TODO // @generated field — refine type
    itm_ico_r: TODO // @generated field — refine type
    itm_ico_rq: TODO // @generated field — refine type
    itm_ico_temp_r: TODO // @generated field — refine type
    itm_ico_temp_rq: TODO // @generated field — refine type
    itm_num_rq: TODO // @generated field — refine type
    owner: TODO // @generated field — refine type
    scroll_upgr: TODO // @generated field — refine type
    step: number // @generated field — refine type
    toolkits_state: TODO // @generated field — refine type
    toolkits_workshop: TODO // @generated field — refine type
    update_cache: TODO // @generated field — refine type
    upgr: TODO // @generated field — refine type
    upgr_flags: TODO // @generated field — refine type
    upgr_idx: TODO // @generated field — refine type
    upgr_order: TODO // @generated field — refine type
    upgr_toolkit: TODO // @generated field — refine type
    upgr_tools: TODO // @generated field — refine type
    upgr_tools_pick: TODO // @generated field — refine type
    upgr_xml: TODO // @generated field — refine type
    xml: TODO // @generated field — refine type
    constructor(xml: CScriptXmlInit, owner: CGameObject, x: number, y: number)
    __finalize(): void
    InitControls(x?: number, y?: number): void
    InitCallBacks(): void
    Reset(): void
    Update(): void
    On_CC_Mouse1(cont: string, idx: number): void
    LoadInventory(): void
    ListUpgradeTree(): void
    EvaluateUpgrades(): void
    EvaluateUpgrade(row: number, col: number, info: AnyTable): void
    GetWorkshopkit(obj: CGameObject): any
    CollectUpgradekits(sec_add: string): AnyTable
    SetkitInfo(sec: Section.Item, XML_txt: CScriptXmlInit, XML_ico: CScriptXmlInit, XML_ico_tmp: CScriptXmlInit): void
    DischargeKit(sec: Section.Item): void
    Close(): void
    Upgrade(): void
    OnKeyboard(dik: number, keyboard_action: number): boolean
  }

  namespace ui_workshop {
    /** Anomaly `class "UIWorkshop"` is also reachable on the `ui_workshop` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`ui_workshop.UIWorkshop.Method = ...`). */
    export const UIWorkshop: UIWorkshop
    /** Anomaly `class "UIWorkshopCraft"` is also reachable on the `ui_workshop` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`ui_workshop.UIWorkshopCraft.Method = ...`). */
    export const UIWorkshopCraft: UIWorkshopCraft
    /** Anomaly `class "UIWorkshopRepair"` is also reachable on the `ui_workshop` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`ui_workshop.UIWorkshopRepair.Method = ...`). */
    export const UIWorkshopRepair: UIWorkshopRepair
    /** Anomaly `class "UIWorkshopState"` is also reachable on the `ui_workshop` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`ui_workshop.UIWorkshopState.Method = ...`). */
    export const UIWorkshopState: UIWorkshopState
    /** Anomaly `class "UIWorkshopUpgrade"` is also reachable on the `ui_workshop` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`ui_workshop.UIWorkshopUpgrade.Method = ...`). */
    export const UIWorkshopUpgrade: UIWorkshopUpgrade
  }
}
