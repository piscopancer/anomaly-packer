/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace item_repair {
    export const GUI: UIRepair
    export function func_tool(obj: CGameObject): void
    export function menu_tool(obj: CGameObject): string | undefined
    export function on_game_start(): void
    export function start(obj: CGameObject, sec: Section.Item): void
  }
  
  /** @customConstructor UIRepair */
  class UIRepair extends CUIScriptWnd {
    CC: TODO // @generated field — refine type
    add_condition: TODO // @generated field — refine type
    b_inv: TODO // @generated field — refine type
    b_item: TODO // @generated field — refine type
    box_item_main: TODO // @generated field — refine type
    box_item_main_temp: TODO // @generated field — refine type
    btn_cancel: TODO // @generated field — refine type
    btn_repair: TODO // @generated field — refine type
    cap: TODO // @generated field — refine type
    cap_menu: TODO // @generated field — refine type
    cell_item: TODO // @generated field — refine type
    clr_b: TODO // @generated field — refine type
    con_txt: TODO // @generated field — refine type
    con_txt_base: TODO // @generated field — refine type
    con_txt_new: TODO // @generated field — refine type
    con_val: TODO // @generated field — refine type
    dialog: TODO // @generated field — refine type
    item_info: TODO // @generated field — refine type
    list: TODO // @generated field — refine type
    max_condition: TODO // @generated field — refine type
    min_condition: TODO // @generated field — refine type
    msg_wnd_timer: TODO // @generated field — refine type
    obj: TODO // @generated field — refine type
    part_bonus: TODO // @generated field — refine type
    parts_match: TODO // @generated field — refine type
    parts_multi: TODO // @generated field — refine type
    parts_sections: TODO // @generated field — refine type
    repair_frame: TODO // @generated field — refine type
    repair_only: TODO // @generated field — refine type
    repair_type: TODO // @generated field — refine type
    section: TODO // @generated field — refine type
    text_item: TODO // @generated field — refine type
    use_actor_effects: TODO // @generated field — refine type
    use_condition: TODO // @generated field — refine type
    use_parts: TODO // @generated field — refine type
    xml: TODO // @generated field — refine type
    constructor(obj: CGameObject, section: Section.Item)
    __finalize(): void
    InitControls(): void
    InitCallBacks(): void
    Reset(obj: CGameObject, section: Section.Item): void
    InitInventory(n: number): void
    Update(): void
    On_CC_Mouse1(cont: number, idx: any): void
    OnItemSelect(n: number): void
    OnRepair(): void
    OnKeyboard(dik: number, keyboard_action: number): boolean
    OnCancel(): void
  }

  namespace item_repair {
    /** Anomaly `class "UIRepair"` is also reachable on the `item_repair` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`item_repair.UIRepair.Method = ...`). */
    export const UIRepair: UIRepair
  }
}
