// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace dialog_manager {
  export const RandomVal: TODO
  export const disabled_phrases: TODO
  export const phrase_table: TODO
  export const priority_table: TODO
  export function action(PT_subtable: TODO, PRT_subtable: TODO, cur_phrase_id: TODO, npc: TODO): TODO
  export function action_anomalies_dialogs(npc: TODO, actor: TODO, dialog_name: TODO, id: TODO): TODO
  export function action_disable_phrase(fs: TODO, ss: TODO, dn: TODO, pi: TODO): TODO
  export function action_disable_quest_phrase(fs: TODO, ss: TODO, dn: TODO, pi: TODO): TODO
  export function action_hello_dialogs(npc: TODO, actor: TODO, dialog_name: TODO, id: TODO): TODO
  export function action_information_dialogs(npc: TODO, actor: TODO, dialog_name: TODO, id: TODO): TODO
  export function action_job_dialogs(npc: TODO, actor: TODO, dialog_name: TODO, id: TODO): TODO
  export function action_tips_dialogs(npc: TODO, actor: TODO, dialog_name: TODO, id: TODO): TODO
  export function add_dialog(p_id: TODO, id: TODO, phrase_id: TODO, cond: TODO, act: TODO): TODO
  export function add_script_dialog(p_id: TODO, id: TODO, phrase_id: TODO, cond: TODO, act: TODO): TODO
  export function calculate_priority(PRT_subtable: TODO, PTID_subtable: TODO, npc: TODO, phrase_id: TODO): TODO
  export function create_bye_phrase(): TODO
  export function dm_agr_u_bandit_boss_arrived(dialog: TODO): TODO
  export function dm_agr_u_bandit_boss_ask(dialog: TODO): TODO
  export function dm_agr_u_bandit_boss_give_docs(dialog: TODO, init_pid: TODO, base_pid: TODO): TODO
  export function dm_agr_u_bandit_boss_reask(dialog: TODO, base_pid: TODO, next_pid: TODO): TODO
  export function dm_agr_u_bandit_boss_start(dialog: TODO): TODO
  export function dm_ashot_and_yar(a: TODO, b: TODO): TODO
  export function dm_init_dynamic_ashot_and_yar_dialog(dialog: TODO): TODO
  export function dm_init_dynamic_broker_dialog(dialog: TODO): TODO
  export function dm_init_dynamic_repair_dialog(dialog: TODO): TODO
  export function dm_init_dynamic_task_cancel_dialog(dialog: TODO): TODO
  export function dm_init_dynamic_task_completed_dialog(dialog: TODO): TODO
  export function dm_init_dynamic_task_dialog(dialog: TODO): TODO
  export function dm_init_sim_dynamic_task_cancel_dialog(dialog: TODO): TODO
  export function dm_init_sim_dynamic_task_completed_dialog(dialog: TODO): TODO
  export function dm_init_sim_dynamic_task_dialog(dialog: TODO): TODO
  export function dm_init_surrender_dialog(dialog: TODO): TODO
  export function drx_sl_cf_task_completed_dialog(dialog: TODO): TODO
  export function drx_sl_init_change_faction_dialog(dialog: TODO): TODO
  export function drx_sl_init_honcho_meet_dialog(dialog: TODO): TODO
  export function drx_sl_init_mechanic_task_dialog(dialog: TODO): TODO
  export function drx_sl_task_completed_dialog(dialog: TODO): TODO
  export function fill_phrase_table(): TODO
  export function fill_priority_anomalies_table(actor: TODO, npc: TODO, dialog_name: TODO, phrase_id: TODO): TODO
  export function fill_priority_hello_table(actor: TODO, npc: TODO, dialog_name: TODO, phrase_id: TODO): TODO
  export function fill_priority_information_table(actor: TODO, npc: TODO, dialog_name: TODO, phrase_id: TODO): TODO
  export function fill_priority_job_table(actor: TODO, npc: TODO, dialog_name: TODO, phrase_id: TODO): TODO
  export function fill_priority_table(npc: TODO, PT_subtable: TODO, PRT_subtable: TODO): TODO
  export function fill_priority_tips_table(actor: TODO, npc: TODO, dialog_name: TODO, phrase_id: TODO): TODO
  export function get_highest_priority_phrase(PT_subtable: TODO, PRT_subtable: TODO, npc: TODO, phrase_id: TODO): TODO
  export function get_id(): TODO
  export function init_hello_dialogs(dialog: TODO): TODO
  export function init_new_dialog(dialog: TODO): TODO
  export function init_start_dialogs(dialog: TODO, str: TODO): TODO
  export function is_highest_priority_phrase(PT_subtable: TODO, PRT_subtable: TODO, npc: TODO, phrase_id: TODO): TODO
  export function is_told(npc: TODO, str: TODO): TODO
  export function precondition(npc: TODO, PT_subtable: TODO, PRT_subtable: TODO, phrase_id: TODO, dialog_name: TODO): TODO
  export function precondition_anomalies_dialogs(npc: TODO, actor: TODO, dialog_name: TODO, parent_id: TODO, id: TODO): TODO
  export function precondition_anomalies_dialogs_do_not_know(npc: TODO, actor: TODO, dialog_name: TODO, parent_id: TODO, id: TODO): TODO
  export function precondition_anomalies_dialogs_no_more(npc: TODO, actor: TODO, dialog_name: TODO, parent_id: TODO, id: TODO): TODO
  export function precondition_hello_dialogs(npc: TODO, actor: TODO, dialog_name: TODO, parent_id: TODO, id: TODO): TODO
  export function precondition_information_dialogs(npc: TODO, actor: TODO, dialog_name: TODO, parent_id: TODO, id: TODO): TODO
  export function precondition_information_dialogs_do_not_know(npc: TODO, actor: TODO, dialog_name: TODO, parent_id: TODO, id: TODO): TODO
  export function precondition_information_dialogs_no_more(npc: TODO, actor: TODO, dialog_name: TODO, parent_id: TODO, id: TODO): TODO
  export function precondition_is_phrase_disabled(fs: TODO, ss: TODO, dn: TODO, ppi: TODO, pi: TODO): TODO
  export function precondition_job_dialogs(npc: TODO, actor: TODO, dialog_name: TODO, parent_id: TODO, id: TODO): TODO
  export function precondition_job_dialogs_do_not_know(npc: TODO, actor: TODO, dialog_name: TODO, parent_id: TODO, id: TODO): TODO
  export function precondition_job_dialogs_no_more(npc: TODO, actor: TODO, dialog_name: TODO, parent_id: TODO, id: TODO): TODO
  export function precondition_no_more(npc: TODO, str: TODO, phrase_id: TODO): TODO
  export function precondition_tips_dialogs(npc: TODO, actor: TODO, dialog_name: TODO, parent_id: TODO, id: TODO): TODO
  export function precondition_tips_dialogs_do_not_know(npc: TODO, actor: TODO, dialog_name: TODO, parent_id: TODO, id: TODO): TODO
  export function precondition_tips_dialogs_no_more(npc: TODO, actor: TODO, dialog_name: TODO, parent_id: TODO, id: TODO): TODO
  export function reset_phrase_priority(PT_subtable: TODO, PRT_subtable: TODO, npc: TODO, phrase_id: TODO): TODO
  export function set_phrase_highest_priority(PT_subtable: TODO, PRT_subtable: TODO, npc: TODO, phrase_id: TODO): TODO
  export function told(PRT_subtable: TODO, npc: TODO): TODO
  export function uni_dialog_precond(first_speaker: TODO, second_speaker: TODO): TODO
}
