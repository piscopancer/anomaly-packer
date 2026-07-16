// AUTO-GENERATED addon pack for `xlib` by `anomaly-packer gen-addon`. Lua API of xlog.script.
// Refine `TODO` (= any) by hand where the mod gave no type.

/** @noSelf */
declare const xlog: {
  /**
   * Flush all loggers
   * Iterates all registered loggers and flushes their buffers to disk
   * @safety SAFE - delegates to Logger:flush_buffer which handles io.open failures
   * @cost O(n) loggers * O(k) buffered lines | 0 luabind (io.open / write / flush are standard Lua libc, not engine bridge)
   */
  flush_all(): void
  /**
   * Get LEVELS table for external comparison
   * Returns reference to internal LEVELS constant table
   * @safety SAFE - pure Lua table reference
   * @cost O(1) | 0 luabind (return module-local)
   * @returns LEVELS { FATAL=1, ERROR=2, WARN=3, INFO=4, DEBUG=5, TRACE=6 }
   */
  get_levels(): AnyTable
  /**
   * Get or create isolated logger
   * Returns cached facade or creates new Logger + facade pair; facades expose level methods (fatal..trace)
   * @safety SAFE - pure Lua table/metatable creation
   * @cost O(1) | 0 luabind (pure Lua table allocation + setmetatable)
   * @param name Logger name
   * @param cfg { level, enabled, outfile, buffer_size, flush_on_level, max_file_size, stack_trace, max_stack_frames }
   * @returns Logger facade with fatal/error/warn/info/debug/trace methods
   */
  get_logger(name: string, cfg: AnyTable | undefined): AnyTable
  /**
   * Get session ID for correlation
   * Lazy-generates HH:MM:SS_XXXX format ID on first call, cached for session
   * @safety SAFE - pure Lua string formatting
   * @cost O(1) | 0 luabind (os.date + math.random + string.format are all standard Lua C API)
   * @returns Session ID
   */
  get_session_id(): string
  /**
   * Initialize with platform bindings
   * Stores bindings table, starts periodic flush timer, registers lifecycle callbacks
   * @safety SAFE - asserts bindings non-nil, all setup delegates to pure Lua
   * @cost O(1) | 0 luabind (bindings are closures, deferred until flush/callback fire)
   * @param bindings { get_logs_path, create_timer, console_print, register_callback }
   */
  init(bindings: AnyTable): void
  /**
   * Initialize logging system with game-specific callbacks
   * Wires getFS():update_path("$logs$") for path, CreateTimeEvent for flush, RegisterScriptCallback for lifecycle
   * @safety SAFE - all bindings are nil-checked in init(); getFS/update_path deferred to first flush
   * @cost O(1) at startup | 0 luabind here (closures defer the work); first flush triggers 2 luabind heavy (getFS: FS singleton, update_path: string concat over path tree)
   * @src xray/xrGame/fs_registrator_script.cpp(9,289), anomaly/_g.script(339,104), RavenAscendant/mcm_log.script(52)
   */
  on_game_start(): void
}
