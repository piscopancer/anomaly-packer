// AUTO-GENERATED addon pack for `xlib` by `anomaly-packer gen-addon`. Lua API of xttltable.script.
// Refine `TODO` (= any) by hand where the mod gave no type.

/** @noSelf */
declare const xttltable: {
  /**
   * Create a fixed-capacity budget that decrements on take and resets on demand
   * Caller-managed: budget never auto-resets, holder must call :reset() per cycle (per tick, per frame, etc.)
   * @safety SAFE - pure Lua integer counter
   * @cost O(1) take/reset/remaining | 0 luabind (integer counter)
   * @param capacity Maximum slots
   * @returns Budget instance with :take(), :reset(), :remaining()
   */
  create_budget(capacity: number): AnyTable
  /**
   * Create bounded FIFO cache
   * O(1) get/set with ring buffer eviction. When capacity is reached, the oldest entry is evicted.
   * Values may not be nil; use false for negative cache entries (e.g. "checked, not a mutant").
   * @safety SAFE - pure Lua tables, no luabind, no timers
   * @cost O(1) get/set | 0 luabind (pure Lua hash + ring buffer mod arithmetic)
   * @param opts { capacity = number, on_evict = function(value, key) } (default capacity 128)
   * @returns FIFO cache with :get(key), :set(key, value), :has(key), :each(fn), :clear(), :size()
   */
  create_fifo_cache(opts: AnyTable | undefined): AnyTable
  /**
   * Create per-key token bucket rate limiter
   * O(1) per acquire with fractional accumulation; bucket capacity is burst limit, rate controls sustained throughput
   * @safety SAFE - pure Lua tables + clock function (os.clock default, or injected game clock)
   * @cost O(1) per acquire/peek | 0 luabind with os.clock, 2 luabind medium per clock call with xtime.game_sec
   * @param opts { capacity, rate, clock? } capacity = max burst (tokens), rate = refill (tokens/sec)
   * @returns Token bucket with :acquire(key) -> bool, :reset(key), :clear()
   */
  create_token_bucket(opts: AnyTable): AnyTable
  /**
   * Create TTL-based occurrence counter for sliding window rate limiting
   * Returns metatable-backed counter with per-key buckets; expired entries pruned on count()
   * @safety SAFE - pure Lua tables + clock function (os.clock default, or injected game clock)
   * @cost O(1) add, O(n) count over key's bucket | 0 luabind with os.clock, 2 luabind medium per clock call with xtime.game_sec
   * @param opts { ttl?, clock? } duration in seconds
   * @returns Counter instance with :add(), :count(), :reset()
   */
  create_ttl_counter(opts: AnyTable): AnyTable
  /**
   * Create TTL table
   * Returns metatable-backed store with auto-expiry; cleanup piggybacked on set/size
   * @safety SAFE - pure Lua tables + clock function (os.clock default, or injected game clock)
   * @cost O(1) creation, O(n) per cleanup sweep | 0 luabind with os.clock (libc), 2 luabind medium per clock call with xtime.game_sec (get_game_time + diffSec)
   * @param opts { default_ttl?, capacity?, cleanup_interval?, clock? } durations in seconds
   * @returns TTL table instance with :get(), :has(), :set(), :remove(), :size(), :all()
   */
  create_ttl_table(opts: AnyTable): AnyTable
}
