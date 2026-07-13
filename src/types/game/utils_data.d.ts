/** @noSelfInFile */

declare namespace utils_data {
  export function angle_diff(a1: vector, a2: vector): number
  export function angle_left(dir1: vector, dir2: vector): boolean
  export function angle_left_xz(dir1: vector, dir2: vector): boolean
  export function cfg_get_string(char_ini: system_ini, section: Section, field: string, object: CGameObject, mandatory: boolean, gulag_name?: string, default_val?: string): string | undefined
  export function collect_section(ini: system_ini, section: Section, keytable?: boolean): AnyTable
  export function collect_sections(ini: system_ini, sections: string[]): LuaMultiReturn<[AnyTable, AnyTable]>
  export function collect_translations(st: string, is_translated?: boolean): string[] | false
  export function CTime_from_table(t: AnyTable): Time
  export function CTime_to_table(ct: Time): { Y: number; M: number; D: number; h: number; m: number; s: number; ms: number }
  export function CTime2table(gt: Time): AnyTable
  export function CTimeAddSec(ct: Time, sec: number): number
  export function CTimeToSec(ct: Time): number
  export function debug_write(output: string, trace?: boolean): void
  export function deg2rad(d: number): number
  export function file_to_table(fname: string, parent?: AnyTable, simple?: boolean): AnyTable
  export function findfunction(x: string, tbl: AnyTable): any
  export function float2hex(n: number): number
  export function fsgame_append(str: string, ap: string): void
  export function fspath(str: string): string
  export function get_comment(str: string): string
  export function get_ext(s: string): string
  export function get_fsgame(): AnyTable
  export function get_path(str: string, sep?: string): string | undefined
  export function get_scheme_by_section(section: Section): string | undefined
  export function hex2string(str: string): string
  export function mean_random(index_min: number, index_max: number, mean_index?: number, left_power?: number, right_power?: number, flag?: boolean): number | undefined
  export function no_need_to_rotate(npc: CGameObject, target_pos: vector): boolean
  export function no_need_to_rotate_xz(npc: CGameObject, target_pos: vector): boolean
  export function on_game_start(): void
  export function pairsByKeys(t: AnyTable, f?: (a: any, b: any) => boolean): any
  export function parse_condlist(src: string): AnyTable
  export function parse_data(npc: CGameObject, s?: string): AnyTable
  export function parse_data_1v(npc: CGameObject, s?: string): AnyTable
  export function parse_ini_section_to_array(ini: system_ini, section: Section): AnyTable
  export function parse_ini_section_to_bool_array(ini: system_ini, section: Section): Record<string, boolean>
  export function parse_list_ex(ini: system_ini, key: string, val: string, convert?: boolean): AnyTable
  export function parse_params(params: string): string[]
  export function parse_string_keys(str: string, tbl: AnyTable, key?: string): string
  export function parse_syn_data(npc: CGameObject, s?: string): AnyTable
  export function pos_in_rect(p: vector, r: AnyTable): boolean
  export function prefix_r_string(ini: system_ini, sec: Section, key: string, prefix?: string): string | undefined
  export function print_dbg(...args: any[]): void
  export function print_packet_data(data: net_packet): void
  export function print_table(node: AnyTable, header?: string, format_only?: boolean): string | void
  export function r_CTime(p: net_packet, caller?: string): Time | undefined
  export function rad2deg(r: number): number
  export function read_from_ini(ini: system_ini, section: Section, line: string, var_type: 'bool' | 'string' | 'float' | string, _default?: any, caller?: string): any
  export function startsWith(text: string, prefix: string): boolean
  export function string_to_vector(str: string): vector
  export function string2hex(str: string): string
  export function table2CTime(t: AnyTable): Time | undefined
  export function to_str(what: any): string
  export function trim_comment(str: string): string
  export function vector_cmp(a: vector, b: vector): boolean
  export function vector_cmp_prec(a: vector, b: vector, d: number): boolean
  export function vector_to_string(vec: vector): string
  export function w_CTime(p: net_packet, t?: Time, caller?: string): void
  export function w_stpk(stpk: net_packet, typ: string, n: any, info: InfoPortion): void
}

/** @customConstructor cfg_file */
declare class cfg_file {
  constructor(fname: string, simple_mode?: boolean)
  GetValue(sec: Section, key: string, typ?: number | string, def?: any): any
  GetKeys(sec: Section): string[]
  SetValue(sec: Section, key: string, val: any): void
  ClearValue(sec: Section, key: string): void
  SectionExist(sec: Section): boolean
  KeyExist(sec: Section, key: string): boolean
  SaveExt(): void
  Save(): void
}
