/**
 * Read `system.ltx`
 * @customConstructor system_ini
 */
declare class system_ini {
  constructor()
  r_string_ex(section: string, prop: string): string | null
  r_bool_ex(section: string, prop: string): boolean | null
  r_float_ex(section: string, prop: string): number | null
  r_u32(section: string, prop: string): number | null
  r_s32(section: string, prop: string): TODO
  section_exist(section: string): boolean
  section_for_each(cb: (section: string) => void): void
  line_count(section: string): number | null
  // from _g
  r_string_to_condlist(section: string, key: string, def_val?: any): Record<TODO, TODO> | null
  r_list(section: string, key: string, def_val?: any): string[] | null
  r_mult(section: string, key: string, ...args: any[]): TODO
  save_as(filename: string): void
}
