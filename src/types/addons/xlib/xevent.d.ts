// AUTO-GENERATED addon pack for `xlib` by `anomaly-packer gen-addon`. Lua API of xevent.script.
// Refine `TODO` (= any) by hand where the mod gave no type.

/** @noSelf */
declare const xevent: {
  /**
   * Emit a synthetic callback
   * Delegates to SendScriptCallback which dispatches to all registered handlers
   * @safety SAFE - SendScriptCallback dispatches via axr_main.make_callback; per-handler pcall is the registrar's responsibility
   * @cost O(k) handlers | 0 luabind (pure Lua dispatch: axr_main.make_callback iterates registered handlers + optional axr_main[name](...))
   * @src anomaly/_g.script(112), anomaly/axr_main.script make_callback
   * @param name Callback name
   * @param ... any Callback arguments
   */
  emit(name: string, ...args: any[]): void
  /**
   * Hook a module function with a wrapper
   * Reads module from _G via rawget, stores original, replaces with wrapper(original, ...) closure
   * @safety SAFE - rawget never crashes, type-checks function before replacing
   * @cost O(1) | 0 luabind (pure Lua _G read + table assignment + closure construction)
   * @param module_name Module name (e.g., "xr_eat_medkit")
   * @param func_name Function name (e.g., "consume_medkit")
   * @param wrapper Wrapper fn(original, ...) -> return original(...)
   * @returns success
   */
  hook(module_name: string, func_name: string, wrapper: (this: void, ...args: any[]) => any): boolean
  /**
   * Check if a function is hooked
   * Looks up key in _hooks table
   * @safety SAFE - pure Lua table lookup
   * @cost O(1) | 0 luabind (pure Lua hash table read)
   * @param module_name Module name
   * @param func_name Function name
   */
  is_hooked(module_name: string, func_name: string): boolean
  /**
   * Get list of active hooks
   * Iterates _hooks table keys into array
   * @safety SAFE - pure Lua table iteration
   * @cost O(n) hooks | 0 luabind (pure Lua pairs() over hash table)
   * @returns Array of "module.function" strings
   */
  list_hooks(): AnyTable
  /**
   * Unhook a previously hooked function
   * Restores original function from _originals table, clears hook state
   * @safety SAFE - no-op if not hooked, restores original reference
   * @cost O(1) | 0 luabind (pure Lua table read + restore)
   * @param module_name Module name
   * @param func_name Function name
   * @returns success
   */
  unhook(module_name: string, func_name: string): boolean
}
