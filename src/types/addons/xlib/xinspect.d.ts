// AUTO-GENERATED addon pack for `xlib` by `anomaly-packer gen-addon`. Lua API of xinspect.script.
// Refine `TODO` (= any) by hand where the mod gave no type.

/** @noSelf */
declare const xinspect: {
  format_value: TODO
  OBJECT_TYPE: AnyTable
  /**
   * Format table (table-only alias for inspect with shallower default depth)
   * Returns tostring(t) for non-table input; otherwise delegates to format_value with depth limit
   * @safety SAFE - same path as inspect()
   * @cost O(n) total values walked | 0 luabind (pure Lua; userdata only entered via inspect path)
   * @param t Table to format
   * @param max_depth Maximum depth (default 2)
   * @returns Formatted table
   */
  format_table(t: AnyTable, max_depth: number | undefined): string
  /**
   * Get object type using game's type check functions
   * Dispatches through IsStalker/IsMonster/IsWeapon/etc. global type checkers with clsid
   * @safety SAFE - returns nil for nil obj, type checkers are nil-safe
   * @cost O(1) | 1 luabind trivial when cls is nil (clsid: enum return), 0 luabind otherwise; Is* dispatch is pure Lua clsid equality / hash lookup
   * @src anomaly/_g.script(2820) IsStalker, (2827) IsMonster, (3175) IsItem
   * @param obj Game object
   * @param cls Class ID (optional, will fetch if nil)
   * @returns Type name: "stalker"|"monster"|"weapon"|"outfit"|"headgear"|"item"|"anomaly"|"invbox"|"object"
   */
  get_type(obj: TODO, cls: number | undefined): string
  /**
   * Inspect any value with cycle detection and depth limiting
   * Recursive walker over tables; SIMPLE_TYPES dispatch for primitives, userdata delegated to userdata(); cycle detection via ctx.seen set, depth cap via ctx.max_depth (default 3)
   * @safety SAFE - userdata path pcall-guarded internally; format_value tolerates missing metatables and __index
   * @cost O(n) total values walked | 0 luabind for tables/primitives, per-userdata cost = userdata() cost (5-10 luabind mixed weights)
   * @param value Value to inspect
   * @param opts Options: { depth = number (default 3) }
   * @returns Human-readable representation
   */
  inspect(value: any, opts: AnyTable | undefined): string
  /**
   * Format userdata (X-Ray game object) with rich info
   * Extracts id/name/section/community/alive/rank via pcall; output: @type{id=N, name="x", sec="y", ...}
   * @safety pcall: game objects may be released/invalid, methods crash, see doc/library/modding/pcall-safety.md
   * @cost O(1) | 5-10 luabind mixed: id/alive/parent_id/group_id trivial; name/section heavy (shared_str alloc); clsid trivial; character_community medium (anomaly resolve)
   * @src xray/xrGame/script_game_object_script.cpp, anomaly/_g.script(2820)
   * @param obj Game object
   * @returns Formatted representation
   */
  userdata(obj: TODO): string
}
