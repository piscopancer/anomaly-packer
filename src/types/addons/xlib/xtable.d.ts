// AUTO-GENERATED addon pack for `xlib` by `anomaly-packer gen-addon`. Lua API of xtable.script.
// Refine `TODO` (= any) by hand where the mod gave no type.

/** @noSelf */
declare const xtable: {
  /**
   * Acquire keyed lock, returns false if still in time window
   * Compares os.clock() against stored expiry; sets new expiry on acquire
   * @safety SAFE - pure Lua + os.clock (standard C API)
   * @cost O(1) | 0 luabind (pure Lua)
   * @param key Lock key
   * @param sec Time window in seconds
   * @returns true if acquired, false if in window
   */
  acquire_lock(key: string, sec: number): boolean
  /**
   * Insert value into sorted array at correct position
   * Delegates to bisect_left for position, then table.insert shifts elements right
   * @safety SAFE - pure Lua, mutates input table
   * @cost O(log n) search + O(n) shift | 0 luabind (bisect_left + table.insert)
   * @param arr Sorted array (mutated in-place)
   * @param value Value to insert
   * @param compare_fn Comparator (a < b), default: operator <
   * @returns The array (for chaining)
   */
  binary_insert(arr: AnyTable, value: any, compare_fn: (this: void, ...args: any[]) => any | undefined): AnyTable
  /**
   * Find leftmost insertion point in sorted array (bisect left)
   * Binary search for insertion index; equal elements go after existing (stable)
   * @safety SAFE - pure Lua, compare_fn defaults to operator <
   * @cost O(log n) | 0 luabind (Lua binary search)
   * @param arr Sorted array
   * @param value Value to find position for
   * @param compare_fn Comparator (a < b), default: operator <
   * @returns Insertion index (1-based)
   */
  bisect_left(arr: AnyTable, value: any, compare_fn: (this: void, ...args: any[]) => any | undefined): number
  /**
   * Check if lock is available without acquiring it
   * Returns true if lock is free (expired or never set), false if still held
   * @safety SAFE - pure Lua + os.clock (standard C API)
   * @cost O(1) | 0 luabind (pure Lua)
   * @param key Lock key
   * @returns true if available, false if locked
   */
  check_lock(key: string): boolean
  /**
   * Clear all locks
   * Replaces _locks with empty table; old references become stale
   * @safety SAFE - pure Lua
   * @cost O(1) | 0 luabind (pure Lua)
   */
  clear_locks(): any | undefined
  /**
   * Shallow clone a table
   * Copies all key-value pairs via pairs(); does not clone nested tables or metatables
   * @safety SAFE - pure Lua table iteration
   * @cost O(n) | 0 luabind (pure Lua iteration)
   * @param t Table to clone
   * @returns Cloned table
   */
  clone(t: AnyTable): AnyTable
  /**
   * Count elements, optionally matching predicate
   * Fast path for arrays without predicate (#t); iterates with predicate or pairs for hash tables
   * @safety SAFE - pure Lua, predicate coerced via _to_predicate
   * @cost O(n) with predicate, O(1) array without | 0 luabind (pure Lua # or pairs/ipairs)
   * @param t Table to count
   * @param fn Predicate (optional)
   * @returns Count
   */
  count(t: AnyTable, fn: (this: void, ...args: any[]) => any | AnyTable | string | undefined): number
  /**
   * Filter table by predicate
   * Returns new table with matching elements; retain_keys preserves original keys, otherwise re-indexes
   * @safety SAFE - pure Lua, allocates new table
   * @cost O(n) | 0 luabind (pure Lua iteration)
   * @param t Table to filter
   * @param fn Predicate
   * @param opts { retain_keys: boolean }
   * @returns Filtered table
   */
  filter(t: AnyTable, fn: (this: void, ...args: any[]) => any | AnyTable | string, opts: AnyTable | undefined): AnyTable
  /**
   * Find first element matching predicate
   * Short-circuits on first match; predicate can be function, partial-match table, or key name
   * @safety SAFE - pure Lua iteration
   * @cost O(n) worst case, O(1) best case | 0 luabind (pure Lua iter with early return)
   * @param t Table to search
   * @param fn Predicate: function(v)->bool, table for partial match, or key name
   * @returns value First matching value, or nil
   * @returns key Key of the match, or nil
   * @usage local squad = xtable.find(squads, function(s) return s.alive end)
   * @usage if xtable.find(members, is_alive) then ... end
   */
  find(t: AnyTable, fn: (this: void, ...args: any[]) => any | AnyTable | string): LuaMultiReturn<[any | undefined, any | undefined]>
  /**
   * Check if table is an array (has numeric key 1)
   * Uses rawget to avoid metatable __index; key 1 present = array heuristic
   * @safety SAFE - pure Lua, rawget never crashes
   * @cost O(1) | 0 luabind (pure Lua)
   * @param x Table to check
   */
  is_array(x: AnyTable): boolean
  /**
   * Create memoized version of a function (caches results by arguments)
   * Single-arg fast path (direct table key); multi-arg uses NUL-joined string key
   * @safety SAFE - pure Lua; cache grows unbounded (caller manages lifecycle)
   * @cost O(1) cached hit, O(fn) miss | 0 luabind (cache lookup is pure Lua hash; miss invokes fn)
   * @param fn Function to memoize
   * @returns Memoized function
   * @usage local get_config = xtable.memoize(function(key) return expensive_lookup(key) end)
   */
  memoize(fn: (this: void, ...args: any[]) => any): (this: void, ...args: any[]) => any
  /**
   * Set union of hash tables: merge(...) -> new table with all keys from all inputs
   * Variadic: accepts 2+ tables. Returns a new table, inputs are not modified.
   * @returns New hash table with all keys set to true
   * @safety SAFE - pure Lua, nil-safe (skips nil arguments)
   * @cost O(n) total keys across all inputs | 0 luabind
   */
  merge(...args: any[]): AnyTable
  /**
   * Reduce table to single value
   * Folds elements left-to-right with accumulator; asserts non-empty if no initial value
   * @safety SAFE - pure Lua, asserts on empty table without initial value
   * @cost O(n) | 0 luabind (pure Lua iteration)
   * @param t Table to reduce
   * @param fn Reducer function(acc, v)
   * @param first Initial value
   * @returns Reduced value
   */
  reduce(t: AnyTable, fn: (this: void, ...args: any[]) => any, first: any | undefined): any
  /**
   * Return shuffled copy of array
   * Fisher-Yates shuffle into new table; original unchanged
   * @safety SAFE - pure Lua, allocates new table
   * @cost O(n) | 0 luabind (pure Lua iteration)
   * @param t Array to shuffle
   * @returns Shuffled copy
   */
  shuffle(t: AnyTable): AnyTable
  /**
   * Return sorted copy of table
   * Clones then sorts; comparator can be function or string key name for field-based sort
   * @safety SAFE - pure Lua, allocates new table
   * @cost O(n log n) | 0 luabind (clone + Lua table.sort)
   * @param t Table to sort
   * @param comparator Comparator or key name
   * @returns Sorted copy
   */
  sort(t: AnyTable, comparator: (this: void, ...args: any[]) => any | string | undefined): AnyTable
  /**
   * Set difference: subtract(base, ...) -> new table with base keys minus all keys in remaining args
   * Returns a new table, inputs are not modified.
   * @param base Base hash table (keys to keep)
   * @returns New hash table with base keys minus excluded keys
   * @safety SAFE - pure Lua, nil-safe (skips nil arguments)
   * @cost O(n+m) base keys + excluded keys | 0 luabind
   */
  subtract(base: AnyTable, ...args: any[]): AnyTable
  /**
   * Remove entries from hash table where fn(key) returns true (in-place)
   * Collects keys into module-level buffer then removes; reuses buffer to avoid GC pressure (Demonized pattern)
   * @safety SAFE - pure Lua, two-pass (collect then remove)
   * @cost O(n) | 0 luabind (pure Lua iteration)
   * @param t Hash table to sweep
   * @param fn -> boolean Predicate on key (true = remove)
   * @param on_remove Optional callback before each removal
   * @returns Count of entries removed
   */
  sweep(t: AnyTable, fn: TODO, on_remove: TODO | undefined): number
}
