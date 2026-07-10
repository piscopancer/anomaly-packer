/** @noSelfInFile */

declare namespace utils_data {
  export function angle_diff(a1: vector, a2: vector): number
  export function angle_left(dir1: vector, dir2: vector): boolean
  export function angle_left_xz(dir1: vector, dir2: vector): boolean
  export function cfg_get_string(char_ini: TODO, section: string, field: string, object: CGameObject, mandatory: boolean, gulag_name?: string, default_val?: string): string | undefined
  export function collect_section(ini: TODO, section: string, keytable?: boolean): TODO
  export function collect_sections(ini: TODO, sections: string[]): LuaMultiReturn<[TODO, TODO]>
  export function collect_translations(st: string, is_translated?: boolean): string[] | false
  export function CTime_from_table(t: TODO): Time
  export function CTime_to_table(ct: Time): TODO
  export function CTime2table(gt: Time): TODO
  export function CTimeAddSec(ct: Time, sec: number): number
  export function CTimeToSec(ct: Time): number
  export function debug_write(output: string, trace?: boolean): void
  export function deg2rad(d: number): number
  export function file_to_table(fname: string, parent?: TODO, simple?: boolean): TODO
  export function findfunction(x: string, tbl: TODO): TODO
  export function float2hex(n: number): number
  export function fsgame_append(str: string, ap: string): void
  export function fspath(str: string): string
  export function get_comment(str: string): string
  export function get_ext(s: string): string
  export function get_fsgame(): TODO
  export function get_path(str: string, sep?: string): string | undefined
  export function get_scheme_by_section(section: string): string | undefined
  export function hex2string(str: string): string
  export function mean_random(index_min: number, index_max: number, mean_index?: number, left_power?: number, right_power?: number, flag?: boolean): number | undefined
  export function no_need_to_rotate(npc: CGameObject, target_pos: vector): boolean
  export function no_need_to_rotate_xz(npc: CGameObject, target_pos: vector): boolean
  export function on_game_start(): void
  export function pairsByKeys(t: TODO, f?: TODO): TODO
  export function parse_condlist(src: string): TODO
  export function parse_data(npc: CGameObject, s?: string): TODO
  export function parse_data_1v(npc: CGameObject, s?: string): TODO
  export function parse_ini_section_to_array(ini: TODO, section: string): TODO
  export function parse_ini_section_to_bool_array(ini: TODO, section: string): TODO
  export function parse_list_ex(ini: TODO, key: string, val: string, convert?: boolean): TODO
  export function parse_params(params: string): string[]
  export function parse_string_keys(str: string, tbl: TODO, key?: string): string
  export function parse_syn_data(npc: CGameObject, s?: string): TODO
  export function pos_in_rect(p: vector, r: TODO): boolean
  export function prefix_r_string(ini: TODO, sec: string, key: string, prefix?: string): string | undefined
  export function print_dbg(...args: TODO[]): void
  export function print_packet_data(data: TODO): void
  export function print_table(node: TODO, header?: string, format_only?: boolean): string | void
  export function r_CTime(p: TODO, caller?: TODO): Time | undefined
  export function rad2deg(r: number): number
  export function read_from_ini(ini: TODO, section: string, line: string, var_type: 'bool' | 'string' | 'float' | string, _default?: TODO, caller?: TODO): TODO
  export function startsWith(text: string, prefix: string): boolean
  export function string_to_vector(str: string): vector
  export function string2hex(str: string): string
  export function table2CTime(t: TODO): Time | undefined
  export function to_str(what: TODO): string
  export function trim_comment(str: string): string
  export function vector_cmp(a: vector, b: vector): boolean
  export function vector_cmp_prec(a: vector, b: vector, d: number): boolean
  export function vector_to_string(vec: vector): string
  export function w_CTime(p: TODO, t?: Time, caller?: TODO): void
  export function w_stpk(stpk: TODO, typ: string, n: TODO, info: string): void
}

/** @customConstructor cfg_file */
declare class cfg_file {
  constructor(fname: string, simple_mode?: boolean)
  GetValue(sec: string, key: string, typ?: number | string, def?: TODO): TODO
  GetKeys(sec: string): TODO
  SetValue(sec: string, key: string, val: TODO): void
  ClearValue(sec: string, key: string): void
  SectionExist(sec: string): boolean
  KeyExist(sec: string, key: string): boolean
  SaveExt(): void
  Save(): void
}
