/** @noSelfInFile */

declare namespace ui_pda_npc_tab {
  export function actor_on_update(actor: CGameObject, info: AnyTable): void
  export function can_own_pda(npc: CGameObject): boolean
  export function gather_parts(str: string): AnyTable
  export function generate_date(last_msg_date: string): string
  export function generate_fname(comm: Community, key: string): string
  export function generate_msg(contact: AnyTable, older_date: string, special: string, special_functor: AnyTable): string
  export function get_encrypted_pdas(): AnyTable
  export function get_enemy(faction: Community, map: AnyTable): string
  export function get_pointer(map: AnyTable): AnyTable | undefined
  export function get_ui(info: AnyTable): AnyTable
  export function have_encrypted_pda(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function have_encrypted_pda_money(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function menu_view(obj: CGameObject): string | undefined
  export function register_pda(npc: CGameObject, pda_sec: string, pda_id: number): void
  export function take_encrypted_pda_money(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function unlock_encrypted_pda(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function use_view(obj: CGameObject): boolean
}

/** @customConstructor pda_message_entry */
declare class pda_message_entry extends CUIListBoxItem {
  indx: TODO // @generated field — refine type
  msg_date: TODO // @generated field — refine type
  sender: TODO // @generated field — refine type
  str_date: TODO // @generated field — refine type
  str_sender: TODO // @generated field — refine type
  str_title: TODO // @generated field — refine type
  title: TODO // @generated field — refine type
  constructor(title: string, sender: string, msg_date: string, indx: number)
}

/** @customConstructor pda_npc_tab */
declare class pda_npc_tab extends CUIScriptWnd {
  contact: TODO // @generated field — refine type
  contact_box: TODO // @generated field — refine type
  contact_info: TODO // @generated field — refine type
  desc_box: TODO // @generated field — refine type
  dialog: TODO // @generated field — refine type
  form: TODO // @generated field — refine type
  form_text: TODO // @generated field — refine type
  image: TODO // @generated field — refine type
  image_container: TODO // @generated field — refine type
  image_frame: TODO // @generated field — refine type
  information: TODO // @generated field — refine type
  information2: TODO // @generated field — refine type
  message_list: TODO // @generated field — refine type
  msg: TODO // @generated field — refine type
  scrollbar: TODO // @generated field — refine type
  state: TODO // @generated field — refine type
  time: TODO // @generated field — refine type
  constructor()
  __finalize(): void
  InitControls(): void
  InitCallBacks(): void
  Update(): void
  Reset(info: AnyTable): void
  Reset_data(): void
  OnSelectMessage(): void
  OnKeyboard(dik: number, keyboard_action: number): boolean
}

declare namespace ui_pda_npc_tab {
  /** Anomaly `class "pda_message_entry"` is also reachable on the `ui_pda_npc_tab` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`ui_pda_npc_tab.pda_message_entry.Method = ...`). */
  export const pda_message_entry: pda_message_entry
  /** Anomaly `class "pda_npc_tab"` is also reachable on the `ui_pda_npc_tab` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`ui_pda_npc_tab.pda_npc_tab.Method = ...`). */
  export const pda_npc_tab: pda_npc_tab
}
