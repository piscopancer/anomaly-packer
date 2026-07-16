// AUTO-GENERATED addon pack for `xlib` by `anomaly-packer gen-addon`. Lua API of xstring.script.
// Refine `TODO` (= any) by hand where the mod gave no type.

/** @noSelf */
declare const xstring: {
  /**
   * Capitalize the first character of a string, encoding-aware (ASCII + cp1251 Cyrillic)
   * Lua 5.1 string.upper and %l patterns are ASCII-only; Cyrillic text stays lowercase.
   * This helper handles both ASCII a-z and cp1251 Ð°-Ñ+Ñ via a precomputed byte table.
   * @safety SAFE - pure Lua byte ops, nil/empty-guarded
   * @cost O(1) | 0 luabind (string.byte + table index + string.char + string.sub of first byte)
   * @src cp1251 codepage (windows-1251) case mapping; xray-monolith string_table stores bytes as-is
   * @param text Input (any encoding; ASCII and cp1251 handled; UTF-8 multi-byte unchanged)
   * @returns Input with first byte uppercased (unchanged if already upper or no mapping)
   */
  capitalize_first(text: string | undefined): string | undefined
  /**
   * Interpolate string with named placeholders
   * Replaces {key} patterns via string.gsub with values from vars table; preserves unmatched placeholders
   * @safety SAFE - pure Lua string operations, nil-guarded
   * @cost O(n) over template length | 0 luabind (pure Lua string.gsub + per-match callback + tostring)
   * @param str Template with {key} placeholders
   * @param vars Key-value pairs for substitution
   * @returns Interpolated string
   * @usage xstring.interpolate("{name} is {age}", {name="John", age=30})
   */
  interpolate(str: string, vars: AnyTable): string
}
