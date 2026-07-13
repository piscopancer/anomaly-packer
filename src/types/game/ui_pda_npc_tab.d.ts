/** @noSelfInFile */

declare namespace ui_pda_npc_tab {
  export function actor_on_update(actor: CGameObject, info: AnyTable): void
  export function can_own_pda(npc: CGameObject): boolean
  export function gather_parts(str: string): AnyTable
  export function generate_date(last_msg_date: string): string
  export function generate_fname(comm: string, key: string): string
  export function generate_msg(contact: AnyTable, older_date: string, special: string, special_functor: AnyTable): string
  export function get_encrypted_pdas(): AnyTable
  export function get_enemy(faction: string, map: AnyTable): string
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
  constructor(title: string, sender: string, msg_date: string, indx: number)
}

/** @customConstructor pda_npc_tab */
declare class pda_npc_tab extends CUIScriptWnd {
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
