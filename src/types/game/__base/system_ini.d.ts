/**
 * Ini reader/writer (luabind class `ini_file`, C++ `CScriptIniFile`).
 *
 * The same class is produced by several globals: `system_ini()` reads `system.ltx`,
 * `game_ini()` reads `game.ltx`, `ini_file("path")` opens an arbitrary `.ltx`, and
 * `create_ini_file(text)` builds one from a string. The class is named `system_ini`
 * here because that is the most common entry point and the type is referenced under
 * that name across the project.
 *
 * Writer methods and a few readers are compiled in through `INI_FILE_EXTENDED_EXPORTS`
 * (defined in the Anomaly engine build).
 * @customConstructor system_ini
 */
declare class system_ini {
  constructor()

  // Engine readers (CScriptIniFile)
  section_exist(section: string): boolean
  line_exist(section: string, line: string): boolean
  line_count(section: string): number
  r_clsid(section: string, line: string): number
  r_bool(section: string, line: string): boolean
  /** @param token_list `CScriptTokenList` */
  r_token(section: string, line: string, token_list: TODO): number
  /** `r_string` without trimming trailing whitespace */
  r_string_wq(section: string, line: string): string
  r_string(section: string, line: string): string
  r_u32(section: string, line: string): number
  r_s32(section: string, line: string): number
  r_float(section: string, line: string): number
  r_vector(section: string, line: string): vector
  /** @returns `(exists, name, value)` for the line at `line_index` within `section` */
  r_line(section: string, line_index: number): LuaMultiReturn<[exists: boolean, name: string, value: string]>
  close(): void

  // Engine writers & mutators (INI_FILE_EXTENDED_EXPORTS)
  w_bool(section: string, line: string, value: boolean, comment?: string): void
  /** @param value packed `u32` color */
  w_color(section: string, line: string, value: number, comment?: string): void
  /** @param value `Fcolor` */
  w_fcolor(section: string, line: string, value: TODO, comment?: string): void
  w_float(section: string, line: string, value: number, comment?: string): void
  w_fvector2(section: string, line: string, value: vector2, comment?: string): void
  w_fvector3(section: string, line: string, value: vector, comment?: string): void
  /** @param value `Fvector4` */
  w_fvector4(section: string, line: string, value: TODO, comment?: string): void
  w_s8(section: string, line: string, value: number, comment?: string): void
  w_s16(section: string, line: string, value: number, comment?: string): void
  w_s32(section: string, line: string, value: number, comment?: string): void
  w_s64(section: string, line: string, value: number, comment?: string): void
  w_u8(section: string, line: string, value: number, comment?: string): void
  w_u16(section: string, line: string, value: number, comment?: string): void
  w_u32(section: string, line: string, value: number, comment?: string): void
  w_u64(section: string, line: string, value: number, comment?: string): void
  w_string(section: string, line: string, value: string, comment?: string): void
  /** @returns whether the save succeeded */
  save_as(new_fname?: string): boolean
  save_at_end(b: boolean): void
  remove_line(section: string, line: string): void
  set_override_names(b: boolean): void
  section_count(): number
  set_readonly(b: boolean): void
  /** @param cb called per section name; return `true` to stop iteration */
  section_for_each(cb: (this: void, section: string) => boolean): void

  // Nil-safe wrappers and parsers added in Lua (_g.script), not the engine
  r_string_ex(section: string, prop: string): string | null
  r_bool_ex(section: string, prop: string): boolean | null
  r_float_ex(section: string, prop: string): number | null
  r_string_to_condlist(section: string, key: string, def_val?: any): Record<TODO, TODO> | null
  r_list(section: string, key: string, def_val?: any): string[] | null
  r_line_ex(section: string, key_or_index: string | number, def_val?: any): LuaMultiReturn<[result: TODO | null, id: string | null, value: string | null]>
  r_mult(section: string, key: string, ...args: any[]): TODO
}
