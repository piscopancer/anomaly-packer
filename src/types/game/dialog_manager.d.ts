/** @noSelfInFile */

declare namespace dialog_manager {
  export const RandomVal: number
  export const disabled_phrases: AnyTable
  export const phrase_table: AnyTable
  export const priority_table: AnyTable
  export function action(PT_subtable: AnyTable, PRT_subtable: AnyTable, cur_phrase_id: string, npc: CGameObject): void
  export function action_anomalies_dialogs(npc: CGameObject, actor: CGameObject, dialog_name: string, id: string): void
  export function action_disable_phrase(fs: CGameObject, ss: CGameObject, dn: string, pi: string): void
  export function action_disable_quest_phrase(fs: CGameObject, ss: CGameObject, dn: string, pi: string): void
  export function action_hello_dialogs(npc: CGameObject, actor: CGameObject, dialog_name: string, id: string): void
  export function action_information_dialogs(npc: CGameObject, actor: CGameObject, dialog_name: string, id: string): void
  export function action_job_dialogs(npc: CGameObject, actor: CGameObject, dialog_name: string, id: string): void
  export function action_tips_dialogs(npc: CGameObject, actor: CGameObject, dialog_name: string, id: string): void
  export function add_dialog(p_id: string | number, id: string | number, phrase_id: string, cond?: string | string[], act?: string | string[]): CPhraseScript | undefined
  export function add_script_dialog(p_id: string | number, id: string | number, phrase_id: string, cond?: string | string[], act?: string | string[]): void
  export function calculate_priority(PRT_subtable: AnyTable, PTID_subtable: AnyTable, npc: CGameObject, phrase_id: string): number | undefined
  export function create_bye_phrase(): string
  export function dm_agr_u_bandit_boss_arrived(dialog: CPhraseDialog): void
  export function dm_agr_u_bandit_boss_ask(dialog: CPhraseDialog): void
  export function dm_agr_u_bandit_boss_give_docs(dialog: CPhraseDialog, init_pid?: string, base_pid?: number): void
  export function dm_agr_u_bandit_boss_reask(dialog: CPhraseDialog, base_pid: number, next_pid: number): void
  export function dm_agr_u_bandit_boss_start(dialog: CPhraseDialog): void
  export function dm_ashot_and_yar(a: CGameObject, b: CGameObject): void
  export function dm_init_dynamic_ashot_and_yar_dialog(dialog: CPhraseDialog): void
  export function dm_init_dynamic_broker_dialog(dialog: CPhraseDialog): void
  export function dm_init_dynamic_repair_dialog(dialog: CPhraseDialog): void
  export function dm_init_dynamic_task_cancel_dialog(dialog: CPhraseDialog): void
  export function dm_init_dynamic_task_completed_dialog(dialog: CPhraseDialog): void
  export function dm_init_dynamic_task_dialog(dialog: CPhraseDialog): void
  export function dm_init_sim_dynamic_task_cancel_dialog(dialog: CPhraseDialog): void
  export function dm_init_sim_dynamic_task_completed_dialog(dialog: CPhraseDialog): void
  export function dm_init_sim_dynamic_task_dialog(dialog: CPhraseDialog): void
  export function dm_init_surrender_dialog(dialog: CPhraseDialog): void
  export function drx_sl_cf_task_completed_dialog(dialog: CPhraseDialog): void
  export function drx_sl_init_change_faction_dialog(dialog: CPhraseDialog): void
  export function drx_sl_init_honcho_meet_dialog(dialog: CPhraseDialog): void
  export function drx_sl_init_mechanic_task_dialog(dialog: CPhraseDialog): void
  export function drx_sl_task_completed_dialog(dialog: CPhraseDialog): void
  export function fill_phrase_table(): void
  export function fill_priority_anomalies_table(actor: CGameObject, npc: CGameObject, dialog_name: string, phrase_id: string): void
  export function fill_priority_hello_table(actor: CGameObject, npc: CGameObject, dialog_name: string, phrase_id: string): void
  export function fill_priority_information_table(actor: CGameObject, npc: CGameObject, dialog_name: string, phrase_id: string): void
  export function fill_priority_job_table(actor: CGameObject, npc: CGameObject, dialog_name: string, phrase_id: string): void
  export function fill_priority_table(npc: CGameObject, PT_subtable: AnyTable, PRT_subtable: AnyTable): void
  export function fill_priority_tips_table(actor: CGameObject, npc: CGameObject, dialog_name: string, phrase_id: string): void
  export function get_highest_priority_phrase(PT_subtable: AnyTable, PRT_subtable: AnyTable, npc: CGameObject, phrase_id: string): LuaMultiReturn<[number, number | string]>
  export function get_id(): number
  export function init_hello_dialogs(dialog: CPhraseDialog): void
  export function init_new_dialog(dialog: CPhraseDialog): void
  export function init_start_dialogs(dialog: CPhraseDialog, str: string): void
  export function is_highest_priority_phrase(PT_subtable: AnyTable, PRT_subtable: AnyTable, npc: CGameObject, phrase_id: string): boolean
  export function is_told(npc: CGameObject, str: string): boolean
  export function precondition(npc: CGameObject, PT_subtable: AnyTable, PRT_subtable: AnyTable, phrase_id: string, dialog_name: string): boolean
  export function precondition_anomalies_dialogs(npc: CGameObject, actor: CGameObject, dialog_name: string, parent_id: string, id: string): boolean
  export function precondition_anomalies_dialogs_do_not_know(npc: CGameObject, actor: CGameObject, dialog_name: string, parent_id: string, id: string): boolean
  export function precondition_anomalies_dialogs_no_more(npc: CGameObject, actor: CGameObject, dialog_name: string, parent_id: string, id: string): boolean
  export function precondition_hello_dialogs(npc: CGameObject, actor: CGameObject, dialog_name: string, parent_id: string, id: string): boolean
  export function precondition_information_dialogs(npc: CGameObject, actor: CGameObject, dialog_name: string, parent_id: string, id: string): boolean
  export function precondition_information_dialogs_do_not_know(npc: CGameObject, actor: CGameObject, dialog_name: string, parent_id: string, id: string): boolean
  export function precondition_information_dialogs_no_more(npc: CGameObject, actor: CGameObject, dialog_name: string, parent_id: string, id: string): boolean
  export function precondition_is_phrase_disabled(fs: CGameObject, ss: CGameObject, dn: string, ppi: string, pi: string): boolean
  export function precondition_job_dialogs(npc: CGameObject, actor: CGameObject, dialog_name: string, parent_id: string, id: string): boolean
  export function precondition_job_dialogs_do_not_know(npc: CGameObject, actor: CGameObject, dialog_name: string, parent_id: string, id: string): boolean
  export function precondition_job_dialogs_no_more(npc: CGameObject, actor: CGameObject, dialog_name: string, parent_id: string, id: string): boolean
  export function precondition_no_more(npc: CGameObject, str: string, phrase_id: string): boolean
  export function precondition_tips_dialogs(npc: CGameObject, actor: CGameObject, dialog_name: string, parent_id: string, id: string): boolean
  export function precondition_tips_dialogs_do_not_know(npc: CGameObject, actor: CGameObject, dialog_name: string, parent_id: string, id: string): boolean
  export function precondition_tips_dialogs_no_more(npc: CGameObject, actor: CGameObject, dialog_name: string, parent_id: string, id: string): boolean
  export function reset_phrase_priority(PT_subtable: AnyTable, PRT_subtable: AnyTable, npc: CGameObject, phrase_id: string): void
  export function set_phrase_highest_priority(PT_subtable: AnyTable, PRT_subtable: AnyTable, npc: CGameObject, phrase_id: string): void
  export function told(PRT_subtable: AnyTable, npc: CGameObject): void
  export function uni_dialog_precond(first_speaker: CGameObject, second_speaker: CGameObject): boolean
}
