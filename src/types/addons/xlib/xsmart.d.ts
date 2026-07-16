// AUTO-GENERATED addon pack for `xlib` by `anomaly-packer gen-addon`. Lua API of xsmart.script.
// Refine `TODO` (= any) by hand where the mod gave no type.

/** @noSelf */
declare const xsmart: {
  JOB_TYPE_CAMPFIRE_POINT: number
  JOB_TYPE_GENERIC_POINT: number
  JOB_TYPE_MECHANIC: number
  JOB_TYPE_MOB_HOME: number
  JOB_TYPE_TRADER: number
  /**
   * Check if smart terrain accepts a faction (Tier 1 of target_precondition)
   * Dispatches by faction type: mutants check all/all_monster/props[faction], stalkers
   * (including "zombied") check all/all_stalker/props[faction]. Mirrors engine
   * target_precondition faction gate at smart_terrain.script:1531-1559. Tier 2 (zoning:
   * lair/territory/base/resource/surge with time-of-day preconditions) is not checked.
   * Use this for refill / population / mod logic that needs faction acceptance independent
   * of routing time-of-day gates. Use full target_precondition for routing decisions.
   * @scope global - smart.props from simulation_objects_props.ltx; is_squad_monster from _g.script
   * @safety SAFE - pure Lua table reads, nil-guarded
   * @cost O(1) | 0 luabind (pure Lua field/table reads)
   * @src anomaly/smart_terrain.script(1531-1559), anomaly/_g.script(2344), anomaly/simulation_objects_props.ltx
   * @param smart Smart terrain to check
   * @param faction Faction community (e.g. "bandit", "monster_predatory_day", "zombied")
   * @returns True if smart accepts this faction's presence
   */
  accepts_faction(smart: TODO, faction: string): boolean
  /**
   * Assign a squad to a smart's roster, or detach with nil. Wraps SIMBOARD:assign_squad_to_smart.
   * Used by AP's dispatch/commit pair to keep SIMBOARD.smarts[id].squads aligned with AP-driven
   * moves so has_squad_of_faction / garrison-floor queries read truth. Pass nil
   * as smart_id on dispatch (clears source roster before engine specific_update bumps squad.smart_id);
   * pass the destination id on arrival commit. Fires squad_on_leave_smart on source clear,
   * squad_on_enter_smart on destination add.
   * @safety SAFE - delegates to SIMBOARD; nil smart_id is the documented detach form
   * @cost 1 luabind (SIMBOARD method call) + sim_board.script bookkeeping
   * @src anomaly/sim_board.script(225-266)
   * @param squad Squad server object
   * @param smart_id Destination smart id, or nil to detach from current
   * @returns True on delegate to SIMBOARD; false when squad/SIMBOARD nil or squad is not a sim_squad_scripted instance
   */
  assign_squad_to_smart(squad: TODO, smart_id: number | undefined): boolean
  /**
   * Diagnostic dump of smarts with faction, level, and service-role inventory
   * When level_id is provided, filters to that level only. Per-smart entry appends trader/medic/mechanic
   * NPC ids when present (role read from xdata.npc_roles via section name).
   * @scope global - iterates SIMBOARD.smarts; npc_info populated only for online smarts on actor's level
   * @safety SAFE - pure Lua iteration, nil-guarded
   * @cost O(n) smarts * O(m) npc_info per smart | per smart: 1 heavy (name) + role_inventory walk; xdata.npc_roles is O(1) per NPC
   * @src anomaly/sim_board.script(96), anomaly/smart_terrain.script(801,1209)
   * @param level_id Restrict iteration to this level when provided
   * @returns Debug summary string
   */
  dump_smarts(level_id: number | undefined): string
  /**
   * Find the first smart matching criteria (no distance ranking)
   * Distance-free variant of find_smart for cases where caller has no meaningful position
   * (e.g. picking a destination from a different level's coordinate frame). Iterates in
   * pool hash order; deterministic per session, but no spatial preference.
   * Use find_smart when the caller has a comparable position; use this when "any matching" is enough.
   * @scope global - iterates the supplied pool. When opts.source is nil, walks SIMBOARD.smarts_by_names across all levels.
   * @safety SAFE - nil-guarded; xlevel.get_level_id uses pcall internally
   * @cost O(n) smarts in pool, worst case (early exit on first match) | 0 luabind on filter-less hit
   * @src anomaly/sim_board.script(96)
   * @param opts { level_id, factions, exclude_id, filter, source }
   *   source: optional { [k] = smart, ... } iterable. When present, replaces SIMBOARD.smarts_by_names as the iteration pool.
   * @returns First matching smart, or nil if none
   */
  find_first_smart(opts: AnyTable): TODO | undefined
  /**
   * Nearest base for an NPC routing out of a fight: the nearest is_base smart with no enemy squad stationed (a
   * place its enemies do not hold). Keys on actual squad occupancy, NOT declared faction props (most vanilla
   * smarts declare none, so an accepts_faction filter matches nothing). nil when no base qualifies - the caller
   * then flees in place rather than running to a non-base edge smart. Same find_smart + is_base reuse as
   * AlifePlus's flee (ap_ext_consequences_basekill), with an occupancy gate instead of a fixed own-faction.
   * @safety SAFE - nil when no non-enemy-held base on the level
   * @cost O(n smarts x min(5,squads)) per find_smart, run at a maneuver commit (not per tick)
   * @see find_smart, is_base, has_enemy_squad
   * @param community the NPC's community
   * @param pos the NPC's position
   * @param level_id the level to search (online NPCs are on the actor's level)
   * @returns nearest non-enemy-held base, or nil
   */
  find_friendly_base(community: string, pos: TODO, level_id: number): TODO | undefined
  /**
   * Find nearest smart terrain matching criteria
   * Iterates opts.source (when provided) or SIMBOARD.smarts_by_names; cheapest filters first (exclude_id, factions, level_id), distance_to_sqr last
   * @scope global - iterates the supplied pool. When opts.source is nil, walks SIMBOARD.smarts_by_names across all levels.
   * Per-candidate scope depends on the filter caller provides (e.g. has_animated_stalker_jobs narrows to level scope,
   * has_campfire to online scope, is_base global)
   * @safety SAFE - nil-guarded; xlevel.get_level_id uses pcall internally
   * @cost O(n) smarts in pool | per non-filtered smart: 1 luabind trivial (distance_to_sqr inline math); cheaper filters (exclude_id, factions, level_id) gate before distance
   * @src anomaly/sim_board.script(96), anomaly/simulation_objects.script(117)
   * @param pos Position to search from
   * @param opts { level_id, factions, min_distance, max_distance, exclude_id, filter, source }
   *   source: optional { [k] = smart, ... } iterable. When present, replaces SIMBOARD.smarts_by_names as the iteration pool.
   *   Use AlifePlus ap_core_cache.smarts_on_level(level_id) to fetch a per-level bucket.
   * @returns Nearest matching smart
   */
  find_smart(pos: TODO, opts: AnyTable): TODO | undefined
  /**
   * Find all smart terrains on a level whose recipes spawn the given faction
   * Walks SIMBOARD.smarts once; filters by xlevel.get_level_id == level_id then by recipe content
   * via section_faction match. Returns smart objects directly (caller extracts .id if needed);
   * smart terrains are not released mid-session so the references stay valid for the session.
   * Answers the spawning-side question "which smarts on this level produce faction X"; distinct
   * from accepts_faction (engine routing acceptance) and smart.faction (runtime holder).
   * @safety SAFE - nil-guarded; returns empty array when SIMBOARD missing or no matches
   * @cost O(S*R*Q) smarts * recipes * sections (R,Q typically 1-5) | 1 luabind trivial per smart (xlevel.get_level_id cached); section_faction cached per section
   * @src anomaly/sim_board.script(96) SIMBOARD.smarts, anomaly/smart_terrain.script(1681-1700) respawn_params shape
   * @src anomaly/configs/misc/squad_descr/squad_descr_default_mutants.ltx
   * @param level_id Engine level ID
   * @param faction Faction community ("bandit", "monster_predatory_day", "stalker", ...)
   * @returns Array of smart_terrain server objects on the level whose recipes produce faction (empty if none)
   */
  find_smarts_spawning(level_id: number, faction: string): AnyTable
  /**
   * Get nearest smart terrain to actor
   * Reads engine-maintained nearest_to_actor_smart table (updated every online smart tick, zero search cost)
   * @scope online - smart_terrain.nearest_to_actor_smart is updated by smart tick gated on self.online (smart_terrain.script:1256); only online smarts compete for the slot
   * @safety SAFE - nil-guarded, alife_object returns nil for invalid IDs
   * @cost O(log n) | 1 luabind medium (alife_object: xr_map find)
   * @src anomaly/smart_terrain.script(11,1256,1262), anomaly/se_actor.script(96), anomaly/axr_companions.script(412)
   * @returns Nearest smart terrain to actor
   */
  get_actor_smart(): TODO | undefined
  /**
   * Get stalker factions declared in smart terrain's props (LTX simulation_objects_props.ltx)
   * Builds {[faction]=true} from props keys with value >0 (only STALKER_FACTIONS list); cached
   * per smart.id since props are static INI. Use accepts_faction for the engine Tier 1 routing
   * question (includes all/all_stalker fallbacks); use this when you need the literal explicit
   * faction declaration set.
   * @scope global - smart.props from simulation_objects_props.ltx
   * @safety SAFE - pure Lua table reads (no luabind), nil-guarded
   * @cost O(13) factions first call, O(1) cached | 0 luabind (props is a pure Lua table from LTX parse)
   * @src anomaly/simulation_objects.script(117), anomaly/smart_terrain.script(1534)
   * @param smart Smart terrain to check
   * @returns Faction set {[faction]=true, ...} or empty table
   */
  get_declared_factions(smart: TODO): AnyTable
  /**
   * Resolve the job a specific NPC currently holds at this smart (inverse of get_npc_for_job).
   * Reads the NPC's engine-bound .job -- the descriptor set in select_npc_job. Returns
   * nil when the NPC has no npc_info entry (not arrived/registered, or smart offline: npc_info is
   * populated only for online smarts on the actor's level) or holds no job yet. The descriptor
   * carries .section ("logic@<smart>_<job>") and, for auto-generated jobs, .job_type_id (compare
   * against JOB_TYPE_GENERIC_POINT / JOB_TYPE_CAMPFIRE_POINT / ...); exclusive LTX jobs carry
   * .exclusive=true and no .job_type_id.
   * @scope online - reads smart.npc_info; empty for offline / off-actor-level smarts
   * @safety SAFE - pure Lua table reads, nil-guarded
   * @cost O(1) | 0 luabind (npc_info is a pure Lua hash)
   * @src anomaly/smart_terrain.script(771,801) the .job field set in select_npc_job
   * @src anomaly/gulag_general.script(281-303) job_type_id table, (1183-1246) exclusive jobs
   * @param smart Smart terrain to query
   * @param npc_id NPC server id
   * @returns Job descriptor { section, job_type_id?, exclusive? } or nil
   */
  get_job_for_npc(smart: TODO, npc_id: number): AnyTable | undefined
  /**
   * Resolve the mechanic NPC at a smart. Walks npc_info, returns first live NPC whose get_npc_roles set contains "mechanic".
   * @safety SAFE - nil-guarded
   * @cost O(n) n=npc_info entries | per entry: 1 medium (xobject.go) + 1 trivial (alive) + cached role
   * @src anomaly/smart_terrain.script(801); anomaly/xr_conditions.script(60) check_npc_mechanic
   * @param smart Smart terrain to query
   * @returns Online mechanic NPC, or nil if none online at this smart
   */
  get_mechanic_at_smart(smart: TODO): TODO | undefined
  /**
   * Resolve the medic NPC at a smart. Walks npc_info, returns first live NPC whose get_npc_roles set contains "medic".
   * @safety SAFE - nil-guarded
   * @cost O(n) n=npc_info entries | per entry: 1 medium (xobject.go) + 1 trivial (alive) + cached role
   * @src anomaly/smart_terrain.script(801); anomaly/xr_conditions.script(67) check_npc_medic
   * @param smart Smart terrain to query
   * @returns Online medic NPC, or nil if none online at this smart
   */
  get_medic_at_smart(smart: TODO): TODO | undefined
  /**
   * Resolve the NPC currently assigned to a job of the given type_id at this smart.
   * Returns the online game_object if assigned and online, nil otherwise.
   * NOTE: this does NOT resolve the trader NPC. JOB_TYPE_TRADER (15) tags the visitor patrol
   * job slot (`<smart>_beh_trade_<i>` per gulag_general.script:971), not the barman's seated
   * logic. Probed across 20 vanilla trader smarts: the barman's job entry's job_type_id is nil
   * even when the smart is online. Use xsmart.get_trader_at_smart for the barman.
   * @scope online - reads smart.npc_info populated by smart_terrain:update_jobs (smart_terrain.script:376) only when smart is online
   * @safety SAFE - pure Lua iteration, nil-guarded; xobject.go falls back to nil for offline ids
   * @cost O(n) n = npc_info entries at smart (typically 1-15) | 1 luabind via xobject.go on match (level.object_by_id)
   * @src anomaly/smart_terrain.script(801) self.npc_info entries with `job` field
   * @src anomaly/gulag_general.script(971) job_type_id assignment
   * @param smart Smart terrain to query
   * @param type_id Job type id (e.g. JOB_TYPE_CAMPFIRE_POINT, JOB_TYPE_GENERIC_POINT)
   */
  get_npc_for_job(smart: TODO, type_id: number): TODO | undefined
  /**
   * Get the SET of roles for an online NPC, cached for the session.
   * Multi-role NPCs return a set with multiple keys true (e.g. {medic=true, trader=true}
   * for Pripyat Yar). See _detect_role for the signal cascade and Demonized-classifier
   * reference. Pre-bind empty sets not cached so a later call after logic binds re-detects.
   * @safety SAFE - nil-guarded; all engine reads are standard game_object methods
   * @cost O(1) | 0 luabind cached, 2-5 luabind heavy on miss (community + clsid + section + optional r_string_ex)
   * @complexity O(1) amortized | luabind cost as above
   * @see anomaly/xr_logic.script:113 (engine trade= consumer)
   * @src anomaly_mods/Trader Destockifier .../trader_autoinject.script:85 (Demonized get_trader_type);
   *      anomaly/utils_obj.script:74 (vanilla is_trader 4-signal); anomaly/xr_logic.script:113 (engine trade= consumer)
   * @param npc Online NPC game_object
   * @returns Role set, e.g. {trader=true, medic=true}. Empty table for non-service NPCs.
   */
  get_npc_roles(npc: TODO): AnyTable
  /**
   * Get spatial proximity between squad and smart terrain
   * Mirrors am_i_reached decision tree; returns distance, threshold, and match conditions for diagnostics
   * @scope global - reads game_graph + server-entity position; cross-level safe (returns dist=-1 on level mismatch)
   * @safety pcall: game_graph() is NULL singleton during transitions, see doc/library/modding/pcall-safety.md
   * @cost O(1) | gvid match: 0 luabind; cross-vertex: 2 luabind trivial (vertex: ptr+offset, distance_to_sqr inline) + game_graph singleton lookup (pcall-guarded, cached)
   * @src anomaly/smart_terrain.script(1440-1456)
   * @param squad Squad to check
   * @param smart Target smart terrain
   * @returns dist Meters (0 = gvid match, -1 = different level)
   * @returns threshold Applicable arrive threshold in meters
   * @returns gvid_match Game vertex IDs match
   * @returns same_level Both on same level
   */
  get_proximity(squad: TODO, smart: TODO): LuaMultiReturn<[number, number, boolean, boolean]>
  /**
   * Get the upper bound of a squad section's npc_in_squad field
   * Parses "X, Y" returning Y (range upper) or "X" returning X. 0 when section missing or
   * field absent. Pairs with section_faction for inspecting squad_descr sections: this
   * returns "how many NPCs can spawn at most", section_faction returns "what faction they belong to".
   * @safety SAFE - returns 0 when section missing, has no npc_in_squad field, or value unparseable
   * @cost O(1) | 0 luabind cached, 1 luabind heavy on miss (ini_sys:r_string_ex: LTX section lookup + string alloc) + 1-2 pure-Lua regex matches
   * @src anomaly/configs/misc/squad_descr/squad_descr_default_mutants.ltx, anomaly/configs/misc/squad_descr/squad_descr_default_stalkers.ltx
   * @src anomaly/sim_board.script(149) create_squad reads npc_in_squad upper as the population cap
   * @param section Squad section name (e.g. "simulation_boar_3_5", "bandit_sim_squad_novice")
   * @returns Upper bound of npc_in_squad, or 0 when section/field missing
   */
  get_section_npc_max(section: string): number
  /**
   * Get squads table for a smart terrain by ID
   * Returns the raw SIMBOARD.smarts[id].squads hash ({[squad_id]=true}); caller iterates via next()
   * @scope global - SIMBOARD.smarts populated at register
   * @safety SAFE - pure Lua, nil-guarded at every level
   * @cost O(1) | 0 luabind (pure Lua field/table reads)
   * @src anomaly/sim_board.script(96,258)
   * @param smart_id Smart terrain server entity ID
   * @returns Squads table or nil if unavailable
   */
  get_smart_squads(smart_id: number): AnyTable | undefined
  /**
   * Resolve the trader NPC at a smart. Walks smart.npc_info, returns first online live NPC
   * whose get_npc_roles set contains "trader" (Demonized-style trade= classifier).
   * @safety SAFE - nil-guarded; section_name is a standard CSE method
   * @cost O(n) n=npc_info entries (typically 5-30) | per entry: 1 medium (xobject.go) + 1 trivial (alive) + cached role
   * @src anomaly/smart_terrain.script(801) self.npc_info entries; anomaly/utils_obj.script(74) is_trader
   * @param smart Smart terrain to query
   * @returns Online trader NPC, or nil if none online at this smart
   */
  get_trader_at_smart(smart: TODO): TODO | undefined
  /**
   * Check if smart has any non-stub stalker job
   * Stubs (generic_point id=0, campfire_point id=1) are pushed unconditionally on every smart;
   * non-stub = any other job_type_id (conditional auto-gen) or any exclusive LTX job (no
   * job_type_id field; carries job.exclusive=true per gulag_general.script:1221,1238)
   * @scope level - reads smart.stalker_jobs which load_jobs only populates for current-actor-level smarts (smart_terrain.script:462)
   * @safety SAFE - pure Lua iteration, nil-guarded
   * @cost O(k) k=jobs on smart (~10-30) | 0 luabind (pure Lua array scan)
   * @src anomaly/gulag_general.script(308,340,492-526) unconditional vs conditional inits
   * @src anomaly/gulag_general.script(1183-1246) add_exclusive_job (LTX exclusive jobs)
   * @src doc/library/modding/job-system.md "Unconditional vs Conditional Inits"
   * @param smart Smart terrain to check
   */
  has_animated_stalker_jobs(smart: TODO): boolean
  /**
   * Check if smart terrain is near anomaly zones
   * Proximity check against db.anomaly_by_name; online scope (switch_distance, not current-level)
   * @scope online - db.anomaly_by_name populated by anomaly zone binders at net_spawn; binder.object is the online physics object. Same online_distance / offline_distance hysteresis as campfires.
   * @safety SAFE - nil-guarded, no pcall. binder.object guarded for net_destroy transition edge case
   * @cost O(k) k=online anomaly zones (5-15) | per zone: binder.object:position() 1 luabind trivial (Fvector return) + distance_to_sqr 1 luabind trivial (inline math)
   * @src anomaly/db.script(29,94-100), anomaly/bind_anomaly_zone.script(485,492)
   * @param smart Smart terrain to check
   * @returns True if smart within 50m of any online anomaly zone
   */
  has_anomaly(smart: TODO): boolean
  /**
   * Check if smart terrain has a campfire
   * Reads db.campfire_table_by_smart_names populated by bind_campfire.script on net_spawn; online scope (switch_distance)
   * @scope online - per-campfire binder. Entries added at net_spawn (alife_dynamic_object.cpp:129-163),
   * removed at net_destroy (bind_campfire.script:295-302). Defaults online_distance = 675m (alife_switch_manager_inline.h:38)
   * @safety SAFE - nil-guarded, next() guards empty sub-tables left by individual campfire net_destroy
   * @cost O(1) | 1 luabind heavy (smart:name() shared_str alloc) + db.campfire_table_by_smart_names hash read pure Lua
   * @src anomaly/bind_campfire.script(272-278,295-302), anomaly/axr_turn_on_campfire.script(136-137)
   * @src doc/library/modding/online-offline-scoping.md online scope
   * @param smart Smart terrain to check
   * @returns True if smart has campfire(s)
   */
  has_campfire(smart: TODO): boolean
  /**
   * Test if any squad physically stationed at smart is enemy of the asking community
   * Wraps iter_stationed_squads with per-squad game_relations.is_factions_enemies check.
   * Cross-level safe.
   * @safety SAFE - delegates to iter_stationed_squads
   * @cost O(min(n,5)) squads, short-circuits on first enemy | per squad: 1 medium (alife_object) + 0 luabind + game_relations cached hash
   * @src anomaly/sim_board.script(96,258), anomaly/sim_squad_scripted.script(295-323), anomaly/game_relations.script(603)
   * @param smart_id Smart terrain server entity ID
   * @param community Engine player_id / community string asking "is this place hostile to me"
   * @param exclude_id Squad id to skip
   */
  has_enemy_squad(smart_id: number, community: string, exclude_id: number | undefined): boolean
  /**
   * Check if every squad member has an engine-assigned job at the smart
   * Snapshot of npc_info[id].job per member; detects the full-job-allocation freeze
   * (smart_terrain.script:1369-1376 setup_logic loops on nil job). Reliable only when caller
   * has gated on smart.online && smart.is_on_actor_level (engine select_npc_job is gated there
   * too). Does NOT predict mid-dwell precondition-flip invalidation (surge start/end,
   * day<->night for sleeper, zombie state, trader has_items_to_sell). Trailing members live in
   * arriving_npc[] not npc_info[] for ~5s after positional arrival until engine drains â
   * caller's polling cadence absorbs the race. For mutant squads (stype=1) this rarely returns
   * false because mob_home stubs are oversupplied (gulag_general.script:1018-1022 pushes
   * max_population*4 with no precondition)
   * @scope online - reads smart.npc_info populated by smart_terrain:update_jobs gated on self.online AND
   * is_on_actor_level (smart_terrain.script:582-588). Empty for offline smarts even on the actor's level
   * @safety SAFE - pure Lua table reads (no luabind), nil-guarded
   * @cost O(n) members | 0 luabind beyond squad_members iterator (xsquad.iter_member_ids returns plain numbers; npc_info is a pure Lua hash)
   * @src anomaly/smart_terrain.script(309-327, 626-798, 1369-1376), anomaly/gulag_general.script(114-118), anomaly/gulag_general.script(1018-1022) mutant mob_home oversupply
   * @param smart Smart terrain to check
   * @param squad Squad whose members to verify
   * @returns True if every member has a job
   */
  has_jobs_for(smart: TODO, squad: TODO): boolean
  /**
   * Test if any live online NPC at the smart has role="mechanic"
   * @safety SAFE - delegates to _get_role_at_smart
   * @cost O(n) n=npc_info entries | same as get_mechanic_at_smart
   * @src anomaly/smart_terrain.script(801)
   * @param smart Smart terrain to query
   */
  has_mechanic_at_smart(smart: TODO): boolean
  /**
   * Test if any live online NPC at the smart has role="medic"
   * @safety SAFE - delegates to _get_role_at_smart
   * @cost O(n) n=npc_info entries | same as get_medic_at_smart
   * @src anomaly/smart_terrain.script(801)
   * @param smart Smart terrain to query
   */
  has_medic_at_smart(smart: TODO): boolean
  /**
   * Check if any squad of given faction is physically stationed at smart (optionally excluding one id)
   * Wraps iter_stationed_squads with per-squad player_id match. Cross-level safe.
   * @safety SAFE - delegates to iter_stationed_squads
   * @cost O(min(n,5)) squads, short-circuits | per squad: 1 medium (alife_object) + 0 luabind
   * @src anomaly/sim_board.script(96,258), anomaly/sim_squad_scripted.script(295-323)
   * @param smart_id Smart terrain server entity ID
   * @param faction Engine player_id / community string
   * @param exclude_id Squad id to skip
   */
  has_squad_of_faction(smart_id: number, faction: string, exclude_id: number | undefined): boolean
  /**
   * Check if smart's stalker_jobs has any entry, or a specific job_type_id
   * type_id nil matches any non-empty table; integer matches one job_type_id (e.g. JOB_TYPE_TRADER)
   * @scope level - smart.stalker_jobs populated by gulag_general.load_job gated on smart_terrain.script:462 is_on_actor_level; nil for smarts on other levels
   * @safety SAFE - pure Lua iteration, nil-guarded
   * @cost O(k) k=jobs on smart (~10-30) | 0 luabind (pure Lua array scan)
   * @src anomaly/gulag_general.script(281-303) job_info_by_job_type_id
   * @src anomaly/smart_terrain.script(457-464) load_jobs is_on_actor_level gate
   * @src doc/library/modding/online-offline-scoping.md current-level scope
   * @param smart Smart terrain to check
   * @param type_id Specific job_type_id, or nil for any non-empty
   */
  has_stalker_jobs(smart: TODO, type_id: number | undefined): boolean
  /**
   * @scope global - smart.props from simulation_objects_props.ltx
   * @returns True if smart has surge shelter (emission-safe indoor)
   * @src anomaly/smart_terrain.script(1566), anomaly/surge_manager.script(1265)
   */
  has_surge_shelter(smart: TODO): boolean
  /**
   * Test if any live online NPC at the smart has role="trader"
   * @safety SAFE - delegates to _get_role_at_smart
   * @cost O(n) n=npc_info entries | same as get_trader_at_smart
   * @src anomaly/smart_terrain.script(801)
   * @param smart Smart terrain to query
   */
  has_trader_at_smart(smart: TODO): boolean
  /**
   * Check if squad has arrived at smart terrain
   * Delegates to engine's am_i_reached: same game vertex -> true, different level -> false, distance <= arrive_dist^2
   * @scope global - engine method on server entity, cross-level safe (returns false for different-level case)
   * @safety SAFE - am_i_reached used by engine without pcall in specific_update
   * @cost O(1) | 1 luabind medium (am_i_reached: gvid match check + Fvector distance_to)
   * @src anomaly/smart_terrain.script(1440), anomaly/sim_squad_scripted.script(304)
   * @param squad Squad to check
   * @param smart Target smart terrain
   * @returns True if arrived
   */
  is_arrived(squad: TODO, smart: TODO): boolean
  /**
   * @scope global - smart.props from simulation_objects_props.ltx loaded at on_register; same value on all levels regardless of online state
   * @src doc/library/modding/online-offline-scoping.md
   * @returns True if base (surge shelter, faction HQ)
   */
  is_base(smart: TODO): boolean
  /**
   * @scope global - smart.props from simulation_objects_props.ltx
   * @returns True if lair (mutant nest)
   */
  is_lair(smart: TODO): boolean
  /**
   * Test if NPC is a mechanic. See get_npc_roles for the detection signals.
   * @safety SAFE - delegates to get_npc_roles
   * @cost O(1) | 0 luabind cached, 2-5 luabind heavy on miss
   * @param npc Online NPC game_object
   */
  is_mechanic_npc(npc: TODO): boolean
  /**
   * Test if NPC is a medic. See get_npc_roles for the detection signals.
   * @safety SAFE - delegates to get_npc_roles
   * @cost O(1) | 0 luabind cached, 2-5 luabind heavy on miss
   * @param npc Online NPC game_object
   */
  is_medic_npc(npc: TODO): boolean
  /**
   * Test if a position is within radius of any campfire bound to the smart.
   * Reads db.campfire_table_by_smart_names[smart:name()] (bind_campfire, online scope) and measures
   * against each binder.object. Tells a real fire seat (the seat ring is <=8m from the fire,
   * xr_campfire_point.script:65-101) from the campfire_point random-cover fallback, which lands
   * decoupled from the fire.
   * @scope online - campfire binders exist while the campfire is online (switch_distance)
   * @safety SAFE - nil-guarded; binder.object guarded for the net_destroy transition edge
   * @cost O(k) k=campfires at smart (1-3) | per fire: 1 luabind trivial (object:position) + distance_to_sqr inline
   * @src anomaly/bind_campfire.script(20-27) campfire_table_by_smart_names binders with .object
   * @param smart Smart terrain to query
   * @param position World position to test
   * @param radius Meters
   * @returns True if position is within radius of any bound campfire
   */
  is_near_campfire(smart: TODO, position: TODO, radius: number): boolean
  /**
   * @scope global - smart.props from simulation_objects_props.ltx
   * @returns True if resource point
   */
  is_resource(smart: TODO): boolean
  /**
   * Check if smart terrain is empty (no squads assigned)
   * Reads SIMBOARD.smarts[smart_id].squads; next() is cheapest empty check (no luabind).
   * Signature matches the other SIMBOARD-indexing functions (get_smart_squads,
   * has_squad_of_faction): takes smart_id directly so callers do not pay alife_object lookups.
   * @scope global - SIMBOARD.smarts populated at server-entity register (sim_board.script init_smart); roster reflects sim intent, not physical occupancy
   * @safety SAFE - pure Lua, nil-guarded at every level
   * @cost O(1) | 0 luabind (pure Lua field/table reads)
   * @src anomaly/sim_board.script(96), xcvb/night_mutants.script(92)
   * @param smart_id Smart terrain server entity ID
   * @returns True if empty
   */
  is_smart_empty(smart_id: number): boolean
  /**
   * @scope global - smart.props from simulation_objects_props.ltx
   * @returns True if territory (contestable)
   */
  is_territory(smart: TODO): boolean
  /**
   * Test if NPC is a trader. See get_npc_roles for the detection signals.
   * @safety SAFE - delegates to get_npc_roles
   * @cost O(1) | 0 luabind cached, 2-5 luabind heavy on miss
   * @param npc Online NPC game_object
   */
  is_trader_npc(npc: TODO): boolean
  /**
   * Iterate squads physically stationed at smart, capped (default 5).
   * Walks SIMBOARD.smarts[smart_id].squads, yields each se whose current_action=1 AND
   * current_target_id=smart_id (xsquad.is_stationed). Skips in-transit squads. The cap is a
   * safety belt against mod-induced roster explosion: stops after `cap` non-excluded ids are
   * inspected, regardless of how many were stationed. If every inspected id was in-transit the
   * iterator yields zero. Cross-level safe (SIMBOARD persists offline + cross-level).
   *
   * Closure-based: one closure + upvalues per call (~6 captures). next() over the hash is
   * zero-allocation per step. Re-entrant: each call returns a fresh closure with fresh state.
   * @safety SAFE - nil-guarded, single-pass snapshot of SIMBOARD roster at call time
   * @cost O(min(n, cap)) | per yielded id: 1 medium (alife_object) + 0 luabind (is_stationed field reads)
   * @src anomaly/sim_board.script(96,258), anomaly/sim_squad_scripted.script(295-323)
   * @param smart_id Smart terrain server entity ID
   * @param exclude_id Squad id to skip (typically the candidate itself)
   * @param cap Walk cap (default 5)
   * @returns Iterator yielding stationed se squads
   */
  iter_stationed_squads(smart_id: number, exclude_id: number | undefined, cap: number | undefined): (this: void, ...args: any[]) => any
  /**
   * Get the faction (player_id) a squad section produces
   * Reads the `faction` field from the squad's INI definition in configs/misc/squad_descr/.
   * This is the same string that ends up as squad.player_id after SIMBOARD:create_squad,
   * and the same string xcreature.community returns for a live squad spawned from this section.
   * Coarse vocabulary: stalker factions ("bandit", "stalker", "dolg", ...) and monster_*
   * categories ("monster_predatory_day", "monster_special", "monster_zombied_night", ...).
   * No species-level granularity -- the section's npc_random field holds the species pool.
   * Use this to classify a smart's respawn_params.squads pool by what it will spawn.
   * @scope global - reads ini_sys (system.ltx merged INI); section metadata is static
   * @safety SAFE - returns nil when section missing or has no faction field
   * @cost O(1) | 0 luabind cached, 1 luabind medium on miss (session-lifetime per-section cache)
   * @src anomaly/configs/misc/squad_descr/squad_descr_default_mutants.ltx, anomaly/configs/misc/squad_descr/squad_descr_default_stalkers.ltx
   * @src anomaly/sim_board.script(139)
   * @param section Squad section name (e.g. "simulation_dog", "bandit_sim_squad_novice")
   * @returns Faction the squad will have (e.g. "monster_predatory_day", "bandit"), or nil
   */
  section_faction(section: string): string | undefined
  /**
   * Iterator over all smart terrains in SIMBOARD
   * Stateful iterator using next() on SIMBOARD.smarts; skips entries without valid smrt ref
   * @scope global - iterates SIMBOARD.smarts (all levels)
   * @safety SAFE - nil-guarded, returns empty iterator when SIMBOARD unavailable
   * @cost O(n) smarts | 0 luabind (pure Lua table iteration)
   * @src anomaly/sim_board.script(96), anomaly/smart_terrain.script(1)
   * @returns Iterator yielding smart terrain server objects
   */
  smart_iter(): (this: void, ...args: any[]) => any
  /**
   * Get the SIMBOARD smarts-by-name dict for whole-world iteration. Callers iterate with
   * pairs(); use this when an index build or cross-level scan needs every smart, not the
   * filtered/ranked output of find_smart. Returns nil before SIMBOARD setup completes (pre
   * actor_on_first_update); callers must nil-check.
   * @scope global - SIMBOARD.smarts_by_names populated at sim_board init across all levels
   * @safety SAFE - nil-guarded; returns nil if SIMBOARD or smarts_by_names is unavailable
   * @complexity O(1) | 0 luabind, table identity return
   * @see anomaly/sim_board.script (SIMBOARD.smarts_by_names initialized at sim_board setup)
   * @returns { [name] = smart_terrain, ... } or nil if SIMBOARD not loaded
   */
  smarts_by_names(): AnyTable | undefined
}
