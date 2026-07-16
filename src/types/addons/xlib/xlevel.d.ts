// AUTO-GENERATED addon pack for `xlib` by `anomaly-packer gen-addon`. Lua API of xlevel.script.
// Refine `TODO` (= any) by hand where the mod gave no type.

/** @noSelf */
declare const xlevel: {
  /**
   * Get actor's current level_id
   * Resolves actor via alife():actor() then chains game_graph for level_id
   * @safety SAFE - nil guards on sim, actor, gvid, game_graph (NULL singleton via get_game_graph pcall)
   * @cost O(1) | 4 luabind trivial (alife: ptr return, actor: ptr return, vertex: ptr+offset, level_id: field read)
   * @src xray/xrGame/alife_simulator_script.cpp(35) alife, xray/xrGame/game_graph_inline.h
   * @returns Level ID (nil during transitions)
   */
  get_actor_level_id(): number | undefined
  /**
   * Get total game hours (days * 24 + hours)
   * C++ get_time_hours/days have built-in fallback: check g_pGameLevel, fall back to
   * ai().alife().time_manager().game_time() if NULL (level_script.cpp:289-303).
   * level.present() guard ensures alife() exists (no game session = no alife singleton).
   * @safety SAFE - level.present() guards no-game-session; engine fallback handles NULL g_pGameLevel
   * @cost O(1) | 2 luabind trivial (get_time_hours + get_time_days: each calls split_time on a u64 timestamp, bit math)
   * @src xray/xrGame/level_script.cpp(289), xray/xrGame/level_script.cpp(297)
   * @returns Total hours since game start (0 when no level)
   */
  get_game_hours(): number
  /**
   * Get level_id from server entity
   * Vertex-to-level mapping is immutable (baked in game.graph). Cached after first lookup per gvid.
   * @safety SAFE - nil guard on se_obj + game_graph (pcall cached in module-level gg)
   * @cost O(1) | 0 luabind cached, 3 luabind trivial on miss (m_game_vertex_id field read on userdata, vertex(): ptr+offset, level_id(): field read)
   * @src xray/xrGame/game_graph_inline.h, xray/xrGame/game_graph_script.cpp
   * @param se_obj Server object with m_game_vertex_id
   * @returns Level ID (nil during transitions)
   */
  get_level_id(se_obj: AnyTable): number | undefined
  /**
   * Get level_id by raw level name (e.g. "l05_bar" -> 5)
   * Lazy-built name->id map from SIMBOARD.smarts_by_names; covers every level with at least one smart.
   * Cache is a module-local. The engine recreates the Lua VM on every level transition and on save/load
   * (CALifeSimulator ctor -> restart_all -> script_engine().init() -> CScriptStorage::reinit), so it
   * rebuilds fresh each VM life and cannot go stale; within one VM life the SIMBOARD -> game.graph
   * name->id mapping is immutable, so the map stays correct.
   * @safety SAFE - nil guards on alife/SIMBOARD/graph; returns nil if level lookup is unavailable
   * @cost O(n_smarts) first call (~300-500 smarts in GAMMA, each: vertex trivial + level_id trivial + level_name medium), O(1) cached
   * @src anomaly/sim_board.script, xray/xrGame/game_graph_inline.h, xray/xrGame/alife_simulator_script.cpp(313)
   * @src xray/xrGame/alife_simulator.cpp(28-48), xray/xrServerEntities/script_storage.cpp(391-399)
   * @param name Raw level name (sim:level_name format)
   * @returns Level ID, or nil if name unknown or SIMBOARD unavailable
   */
  get_level_id_by_name(name: string): number | undefined
  /**
   * Get translated level display name from a level_id
   * Resolves via alife():level_name(id) then game.translate_string for localized display
   * @safety SAFE - nil guards on alife and resolved name
   * @cost O(log n) | 2 luabind medium (alife:level_name: std::map find on game_graph LEVEL_MAP, translate_string: std::map find on STRING_TABLE_MAP)
   * @src xray/xrGame/alife_simulator_script.cpp(313) level_name, xray/xrGame/string_table.cpp(226) translate
   * @param level_id Level ID (from game_graph vertex)
   * @returns Translated level display name, or nil if unresolvable
   */
  get_level_name(level_id: number): string
  /**
   * Get translated location name from nearest smart terrain
   * Finds nearest smart then delegates to get_smart_display_name (cached smart_names.ltx)
   * @safety SAFE - falls back to current level name if no smart found
   * @cost O(n) smarts for find_smart | 0 luabind for name resolution (cached)
   * @src anomaly/smart_terrain.script(1766-1791), anomaly/sim_board.script(96)
   * @param pos Position to search from
   * @param lvl_id Level ID filter
   * @returns Location name
   */
  get_location_name(pos: TODO, lvl_id: number): string
  /**
   * Get level_ids reachable within `hops` BFS hops from source_id (excludes source itself)
   * BFS over anomaly/level_targets.level_links - the A-Life cross-level adjacency graph. The graph
   * is directed (uses outgoing edges only) and parse-time static. Reflects whatever level_targets.script
   * the MO2 VFS resolves to; GAMMA scan (2026-05) confirms no mod ships a replacement and player-facing
   * level_changer mods (Extra level transitions, Fast Travel) do NOT extend this graph - they only
   * spawn portals/PDA shortcuts for the actor. A-Life routing therefore uses vanilla adjacency unless
   * a mod explicitly replaces or runtime-patches level_targets.level_links.
   * Cache is keyed (source_id*100 + hops); stays valid for the session because level_targets is
   * parse-time immutable. ~32 levels x ~3 reasonable hop values -> ~96 entries upper bound, each a
   * small set; growth is bounded by construction, no eviction needed.
   * @scope global - level_targets is parse-time data, available from on_game_start onward
   * @safety SAFE - nil-guarded on level_targets / source_id / hops; returns empty set on invalid input
   * @cost O(hops * sum(degree)) on miss, O(1) on hit | 0 luabind (pure Lua table ops)
   * @src anomaly/level_targets.script(39-74) level_links graph; anomaly/sim_squad_warfare.script(731-733) precedent consumer
   * @param source_id Engine level_id of the source level
   * @param hops BFS depth (1 = direct neighbors only, 2 = direct + neighbors-of-neighbors, etc.)
   * @returns Set { [level_id]=true, ... } excluding source_id; empty when source unreachable or invalid
   */
  get_neighbor_levels(source_id: number, hops: number): AnyTable
  /**
   * Get translated smart terrain display name
   * Cascades: Anomaly smart_names.ltx (named smarts) -> Warfare "st_<name>_name" key -> level display name -> cleaned raw.
   * Every return path passes through _strip_level_prefix so "Zaton. Claw Anomaly Camp" -> "Claw Anomaly Camp" regardless of source.
   * Returns nil on invalid input; callers decide the fallback (xlibs stays pure, no baked-in English defaults).
   * @safety SAFE - nil-guarded on smart/name, returns nil on bad input
   * @cost O(1) | 0 luabind on cache hit, 2-5 luabind on miss (cascading: smart_names, st_<name>_name key, level fallback)
   * @src anomaly/smart_terrain.script(1766-1787)
   * @param smart Smart terrain server object
   * @returns Translated name; falls back to level name, then cleaned raw section; nil when input is invalid
   */
  get_smart_display_name(smart: TODO): string | undefined
  /**
   * True while a surge (emission) is underway.
   * Wraps the vanilla xr_conditions.surge_started gate so callers avoid the raw module reference.
   * @safety SAFE - level.present() guards; xr_conditions.surge_started is the vanilla check
   * @cost O(1) | 1 luabind trivial via xr_conditions
   * @src anomaly/xr_conditions.script surge_started, anomaly/surge_manager.script
   */
  is_surge(): boolean
  /**
   * Check if server object has valid level vertex ID
   * Offline or transitioning entities may have 0xFFFFFFFF (invalid) as their level vertex
   * @safety SAFE - nil-guarded; 1 luabind for the level vertex id userdata field read, otherwise pure Lua
   * @cost O(1) | 1 luabind trivial (level vertex id field read on userdata)
   * @src doc/library/modding/alife-safety.md(38), anomaly/sim_squad_scripted.script(276)
   * @param se_obj Server object
   * @returns True if m_level_vertex_id is valid
   */
  is_valid_lvid(se_obj: TODO): boolean
}
