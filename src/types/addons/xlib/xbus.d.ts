// AUTO-GENERATED addon pack for `xlib` by `anomaly-packer gen-addon`. Lua API of xbus.script.
// Refine `TODO` (= any) by hand where the mod gave no type.

/** @noSelf */
declare const xbus: {
  /**
   * Get subscriber count for an event
   * Returns #subscribers array length or 0 if no subscribers
   * @safety SAFE - pure Lua
   * @cost O(1) | 0 luabind (Lua # operator on array part)
   * @param event Event name
   * @returns count
   */
  count(event: string): number
  /**
   * Debug: get full state of subscribers table
   * Builds diagnostic snapshot with names and counts per event
   * @safety SAFE - pure Lua table traversal
   * @cost O(n) events * O(k) subscribers | 0 luabind
   * @returns { event = { names = {}, count_hash = n, count_pairs = n }, ... }
   */
  debug_state(): AnyTable
  /**
   * Get list of subscriber names for an event
   * Extracts .name field from each subscriber entry into array
   * @safety SAFE - pure Lua table iteration
   * @cost O(n) subscribers | 0 luabind
   * @param event Event name
   * @returns List of subscriber names
   */
  get_subscribers(event: string): AnyTable
  /**
   * Check if a subscriber exists
   * Linear search by name in subscribers array
   * @safety SAFE - pure Lua table iteration
   * @cost O(n) subscribers | 0 luabind
   * @param event Event name
   * @param name Subscriber identifier
   * @returns exists
   */
  has(event: string, name: string): boolean
  /**
   * Publish an event to all subscribers
   * Iterates subscribers, calls each directly (no pcall - internal modules, errors must be visible)
   * @safety SAFE - pure Lua dispatch, subscribers are internal modules
   * @cost O(n) subscribers + per-callback cost | 0 luabind (pure Lua dispatch)
   * @param event Event name
   * @param data Event payload
   * @returns delivered Number of successful deliveries
   */
  publish(event: string, data: AnyTable): number
  /**
   * Reset statistics
   * Replaces event_stats with empty table; old references become stale
   * @safety SAFE - pure Lua
   * @cost O(1) | 0 luabind
   */
  reset_stats(): void
  /**
   * Get event statistics
   * Returns reference to internal event_stats table (not a copy)
   * @safety SAFE - pure Lua table reference
   * @cost O(1) | 0 luabind
   * @returns Stats by event name {published, delivered}
   */
  stats(): AnyTable
  /**
   * Subscribe to an event
   * Appends {callback, name} to subscribers[event] array; rejects duplicates by name
   * @safety SAFE - pure Lua, type-checks callback, nil-guarded
   * @cost O(n) subscribers (linear dup check) | 0 luabind (pure Lua ipairs + table append)
   * @param event Event name
   * @param callback Callback function(event_data)
   * @param name Unique subscriber identifier
   * @returns success
   */
  subscribe(event: string, callback: (this: void, ...args: any[]) => any, name: string): boolean
  /**
   * Unsubscribe from an event
   * Finds subscriber by name, removes via table.remove (shifts array)
   * @safety SAFE - no-op if not subscribed
   * @cost O(n) subscribers | 0 luabind (linear search + table.remove shift)
   * @param event Event name
   * @param name Subscriber identifier
   * @returns success
   */
  unsubscribe(event: string, name: string): boolean
}
