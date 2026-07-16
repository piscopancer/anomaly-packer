// AUTO-GENERATED addon pack for `xlib` by `anomaly-packer gen-addon`. Lua API of xmath.script.
// Refine `TODO` (= any) by hand where the mod gave no type.

/** @noSelf */
declare const xmath: {
  /**
   * Return true with given probability
   * Compares math.random(100) against threshold; 0 = never, 100 = always
   * @safety SAFE - pure Lua
   * @cost O(1) | 0 luabind (pure Lua: math.random + table index)
   * @param percent Chance percentage (0-100)
   * @usage if xmath.chance(25) then ... end
   */
  chance(percent: number): boolean
  /**
   * Shuffle first n elements of array in-place
   * Fisher-Yates partial shuffle: swaps each position with random later element
   * @safety SAFE - pure Lua, mutates input table
   * @cost O(n) | 0 luabind (pure Lua loop + math.random per step)
   * @param t Array to shuffle
   * @param n Number of elements to shuffle (default: all)
   * @returns Same array, shuffled
   */
  partial_shuffle(t: AnyTable, n: number | undefined): AnyTable
  /**
   * Roll with pseudo-random distribution, reducing streak variance
   * Dota 2 PRD: P(N) = C * N, N increments on failure, resets on success
   * @safety SAFE - pure Lua, stateful (per-key failure counter in module table)
   * @cost O(1) | 0 luabind (pure Lua: math.random + table index)
   * @param key Unique identifier for this roll stream
   * @param percent Chance percentage (1-99 integers; <1 false, >=100 true)
   */
  prd_chance(key: string, percent: number): boolean
  /**
   * Reset PRD state for a key (callers with dynamic keys call this on entity death/cleanup)
   * Prevents unbounded growth of _prd_state when keys are per-entity rather than static
   * @safety SAFE - pure Lua table nil assignment
   * @cost O(1) | 0 luabind (pure Lua: math.random + table index)
   * @param key Key to reset
   */
  prd_reset(key: string): void
  /**
   * Return random element from array
   * Uses math.random for index selection; assumes #t > 0
   * @safety SAFE - pure Lua, crashes on empty table (caller's responsibility)
   * @cost O(1) | 0 luabind (pure Lua: math.random + table index)
   * @param t Array to sample from
   * @returns Random element
   */
  sample(t: AnyTable): any
  /**
   * Sample up to n random elements from array (in-place partial shuffle)
   * Delegates to partial_shuffle then picks random count up to available
   * @safety SAFE - pure Lua, mutates input table
   * @cost O(n) | 0 luabind (pure Lua loop + math.random per step)
   * @param t Source array
   * @param n Max elements to sample
   * @returns Same array (first k elements are the sample), number k
   */
  sample_n(t: AnyTable, n: number): AnyTable
  /**
   * Vary value by +/- percent
   * Generates uniform random in [value - range, value + range] where range = value * percent / 100
   * @safety SAFE - pure Lua arithmetic
   * @cost O(1) | 0 luabind (pure Lua: math.random + table index)
   * @param value Base value
   * @param percent Variance (10 = +/-10%)
   * @usage local reward = xmath.vary(5000, 10)
   */
  vary(value: number, percent: number): number
  /**
   * Pick random key from table with weighted probabilities
   * Sums weights, picks random point in range, iterates until cumulative weight exceeds it
   * @safety SAFE - pure Lua, returns nil for empty table (pairs order non-deterministic)
   * @cost O(n) keys | 0 luabind (two pure Lua pairs passes: sum then cumulative pick)
   * @param weights Keys with numeric weights, e.g. {bandit=50, army=30, freedom=20}
   * @returns Selected key
   * @usage local faction = xmath.weighted_choice({bandit=50, army=30, freedom=20})
   */
  weighted_choice(weights: AnyTable): any
}
