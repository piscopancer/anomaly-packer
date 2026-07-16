// AUTO-GENERATED addon pack for `xlib` by `anomaly-packer gen-addon`. Lua API of xtrace.script.
// Refine `TODO` (= any) by hand where the mod gave no type.

/** @noSelf */
declare const xtrace: {
  /**
   * Create new trace (empty path, first push sets root)
   * Increments global trace_counter for unique ID; path builds via push/pop string concatenation
   * @safety SAFE - pure Lua table + metatable
   * @cost O(1) | 0 luabind (pure Lua table/string ops)
   * @returns Trace object with id, path, push(), pop()
   */
  'new'(): AnyTable
  /**
   * Create trace only if condition true, else null trace
   * Null trace has matching API (push/pop are no-ops); zero overhead when disabled
   * @safety SAFE - null singleton is pure Lua table
   * @cost O(1) | 0 luabind (pure Lua table/string ops)
   * @returns Trace or null trace
   */
  new_if(condition: boolean): AnyTable
  /**
   * Reset counters (testing only)
   * Zeroes trace_counter and op_counter globals
   * @safety SAFE - pure Lua
   * @cost O(1) | 0 luabind (pure Lua table/string ops)
   */
  reset(): void
  /**
   * Wrap function with trace push/pop
   * Pushes op_name onto trace path, executes fn(trace), pops on return
   * @safety SAFE - pure Lua; fn errors propagate (no pcall)
   * @cost O(1) + fn cost | 0 luabind (Lua-only push/pop bracket; fn cost depends on caller)
   * @param trace Trace object
   * @param op_name Operation name
   * @param fn Function to execute, receives trace as arg
   * @returns result
   */
  wrap(trace: AnyTable, op_name: string, fn: (this: void, ...args: any[]) => any): any
}
