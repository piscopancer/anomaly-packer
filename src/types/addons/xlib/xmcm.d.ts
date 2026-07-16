// AUTO-GENERATED addon pack for `xlib` by `anomaly-packer gen-addon`. Lua API of xmcm.script.
// Refine `TODO` (= any) by hand where the mod gave no type.

/** @noSelf */
declare const xmcm: {
  /**
   * Create a complete MCM config: pre-seeded table, getter, and loader
   * Seeds cfg from defaults at creation (no ui_mcm call); loader reads MCM when called
   * @safety SAFE - creation is pure Lua table copy, loader delegates to create_getter
   * @cost O(n) defaults at creation, O(n) per load() call | 0 luabind (pure Lua throughout)
   * @param mod_id MCM mod identifier
   * @param defaults Default values {key = value}
   * @param path_builder Optional function(key) -> mcm_path
   * @returns cfg Pre-seeded config table
   * @returns getter Per-key getter function(key) -> value
   * @returns load Loader that refreshes all cfg values from MCM
   */
  create_config(mod_id: string, defaults: AnyTable, path_builder: (this: void, ...args: any[]) => any | undefined): LuaMultiReturn<[AnyTable, (this: void, ...args: any[]) => any, (this: void, ...args: any[]) => any]>
  /**
   * Create a config getter function
   * Returns closure that reads ui_mcm.get(path) with fallback to defaults table
   * @safety SAFE - ui_mcm.get returns nil for missing keys, defaults table is fallback
   * @cost O(1) per call | 0 luabind (ui_mcm is Lua-to-Lua hash table read)
   * @param mod_id MCM mod identifier
   * @param defaults Default values {key = value}
   * @param path_builder Optional function(key) -> mcm_path
   * @returns getter function(key) -> value
   */
  create_getter(mod_id: string, defaults: AnyTable, path_builder: (this: void, ...args: any[]) => any | undefined): (this: void, ...args: any[]) => any
  /**
   * Create a settings loader function (Demonized pattern)
   * Returns closure that iterates defaults, reads ui_mcm.get per key, writes to settings table
   * @safety SAFE - ui_mcm.get returns nil for missing keys, defaults table is fallback
   * @cost O(n) defaults per call | 0 luabind (ui_mcm is Lua-to-Lua hash table)
   * @param mod_id MCM mod identifier
   * @param defaults Default values {key = value}
   * @param path_builder Optional function(key) -> mcm_path
   * @returns loader function(settings) -> updates settings in place
   */
  create_loader(mod_id: string, defaults: AnyTable, path_builder: (this: void, ...args: any[]) => any | undefined): (this: void, ...args: any[]) => any
  /**
   * Extract default values from MCM op table
   * Recursively walks op.gr array collecting {id, def} pairs into flat defaults table
   * @safety SAFE - pure Lua table traversal, nil-guarded
   * @cost O(n) options | 0 luabind (pure Lua recursive ipairs over gr arrays)
   * @param op MCM options table with gr array
   * @param recursive Process nested gr tables (default: true)
   * @returns defaults {id = def_value, ...}
   */
  extract_defaults(op: AnyTable, recursive: boolean | undefined): AnyTable
  /**
   * Format used settings as string (for logging)
   * Sorts keys, compares get_config(key) against default, marks divergent values with *
   * @safety SAFE - pure Lua string formatting, get_config returns nil for missing
   * @cost O(n log n) keys (sort) + O(1) per get_config call | 0 luabind (pure Lua)
   * @param mod_id Mod identifier for header
   * @param defaults Default values {key = value}
   * @param get_config Getter function(key) -> value
   * @returns Formatted settings
   */
  format_config(mod_id: string, defaults: AnyTable, get_config: (this: void, ...args: any[]) => any): string
  /**
   * Format defaults as string (for logging)
   * Sorts keys alphabetically, formats as "key = value" lines with header
   * @safety SAFE - pure Lua string formatting
   * @cost O(n log n) keys (table.sort) | 0 luabind (pure Lua string.format + table.concat)
   * @param mod_id Mod identifier for header
   * @param defaults Default values {key = value}
   * @returns Formatted defaults
   */
  format_defaults(mod_id: string, defaults: AnyTable): string
}
