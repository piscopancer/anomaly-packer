/** @noSelfInFile */

declare namespace dialogs_mlr {
  export function actor_set_freedom(actor: CGameObject, npc: CGameObject): void
  export function actor_set_stalker(actor: CGameObject, npc: CGameObject): void
  export function add_debt_10000(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function add_debt_15000(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function add_debt_20000(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function add_debt_5000(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function agroprom_guid(actor: CGameObject, npc: CGameObject, p: string): void
  export function agroprom_guid_military(actor: CGameObject, npc: CGameObject, p: string): void
  export function awr_give_1000(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function awr_if_actor_has_1000(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function awr_not_on_table(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function awr_timer_msg_on(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function buy_extra_ammo_1(): string
  export function buy_extra_ammo_10(): string
  export function buy_extra_ammo_11(): string
  export function buy_extra_ammo_12(): string
  export function buy_extra_ammo_13(): string
  export function buy_extra_ammo_14(): string
  export function buy_extra_ammo_15(): string
  export function buy_extra_ammo_16(): string
  export function buy_extra_ammo_17(): string
  export function buy_extra_ammo_18(): string
  export function buy_extra_ammo_19(): string
  export function buy_extra_ammo_2(): string
  export function buy_extra_ammo_3(): string
  export function buy_extra_ammo_4(): string
  export function buy_extra_ammo_5(): string
  export function buy_extra_ammo_6(): string
  export function buy_extra_ammo_7(): string
  export function buy_extra_ammo_8(): string
  export function buy_extra_ammo_9(): string
  export function buy_extra_food_1(): string
  export function buy_extra_food_2(): string
  export function buy_extra_food_3(): string
  export function buy_extra_food_4(): string
  export function buy_extra_food_5(): string
  export function buy_extra_item_dialog(txt: string): string
  export function buy_extra_med_1(): string
  export function buy_extra_med_2(): string
  export function buy_extra_med_3(): string
  export function buy_extra_med_4(): string
  export function buy_extra_med_5(): string
  export function can_afford_extra_ammo_1(): boolean
  export function can_afford_extra_ammo_10(): boolean
  export function can_afford_extra_ammo_11(): boolean
  export function can_afford_extra_ammo_12(): boolean
  export function can_afford_extra_ammo_13(): boolean
  export function can_afford_extra_ammo_14(): boolean
  export function can_afford_extra_ammo_15(): boolean
  export function can_afford_extra_ammo_16(): boolean
  export function can_afford_extra_ammo_17(): boolean
  export function can_afford_extra_ammo_18(): boolean
  export function can_afford_extra_ammo_19(): boolean
  export function can_afford_extra_ammo_2(): boolean
  export function can_afford_extra_ammo_3(): boolean
  export function can_afford_extra_ammo_4(): boolean
  export function can_afford_extra_ammo_5(): boolean
  export function can_afford_extra_ammo_6(): boolean
  export function can_afford_extra_ammo_7(): boolean
  export function can_afford_extra_ammo_8(): boolean
  export function can_afford_extra_ammo_9(): boolean
  export function can_afford_extra_food_1(): boolean
  export function can_afford_extra_food_2(): boolean
  export function can_afford_extra_food_3(): boolean
  export function can_afford_extra_food_4(): boolean
  export function can_afford_extra_food_5(): boolean
  export function can_afford_extra_item(txt: string): boolean
  export function can_afford_extra_med_1(): boolean
  export function can_afford_extra_med_2(): boolean
  export function can_afford_extra_med_3(): boolean
  export function can_afford_extra_med_4(): boolean
  export function can_afford_extra_med_5(): boolean
  export function check_debt(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_no_debt(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function control(): void
  export function darkscape_guid_military(actor: CGameObject, npc: CGameObject, p: string): void
  export function debt_pay_off_2(): string
  export function debt_register_0(): string
  export function debt_register_7(): string
  export function disable_pri_special_trader_mlr_1(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function ds_soviet_store(actor: CGameObject, npc: CGameObject, p: string): void
  export function escape_guid(actor: CGameObject, npc: CGameObject, p: string): void
  export function escape_guid_military(actor: CGameObject, npc: CGameObject, p: string): void
  export function escape_village_guid(actor: CGameObject, npc: CGameObject, p: string): void
  export function escp_guid_mil_speed(actor: CGameObject, npc: CGameObject, p: string): void
  export function garbage_guid(actor: CGameObject, npc: CGameObject, p: string): void
  export function get_debt_npc(npc: CGameObject): void
  export function give_ammo_m209_from_ashot_mlr(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_ammo_nato_from_ashot_mlr(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_anabionic_drug(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_antirad_from_fanat(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_army_grugs(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_bolts_from_fanat(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_det_adva_from_fanat(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_ecolog_grugs(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_extra_ammo_1(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_extra_ammo_10(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_extra_ammo_11(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_extra_ammo_12(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_extra_ammo_13(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_extra_ammo_14(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_extra_ammo_15(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_extra_ammo_16(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_extra_ammo_17(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_extra_ammo_18(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_extra_ammo_19(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_extra_ammo_2(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_extra_ammo_3(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_extra_ammo_4(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_extra_ammo_5(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_extra_ammo_6(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_extra_ammo_7(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_extra_ammo_8(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_extra_ammo_9(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_extra_food_1(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_extra_food_2(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_extra_food_3(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_extra_food_4(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_extra_food_5(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_extra_item(first_speaker: CGameObject, second_speaker: CGameObject, txt: string): void
  export function give_extra_med_1(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_extra_med_2(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_extra_med_3(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_extra_med_4(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_extra_med_5(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_freedom_set_mlr(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_gar_4_2_zombie_mlr_squad(): void
  export function give_information_about_stash_barmen(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_lead_box_from_fanat(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_look_for_cs_history_part_1(): void
  export function give_look_for_cs_history_part_2(): void
  export function give_look_for_cs_history_part_3(): void
  export function give_look_for_cs_history_part_4(): void
  export function give_mil_to_yant_on_heli(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_mil_to_yant_on_heli2(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_money_10000(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_money_15000(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_money_20000(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_money_5000(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_money_7500(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_money_to_jupiter_guid_bar(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_pri_a18_barter_5_56(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_pri_a18_barter_9_19(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_pri_a18_barter_f1(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_pri_a18_barter_rgd5(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_pri_special_trader_mlr_1(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_pri_special_trader_mlr_10(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_pri_special_trader_mlr_11(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_pri_special_trader_mlr_12(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_pri_special_trader_mlr_13(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_pri_special_trader_mlr_14(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_pri_special_trader_mlr_15(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_pri_special_trader_mlr_16(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_pri_special_trader_mlr_17(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_pri_special_trader_mlr_18(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_pri_special_trader_mlr_2(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_pri_special_trader_mlr_3(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_pri_special_trader_mlr_4(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_pri_special_trader_mlr_5(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_pri_special_trader_mlr_6(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_pri_special_trader_mlr_7(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_pri_special_trader_mlr_8(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_pri_special_trader_mlr_9(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_recipe_cooking_1(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_seo_from_ashot_mlr(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_sso_from_ashot_mlr(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_staff_about_dog_marsh_part_two(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_svd_ammo_from_ashot_mlr(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_task_fanat_training_1(): void
  export function give_task_fanat_training_2(): void
  export function give_task_fanat_training_3(): void
  export function give_task_noah_1(): void
  export function give_task_noah_2(): void
  export function give_veles(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function give_wpn_svd_from_ashot_mlr(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function goodwill_for_blackbox_army_reward(a: CGameObject, b: CGameObject): void
  export function goodwill_for_blackbox_csky_reward(a: CGameObject, b: CGameObject): void
  export function goodwill_for_blackbox_freedom_reward(a: CGameObject, b: CGameObject): void
  export function goodwill_for_blackbox_killer_reward(a: CGameObject, b: CGameObject): void
  export function goodwill_for_blackbox_monolith_reward(a: CGameObject, b: CGameObject): void
  export function has_1_11_af_medusa_kmb(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function has_af_electra_flash(): boolean
  export function has_af_electra_moonlight(): boolean
  export function has_af_soul(): boolean
  export function has_af_vyvert(): boolean
  export function has_controller_brain(): boolean
  export function has_lx8_history_document(): boolean
  export function has_mlr_x8_documents(): boolean
  export function has_wpn_protecta_task_noah_1(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function have_army_patch_for_lottery_10(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function have_army_patch_for_lottery_50(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function have_bandit_patch_for_lottery_10(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function have_bandit_patch_for_lottery_50(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function have_blackbox_mlr(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function have_csky_patch_for_lottery_10(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function have_csky_patch_for_lottery_50(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function have_duty_patch_100(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function have_duty_patch_15(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function have_duty_patch_20(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function have_duty_patch_50(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function have_duty_patch_65(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function have_duty_patch_for_lottery_10(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function have_duty_patch_for_lottery_50(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function have_ecolog_patch_for_lottery_10(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function have_ecolog_patch_for_lottery_50(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function have_freedom_patch_for_lottery_10(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function have_freedom_patch_for_lottery_50(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function have_information_about_stash_barmen(): boolean
  export function have_mil_to_yant_on_heli(): boolean
  export function have_mil_to_yant_on_heli2(): boolean
  export function have_money_agroprom_guid_military(): boolean
  export function have_money_darkscape_guid_military(): boolean
  export function have_money_debt(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function have_money_povars_ammo_pkm_100(): boolean
  export function have_money_to_escape_guid_bar(): boolean
  export function have_money_to_escp_guid_mil(): boolean
  export function have_money_to_garbage_guid_bar(): boolean
  export function have_money_to_jupiter_guid_bar(): boolean
  export function have_money_to_jupiter_underground_guid_jup(): boolean
  export function have_money_to_marsh_post_guid_marsh(): boolean
  export function have_money_to_marsh_pump_water_guid_marsh(): boolean
  export function have_money_to_military_guid_bar(): boolean
  export function have_money_to_pripyat_guid_jup(): boolean
  export function have_money_to_pripyat_guid_zat(): boolean
  export function have_money_to_radar_guid_pri(): boolean
  export function have_money_to_red_forest_guid_jup(): boolean
  export function have_money_to_stancia_guid_pri(): boolean
  export function have_money_to_tech_yard_guid_marsh(): boolean
  export function have_money_to_yantar_guid_bar(): boolean
  export function have_money_to_zaton_guid_jup(): boolean
  export function have_monolith_patch_for_lottery_10(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function have_monolith_patch_for_lottery_50(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function have_pri_a18_barter_5_56(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function have_pri_a18_barter_9_19(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function have_pri_a18_barter_f1(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function have_pri_a18_barter_rgd5(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function have_pri_special_trader_mlr_1(): boolean
  export function have_pri_special_trader_mlr_10(): boolean
  export function have_pri_special_trader_mlr_11(): boolean
  export function have_pri_special_trader_mlr_12(): boolean
  export function have_pri_special_trader_mlr_13(): boolean
  export function have_pri_special_trader_mlr_14(): boolean
  export function have_pri_special_trader_mlr_15(): boolean
  export function have_pri_special_trader_mlr_16(): boolean
  export function have_pri_special_trader_mlr_17(): boolean
  export function have_pri_special_trader_mlr_18(): boolean
  export function have_pri_special_trader_mlr_2(): boolean
  export function have_pri_special_trader_mlr_3(): boolean
  export function have_pri_special_trader_mlr_4(): boolean
  export function have_pri_special_trader_mlr_5(): boolean
  export function have_pri_special_trader_mlr_6(): boolean
  export function have_pri_special_trader_mlr_7(): boolean
  export function have_pri_special_trader_mlr_8(): boolean
  export function have_pri_special_trader_mlr_9(): boolean
  export function have_stalker_patch_for_lottery_10(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function have_stalker_patch_for_lottery_50(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function have_vodka10(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function have_vodka15(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function have_vodka20(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function have_vodka5(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function inf_trader_buy_transitions1(): boolean
  export function inf_trader_buy_transitions11(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function inf_trader_buy_transitions2(): boolean
  export function inf_trader_buy_transitions22(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function inf_trader_buy_transitions3(): boolean
  export function inf_trader_buy_transitions33(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function inf_trader_buy_transitions4(): boolean
  export function inf_trader_buy_transitions44(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function inf_trader_buy_transitions5(): boolean
  export function inf_trader_buy_transitions55(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function inf_trader_buy_transitions6(): boolean
  export function inf_trader_buy_transitions66(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function jup_bunker_guid(actor: CGameObject, npc: CGameObject, p: string): void
  export function jup_guid_bandit_cont(actor: CGameObject, npc: CGameObject, p: string): void
  export function jupiter_guid(actor: CGameObject, npc: CGameObject, p: string): void
  export function jupiter_guid_mon(actor: CGameObject, npc: CGameObject, p: string): void
  export function jupiter_underground_2_guid(actor: CGameObject, npc: CGameObject, p: string): void
  export function jupiter_underground_guid(actor: CGameObject, npc: CGameObject, p: string): void
  export function l05_bar_guid(actor: CGameObject, npc: CGameObject, p: string): void
  export function l11_pripyat_guid(actor: CGameObject, npc: CGameObject, p: string): void
  export function l11_pripyat_guid_mon(actor: CGameObject, npc: CGameObject, p: string): void
  export function lottery_present_hight_1(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function lottery_present_hight_2(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function lottery_present_hight_3(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function lottery_present_hight_4(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function lottery_present_hight_5(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function lottery_present_low_1(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function lottery_present_low_2(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function lottery_present_low_3(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function lottery_present_low_4(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function lottery_present_low_5(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function lottery_present_low_6(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function lottery_present_medium_1(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function lottery_present_medium_2(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function lottery_present_medium_3(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function lottery_present_medium_4(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function lottery_present_medium_5(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function lottery_present_medium_6(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function lottery_present_medium_7(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function marsh_guid(actor: CGameObject, npc: CGameObject, p: string): void
  export function marsh_old_church_guid(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function marsh_post_guid(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function marsh_pump_water_guid(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function marsh_tech_yard_guid(first_speaker: CGameObject, second_speaker: CGameObject): void
  // Task-target functor (not a dialog callback): `p`/`tsk` are the task-system params
  // (tsk = a task_info table, not a modelled type); returns the target object id.
  export function merc_pri_grifon_mlr_task_target(task_id: string, field: string, p: any, tsk: AnyTable): number
  export function message_robbery(): void
  export function mil_to_yant_on_heli(actor: CGameObject, npc: CGameObject, p: string): void
  export function military_guid(actor: CGameObject, npc: CGameObject, p: string): void
  export function not_toolkit_task_done_3(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function pay_off_debt(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function pri_special_trader_mlr3_1(): string
  export function pripyat_2_guid(actor: CGameObject, npc: CGameObject, p: string): void
  export function pripyat_guid(actor: CGameObject, npc: CGameObject, p: string): void
  export function pripyat_guid_mon(actor: CGameObject, npc: CGameObject, p: string): void
  export function radar_guid(actor: CGameObject, npc: CGameObject, p: string): void
  export function red_forest_guid(actor: CGameObject, npc: CGameObject, p: string): void
  export function red_forest_guid_mon(actor: CGameObject, npc: CGameObject, p: string): void
  export function request_extra_items_off(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function request_extra_items_on(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function request_to_fly(actor: CGameObject): boolean
  export function reward_for_blackbox_army(): void
  export function reward_for_lx8_history_document(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function sell_money_agroprom_guid_military(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function sell_money_darkscape_guid_military(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function sell_money_povars_ammo_pkm_100(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function sell_money_to_escape_guid_bar(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function sell_money_to_escp_guid_mil(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function sell_money_to_garbage_guid_bar(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function sell_money_to_jupiter_guid_bar(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function sell_money_to_jupiter_underground_guid_jup(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function sell_money_to_marsh_post_guid_marsh(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function sell_money_to_marsh_pump_water_guid_marsh(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function sell_money_to_military_guid_bar(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function sell_money_to_pripyat_guid_jup(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function sell_money_to_pripyat_guid_zat(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function sell_money_to_radar_guid_pri(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function sell_money_to_red_forest_guid_jup(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function sell_money_to_stancia_guid_pri(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function sell_money_to_tech_yard_guid_marsh(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function sell_money_to_yantar_guid_bar(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function sell_money_to_zaton_guid_jup(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function show_goodwill_change_message(comm: string, comm_n: string, comm_e: string, is_gain: boolean): void
  export function spawn_1_11_af_medusa_kmb(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function spawn_lx8_history_douemnts(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function spawn_povars_12_70(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function spawn_povars_5_45_3(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function spawn_povars_5_45_6(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function spawn_povars_7_62(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function spawn_povars_9_18_6(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function spawn_povars_ammo_pkm_100(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function spawn_povars_berill(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function st_debt_no_trade(): string
  export function stancia_guid(actor: CGameObject, npc: CGameObject, p: string): void
  export function take_af_electra_flash(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_af_electra_moonlight(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_af_soul(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_af_vyvert(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_army_patch_for_lottery_10(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_army_patch_for_lottery_50(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_bandit_patch_for_lottery_10(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_bandit_patch_for_lottery_50(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_blackbox_mlr(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_cost_of_extra_ammo_1(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_cost_of_extra_ammo_10(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_cost_of_extra_ammo_11(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_cost_of_extra_ammo_12(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_cost_of_extra_ammo_13(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_cost_of_extra_ammo_14(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_cost_of_extra_ammo_15(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_cost_of_extra_ammo_16(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_cost_of_extra_ammo_17(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_cost_of_extra_ammo_18(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_cost_of_extra_ammo_19(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_cost_of_extra_ammo_2(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_cost_of_extra_ammo_3(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_cost_of_extra_ammo_4(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_cost_of_extra_ammo_5(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_cost_of_extra_ammo_6(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_cost_of_extra_ammo_7(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_cost_of_extra_ammo_8(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_cost_of_extra_ammo_9(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_cost_of_extra_food_1(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_cost_of_extra_food_2(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_cost_of_extra_food_3(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_cost_of_extra_food_4(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_cost_of_extra_food_5(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_cost_of_extra_item(first_speaker: CGameObject, second_speaker: CGameObject, txt: string): void
  export function take_cost_of_extra_med_1(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_cost_of_extra_med_2(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_cost_of_extra_med_3(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_cost_of_extra_med_4(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_cost_of_extra_med_5(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_csky_patch_for_lottery_10(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_csky_patch_for_lottery_50(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_duty_patch_100(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_duty_patch_15(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_duty_patch_20(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_duty_patch_50(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_duty_patch_65(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_duty_patch_for_lottery_10(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_duty_patch_for_lottery_50(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_ecolog_patch_for_lottery_10(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_ecolog_patch_for_lottery_50(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_freedom_patch_for_lottery_10(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_freedom_patch_for_lottery_50(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_money_from_army_blackbox(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_money_from_haron_blackbox(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_money_from_lidership_blackbox(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_money_from_owl_blackbox(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_monolith_patch_for_lottery_10(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_monolith_patch_for_lottery_50(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_part_controller_glass(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_pri_a18_barter_5_56(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_pri_a18_barter_9_19(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_pri_a18_barter_f1(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_pri_a18_barter_rgd5(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_pri_special_trader_mlr_1(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_pri_special_trader_mlr_10(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_pri_special_trader_mlr_11(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_pri_special_trader_mlr_12(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_pri_special_trader_mlr_13(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_pri_special_trader_mlr_14(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_pri_special_trader_mlr_15(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_pri_special_trader_mlr_16(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_pri_special_trader_mlr_17(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_pri_special_trader_mlr_18(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_pri_special_trader_mlr_2(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_pri_special_trader_mlr_3(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_pri_special_trader_mlr_4(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_pri_special_trader_mlr_5(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_pri_special_trader_mlr_6(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_pri_special_trader_mlr_7(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_pri_special_trader_mlr_8(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_pri_special_trader_mlr_9(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_stalker_patch_for_lottery_10(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_stalker_patch_for_lottery_50(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_totaliz_1(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_totaliz_2(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_totaliz_5(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_vodka10(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_vodka15(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_vodka20(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_vodka5(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function take_wpn_protecta_noah_task_1(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function teleport_for_totaliz(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function toolkit_task_done_3(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function total_battle_1_random(): void
  export function total_battle_3_random(): void
  export function total_battle_4_random(): void
  export function total_battle_5_random(): void
  export function total_battle_6_random(): void
  export function total_battle_7_random(): void
  export function total_battle_9_random(): void
  export function total_reward_1000(actor: CGameObject, npc: CGameObject, p: string): void
  export function total_reward_2500(actor: CGameObject, npc: CGameObject, p: string): void
  export function total_reward_5000(actor: CGameObject, npc: CGameObject, p: string): void
  export function totaliz_1(): boolean
  export function totaliz_2(): boolean
  export function totaliz_5(): boolean
  export function trucks_cemetery_guid(actor: CGameObject, npc: CGameObject, p: string): void
  export function unlock_note_aslan(): void
  export function unlock_note_grifon(): void
  export function unlock_note_meeker(): void
  export function unlock_note_spirit(): void
  export function unlock_note_trunk(): void
  export function yantar_guid(actor: CGameObject, npc: CGameObject, p: string): void
  export function yantar_guid_from_freedom_base(actor: CGameObject, npc: CGameObject, p: string): void
  export function zat_trash_station(actor: CGameObject, npc: CGameObject, p: string): void
  export function zaton_guid(actor: CGameObject, npc: CGameObject, p: string): void
}
