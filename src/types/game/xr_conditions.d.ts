/** @noSelfInFile */

declare namespace xr_conditions {
  export function surge_started(): boolean
  // --- auto-added by audit-coverage (missing from hand-refined types; refine by hand) ---
  export function is_actor_enemy_to_faction(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function is_npc_enemy_to_faction(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function toolkit_task_done(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function drugkit_task_done(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function is_actor_from_faction(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function is_warfare(actor: CGameObject, npc: CGameObject): boolean
  export function check_npc_trader(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function check_npc_mechanic(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function check_npc_medic(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function check_npc_barman(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function if_actor_great(actor: CGameObject, npc: CGameObject): boolean
  export function if_actor_powerful(actor: CGameObject, npc: CGameObject): boolean
  export function if_actor_not_powerful(actor: CGameObject, npc: CGameObject): boolean
  export function in_debt(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function if_hip_veteran(actor: CGameObject, npc: CGameObject): boolean
  export function request_to_hip_task(actor: CGameObject): boolean
  export function actor_has_active_item(actor: CGameObject, npc: CGameObject): boolean
  export function actor_has_target_obj(actor: CGameObject, npc: CGameObject): boolean
  export function drx_sl_is_enemy(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function random_chance(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function check_task_stage(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function is_bounty(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function npc_not_actor(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function dist_to_task_target_anomaly_le(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function has_task_target_anomaly(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function actor_has_companion_slot(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function check_nearest_smart_dist_le(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function check_smart_dist_le(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function has_task(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function has_task_on_stage(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function has_task_not_completed(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function has_completed_task_prerequisites(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function has_given_task(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function dist_to_lvid_ge(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function dist_to_job_point_le(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function sim_avail(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function dist_to_obj_on_job_le(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function dist_to_job_point_ge(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function check_enemy_name(enemy: TODO, npc: CGameObject, p: AnyTable): boolean
  export function is_enemy_fighting_actor(enemy: TODO, npc: CGameObject): boolean
  export function is_enemy_actor(enemy: TODO, npc: CGameObject): boolean
  export function is_enemy_actor_or_companion(enemy: TODO, npc: CGameObject): boolean
  export function fighting_dist_ge(enemy: TODO, npc: CGameObject, p: AnyTable): boolean
  export function fighting_dist_le(enemy: TODO, npc: CGameObject, p: AnyTable): boolean
  export function enemy_in_zone(enemy: TODO, npc: CGameObject, p: AnyTable): boolean
  export function is_enemy_community(enemy: TODO, npc: CGameObject, p: AnyTable): boolean
  export function enemy_group(enemy: TODO, npc: CGameObject, p: AnyTable): boolean
  export function is_enemy_same_group(actor: CGameObject, npc: CGameObject): boolean
  export function see_pure_enemy(actor: CGameObject, npc: CGameObject): boolean
  export function pure_enemy_dist_le(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function is_enemy_on_job(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function enemy_smart(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function has_pure_enemy(actor: CGameObject, npc: CGameObject): boolean
  export function pure_enemy_mem_time_le(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function black_screen(actor: CGameObject, npc: CGameObject): boolean
  export function check_npc_name(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function check_squad_name(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function is_playing_sound(actor: CGameObject, npc: CGameObject): boolean
  export function actor_alive(actor: CGameObject, npc: CGameObject): boolean
  export function see_npc(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function actor_see_npc(actor: CGameObject, npc: CGameObject): boolean
  export function npc_in_actor_frustum(actor: CGameObject, npc: CGameObject): boolean
  export function is_wounded(actor: CGameObject, npc: CGameObject): boolean
  export function dist_to_actor_le(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function dist_to_actor_ge(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function obj_in_zone(actor: CGameObject, zone: TODO, p: AnyTable): boolean
  export function check_npc_from_gulag_in_zone(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function one_obj_in_zone(actor: CGameObject, zone: TODO, p: AnyTable): boolean
  export function story_obj_in_zone_by_name(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function actor_inside_me(actor: CGameObject, zone: TODO, p: AnyTable): boolean
  export function actor_in_zone(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function actor_inside_zone(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function actor_near_smart(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function actor_out_zone(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function npc_in_zone(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function health_le(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function actor_health_le(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function heli_health_le(actor: CGameObject, obj: CGameObject, p: AnyTable): boolean
  export function heli_see_npc(actor: CGameObject, obj: CGameObject, p: AnyTable): boolean
  export function heli_see_actor(actor: CGameObject, obj: CGameObject): boolean
  export function gulag_state(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function npc_community(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function npc_rank(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function npc_profile(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function hitted_by(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function hitted_on_bone(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function best_pistol(actor: CGameObject, npc: CGameObject): boolean
  export function deadly_hit(actor: CGameObject, npc: CGameObject): boolean
  export function killed_by(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function is_alive_all(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function is_alive_one(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function is_alive(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function is_dead_all(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function is_dead_one(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function is_dead(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function story_object_exist(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function actor_has_item(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function actor_has_item_amount(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function npc_has_item(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function actor_has_item_count(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function signal(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function counter_greater(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function counter_equal(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function _kamp_talk(actor: CGameObject, npc: CGameObject): boolean
  export function _used(actor: CGameObject, npc: CGameObject): boolean
  export function check_smart_alarm_status(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function has_enemy(actor: CGameObject, npc: CGameObject): boolean
  export function has_actor_enemy(actor: CGameObject, npc: CGameObject): boolean
  export function see_enemy(actor: CGameObject, npc: CGameObject): boolean
  export function has_enemy_in_current_loopholes_fov(actor: CGameObject, npc: CGameObject): boolean
  export function talking(actor: CGameObject, npc: CGameObject): boolean
  export function npc_talking(actor: CGameObject, npc: CGameObject): boolean
  export function see_actor(actor: CGameObject, npc: CGameObject): boolean
  export function actor_enemy(actor: CGameObject, npc: CGameObject): boolean
  export function actor_friend(actor: CGameObject, npc: CGameObject): boolean
  export function actor_neutral(actor: CGameObject, npc: CGameObject): boolean
  export function actor_true_enemy(actor: CGameObject, npc: CGameObject): boolean
  export function actor_true_friend(actor: CGameObject, npc: CGameObject): boolean
  export function actor_true_neutral(actor: CGameObject, npc: CGameObject): boolean
  export function is_factions_enemies(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function is_factions_neutrals(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function is_factions_friends(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function is_faction_enemy_to_actor(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function is_faction_friend_to_actor(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function is_faction_neutral_to_actor(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function is_squad_friend_to_actor(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function is_squad_enemy_to_actor(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function is_squad_neutral_to_actor(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function fighting_actor(actor: CGameObject, npc: CGameObject): boolean
  export function hit_by_actor(actor: CGameObject, npc: CGameObject): boolean
  export function killed_by_actor(actor: CGameObject, npc: CGameObject): boolean
  export function actor_has_weapon(actor: CGameObject, npc: CGameObject): boolean
  export function actor_is_safemode(actor: CGameObject, npc: CGameObject): boolean
  export function actor_active_detector(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function heavy_wounded(actor: CGameObject, npc: CGameObject): boolean
  export function time_period(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function is_rain(actor: CGameObject, npc: CGameObject): boolean
  export function is_heavy_rain(actor: CGameObject, npc: CGameObject): boolean
  export function is_day(actor: CGameObject, npc: CGameObject): boolean
  export function is_dark_night(actor: CGameObject, npc: CGameObject): boolean
  export function is_night(actor: CGameObject, npc: CGameObject): boolean
  export function is_jup_a12_mercs_time(actor: CGameObject, npc: CGameObject): boolean
  export function zat_b7_is_night(actor: CGameObject, npc: CGameObject): boolean
  export function zat_b7_is_late_attack_time(actor: CGameObject, npc: CGameObject): boolean
  export function mob_has_enemy(actor: CGameObject, npc: CGameObject): boolean
  export function mob_was_hit(actor: CGameObject, npc: CGameObject): boolean
  export function actor_on_level(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function npc_on_level(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function treasure_exist(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function squad_in_zone(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function squad_has_enemy(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function squad_in_zone_all(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function squads_in_zone_b41(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function squads_in_zone_yan_smart_terrain_6_4(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function target_squad_name(actor: CGameObject, obj: CGameObject, p: AnyTable): boolean
  export function target_smart_name(actor: CGameObject, smart: TODO, p: AnyTable): boolean
  export function squad_exist(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function squad_name_exist(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function is_squad_commander(actor: CGameObject, npc: CGameObject): boolean
  export function squad_npc_count_ge(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function surge_complete(): boolean
  export function surge_kill_all(): boolean
  export function signal_rocket_flying(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function quest_npc_enemy_actor(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function animpoint_reached(actor: CGameObject, npc: CGameObject): boolean
  export function distance_to_obj_ge(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function distance_to_obj_le(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function in_dest_smart_cover(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function active_item(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function actor_nomove_nowpn(): boolean
  export function jup_b16_is_zone_active(actor: CGameObject, npc: CGameObject): boolean
  export function check_bloodsucker_state(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function dist_to_story_obj_ge(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function dist_to_story_obj_le(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function actor_has_nimble_weapon(actor: CGameObject, npc: CGameObject): boolean
  export function actor_has_active_nimble_weapon(actor: CGameObject, npc: CGameObject): boolean
  export function jup_b202_inventory_box_empty(actor: CGameObject, npc: CGameObject): boolean
  export function is_in_danger(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function object_exist(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function squad_curr_action(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function is_monster_snork(actor: CGameObject, npc: CGameObject): boolean
  export function is_monster_dog(actor: CGameObject, npc: CGameObject): boolean
  export function is_monster_psy_dog(actor: CGameObject, npc: CGameObject): boolean
  export function is_monster_polter(actor: CGameObject, npc: CGameObject): boolean
  export function is_monster_tushkano(actor: CGameObject, npc: CGameObject): boolean
  export function is_monster_burer(actor: CGameObject, npc: CGameObject): boolean
  export function is_monster_controller(actor: CGameObject, npc: CGameObject): boolean
  export function is_monster_flesh(actor: CGameObject, npc: CGameObject): boolean
  export function is_monster_boar(actor: CGameObject, npc: CGameObject): boolean
  export function dead_body_searching(actor: CGameObject, npc: CGameObject): boolean
  export function jup_b47_npc_online(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function anomaly_has_artefact(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function zat_b29_anomaly_has_af(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function jup_b221_who_will_start(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function pas_b400_actor_far_forward(actor: CGameObject, npc: CGameObject): boolean
  export function pas_b400_actor_far_backward(actor: CGameObject, npc: CGameObject): boolean
  export function pri_a28_actor_is_far(actor: CGameObject, npc: CGameObject): boolean
  export function check_enemy_smart(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function zat_b103_actor_has_needed_food(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function zat_b29_rivals_dialog_precond(actor: CGameObject, npc: CGameObject): boolean
  export function polter_ignore_actor(actor: CGameObject, npc: CGameObject): boolean
  export function burer_gravi_attack(actor: CGameObject, npc: CGameObject): boolean
  export function burer_anti_aim(actor: CGameObject, npc: CGameObject): boolean
  export function jup_b202_actor_treasure_not_in_steal(actor: CGameObject, npc: CGameObject): boolean
  export function jup_b25_senya_spawn_condition(actor: CGameObject, npc: CGameObject): boolean
  export function jup_b25_flint_gone_condition(actor: CGameObject, npc: CGameObject): boolean
  export function check_deimos_phase(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function actor_in_surge_cover(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function is_door_blocked_by_npc(actor: CGameObject, obj: CGameObject): boolean
  export function has_active_tutorial(): boolean
  export function upgrade_hint_kardan(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function psi_storm_complete(): boolean
  export function npc_surrendered(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function npc_surrendered_any(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function actor_class(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function black_road_enabled(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function squad_behavior(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function anim_state(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function smart_empty(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function npc_squad_has_enemy(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function hit_by_enemy_on_smart(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function is_upgrading(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function is_minigun_see_actor(actor: CGameObject, npc: CGameObject): boolean
  export function is_minigun_see_current_target(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function squad_hit_by_smart(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function actor_look_away(actor: CGameObject, npc: CGameObject): boolean
  export function between_time(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function squad_is_monster(actor: CGameObject, squad: TODO, p: AnyTable): boolean
  export function after_first_meet(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function squad_on_actor_map(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function squad_commander_active_section(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function job_on_point(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function dist_to_point_le(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function beh_reached(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function obj_on_job(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function see_obj_on_job(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function obj_on_job_danger(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function obj_on_job_hit_by(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function job_active_section(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function is_only_monsters_on_jobs(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function is_only_stalkers_on_jobs(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function is_only_community_on_jobs(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function smart_squad_by_faction_in_radius(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function smart_squad_count_ge_by_faction(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function smart_population_count(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function smart_population_count_ge(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function smart_population_count_le(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function is_community_on_jobs(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function is_community_arriving(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function community_arriving_dist_ge(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function trade_exchanged(actor: CGameObject, npc: CGameObject): boolean
  export function trading(actor: CGameObject, npc: CGameObject): boolean
  export function trade_sell_coast_b_1000(actor: CGameObject, npc: CGameObject): boolean
  export function trade_sell_coast_b_0_m_1000(actor: CGameObject, npc: CGameObject): boolean
  export function trade_buy_coast(actor: CGameObject, npc: CGameObject): boolean
  export function trade_all_money(actor: CGameObject, npc: CGameObject): boolean
  export function npc_in_actor_community(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function actor_community(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function actor_true_community(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function actor_goodwill_ge(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function task_giver_alive(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function actor_week_in_zone(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function is_a_task_giver(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function smart_under_faction_control(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function smart_under_faction_war(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function heli_inside_level_boundary(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function rad_pass_time(actor: CGameObject, npc: CGameObject): boolean
  export function heli_dist_to_max_bounding_le(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function down_to_earth_functor(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function heavy_pockets_functor(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function bar_arena_actor_inside(actor: CGameObject, npc: CGameObject): boolean
  export function bar_arena_actor_fight(actor: CGameObject, npc: CGameObject): boolean
  export function bar_arena_actor_outside(actor: CGameObject, npc: CGameObject): boolean
  export function actor_dead(actor: CGameObject, npc: CGameObject): boolean
  export function bar_actor_rank_stalker(actor: CGameObject, npc: CGameObject): boolean
  export function bar_actor_rank_veteran(actor: CGameObject, npc: CGameObject): boolean
  export function bar_arena_fight_3_end(actor: CGameObject, npc: CGameObject): boolean
  export function bar_arena_fight_4_end(actor: CGameObject, npc: CGameObject): boolean
  export function bar_arena_fight_5_end(actor: CGameObject, npc: CGameObject): boolean
  export function bar_arena_fight_6_end(actor: CGameObject, npc: CGameObject): boolean
  export function bar_arena_fight_8_end(actor: CGameObject, npc: CGameObject): boolean
  export function heli_exist_on_level(actor: CGameObject, npc: CGameObject): boolean
  export function kill_count_ge(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function any_on_level(actor: CGameObject, npc: CGameObject, faction_list: TODO): boolean
  export function is_actor_surge_immuned(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function get_start_time_elapsed_ge(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function awr_have_no_info(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function base_defense_is_actor_on_level(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function is_story(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function is_open_routes_mode(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
  export function is_not_open_routes_mode(actor: CGameObject, npc: CGameObject, p: AnyTable): boolean
}
