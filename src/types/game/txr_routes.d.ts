/** @noSelfInFile */

declare namespace txr_routes {
  export const maps: TODO
  export const routes: TODO
  export function add_dialog(p_id: TODO, id: TODO, phrase_id: TODO, cond: TODO, act: TODO): TODO
  export function add_script_dialog(p_id: TODO, id: TODO, phrase_id: TODO, cond: TODO, act: TODO): TODO
  export function buy_route(dialog: TODO): void
  export function c_search(lv1_target: TODO, n: TODO): TODO
  export function check_all_routes(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_no_value(tbl: TODO, value: TODO): boolean
  export function check_route_aes2_aes1(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_and_money_aes1_sar(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_and_money_aes2_aes1(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_and_money_aes2_s_lab(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_and_money_agr_agr_u(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_and_money_agr_gar(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_and_money_agr_mar(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_and_money_bar_gar(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_and_money_bar_mil(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_and_money_bar_ros(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_and_money_bar_trc(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_and_money_dsc_val(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_and_money_esc_dsc(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_and_money_esc_gar(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_and_money_esc_mar(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_and_money_esc_pol(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_and_money_gar_ros(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_and_money_gen_aes2(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_and_money_gen_w_lab(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_and_money_jup_jup_u(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_and_money_jup_pri(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_and_money_jup_red(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_and_money_jup_zat(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_and_money_kat_aes2(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_and_money_kat_lim(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_and_money_lim_cit(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_and_money_lim_red(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_and_money_mar_mar_h(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_and_money_mil_cit(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_and_money_mil_rad(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_and_money_mil_red(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_and_money_mil_trc(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_and_money_out_jup_u(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_and_money_out_x8(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_and_money_pri_aes1(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_and_money_pri_out(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_and_money_pri_rad(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_and_money_rad_x19(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_and_money_red_rad(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_and_money_val_gar(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_and_money_val_pol(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_and_money_val_trc(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_and_money_val_x18(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_and_money_yan_agr(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_and_money_yan_cit(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_and_money_yan_ros(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_and_money_yan_x16(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_and_money_zat_aes1(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_bar_gar(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_lim_red(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_mil_rad(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_mil_red(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_pri_aes1(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_pri_out(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_pri_rad(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_rad_x19(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_yan_agr(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_route_yan_x16(first_speaker: TODO, second_speaker: TODO): boolean
  export function check_spot(id: TODO, spot: TODO): boolean
  export function get_map(sec: TODO): string
  export function get_route(map_1: TODO, map_2: TODO): TODO
  export function get_route_info(sr_name: TODO): LuaMultiReturn<[TODO, TODO, TODO]>
  export function get_section(map: TODO): string
  export function get_shortest_path_num(map_1: TODO, map_2: TODO): number
  export function have_money(money: TODO): boolean
  export function is_map_connected(map_1: TODO, map_2: TODO): boolean
  export function is_map_discovered(map_1: TODO, map_2: TODO): boolean
  export function is_route_discovered(map_1: TODO, map_2: TODO): boolean
  export function is_route_left(): boolean
  export function list_map(discovered: TODO, connected: TODO, couple: TODO): TODO
  export function msg_route(map_1: TODO, map_2: TODO): void
  export function msg_route_general(): void
  export function on_game_start(): void
  export function on_localization_change(): void
  export function on_screen_resolution_changed(): void
  export function open_route(map_1: TODO, map_2: TODO, no_msg: boolean): void
  export function open_route_aes2_aes1(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_and_money_aes1_sar(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_and_money_aes2_aes1(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_and_money_aes2_s_lab(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_and_money_agr_agr_u(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_and_money_agr_gar(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_and_money_agr_mar(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_and_money_bar_gar(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_and_money_bar_mil(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_and_money_bar_ros(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_and_money_bar_trc(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_and_money_dsc_val(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_and_money_esc_dsc(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_and_money_esc_gar(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_and_money_esc_mar(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_and_money_esc_pol(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_and_money_gar_ros(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_and_money_gen_aes2(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_and_money_gen_w_lab(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_and_money_jup_jup_u(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_and_money_jup_pri(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_and_money_jup_red(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_and_money_jup_zat(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_and_money_kat_aes2(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_and_money_kat_lim(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_and_money_lim_cit(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_and_money_lim_red(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_and_money_mar_mar_h(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_and_money_mil_cit(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_and_money_mil_rad(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_and_money_mil_red(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_and_money_mil_trc(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_and_money_out_jup_u(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_and_money_out_x8(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_and_money_pri_aes1(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_and_money_pri_out(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_and_money_pri_rad(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_and_money_rad_x19(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_and_money_red_rad(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_and_money_val_gar(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_and_money_val_pol(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_and_money_val_trc(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_and_money_val_x18(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_and_money_yan_agr(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_and_money_yan_cit(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_and_money_yan_ros(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_and_money_yan_x16(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_and_money_zat_aes1(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_bar_gar(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_lim_red(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_mil_rad(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_mil_red(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_pri_aes1(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_pri_out(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_pri_rad(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_rad_x19(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_yan_agr(first_speaker: TODO, second_speaker: TODO): void
  export function open_route_yan_x16(first_speaker: TODO, second_speaker: TODO): void
  export function register_map(...args: TODO[]): void
  export function reload_route_hints(): void
  export function scan_route(sr_name: TODO): boolean
  export function st_buy_route_aes1_sar(first_speaker: TODO, second_speaker: TODO): string
  export function st_buy_route_aes2_aes1(first_speaker: TODO, second_speaker: TODO): string
  export function st_buy_route_aes2_s_lab(first_speaker: TODO, second_speaker: TODO): string
  export function st_buy_route_agr_agr_u(first_speaker: TODO, second_speaker: TODO): string
  export function st_buy_route_agr_gar(first_speaker: TODO, second_speaker: TODO): string
  export function st_buy_route_agr_mar(first_speaker: TODO, second_speaker: TODO): string
  export function st_buy_route_bar_gar(first_speaker: TODO, second_speaker: TODO): string
  export function st_buy_route_bar_mil(first_speaker: TODO, second_speaker: TODO): string
  export function st_buy_route_bar_ros(first_speaker: TODO, second_speaker: TODO): string
  export function st_buy_route_bar_trc(first_speaker: TODO, second_speaker: TODO): string
  export function st_buy_route_dsc_val(first_speaker: TODO, second_speaker: TODO): string
  export function st_buy_route_esc_dsc(first_speaker: TODO, second_speaker: TODO): string
  export function st_buy_route_esc_gar(first_speaker: TODO, second_speaker: TODO): string
  export function st_buy_route_esc_mar(first_speaker: TODO, second_speaker: TODO): string
  export function st_buy_route_esc_pol(first_speaker: TODO, second_speaker: TODO): string
  export function st_buy_route_gar_ros(first_speaker: TODO, second_speaker: TODO): string
  export function st_buy_route_gen_aes2(first_speaker: TODO, second_speaker: TODO): string
  export function st_buy_route_gen_w_lab(first_speaker: TODO, second_speaker: TODO): string
  export function st_buy_route_jup_jup_u(first_speaker: TODO, second_speaker: TODO): string
  export function st_buy_route_jup_pri(first_speaker: TODO, second_speaker: TODO): string
  export function st_buy_route_jup_red(first_speaker: TODO, second_speaker: TODO): string
  export function st_buy_route_jup_zat(first_speaker: TODO, second_speaker: TODO): string
  export function st_buy_route_kat_aes2(first_speaker: TODO, second_speaker: TODO): string
  export function st_buy_route_kat_lim(first_speaker: TODO, second_speaker: TODO): string
  export function st_buy_route_lim_cit(first_speaker: TODO, second_speaker: TODO): string
  export function st_buy_route_lim_red(first_speaker: TODO, second_speaker: TODO): string
  export function st_buy_route_mar_mar_h(first_speaker: TODO, second_speaker: TODO): string
  export function st_buy_route_mil_cit(first_speaker: TODO, second_speaker: TODO): string
  export function st_buy_route_mil_rad(first_speaker: TODO, second_speaker: TODO): string
  export function st_buy_route_mil_red(first_speaker: TODO, second_speaker: TODO): string
  export function st_buy_route_mil_trc(first_speaker: TODO, second_speaker: TODO): string
  export function st_buy_route_out_jup_u(first_speaker: TODO, second_speaker: TODO): string
  export function st_buy_route_out_x8(first_speaker: TODO, second_speaker: TODO): string
  export function st_buy_route_pri_aes1(first_speaker: TODO, second_speaker: TODO): string
  export function st_buy_route_pri_out(first_speaker: TODO, second_speaker: TODO): string
  export function st_buy_route_pri_rad(first_speaker: TODO, second_speaker: TODO): string
  export function st_buy_route_rad_x19(first_speaker: TODO, second_speaker: TODO): string
  export function st_buy_route_red_rad(first_speaker: TODO, second_speaker: TODO): string
  export function st_buy_route_val_gar(first_speaker: TODO, second_speaker: TODO): string
  export function st_buy_route_val_pol(first_speaker: TODO, second_speaker: TODO): string
  export function st_buy_route_val_trc(first_speaker: TODO, second_speaker: TODO): string
  export function st_buy_route_val_x18(first_speaker: TODO, second_speaker: TODO): string
  export function st_buy_route_yan_agr(first_speaker: TODO, second_speaker: TODO): string
  export function st_buy_route_yan_cit(first_speaker: TODO, second_speaker: TODO): string
  export function st_buy_route_yan_ros(first_speaker: TODO, second_speaker: TODO): string
  export function st_buy_route_yan_x16(first_speaker: TODO, second_speaker: TODO): string
  export function st_buy_route_zat_aes1(first_speaker: TODO, second_speaker: TODO): string
  export function take_money(first_speaker: TODO, second_speaker: TODO, money: TODO): void
}
