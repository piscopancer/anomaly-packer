// AUTO-GENERATED addon pack for `xlib` by `anomaly-packer gen-addon`. Lua API of xprofiler.script.
// Refine `TODO` (= any) by hand where the mod gave no type.

/** @noSelf */
declare const xprofiler: {
  /**
   * Create a new profiler
   * Wraps engine profile_timer C++ object (CPU::GetCLK tick counting, microsecond precision)
   * @safety SAFE - profile_timer() constructor never fails (struct ctor zeroes accumulator/count)
   * @cost O(1) | 1 luabind medium (profile_timer ctor: small struct alloc + zero-init)
   * @src xray/xrServerEntities/script_engine_script.cpp(127) struct profile_timer_script, (253) class_ binding
   * @returns Profiler object with :start(), :stop(), :get_us(), :get_ms(), :reset()
   */
  'new'(): AnyTable
  /**
   * Create profiler if condition true, else return null singleton (zero overhead)
   * Null singleton has matching API (:start/:stop/:get_ms all no-op); zero luabind when disabled
   * @safety SAFE - null singleton is pure Lua table
   * @cost O(1) | 0 luabind if false, 1 luabind medium if true (profile_timer ctor)
   * @src xray/xrServerEntities/script_engine_script.cpp(127,253)
   * @returns Profiler or null singleton
   */
  new_if(condition: boolean): AnyTable
  /**
   * Wrap function with timing, returns result and duration_ms
   * Creates profile_timer, brackets fn() with start/stop, converts time() from microseconds to ms
   * @safety SAFE - profile_timer start/stop/time never crash (CPU::GetCLK is leaf intrinsic)
   * @cost O(1) + fn cost | 4 luabind trivial (ctor medium + start + stop + time: all CPU::GetCLK delta + arithmetic)
   * @src xray/xrServerEntities/script_engine_script.cpp(127,253)
   * @param fn Function to execute
   * @returns number result, duration in milliseconds
   */
  wrap(fn: (this: void, ...args: any[]) => any): TODO
}
