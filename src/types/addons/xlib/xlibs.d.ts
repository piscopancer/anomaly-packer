// AUTO-GENERATED addon pack for `xlib` by `anomaly-packer gen-addon`. Lua API of xlibs.script.
// Refine `TODO` (= any) by hand where the mod gave no type.

/** @noSelf */
declare const xlibs: {
  /**
   * Get xlibs package version string
   * Constant read from module-local _VERSION literal, set at file load
   * @safety SAFE - returns a constant string literal
   * @cost O(1) | 0 luabind (return local)
   * @returns Version string (e.g. "1.5.0")
   */
  get_version(): string
  /**
   * Check if xlibs version is compatible with required minimum (semver: same major, actual >= required)
   * Parses both required and actual as major.minor.patch via Lua pattern; rejects on major mismatch, then compares minor then patch
   * @safety SAFE - tonumber returns nil for malformed patches (defaulted to 0); required must match "^%d+%.%d+" or tonumber crashes (caller passes valid semver)
   * @cost O(1) | 0 luabind (pure Lua string.match + tonumber + integer compares)
   * @param required Minimum version ("1.2" or "1.2.2")
   * @returns True if compatible
   */
  is_compatible(required: string): boolean
}
