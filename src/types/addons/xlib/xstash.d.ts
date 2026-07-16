// AUTO-GENERATED addon pack for `xlib` by `anomaly-packer gen-addon`. Lua API of xstash.script.
// Refine `TODO` (= any) by hand where the mod gave no type.

/** @noSelf */
declare const xstash: {
  /**
   * Clear stash (mark as looted, remove marker)
   * Sets caches[id] = true and removes "treasure" map spot via pcall
   * @safety pcall: map_remove_object_spot crashes during transitions, see doc/library/modding/pcall-safety.md
   * @cost O(1) | 1 luabind medium (map_remove_object_spot: MapManager().RemoveMapLocation)
   * @src anomaly/treasure_manager.script(33), xray/xrGame/level_script.cpp(456)
   * @param stash_id Stash object ID
   * @returns true if cleared
   */
  clear_stash(stash_id: number): boolean
  /**
   * Fill stash with items (always safe to call)
   * Appends to existing contents string or creates new; optionally adds "treasure" map spot
   * @safety pcall: map_add_object_spot crashes during transitions, see doc/library/modding/pcall-safety.md
   * @cost O(n) items (table_concat) | 0-1 luabind heavy (map_add_object_spot if add_marker: CMapLocation construction + insert)
   * @src anomaly/treasure_manager.script(33), xray/xrGame/level_script.cpp(431)
   * @param stash_id Stash object ID
   * @param items Array of section names
   * @param add_marker Add map marker (default false)
   * @returns Success
   */
  fill_stash(stash_id: number, items: AnyTable, add_marker: boolean | undefined): boolean
  /**
   * Find stashes matching criteria
   * Iterates opts.source (when provided) or treasure_manager.caches; excludes player-created stashes,
   * filters by distance/level/fill state. State (filled/looted/hidden) is always read from
   * treasure_manager.caches[stash_id] since it mutates; the source table only contributes the iteration
   * set (stash_ids to consider).
   * @safety SAFE - xobject.se returns nil for invalid, .position field nil-guarded, distance_to_sqr is vector inline math
   * @cost O(n) stashes in pool | per stash: 1 medium (xobject.se -> alife_object xr_map find) + 1 trivial (distance_to_sqr); level filter cached (0 luabind)
   * @src anomaly/treasure_manager.script(33), anomaly/_g.script(2044), anomaly/item_backpack.script(27)
   * @param pos Origin position
   * @param opts { max_distance, min_distance, max_count, level_id, filled, source }
   *   source: optional { [stash_id] = anything } iterable. When present, replaces treasure_manager.caches
   *   as the iteration set; only keys are consumed. Use AlifePlus ap_core_cache.stashes_on_level(level_id)
   *   to fetch a per-level bucket. When the cache is in its build warmup window, that helper returns nil;
   *   the caller should gate on nil and skip the call rather than fall through to the global walk.
   * @returns Array of stash {id, position, filled}
   */
  find_stashes(pos: TODO, opts: AnyTable): AnyTable
  /**
   * Return stash contents as parsed item list without modifying state
   * Reads comma-separated contents string from treasure_manager.caches and splits it
   * @safety SAFE - pure Lua table read + str_explode is anomaly Lua, nil-guarded
   * @cost O(n) items | 0 luabind (str_explode is pure Lua string.gmatch)
   * @src anomaly/treasure_manager.script(33), anomaly/_g.script str_explode
   * @param stash_id Stash object ID
   * @returns Array of section names
   */
  get_stash_items(stash_id: number): AnyTable | undefined
  /**
   * Check if stash is available (revealed but not looted)
   * Checks treasure_manager.caches[id] is a string (comma-separated item list means filled)
   * @safety SAFE - pure Lua table read, nil-guarded
   * @cost O(1) | 0 luabind (pure Lua hash read + type check)
   * @src anomaly/treasure_manager.script(33)
   * @param stash_id Stash object ID
   */
  is_stash_available(stash_id: number): boolean
  /**
   * Check if stash was looted
   * Checks treasure_manager.caches[id] == true (boolean true means looted)
   * @safety SAFE - pure Lua table read, nil-guarded
   * @cost O(1) | 0 luabind (pure Lua hash read + equality check)
   * @src anomaly/treasure_manager.script(33)
   * @param stash_id Stash object ID
   */
  is_stash_looted(stash_id: number): boolean
  /**
   * Loot stash contents (marks as looted, returns item list)
   * Reads comma-separated contents string, marks as looted, removes map spot
   * @safety pcall: map_remove_object_spot crashes during transitions, see doc/library/modding/pcall-safety.md
   * @cost O(n) items (str_explode) | 1 luabind medium (map_remove_object_spot)
   * @src anomaly/treasure_manager.script(33), xray/xrGame/level_script.cpp(456)
   * @param stash_id Stash object ID
   * @returns Array of section names
   */
  loot_stash(stash_id: number): AnyTable | undefined
  /**
   * Mark stash as looted in treasure_manager
   * Sets treasure_manager.caches[id] = true (engine convention: true=looted, string=filled, nil=hidden)
   * @safety SAFE - pure Lua table write, nil-guarded
   * @cost O(1) | 0 luabind (pure Lua hash write)
   * @src anomaly/treasure_manager.script(33)
   * @param stash_id Stash object ID
   * @returns success
   */
  mark_stash_looted(stash_id: number): boolean
}
