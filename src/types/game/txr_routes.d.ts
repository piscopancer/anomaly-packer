/** @noSelfInFile */

declare namespace txr_routes {
  export const maps: string[]
  export const routes: Record<string, Record<string, string[]>>
  export function c_search(lv1_target: string, n: number): void
  export function check_all_routes(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_no_value(tbl: string[], value: string): boolean
  export function check_route_aes2_aes1(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_and_money_aes1_sar(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_and_money_aes2_aes1(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_and_money_aes2_s_lab(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_and_money_agr_agr_u(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_and_money_agr_gar(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_and_money_agr_mar(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_and_money_bar_gar(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_and_money_bar_mil(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_and_money_bar_ros(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_and_money_bar_trc(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_and_money_dsc_val(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_and_money_esc_dsc(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_and_money_esc_gar(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_and_money_esc_mar(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_and_money_esc_pol(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_and_money_gar_ros(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_and_money_gen_aes2(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_and_money_gen_w_lab(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_and_money_jup_jup_u(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_and_money_jup_pri(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_and_money_jup_red(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_and_money_jup_zat(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_and_money_kat_aes2(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_and_money_kat_lim(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_and_money_lim_cit(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_and_money_lim_red(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_and_money_mar_mar_h(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_and_money_mil_cit(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_and_money_mil_rad(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_and_money_mil_red(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_and_money_mil_trc(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_and_money_out_jup_u(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_and_money_out_x8(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_and_money_pri_aes1(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_and_money_pri_out(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_and_money_pri_rad(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_and_money_rad_x19(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_and_money_red_rad(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_and_money_val_gar(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_and_money_val_pol(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_and_money_val_trc(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_and_money_val_x18(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_and_money_yan_agr(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_and_money_yan_cit(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_and_money_yan_ros(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_and_money_yan_x16(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_and_money_zat_aes1(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_bar_gar(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_lim_red(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_mil_rad(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_mil_red(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_pri_aes1(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_pri_out(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_pri_rad(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_rad_x19(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_yan_agr(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_route_yan_x16(first_speaker: CGameObject, second_speaker: CGameObject): boolean
  export function check_spot(id: number, spot: string): boolean
  export function get_map(sec: string): string
  export function get_route(map_1: string, map_2: string): string[] | undefined
  export function get_route_info(sr_name: string): LuaMultiReturn<[number, string | false, string | false]>
  export function get_section(map: string): string
  export function get_shortest_path_num(map_1: string, map_2: string): number
  export function have_money(money: number): boolean
  export function is_map_connected(map_1: string, map_2: string): boolean
  export function is_map_discovered(map_1: string, map_2: string): boolean
  export function is_route_discovered(map_1: string, map_2: string): boolean
  export function is_route_left(): boolean
  // Return shape depends on flags: connected maps as `Record<string, string[]>`, or as
  // couple tables `Array<[string, string]>` when `couple` is set.
  export function list_map(discovered: boolean, connected: boolean, couple: boolean): TODO
  export function msg_route(map_1: string, map_2: string): void
  export function msg_route_general(): void
  export function on_game_start(): void
  export function on_localization_change(): void
  export function on_screen_resolution_changed(): void
  export function open_route(map_1: string, map_2: string, no_msg?: boolean): void
  export function open_route_aes2_aes1(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_and_money_aes1_sar(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_and_money_aes2_aes1(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_and_money_aes2_s_lab(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_and_money_agr_agr_u(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_and_money_agr_gar(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_and_money_agr_mar(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_and_money_bar_gar(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_and_money_bar_mil(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_and_money_bar_ros(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_and_money_bar_trc(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_and_money_dsc_val(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_and_money_esc_dsc(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_and_money_esc_gar(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_and_money_esc_mar(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_and_money_esc_pol(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_and_money_gar_ros(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_and_money_gen_aes2(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_and_money_gen_w_lab(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_and_money_jup_jup_u(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_and_money_jup_pri(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_and_money_jup_red(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_and_money_jup_zat(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_and_money_kat_aes2(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_and_money_kat_lim(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_and_money_lim_cit(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_and_money_lim_red(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_and_money_mar_mar_h(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_and_money_mil_cit(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_and_money_mil_rad(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_and_money_mil_red(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_and_money_mil_trc(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_and_money_out_jup_u(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_and_money_out_x8(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_and_money_pri_aes1(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_and_money_pri_out(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_and_money_pri_rad(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_and_money_rad_x19(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_and_money_red_rad(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_and_money_val_gar(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_and_money_val_pol(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_and_money_val_trc(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_and_money_val_x18(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_and_money_yan_agr(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_and_money_yan_cit(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_and_money_yan_ros(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_and_money_yan_x16(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_and_money_zat_aes1(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_bar_gar(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_lim_red(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_mil_rad(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_mil_red(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_pri_aes1(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_pri_out(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_pri_rad(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_rad_x19(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_yan_agr(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function open_route_yan_x16(first_speaker: CGameObject, second_speaker: CGameObject): void
  export function register_map(...args: string[]): void
  export function reload_route_hints(): void
  export function scan_route(sr_name: string): boolean
  export function st_buy_route_aes1_sar(first_speaker: CGameObject, second_speaker: CGameObject): string
  export function st_buy_route_aes2_aes1(first_speaker: CGameObject, second_speaker: CGameObject): string
  export function st_buy_route_aes2_s_lab(first_speaker: CGameObject, second_speaker: CGameObject): string
  export function st_buy_route_agr_agr_u(first_speaker: CGameObject, second_speaker: CGameObject): string
  export function st_buy_route_agr_gar(first_speaker: CGameObject, second_speaker: CGameObject): string
  export function st_buy_route_agr_mar(first_speaker: CGameObject, second_speaker: CGameObject): string
  export function st_buy_route_bar_gar(first_speaker: CGameObject, second_speaker: CGameObject): string
  export function st_buy_route_bar_mil(first_speaker: CGameObject, second_speaker: CGameObject): string
  export function st_buy_route_bar_ros(first_speaker: CGameObject, second_speaker: CGameObject): string
  export function st_buy_route_bar_trc(first_speaker: CGameObject, second_speaker: CGameObject): string
  export function st_buy_route_dsc_val(first_speaker: CGameObject, second_speaker: CGameObject): string
  export function st_buy_route_esc_dsc(first_speaker: CGameObject, second_speaker: CGameObject): string
  export function st_buy_route_esc_gar(first_speaker: CGameObject, second_speaker: CGameObject): string
  export function st_buy_route_esc_mar(first_speaker: CGameObject, second_speaker: CGameObject): string
  export function st_buy_route_esc_pol(first_speaker: CGameObject, second_speaker: CGameObject): string
  export function st_buy_route_gar_ros(first_speaker: CGameObject, second_speaker: CGameObject): string
  export function st_buy_route_gen_aes2(first_speaker: CGameObject, second_speaker: CGameObject): string
  export function st_buy_route_gen_w_lab(first_speaker: CGameObject, second_speaker: CGameObject): string
  export function st_buy_route_jup_jup_u(first_speaker: CGameObject, second_speaker: CGameObject): string
  export function st_buy_route_jup_pri(first_speaker: CGameObject, second_speaker: CGameObject): string
  export function st_buy_route_jup_red(first_speaker: CGameObject, second_speaker: CGameObject): string
  export function st_buy_route_jup_zat(first_speaker: CGameObject, second_speaker: CGameObject): string
  export function st_buy_route_kat_aes2(first_speaker: CGameObject, second_speaker: CGameObject): string
  export function st_buy_route_kat_lim(first_speaker: CGameObject, second_speaker: CGameObject): string
  export function st_buy_route_lim_cit(first_speaker: CGameObject, second_speaker: CGameObject): string
  export function st_buy_route_lim_red(first_speaker: CGameObject, second_speaker: CGameObject): string
  export function st_buy_route_mar_mar_h(first_speaker: CGameObject, second_speaker: CGameObject): string
  export function st_buy_route_mil_cit(first_speaker: CGameObject, second_speaker: CGameObject): string
  export function st_buy_route_mil_rad(first_speaker: CGameObject, second_speaker: CGameObject): string
  export function st_buy_route_mil_red(first_speaker: CGameObject, second_speaker: CGameObject): string
  export function st_buy_route_mil_trc(first_speaker: CGameObject, second_speaker: CGameObject): string
  export function st_buy_route_out_jup_u(first_speaker: CGameObject, second_speaker: CGameObject): string
  export function st_buy_route_out_x8(first_speaker: CGameObject, second_speaker: CGameObject): string
  export function st_buy_route_pri_aes1(first_speaker: CGameObject, second_speaker: CGameObject): string
  export function st_buy_route_pri_out(first_speaker: CGameObject, second_speaker: CGameObject): string
  export function st_buy_route_pri_rad(first_speaker: CGameObject, second_speaker: CGameObject): string
  export function st_buy_route_rad_x19(first_speaker: CGameObject, second_speaker: CGameObject): string
  export function st_buy_route_red_rad(first_speaker: CGameObject, second_speaker: CGameObject): string
  export function st_buy_route_val_gar(first_speaker: CGameObject, second_speaker: CGameObject): string
  export function st_buy_route_val_pol(first_speaker: CGameObject, second_speaker: CGameObject): string
  export function st_buy_route_val_trc(first_speaker: CGameObject, second_speaker: CGameObject): string
  export function st_buy_route_val_x18(first_speaker: CGameObject, second_speaker: CGameObject): string
  export function st_buy_route_yan_agr(first_speaker: CGameObject, second_speaker: CGameObject): string
  export function st_buy_route_yan_cit(first_speaker: CGameObject, second_speaker: CGameObject): string
  export function st_buy_route_yan_ros(first_speaker: CGameObject, second_speaker: CGameObject): string
  export function st_buy_route_yan_x16(first_speaker: CGameObject, second_speaker: CGameObject): string
  export function st_buy_route_zat_aes1(first_speaker: CGameObject, second_speaker: CGameObject): string
  export function take_money(first_speaker: CGameObject, second_speaker: CGameObject, money: number): void
}
