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
  section_exist(section: AnySection): boolean
  line_exist(section: AnySection, line: string): boolean
  line_count(section: AnySection): number
  r_clsid(section: AnySection, line: string): number
  r_bool(section: AnySection, line: string): boolean
  r_token(section: AnySection, line: string, token_list: token_list): number
  /** `r_string` without trimming trailing whitespace */
  r_string_wq(section: AnySection, line: string): string
  r_string(section: AnySection, line: string): string
  r_u32(section: AnySection, line: string): number
  r_s32(section: AnySection, line: string): number
  r_float(section: AnySection, line: string): number
  r_vector(section: AnySection, line: string): vector
  /** @returns `(exists, name, value)` for the line at `line_index` within `section` */
  r_line(section: AnySection, line_index: number): LuaMultiReturn<[exists: boolean, name: string, value: string]>
  close(): void

  // Engine writers & mutators (INI_FILE_EXTENDED_EXPORTS)
  w_bool(section: AnySection, line: string, value: boolean, comment?: string): void
  /** @param value packed `u32` color */
  w_color(section: AnySection, line: string, value: number, comment?: string): void
  w_fcolor(section: AnySection, line: string, value: fcolor, comment?: string): void
  w_float(section: AnySection, line: string, value: number, comment?: string): void
  w_fvector2(section: AnySection, line: string, value: vector2, comment?: string): void
  w_fvector3(section: AnySection, line: string, value: vector, comment?: string): void
  w_fvector4(section: AnySection, line: string, value: vector4, comment?: string): void
  w_s8(section: AnySection, line: string, value: number, comment?: string): void
  w_s16(section: AnySection, line: string, value: number, comment?: string): void
  w_s32(section: AnySection, line: string, value: number, comment?: string): void
  w_s64(section: AnySection, line: string, value: number, comment?: string): void
  w_u8(section: AnySection, line: string, value: number, comment?: string): void
  w_u16(section: AnySection, line: string, value: number, comment?: string): void
  w_u32(section: AnySection, line: string, value: number, comment?: string): void
  w_u64(section: AnySection, line: string, value: number, comment?: string): void
  w_string(section: AnySection, line: string, value: string, comment?: string): void
  /** @returns whether the save succeeded */
  save_as(new_fname?: string): boolean
  save_at_end(b: boolean): void
  remove_line(section: AnySection, line: string): void
  set_override_names(b: boolean): void
  section_count(): number
  set_readonly(b: boolean): void
  /** @param cb called per section name; return `true` to stop iteration */
  section_for_each(cb: (this: void, section: AnySection) => boolean): void

  // Nil-safe wrappers and parsers added in Lua (_g.script), not the engine
  r_string_ex(section: AnySection, prop: string): AnySection | null
  r_bool_ex(section: AnySection, prop: string): boolean | null
  r_float_ex(section: AnySection, prop: string): number | null
  /** Parses the value with `xr_logic.parse_condlist` into a condlist (array of condition entries). */
  r_string_to_condlist(section: AnySection, key: string, def_val?: string): any[] | null
  r_list(section: AnySection, key: string, def_val?: string): string[] | null
  /** Wraps `r_line`, returning `(exists, id, value)`. */
  r_line_ex(section: AnySection, key_or_index: string | number): LuaMultiReturn<[exists: boolean, id: string, value: string]>
  /** Splits the value with `parse_names` and returns each name; falls back to `args` when unset. */
  r_mult(section: AnySection, key: string, ...args: any[]): LuaMultiReturn<any[]>
}

/**
 * Registry of typed ltx files, augmented by addons. Map the exact path string passed to
 * {@link ini_file} to the file's shape: an object of `sectionName -> { fieldName: valueType }`.
 * When a section name is not known ahead of time (e.g. keyed by a runtime visual name),
 * use an index signature: `Record<string, { ... }>`. Once a path is registered here,
 * `ini_file(path)` returns a {@link TypedIni} that autocompletes section and field names and
 * checks each reader/writer against the field's declared value type.
 *
 * @example
 * declare global {
 *   interface IniFileSchemas {
 *     "plugins/my_addon.ltx": Record<string, { armorType: string; armorMult: number }>
 *   }
 * }
 */
interface IniFileSchemas {}

/** Field names of section `S` in `Schema`. */
type IniLineKeys<Schema, S extends keyof Schema> = keyof Schema[S] & string
/** Field names of section `S` whose declared value type is assignable to `T` — lets each reader/writer accept only the fields it can actually read/write. */
type IniLineKeysOfType<Schema, S extends keyof Schema, T> = {
  [K in keyof Schema[S]]-?: Schema[S][K] extends T ? K : never
}[keyof Schema[S]] &
  string

/** Readers/writers of {@link system_ini} re-typed against a file schema. Overlaid onto the base class in {@link TypedIni}; every other `system_ini` member keeps its original signature. */
interface TypedIniMembers<Schema> {
  section_exist(section: keyof Schema & string): boolean
  section_for_each(cb: (this: void, section: keyof Schema & string) => boolean): void
  line_exist<S extends keyof Schema>(section: S, line: IniLineKeys<Schema, S>): boolean
  line_count<S extends keyof Schema>(section: S): number
  remove_line<S extends keyof Schema>(section: S, line: IniLineKeys<Schema, S>): void

  r_string<S extends keyof Schema, K extends IniLineKeysOfType<Schema, S, string>>(section: S, line: K): Schema[S][K]
  r_string_wq<S extends keyof Schema, K extends IniLineKeysOfType<Schema, S, string>>(section: S, line: K): Schema[S][K]
  r_string_ex<S extends keyof Schema, K extends IniLineKeysOfType<Schema, S, string>>(section: S, prop: K): Schema[S][K] | null
  r_float<S extends keyof Schema, K extends IniLineKeysOfType<Schema, S, number>>(section: S, line: K): number
  r_float_ex<S extends keyof Schema, K extends IniLineKeysOfType<Schema, S, number>>(section: S, prop: K): number | null
  r_u32<S extends keyof Schema, K extends IniLineKeysOfType<Schema, S, number>>(section: S, line: K): number
  r_s32<S extends keyof Schema, K extends IniLineKeysOfType<Schema, S, number>>(section: S, line: K): number
  r_bool<S extends keyof Schema, K extends IniLineKeysOfType<Schema, S, boolean>>(section: S, line: K): boolean
  r_bool_ex<S extends keyof Schema, K extends IniLineKeysOfType<Schema, S, boolean>>(section: S, prop: K): boolean | null
  r_vector<S extends keyof Schema, K extends IniLineKeysOfType<Schema, S, vector>>(section: S, line: K): vector

  w_string<S extends keyof Schema, K extends IniLineKeysOfType<Schema, S, string>>(section: S, line: K, value: Schema[S][K], comment?: string): void
  w_float<S extends keyof Schema, K extends IniLineKeysOfType<Schema, S, number>>(section: S, line: K, value: number, comment?: string): void
  w_u32<S extends keyof Schema, K extends IniLineKeysOfType<Schema, S, number>>(section: S, line: K, value: number, comment?: string): void
  w_bool<S extends keyof Schema, K extends IniLineKeysOfType<Schema, S, boolean>>(section: S, line: K, value: boolean, comment?: string): void
  w_fvector3<S extends keyof Schema, K extends IniLineKeysOfType<Schema, S, vector>>(section: S, line: K, value: vector, comment?: string): void
}

/** A {@link system_ini} whose section/field methods are typed by a file `Schema`. The schema-independent methods (`r_line`, `r_token`, `close`, `save_as`, …) keep their base signatures. */
type TypedIni<Schema> = Omit<system_ini, keyof TypedIniMembers<Schema>> & TypedIniMembers<Schema>

/** Schema for an ltx file not registered in {@link IniFileSchemas}: any section name, any field name, untyped values. Makes {@link ini_file} permissive by default — an addon that does not opt into ini type-safety gets none, and no errors. */
type UntypedIniSchema = Record<string, Record<string, any>>

/** A single `(name, id)` token entry (luabind class `token`). */
declare class token {
  constructor()
  name: string
  id: number
}
/**
 * Editable list of `(name, id)` tokens (luabind class `token_list`, C++ `CScriptTokenList`),
 * passed to {@link system_ini.r_token}.
 * @customConstructor token_list
 */
declare class token_list {
  constructor()
  add(name: string, id: number): void
  remove(name: string): void
  clear(): void
  id(name: string): number
  name(id: number): string
}
