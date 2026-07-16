// AUTO-GENERATED addon pack for `xlib` by `anomaly-packer gen-addon`. Lua API of xslice.script.
// Refine `TODO` (= any) by hand where the mod gave no type.

/** @noSelf */
declare const xslice: {
  /**
   * Cancel a running queue. Fires on_done unless silent.
   * Nils the queue entry; pending _tick iteration skips removed keys safely
   * @safety SAFE - pure Lua table nil assignment
   * @cost O(1) | 0 luabind (pure Lua hash assign)
   * @param name Queue name
   * @param silent If true, skip on_done callback
   */
  cancel(name: string, silent: boolean): void
  /**
   * Check if a queue is running.
   * Hash lookup on _queues table; safe to call from any context including on_done
   * @safety SAFE - pure Lua table read
   * @cost O(1) | 0 luabind
   * @param name Queue name
   */
  is_active(name: string): boolean
  /**
   * Start a time-sliced queue. Processes step items per frame from an array.
   * Deferred compaction: survivors collected per pass, swapped as next input. No table.remove.
   * @safety SAFE - pure Lua table iteration + AddUniqueCall registration
   * @cost O(1) setup, O(step) per frame via _tick | 0 luabind (AddUniqueCall is anomaly Lua _g.script registration)
   * @param name Unique queue name (rejected if already active)
   * @param items Array to process (referenced, not copied; do not modify while active)
   * @param opts { func(item,index)->true|false|nil, on_done(), step }
   * @returns True if started
   */
  start(name: string, items: AnyTable, opts: AnyTable): boolean
}
