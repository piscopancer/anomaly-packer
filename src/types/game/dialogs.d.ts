/** @noSelfInFile */

declare namespace dialogs {
  type RelocationType = 'in' | 'out'
  export function break_dialog(speaker_1: CGameObject, speaker_2: CGameObject): void
  /**
   * Give actor money or transfer actor's money to an NPC.
   * @param type If `in` money will be given to the actor, `npc` makes no difference. If `out` money will take from the actor and given to the `npc`
   */
  export function relocate_money(npc: CGameObject | null, sum: number, type: RelocationType): void
  /**
   * @param speaker_1 unused
   * @param speaker_2 unused
   */
  export function relocate_money_to_actor(speaker_1: null, speaker_2: null, sum: number): void
  export function relocate_money_from_actor(speaker_1: CGameObject, speaker_2: CGameObject, sum: number): void
  /**
   * @param npc if specified, will receive items in their invetory, otherwise items will be simply removed
   * @param type `in` to actor, `out` from actor
   */
  export function relocate_item_section(npc: CGameObject | null, section: string, type: RelocationType, amount?: number): void
  export function relocate_item_section_to_actor(speaker_1: CGameObject, speaker_2: CGameObject, section: string, amount?: number): void
  export function relocate_item_section_from_actor(speaker_1: CGameObject, speaker_2: CGameObject, section: string, amount?: number): void
  // --- auto-added by audit-coverage (missing from hand-refined types; refine by hand) ---
  export function can_do_task_mysteries_of_the_zone(a: CGameObject, b: CGameObject): boolean
  export function give_task_mysteries_of_the_zone(a: CGameObject, b: CGameObject): void
  export function warfare_disabled(a: CGameObject, b: CGameObject): boolean
  export function get_npc_task_limit(): number
  export function has_tasks_by_npc(a: CGameObject, b: CGameObject): boolean
  export function not_has_tasks_by_npc(a: CGameObject, b: CGameObject): boolean
  export function confirm_task_stack(a: CGameObject, b: CGameObject): void
  export function clear_task_stack(a: CGameObject, b: CGameObject): void
  export function check_task_stack(a: CGameObject, b: CGameObject): boolean
  export const last_task_id: string | undefined
  export function drx_sl_dont_has_npc_task(a: CGameObject, b: CGameObject): boolean
  export function drx_sl_actor_can_change_this_faction(a: CGameObject, b: CGameObject): boolean
  export function drx_sl_actor_has_finished_task(a: CGameObject, b: CGameObject): boolean
  export function drx_sl_actor_has_finished_cf_task(a: CGameObject, b: CGameObject): boolean
  export function drx_sl_is_endgame(a: CGameObject, b: CGameObject): boolean
  export function drx_sl_is_not_endgame(a: CGameObject, b: CGameObject): boolean
  export function drx_sl_text_honcho_has_storyline_task_to_give(a: CGameObject, b: CGameObject): string
  export function drx_sl_text_mechanic_has_ordered_task_to_give(a: CGameObject, b: CGameObject): string
  export function drx_sl_text_npc_has_change_factions_task_to_give(a: CGameObject, b: CGameObject): string
  export function drx_sl_text_fetch_task(a: CGameObject, b: CGameObject): string
  export function drx_sl_text_task_finish(a: CGameObject, b: CGameObject): string
  export function drx_sl_text_cf_task_finish(a: CGameObject, b: CGameObject): string
  export function drx_sl_text_end_game(a: CGameObject, b: CGameObject): string
  export function drx_sl_set_finished_task_complete(a: CGameObject, b: CGameObject): void
  export function drx_sl_set_finished_task_complete_endgame(a: CGameObject, b: CGameObject): void
  export function drx_sl_set_finished_cf_task_complete(a: CGameObject, b: CGameObject): void
  export function npc_has_ordered_task_to_give(a: CGameObject, b: CGameObject): boolean
  export function text_npc_has_ordered_task_to_give(a: CGameObject, b: CGameObject): string
  export function text_sim_npc_has_ordered_task_to_give(a: CGameObject, b: CGameObject): string
  export function text_task_finish(a: CGameObject, b: CGameObject): string
  export function text_sim_task_finish(a: CGameObject, b: CGameObject): string
  export function task_is_fetch_task(a: CGameObject, b: CGameObject): boolean
  export function not_task_is_fetch_task(a: CGameObject, b: CGameObject): boolean
  export function npc_clear_skipped_tasks(a: CGameObject, b: CGameObject): void
  export function condition_actor_has_pda(a: CGameObject, b: CGameObject): boolean
  export function actor_has_finished_ordered_task(a: CGameObject, b: CGameObject): boolean
  export function actor_has_not_finished_ordered_task(a: CGameObject, b: CGameObject): boolean
  export function actor_sim_has_finished_ordered_task(a: CGameObject, b: CGameObject): boolean
  export function actor_sim_has_not_finished_ordered_task(a: CGameObject, b: CGameObject): boolean
  export function npc_sim_set_finished_task_complete(a: CGameObject, b: CGameObject): void
  export function drx_sl_give_sl_task(a: CGameObject, b: CGameObject): void
  export function drx_sl_give_cf_task(a: CGameObject, b: CGameObject): void
  export function drx_sl_give_mechanic_task(a: CGameObject, b: CGameObject): void
  export function npc_give_last_task_id(a: CGameObject, b: CGameObject): void
  export function npc_sim_give_last_task_id(a: CGameObject, b: CGameObject): void
  export function npc_give_first_available_task(a: CGameObject, b: CGameObject): void
  export function npc_sim_give_first_available_task(a: CGameObject, b: CGameObject): void
  export function npc_is_trader(a: CGameObject, b: CGameObject): void
  export function npc_is_tech(a: CGameObject, b: CGameObject): void
  export function rescue_hostage(a: CGameObject, b: CGameObject): void
  export function generate_available_tasks(a: CGameObject, b: CGameObject): void
  export function sim_generate_available_tasks(a: CGameObject, b: CGameObject): void
  export function text_npc_has_task(a: CGameObject, b: CGameObject): string
  export function npc_has_task(a: CGameObject, b: CGameObject): boolean
  export function npc_give_task(a: CGameObject, b: CGameObject): void
  export function npc_skip_task(a: CGameObject, b: CGameObject): void
  export function actor_has_finished_task(a: CGameObject, b: CGameObject): boolean
  export function sim_actor_has_finished_task(a: CGameObject, b: CGameObject): boolean
  export function text_npc_task_finish(a: CGameObject, b: CGameObject): string
  export function npc_set_finished_task_complete(a: CGameObject, b: CGameObject): void
  export function actor_has_ongoing_task(a: CGameObject, b: CGameObject): boolean
  export function sim_actor_has_ongoing_task(a: CGameObject, b: CGameObject): boolean
  export function text_npc_has_cancel_task(a: CGameObject, b: CGameObject): string
  export function npc_has_cancel_task(a: CGameObject, b: CGameObject): boolean
  export function npc_cancel_task(a: CGameObject, b: CGameObject): void
  export function npc_skip_cancel_task(a: CGameObject, b: CGameObject): void
  export function text_actor_cancel_task(a: CGameObject, b: CGameObject): string
  export function text_task_cancel(a: CGameObject, b: CGameObject): string
  export function free_trade_with_npc(a: CGameObject, b: CGameObject): void
  export function condition_actor_has_valuable_item(a: CGameObject, b: CGameObject): boolean
  export function text_actor_has_valuable_item(a: CGameObject, b: CGameObject): string
  export function text_trade_npc_pda(a: CGameObject, b: CGameObject): string
  export function victim_is_bounty(a: CGameObject, b: CGameObject): boolean
  export function npc_is_surrendered(a: CGameObject, b: CGameObject): boolean
  export function npc_is_not_surrendered(a: CGameObject, b: CGameObject): boolean
  export function victim_surrender(a: CGameObject, b: CGameObject): boolean
  export function victim_no_surrender(a: CGameObject, b: CGameObject): boolean
  export function set_victim_surrendered(a: CGameObject, b: CGameObject): void
  export function surrender_victim_answers_bounty(a: CGameObject, b: CGameObject): string
  export function surrender_victim_answers_1(a: CGameObject, b: CGameObject): string
  export function surrender_victim_answers_2(a: CGameObject, b: CGameObject): string
  export function set_enemy(a: CGameObject, b: CGameObject): void
  export function is_npc_in_current_smart(first_speaker: CGameObject, second_speaker: CGameObject, smart_name: string): boolean
  export function update_npc_dialog(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function disable_talk_self(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function disable_talk_victim(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function punch(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function get_money_then_leave(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function is_wounded(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function is_not_wounded(first_speaker: CGameObject, second_speaker: CGameObject, dn?: string): boolean
  export function actor_have_medkit(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_hasnt_medkit(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_have_bandage(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function transfer_medkit(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function transfer_medkit_to_hip(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function transfer_bandage(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function kill_yourself(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function allow_wounded_dialog(object: CGameObject, victim: CGameObject, id: string): boolean
  export function level_zaton(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function level_jupiter(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function level_pripyat(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function not_level_zaton(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function not_level_jupiter(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function not_level_pripyat(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function is_friend(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function is_not_friend(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function become_friend(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function actor_stalker(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_bandit(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_freedom(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_dolg(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_killer(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_army(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_ecolog(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_csky(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_monolith(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_renegade(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_greh(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_isg(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_zombied(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_not_stalker(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_not_bandit(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_not_freedom(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_not_dolg(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_not_killer(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_not_army(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_not_ecolog(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_not_csky(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_not_monolith(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_not_renegade(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_not_greh(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_not_isg(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_not_zombied(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_true_stalker(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_true_bandit(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_true_freedom(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_true_dolg(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_true_killer(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_true_army(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_true_ecolog(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_true_csky(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_true_monolith(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_true_renegade(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_true_greh(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_true_isg(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_not_true_stalker(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_not_true_bandit(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_not_true_freedom(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_not_true_dolg(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_not_true_killer(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_not_true_army(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_not_true_ecolog(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_not_true_csky(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_not_true_monolith(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_not_true_renegade(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_not_true_greh(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_not_true_isg(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function npc_stalker(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function npc_bandit(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function npc_freedom(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function npc_dolg(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function npc_killer(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function npc_army(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function npc_ecolog(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function npc_csky(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function npc_monolith(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function npc_renegade(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function npc_greh(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function npc_isg(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function is_actor_trustworthy(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function is_actor_not_trustworthy(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function is_actor_experienced(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function is_actor_reliable(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function is_actor_noob(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function has_2000_money(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function trade_init(seller: CGameObject, buyer: CGameObject): void
  export function want_trade(seller: CGameObject, buyer: CGameObject): boolean
  export function dont_want_trade(seller: CGameObject, buyer: CGameObject): boolean
  export function who_is_actor(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_has_item(first_speaker: CGameObject, second_speaker: CGameObject, section: string): boolean
  export function npc_has_item(first_speaker: CGameObject, second_speaker: CGameObject, section: string): boolean
  export function who_is_npc(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function transfer_any_pistol_from_actor(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function is_pistol(npc: CGameObject, item: CGameObject): boolean
  export function have_actor_any_pistol(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function transfer_any_gun_from_actor(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function is_gun(npc: CGameObject, item: CGameObject): boolean
  export function have_actor_any_gun(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function transfer_any_shootgun_from_actor(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function is_shootgun(npc: CGameObject, item: CGameObject): boolean
  export function have_actor_any_shootgun(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function give_suitable_ammo(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function disable_ui(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function disable_ui_only(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function is_surge_running(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function is_surge_not_running(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function quest_dialog_heli_precond(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function quest_dialog_military_precond(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function quest_dialog_squad_precond(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function quest_dialog_toolkits_precond(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function squad_not_in_smart_b101(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function squad_not_in_smart_b103(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function squad_not_in_smart_b104(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function squad_not_in_smart_b213(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function squad_not_in_smart_b214(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function squad_not_in_smart_b304(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function squad_not_in_smart_b303(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function squad_not_in_smart_b40(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function squad_not_in_smart_b18(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function squad_not_in_smart_b6(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function squad_not_in_smart_b205(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function squad_not_in_smart_b47(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function squad_in_smart_zat_base(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function squad_in_smart_jup_b25(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function spartak_is_alive(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function tesak_is_alive(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function gonta_is_alive(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function mityay_is_alive(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function dolg_can_work_for_sci(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function dolg_can_not_work_for_sci(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function freedom_can_work_for_sci(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function freedom_can_not_work_for_sci(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function monolith_leader_is_alive(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function monolith_leader_dead_or_hired(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function monolith_leader_dead_or_dolg(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function monolith_leader_dead_or_freedom(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function medic_magic_potion(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function medic_rad_potion(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function health_care_actor_has_money(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function health_care_actor_has_rad_money(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function health_care_actor_hasnt_money(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function health_care_actor_hasnt_rad_money(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function health_care_actor_transfer_money(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function health_care_actor_transfer_rad_money(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_hip_medic_potion(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function actor_needs_bless(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_needs_health(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_needs_rad_health(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_is_damn_healthy(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_needs_rad_bless(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_wants_rad_bless(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_must_rad_bless(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function leave_zone_save(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function save_uni_travel_zat_to_jup(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function save_uni_travel_zat_to_pri(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function save_uni_travel_jup_to_zat(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function save_uni_travel_jup_to_pri(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function save_uni_travel_pri_to_zat(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function save_uni_travel_pri_to_jup(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function save_jup_b218_travel_jup_to_pas(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function save_pri_a17_hospital_start(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function save_jup_a10_gonna_return_debt(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function save_jup_b6_arrived_to_fen(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function save_jup_b6_arrived_to_ash_heap(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function save_jup_b19_arrived_to_kopachy(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function save_zat_b106_arrived_to_chimera_lair(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function save_zat_b5_met_with_others(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function can_do_alun_riddle_quest(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function is_actor_not_healthy(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function is_actor_healthy(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function is_actor_injured(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function is_actor_irradiated(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function is_actor_injured_irradiated(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function heal_actor_injury(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function heal_actor_radiation(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function heal_actor_injury_radiation(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function st_dm_medic_general_text_1(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function st_dm_medic_general_text_10(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function actor_has_important_documents(a: CGameObject, b: CGameObject): boolean
  export function st_trade_important_documents(a: CGameObject, b: CGameObject, typ: string, txt: string): boolean
  export function st_trade_important_documents_ask(a: CGameObject, b: CGameObject): boolean
  export function st_trade_important_documents_answer(a: CGameObject, b: CGameObject): boolean
  export function trade_important_documents_reward(a: CGameObject, b: CGameObject): void
  export function is_trade_init_accept(a: CGameObject, b: CGameObject): boolean
  export function is_trade_accept(a: CGameObject, b: CGameObject): boolean
  export function is_not_trade_accept(a: CGameObject, b: CGameObject): boolean
  export function st_stalker_trade_dialog_reply(a: CGameObject, b: CGameObject): boolean
  export function st_stalker_trade_dialog_reply_no(a: CGameObject, b: CGameObject): boolean
  export function st_trader_dialog_reply(a: CGameObject, b: CGameObject): boolean
  export function st_mechanic_dialog_reply(a: CGameObject, b: CGameObject): boolean
  export function st_medic_dialog_reply(a: CGameObject, b: CGameObject): boolean
  export function st_bartender_dialog_reply(a: CGameObject, b: CGameObject): boolean
  export function lifestyle_first_time(a: CGameObject, b: CGameObject): boolean
  export function st_lifestyle_ask(a: CGameObject, b: CGameObject): string
  export function st_lifestyle_answer(a: CGameObject, b: CGameObject): string
}
