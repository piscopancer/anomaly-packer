// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace ui_pda_npc_tab {
  export function actor_on_update(actor: TODO, info: TODO): TODO
  export function can_own_pda(npc: TODO): TODO
  export function gather_parts(str: TODO): TODO
  export function generate_date(last_msg_date: TODO): TODO
  export function generate_fname(comm: TODO, key: TODO): TODO
  export function generate_msg(contact: TODO, older_date: TODO, special: TODO, special_functor: TODO): TODO
  export function get_encrypted_pdas(): TODO
  export function get_enemy(faction: TODO, map: TODO): TODO
  export function get_pointer(map: TODO): TODO
  export function get_ui(info: TODO): TODO
  export function have_encrypted_pda(first_speaker: TODO, second_speaker: TODO): TODO
  export function have_encrypted_pda_money(first_speaker: TODO, second_speaker: TODO): TODO
  export function menu_view(obj: TODO): TODO
  export function register_pda(npc: TODO, pda_sec: TODO, pda_id: TODO): TODO
  export function take_encrypted_pda_money(first_speaker: TODO, second_speaker: TODO): TODO
  export function unlock_encrypted_pda(first_speaker: TODO, second_speaker: TODO): TODO
  export function use_view(obj: TODO): TODO
}

/** @customConstructor pda_message_entry */
declare class pda_message_entry extends CUIListBoxItem {
  constructor(title: TODO, sender: TODO, msg_date: TODO, indx: TODO, sender_: TODO, msg_date_: TODO, indx_: TODO)
}

/** @customConstructor pda_npc_tab */
declare class pda_npc_tab extends CUIScriptWnd {
  constructor(arg0: TODO)
  __finalize(): TODO
  InitControls(): TODO
  InitCallBacks(): TODO
  Update(): TODO
  Reset(info: TODO): TODO
  Reset_data(): TODO
  OnSelectMessage(): TODO
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
}
