// AUTO-GENERATED addon pack for `xlib` by `anomaly-packer gen-addon`. Lua API of xtime.script.
// Refine `TODO` (= any) by hand where the mod gave no type.

/** @noSelf */
declare const xtime: {
  /**
   * Get game-seconds since epoch (level start time)
   * Caches level.get_start_time() (constant per save). Cache reset on on_game_start.
   * @safety Safe in gameplay and from on_game_load onward (time manager loaded, Level() constructed
   *   at net_spawn -- smart_mutator/broker read it there every load). NOT safe in load_state /
   *   on_game_start: level.present() returns true but Level()'s start time is not loaded yet, so
   *   level.get_start_time AVs (level_script.cpp:2079, no null guard). Never call game_sec before
   *   on_game_load. Tested: ap_ext_loot_claim CTD calling this in load_state (xray_damian.log
   *   2026-06-21, AnomalyDX9).
   * @cost O(1) | 2 luabind (get_game_time medium: xrTime ctor from Level().GetStartGameTime; diffSec trivial: (a-b)/sec2ms), first call adds 1 luabind medium (get_start_time: xrTime construction)
   * @src xray/xrGame/level_script.cpp(2079) get_start_time, xray/xrGame/xr_time.cpp(76) diffSec, level_script.cpp(2733) get_game_time
   * @returns Game-seconds since epoch (0 when no level)
   */
  game_sec(): number
  /**
   * Get the engine CTime for the current in-game moment, or nil when no level is present.
   * Wrapper over game.get_game_time. Engine CTime exposes only :get(Y,M,D,h,m,s,ms),
   * :diffSec, :add, :sub, :set*, :dateToString, :timeToString -- there is no :hour() / :min().
   * @safety SAFE - returns nil when no level
   * @cost O(1) | 1 luabind medium (get_game_time: xrTime ctor wrapping current u64 timestamp)
   * @src xray/xrGame/level_script.cpp(2733) get_game_time binding, xray/xrGame/xr_time.cpp xrTime
   * @returns CTime or nil
   */
  game_time(): TODO | undefined
  /**
   * Get the current in-game hour and minute via CTime:get(). nil, nil when no level.
   * @safety SAFE - returns nil, nil when no level
   * @cost O(1) | 2 luabind (game_time wrapper: 1 luabind medium for xrTime ctor; CTime:get: 1 luabind trivial -- split_time bit math on u64)
   * @src xray/xrGame/xr_time.cpp(71) xrTime::get -> split_time
   * @returns h
   * @returns m
   */
  hms(): LuaMultiReturn<[number | undefined, number | undefined]>
  on_game_start(): void
}
