/** @noSelfInFile */

declare namespace xr_effects {
  export function clear_smart_terrain(actor: CGameObject, npc: CGameObject, smart_name: string): void
  export function create_squad(actor: CGameObject, npc: CGameObject, squad_id: number, smart_name: string): void
  export function create_squad_member(actor: CGameObject, npc: CGameObject, member_section: string, squad_story_id: string, spawn_point?: string): void
  export function complete_task_inc_goodwill(actor: CGameObject, npc: CGameObject, by: number, faction: Community): void
  export function disable_anomaly(actor: CGameObject, npc: CGameObject, anomaly_story_id: string | string): void
  export function enable_anomaly(actor: CGameObject, npc: CGameObject, anomaly_story_id: string | string): void
  export function fail_task_dec_goodwill(actor: CGameObject, npc: CGameObject, by: number, faction: Community): void
  export function give_actor(actor: CGameObject, npc: CGameObject, ...sections: string[]): void
  export function give_task(actor: CGameObject, npc: CGameObject, task_id: string): void
  export function heal_squad(actor: CGameObject, npc: CGameObject, squad_story_id: string): void
  export function kill_squad(actor: CGameObject, npc: CGameObject, squad_story_id: string): void
  export function launch_signal_rocket(actor: CGameObject, npc: CGameObject, rocket_name: string): void
  export function make_actor_visible_to_npc(actor: CGameObject, npc: CGameObject): void
  export function remove_squad(actor: CGameObject, npc: CGameObject, squad_story_id: string): void
  export function reward_random_money(actor: CGameObject, npc: CGameObject, min: number | string, max: number | string): void
  export function reward_random_item(actor: CGameObject, npc: CGameObject, ...sections: Item[]): void
  export function reward_stash(actor: CGameObject, npc: CGameObject, random: boolean): void
  export function reward_item(actor: CGameObject, npc: CGameObject, section: Item): void
  export function reward_item_cost_mult_and_remove(
    actor: CGameObject,
    npc: CGameObject,
    section: Item,
    cost_mult?: string | number,
    remove_items?: number | string
  ): void
  export function remove_item(actor: CGameObject, npc: CGameObject, section: Item, count: number | string): void
  export function spawn_item_to_npc(actor: CGameObject, npc: CGameObject, section: Item): void
  export function show_csky_squads_on_map(actor: CGameObject, npc: CGameObject): void
  export function start_surge(actor: CGameObject, npc: CGameObject): void
  export function stop_surge(actor: CGameObject, npc: CGameObject): void
  export function set_speaker_as_enemy(actor: CGameObject, npc: CGameObject): void
  export function set_active_task(actor: CGameObject, npc: CGameObject, task: CGameTask): void
  // --- auto-added by audit-coverage (missing from hand-refined types; refine by hand) ---
  export const blacklisted_maps: TODO
  export function unlock_note_mysteries_of_the_zone(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function unlock_note_living_legend(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function unlock_note_mortal_sin(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function remove_quest_item(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function prepare_reward_money(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function prepare_reward_item(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function give_reward(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function stalker_ceasefire(): void
  export function reward_random_money_by_dist(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function spawn_item_at_pos(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function give_letter(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function increase_rank(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function increase_rep(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function decrease_rank(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function decrease_rep(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function set_task_stage(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function open_route(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function snd_volume_off(): void
  export function snd_volume_on(): void
  export function se_clear_var(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function disable_meet_nimble_info(): void
  export function bridge_down(): void
  export function bridge_up(): void
  export function bridge_stop(): void
  export function anim_obj_down(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function anim_obj_up(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function anim_obj_stop(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function disable_begin_the_battle(): void
  export function teleport_for_totaliz_out(first_speaker: TODO, second_speaker: TODO): void
  export function devushka_quest_one_reward(first_speaker: TODO, second_speaker: TODO): void
  export function spawn_strelok_notes(): void
  export function spawn_wpn_gauss_quest(): void
  export function lttz_ll_take_wpn_gauss_quest(actor: CGameObject, npc: CGameObject): void
  export function lttz_ll_take_strelok_notes(actor: CGameObject, npc: CGameObject): void
  export function spawn_x8_documents(): void
  export function spawn_monolith_shard(): void
  export function lttz_ll_take_x8_documents(actor: CGameObject, npc: CGameObject): void
  export function lttz_ll_give_wpn_gauss_quest(first_speaker: TODO, second_speaker: TODO): void
  export function lttz_ll_give_gauss_ammo(first_speaker: TODO, second_speaker: TODO): void
  export function lttz_ll_take_monolith_shard(actor: CGameObject, npc: CGameObject): void
  export function lttz_ll_give_strelok_pendrive(first_speaker: TODO, second_speaker: TODO): void
  export function lttz_ll_take_strelok_pendrive(actor: CGameObject, npc: CGameObject): void
  export function lttz_ll_give_doctor_artefact(first_speaker: TODO, second_speaker: TODO): void
  export function spawn_stitch_decoder(): void
  export function lttz_ms_take_stitch_decoder(actor: CGameObject, npc: CGameObject): void
  export function lttz_ms_take_attackers_pda(actor: CGameObject, npc: CGameObject): void
  export function create_special_task_squad(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function spawn_contact_lost_pda(): void
  export function lttz_ms_take_contact_lost_pda(actor: CGameObject, npc: CGameObject): void
  export function gen_stitch_message(): void
  export function premature_emission(actor: CGameObject, npc: CGameObject): void
  export function lttz_oa_give_decryption_radio(first_speaker: TODO, second_speaker: TODO): void
  export function lttz_ll_take_zat_b40_sarge_pda(actor: CGameObject, npc: CGameObject): void
  export function lttz_oa_take_decryption_radio(actor: CGameObject, npc: CGameObject): void
  export function intercepted_transmission(): void
  export function set_squad_enemy_lttz(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function yanov_invitation(): void
  export function yanov_invitation2(): void
  export function lttz_oa_give_special_delivery_case(first_speaker: TODO, second_speaker: TODO): void
  export function lttz_oa_take_special_delivery_case(actor: CGameObject, npc: CGameObject): void
  export function lttz_oa_give_army_isg_spy_pendrive(first_speaker: TODO, second_speaker: TODO): void
  export function lttz_oa_take_army_isg_spy_pendrive(actor: CGameObject, npc: CGameObject): void
  export function spawn_jupiter_documents(): void
  export function lttz_oa_take_jupiter_documents(actor: CGameObject, npc: CGameObject): void
  export function pripyat_strelok_message(): void
  export function pripyat_rogue_message(): void
  export function lttz_oa_take_drug_psy_blockade(actor: CGameObject, npc: CGameObject): void
  export function pripyat_stitch_message(): void
  export function pripyat_degtyarev_message(): void
  export function pripyat_strelok_message2(): void
  export function pripyat_unisg_message(): void
  export function drx_sl_meet_random_honcho(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function drx_sl_change_factions(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function drx_sl_setup_questlines(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function drx_sl_cancel_questlines(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function drx_sl_money_task_payment(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function drx_sl_find_wish_granter(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function drx_sl_reward_random_rifle(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function drx_sl_reward_random_artefact(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function drx_sl_reset_stored_task(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function drx_sl_unregister_task_giver(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function drx_sl_unregister_hostage_giver(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function drx_sl_decrease_sl_tasks_count(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function inc_task_stage(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function dec_task_stage(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function set_smart_faction(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function inc_goodwill_by_tasker_comm(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function inc_goodwill_by_tasker_id(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function dec_goodwill_by_tasker_id(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function reward_money(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function remove_special_task_squad(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function reset_task_target_anomaly(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function reset_warfare_escort_task(): void
  export function setup_task_target_anomaly(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function force_talk(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function unlock_smart(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function update_npc_logic(actor: CGameObject, object: TODO, p: AnyTable): void
  export function update_obj_logic(actor: CGameObject, object: TODO, p: AnyTable): void
  export function disable_ui(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function disable_ui_only(actor: CGameObject, npc: CGameObject): void
  export function disable_nv(actor: CGameObject, npc: CGameObject): void
  export function disable_ui_lite_with_imput(actor: CGameObject, npc: CGameObject): void
  export function disable_ui_lite(actor: CGameObject, npc: CGameObject): void
  export function disable_ui_inventory(actor: CGameObject, npc: CGameObject): void
  export function enable_ui(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function enable_ui_lite_with_imput(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function enable_ui_lite(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function enable_nv_and_imput(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function enable_imput(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function enable_nv(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function run_cam_effector(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function stop_cam_effector(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function run_cam_effector_global(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function cam_effector_callback(): void
  export function run_postprocess(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function stop_postprocess(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function run_tutorial(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function jup_b32_place_scanner(actor: CGameObject, npc: CGameObject): void
  export function jup_b32_pda_check(actor: CGameObject, npc: CGameObject): void
  export function pri_b306_generator_start(actor: CGameObject, npc: CGameObject): void
  export function jup_b206_get_plant(actor: CGameObject, npc: CGameObject): void
  export function pas_b400_switcher(actor: CGameObject, npc: CGameObject): void
  export function jup_b209_place_scanner(actor: CGameObject, npc: CGameObject): void
  export function jup_b9_heli_1_searching(actor: CGameObject, npc: CGameObject): void
  export function pri_a18_use_idol(actor: CGameObject, npc: CGameObject): void
  export function jup_b8_heli_4_searching(actor: CGameObject, npc: CGameObject): void
  export function jup_b10_ufo_searching(actor: CGameObject, npc: CGameObject): void
  export function zat_b101_heli_5_searching(actor: CGameObject, npc: CGameObject): void
  export function zat_b28_heli_3_searching(actor: CGameObject, npc: CGameObject): void
  export function zat_b100_heli_2_searching(actor: CGameObject, npc: CGameObject): void
  export function teleport_actor(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function teleport_npc_lvid(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function teleport_npc_pos(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function teleport_squad_lvid(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function teleport_npc(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function teleport_npc_by_story_id(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function teleport_squad(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function jup_teleport_actor(actor: CGameObject, npc: CGameObject): void
  export function give_items(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function give_item(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function play_particle_on_path(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function send_tip(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function send_tip_task(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function hit_npc(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function hit_obj(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function hit_obj_chemical(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function hit_obj_fire_wound(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function hit_by_killer(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function hit_npc_from_actor(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function restore_health_portion(actor: CGameObject, npc: CGameObject): void
  export function restore_health(actor: CGameObject, npc: CGameObject): void
  export function make_enemy(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function sniper_fire_mode(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function kill_npc(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function remove_npc(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function inc_counter(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function dec_counter(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function set_counter(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function actor_punch(npc: CGameObject): void
  export function clearAbuse(npc: CGameObject): void
  export function turn_off_underpass_lamps(actor: CGameObject, npc: CGameObject): void
  export function turn_off(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function turn_off_object(actor: CGameObject, npc: CGameObject): void
  export function turn_on(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function turn_on_and_force(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function turn_off_and_force(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function turn_on_object(actor: CGameObject, npc: CGameObject): void
  export function disable_combat_handler(actor: CGameObject, npc: CGameObject): void
  export function disable_combat_ignore_handler(actor: CGameObject, npc: CGameObject): void
  export function heli_start_flame(actor: CGameObject, npc: CGameObject): void
  export function heli_die(actor: CGameObject, npc: CGameObject): void
  export function set_weather(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function update_weather(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function game_disconnect(actor: CGameObject, npc: CGameObject): void
  export function game_credits(actor: CGameObject, npc: CGameObject): void
  export function game_over(actor: CGameObject, npc: CGameObject): void
  export function after_credits(actor: CGameObject, npc: CGameObject): void
  export function before_credits(actor: CGameObject, npc: CGameObject): void
  export function on_tutor_gameover_stop(): void
  export function on_tutor_gameover_quickload(): void
  export function get_stalker_for_new_job(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function switch_to_desired_job(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function spawn_object(actor: CGameObject, obj: CGameObject, p: AnyTable): void
  export function jup_b219_save_pos(): void
  export function jup_b219_restore_gate(): void
  export function spawn_corpse(actor: CGameObject, obj: CGameObject, p: AnyTable): void
  export function spawn_object_in(actor: CGameObject, obj: CGameObject, p: AnyTable): void
  export function spawn_npc_in_zone(actor: CGameObject, obj: CGameObject, p: AnyTable): void
  export function destroy_object(actor: CGameObject, obj: CGameObject, p: AnyTable): void
  export function activate_weapon_slot(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function anim_obj_forward(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function anim_obj_backward(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function play_sound_on_actor(actor: CGameObject, obj: CGameObject, p: AnyTable): void
  export function play_sound(actor: CGameObject, obj: CGameObject, p: AnyTable): void
  export function play_sound_by_story(actor: CGameObject, obj: CGameObject, p: AnyTable): void
  export function stop_sound(actor: CGameObject, npc: CGameObject): void
  export function play_sound_looped(actor: CGameObject, obj: CGameObject, p: AnyTable): void
  export function stop_sound_looped(actor: CGameObject, obj: CGameObject): void
  export function barrel_explode(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function play_inv_repair_kit_use_fast_2p8(): void
  export function play_inv_repair_kit_use_fast(): void
  export function play_inv_repair_kit_with_brushes(): void
  export function play_inv_repair_sewing_kit(): void
  export function play_inv_repair_sewing_kit_fast(): void
  export function play_inv_repair_spray_oil(): void
  export function play_inv_repair_brushes(): void
  export function play_inv_repair_kit(): void
  export function play_inv_drink_flask_2(): void
  export function play_inv_cooking(): void
  export function play_inv_cooking_cooker(): void
  export function play_inv_cooking_stove(): void
  export function play_inv_aam_open(): void
  export function play_inv_aam_close(): void
  export function play_inv_aac_open(): void
  export function play_inv_aac_close(): void
  export function play_inv_iam_open(): void
  export function play_inv_iam_close(): void
  export function play_inv_lead_open(): void
  export function play_inv_lead_close(): void
  export function play_inv_batteries_switch(): void
  export function play_inv_mask_clean(): void
  export function play_inv_drop(): void
  export function play_inv_empty(): void
  export function play_inv_smoke_bag_open(): void
  export function play_inv_eat_can_imm(): void
  export function play_inv_open(): void
  export function play_inv_briefcase_light_open(): void
  export function play_inv_disassemble_metal_fast(): void
  export function play_inv_disassemble_cloth_fast(): void
  export function play_inv_tear_patch(): void
  export function flush_smart_terrain(actor: CGameObject, obj: CGameObject, p: AnyTable): void
  export function set_task_completed(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function set_task_failed(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function actor_friend(actor: CGameObject, npc: CGameObject): void
  export function actor_neutral(actor: CGameObject, npc: CGameObject): void
  export function actor_enemy(actor: CGameObject, npc: CGameObject): void
  export function set_squad_neutral_to_actor(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function set_squad_friend_to_actor(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function set_squad_enemy_to_actor(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function set_npc_sympathy(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function set_squad_goodwill(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function set_squad_goodwill_to_npc(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function inc_faction_goodwill_to_actor(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function dec_faction_goodwill_to_actor(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function kill_actor(actor: CGameObject, npc: CGameObject): void
  export function give_treasure(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function set_surge_mess_and_task(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function make_actor_visible_to_squad(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function pstor_set(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function pstor_reset(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function stop_sr_cutscene(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function add_map_spot(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function remove_map_spot(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function add_cs_text(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function del_cs_text(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function give_money_to_npc(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function seize_money_to_npc(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function relocate_item(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function set_squads_enemies(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function jup_b16_play_particle_and_sound(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function set_bloodsucker_state(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function drop_object_item_on_point(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function scenario_autosave(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function zat_b29_create_random_infop(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function give_item_b29(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function relocate_item_b29(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function reset_sound_npc(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function jup_b202_inventory_box_relocate(actor: CGameObject, npc: CGameObject): void
  export function clear_box(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function activate_weapon(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function set_game_time(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function forward_game_time(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function stop_tutorial(): void
  export function jup_b10_spawn_drunk_dead_items(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function pick_artefact_from_anomaly(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function anomaly_turn_off(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function anomaly_turn_on(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function zat_b202_spawn_random_loot(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function zat_a1_tutorial_end_give(actor: CGameObject, npc: CGameObject): void
  export function oasis_heal(): void
  export function jup_b221_play_main(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function pas_b400_play_particle(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function pas_b400_stop_particle(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function damage_pri_a17_gauss(): void
  export function pri_a17_hard_animation_reset(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function jup_b217_hard_animation_reset(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function mech_discount(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function polter_actor_ignore(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function burer_force_gravi_attack(actor: CGameObject, npc: CGameObject): void
  export function burer_force_anti_aim(actor: CGameObject, npc: CGameObject): void
  export function show_freeplay_dialog(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function get_best_detector(npc: CGameObject): void
  export function hide_best_detector(npc: CGameObject): void
  export function pri_a18_radio_start(actor: CGameObject, npc: CGameObject): void
  export function pri_a17_ice_climb_end(actor: CGameObject, npc: CGameObject): void
  export function jup_b219_opening(actor: CGameObject, npc: CGameObject): void
  export function jup_b219_entering_underpass(actor: CGameObject, npc: CGameObject): void
  export function pri_a17_pray_start(actor: CGameObject, npc: CGameObject): void
  export function zat_b38_open_info(actor: CGameObject, npc: CGameObject): void
  export function zat_b38_switch_info(actor: CGameObject, npc: CGameObject): void
  export function zat_b38_cop_dead(actor: CGameObject, npc: CGameObject): void
  export function jup_b15_zulus_drink_anim_info(actor: CGameObject, npc: CGameObject): void
  export function pri_a17_preacher_death(actor: CGameObject, npc: CGameObject): void
  export function zat_b3_tech_surprise_anim_end(actor: CGameObject, npc: CGameObject): void
  export function zat_b3_tech_waked_up(actor: CGameObject, npc: CGameObject): void
  export function zat_b3_tech_drinked_out(actor: CGameObject, npc: CGameObject): void
  export function pri_a28_kirillov_hq_online(actor: CGameObject, npc: CGameObject): void
  export function pri_a20_radio_start(actor: CGameObject, npc: CGameObject): void
  export function pri_a22_kovalski_speak(actor: CGameObject, npc: CGameObject): void
  export function zat_b38_underground_door_open(actor: CGameObject, npc: CGameObject): void
  export function zat_b38_jump_tonnel_info(actor: CGameObject, npc: CGameObject): void
  export function jup_a9_cam1_actor_anim_end(actor: CGameObject, npc: CGameObject): void
  export function pri_a28_talk_ssu_video_end(actor: CGameObject, npc: CGameObject): void
  export function set_torch_state(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function disable_actor_nightvision(actor: CGameObject, npc: CGameObject): void
  export function enable_actor_nightvision(actor: CGameObject, npc: CGameObject): void
  export function disable_actor_torch(actor: CGameObject, npc: CGameObject): void
  export function enable_actor_torch(actor: CGameObject, npc: CGameObject): void
  export function create_cutscene_actor_with_weapon(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function set_force_sleep_animation(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function release_force_sleep_animation(actor: CGameObject, npc: CGameObject): void
  export function zat_b33_pic_snag_container(actor: CGameObject, npc: CGameObject): void
  export function set_visual_memory_enabled(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function disable_memory_object(actor: CGameObject, npc: CGameObject): void
  export function zat_b202_spawn_b33_loot(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function set_monster_animation(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function clear_monster_animation(actor: CGameObject, npc: CGameObject): void
  export function save_actor_position(): void
  export function restore_actor_position(): void
  export function upgrade_hint(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function force_obj(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function pri_a28_check_zones(): void
  export function eat_vodka_script(): void
  export function jup_b200_count_found(actor: CGameObject): void
  export function sr_teleport(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function make_a_wish(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function clear_logic(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function set_new_scheme_and_logic(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function set_script_danger(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function spawn_npc_at_position(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function kill_obj_on_job(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function obj_at_job_switch_section(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function change_visual(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function switch_offline(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function update_visual(id: TODO, vis: TODO): void
  export function up_start(): void
  export function up_freeplay(): void
  export function yan_gluk(actor: CGameObject, npc: CGameObject): void
  export function yan_saharov_message(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function x18_gluk(actor: CGameObject, npc: CGameObject): void
  export function end_yantar_dream(actor: CGameObject, npc: CGameObject): void
  export function end_x18_dream(actor: CGameObject, npc: CGameObject): void
  export function end_radar_dream(actor: CGameObject, npc: CGameObject): void
  export function end_warlab_dream(actor: CGameObject, npc: CGameObject): void
  export function end_final_peace(actor: CGameObject, npc: CGameObject): void
  export function aes_earthshake(npc: CGameObject): void
  export function oso_init_dialod(): void
  export function warlab_stop_particle(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function play_snd_from_obj(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function play_snd(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function erase_pstor_ctime(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function show_health(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function disable_monolith_zones(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function disable_generator_zones(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function bar_arena_hit(actor: CGameObject, npc: CGameObject): void
  export function bar_arena_introduce(actor: CGameObject, npc: CGameObject): void
  export function bar_arena_fight_begin(actor: CGameObject, npc: CGameObject): void
  export function bar_arena_fight_10(actor: CGameObject, npc: CGameObject): void
  export function bar_arena_fight_20(actor: CGameObject, npc: CGameObject): void
  export function bar_arena_fight_30(actor: CGameObject, npc: CGameObject): void
  export function bar_arena_fight_40(actor: CGameObject, npc: CGameObject): void
  export function bar_arena_fight_50(actor: CGameObject, npc: CGameObject): void
  export function bar_arena_fight_60(actor: CGameObject, npc: CGameObject): void
  export function bar_arena_fight_70(actor: CGameObject, npc: CGameObject): void
  export function bar_arena_fight_80(actor: CGameObject, npc: CGameObject): void
  export function bar_arena_fight_90(actor: CGameObject, npc: CGameObject): void
  export function bar_arena_check_lose(actor: CGameObject, npc: CGameObject): void
  export function bar_arena_after_fight(actor: CGameObject, npc: CGameObject): void
  export function bar_arena_actor_afraid(actor: CGameObject, npc: CGameObject): void
  export function bar_arena_actor_dead(actor: CGameObject, npc: CGameObject): void
  export function bar_arena_teleport(actor: CGameObject, npc: CGameObject): void
  export function bar_arena_weapon_slot(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function bar_arena_teleport_2(actor: CGameObject, npc: CGameObject): void
  export function purge_zone(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function clear_weather(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function actor_surge_immuned(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function force_always_online(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function set_smart_alarm_status(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function setup_base_defense_fail_conditions(actor: CGameObject, npc: CGameObject, p: AnyTable): void
  export function awr_timer_msg_off(actor: CGameObject, npc: CGameObject, p: AnyTable): void
}
