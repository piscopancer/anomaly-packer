// AUTO-GENERATED addon pack for `xlib` by `anomaly-packer gen-addon`. Lua API of xsquad.script.
// Refine `TODO` (= any) by hand where the mod gave no type.

/** @noSelf */
declare const xsquad: {
  /**
   * Acquire: set scripted_target (routes to specific_update), clear __lock (AP does not use it)
   * scripted_target alone overrides simulation targeting; __lock cleared so generic_update can run if another mod clears scripted_target
   * @safety SAFE - pure field writes on squad userdata, rejects nil/empty :name()
   * @cost O(1) | 1 luabind heavy (target_smart:name() shared_str alloc) + 4 trivial userdata field writes (scripted_target, __lock, rush_to_target, assigned_target_id, current_action)
   * @src anomaly/sim_squad_scripted.script(258,233-238), anomaly/xr_reach_task.script(289-314)
   * @param squad Squad server object
   * @param target_smart Target smart terrain
   * @param rush Rush to target (move.run + anim.danger when online)
   * @returns Success
   */
  acquire_squad(squad: AnyTable, target_smart: AnyTable, rush: boolean | undefined): boolean
  /**
   * Dump SIMBOARD squads as a diagnostic string
   * Shows raw engine fields plus commander's service role. When level_id is provided, filters to that level.
   * Offline commanders show role="off"; non-service-NPC commanders show role="none".
   * @safety SAFE - iter_squads handles nil SIMBOARD, read-only field access
   * @cost O(n) squads | per squad: 1 medium (sim:object) + 1 heavy (community shared_str) + 1 medium (npc_count) + 0-2 trivial (lvid cached, vertex field) + commander_role
   * @src anomaly/sim_squad_scripted.script(35,39), xlibs/xdata.script npc_roles
   * @param level_id Restrict to this level when provided
   * @returns Diagnostic dump
   */
  dump_squads(level_id: number | undefined): string
  /**
   * Find squad matching criteria within distance range
   * Iterates opts.source (when provided) or SIMBOARD.squads; resolves each via alife_object, filters by faction/distance/level
   * @scope global - iterates the supplied pool. When opts.source is nil, walks SIMBOARD.squads across all levels.
   * @safety SAFE - SIMBOARD iteration, alife_object returns nil for deleted
   * @cost O(n) squads in pool | per squad: 1 medium (sim:object xr_map find) + 1 trivial (distance_to_sqr inline math); is_protected adds up to 4 luabind on commander resolve
   * @src anomaly/sim_board.script(84), anomaly/_g.script(2044), xray/xrGame/alife_object_registry_inline.h(36)
   * @param pos Origin position
   * @param opts { factions, max_distance, min_distance, exclude_squad_id, level_id,
   *   exclude_at_smart_id, exclude_permanent, exclude_active_role, exclude_task_target,
   *   exclude_scripted, exclude_filter, exclude_ids, source }
   *   source: optional { [squad_id] = true, ... } iterable. When present, replaces SIMBOARD.squads as the iteration pool.
   *   Use AlifePlus ap_core_cache.squads_on_level(level_id) to fetch a per-level bucket.
   * @returns Nearest matching squad
   */
  find_squad(pos: TODO, opts: AnyTable): AnyTable | undefined
  /**
   * Find multiple squads matching criteria
   * Same as find_squad but returns up to max_count results via random sampling
   * @scope global - iterates the supplied pool. When opts.source is nil, walks SIMBOARD.squads across all levels.
   * @safety SAFE - SIMBOARD iteration, alife_object returns nil for deleted
   * @cost O(n) squads in pool | per squad: 1 medium (sim:object xr_map find) + 1 trivial (distance_to_sqr inline math); is_protected adds up to 4 luabind on commander resolve
   * @src anomaly/sim_board.script(84), anomaly/_g.script(2044), xray/xrGame/alife_object_registry_inline.h(36)
   * @param pos Origin position
   * @param opts { factions, max_distance, min_distance, exclude_squad_id, level_id,
   *   max_count, exclude_at_smart_id, exclude_permanent, exclude_active_role,
   *   exclude_task_target, exclude_scripted, exclude_filter, exclude_ids, source }
   *   source: optional { [squad_id] = true, ... } iterable. When present, replaces SIMBOARD.squads as the iteration pool.
   *   Use AlifePlus ap_core_cache.squads_on_level(level_id) to fetch a per-level bucket.
   * @returns Array of squad server objects
   */
  find_squads(pos: TODO, opts: AnyTable): AnyTable
  /**
   * Get squad commander's character name (human-readable)
   * Tries online game_object first (db.storage hit + character_name = 3 luabind), falls back
   * to cse_alife_trader_abstract:character_name() for offline commanders (4 luabind, server-side
   * string field). m_character_name is populated at NPC spawn (TranslateName of generated
   * name_X:lname_Y) and persists in saves; both paths return identical strings since
   * set_character_name_script propagates writes to both the cse field and the inventory owner.
   * @safety SAFE - all lookups nil-guarded; IsStalker filters non-stalker classes on both paths
   * @cost O(1) | 3 luabind online (commander_id, IsStalker, character_name); 4 luabind offline (+alife_object, +clsid)
   * @src xray/xrServerEntities/xrServer_Objects_ALife_Monsters_script.cpp(74), xray/xrServerEntities/xrServer_Objects_ALife_Monsters.cpp(284, 518)
   * @param squad Squad server object
   * @returns Commander's character name, or nil for empty squads / non-stalkers / unregistered commanders
   */
  get_commander_name(squad: TODO): string | undefined
  /**
   * Get squad commander's character rank as integer
   * Tries online game_object first (db.storage hit + character_rank = 3 luabind), falls back
   * to cse_alife_trader_abstract:rank() for offline commanders (4 luabind). The two paths read
   * different fields (CharacterInfo().Rank() online vs CSE_ALifeTraderAbstract::m_rank offline)
   * but they are kept in sync atomically by CInventoryOwner::SetRank (InventoryOwner.cpp:462-465);
   * both seeded from RankDef at first specific_character() resolution.
   * @safety SAFE - all lookups nil-guarded; IsStalker filters non-stalker classes on both paths
   * @cost O(1) | 3 luabind online (commander_id, IsStalker, character_rank); 4 luabind offline (+alife_object, +clsid, +rank)
   * @src xray/xrGame/script_game_object_script3.cpp(309), xray/xrServerEntities/xrServer_Objects_ALife_Monsters_script4.cpp(125)
   * @param squad Squad server object
   * @returns Commander rank, or 0 for empty squads / non-stalkers / unresolved commanders
   */
  get_commander_rank(squad: TODO): number
  /**
   * Get raw squad community id (faction key), untranslated
   * The untranslated sibling of get_community_name: returns the engine community string
   * (e.g. "dolg", "stalker") for use as a faction KEY, not display text. get_community_name
   * runs the result through game.translate_string and must not be used where the raw id matters.
   * @safety SAFE - nil-guarded squad + method presence check
   * @cost O(1) | 1 luabind (get_squad_community heavy shared_str return) on hit
   * @src anomaly/sim_squad_scripted.script(857) get_squad_community
   * @param squad Squad server object
   * @returns Raw community id, or nil if no squad / no community method
   */
  get_community(squad: TODO): string | undefined
  /**
   * Get translated squad community name
   * Safe wrapper: nil-guarded get_squad_community + game.translate_string
   * @safety SAFE - nil-guarded, falls back to "stalker" translation key
   * @cost O(log n) | 2 luabind (get_squad_community heavy shared_str return, translate_string medium std::map find on STRING_TABLE_MAP)
   * @src anomaly/sim_squad_scripted.script(105), anomaly/_g.script(2273), xray/xrGame/string_table.cpp(226)
   * @param squad Squad server object
   * @returns Translated community name (never nil)
   */
  get_community_name(squad: TODO): string
  /**
   * Get squad containing an NPC by member ID
   * Looks up se_npc via alife_object, reads group_id, resolves squad via alife_object
   * @safety SAFE - returns nil for invalid IDs, group_id >= INVALID_ENTITY_ID means no squad
   * @cost O(log n) | 2 luabind medium (alife_object for NPC + alife_object for squad, both xr_map finds) + 1 trivial (group_id field read on cse userdata)
   * @src anomaly/_g.script(2044), xray/xrGame/alife_simulator_script.cpp(40)
   * @param npc_id NPC ID (can be offline)
   * @returns Squad server object or nil if not in squad
   */
  get_squad_by_member(npc_id: number): TODO | undefined
  /**
   * Get squad's current smart terrain
   * Reads smart_id or assigned_target_id, resolves via alife_object, rejects non-smart entities via clsid check
   * @safety SAFE - returns nil for nil squad, missing entity, or non-smart entity
   * @cost O(log n) | 2 luabind (alife_object medium + clsid trivial)
   * @src anomaly/sim_squad_scripted.script(102,288), anomaly/_g.script(2044), xray/xrGame/alife_object_registry_inline.h(36)
   * @param squad Squad object
   * @returns Current smart terrain or nil
   */
  get_squad_smart(squad: TODO): TODO | undefined
  /**
   * Check if squad currently has a system-assigned role that prevents scripting
   * Dynamic, re-evaluated every call (roles change as tasks are accepted/dismissed).
   * @safety SAFE - nil-guarded, O(t) task_info scan for task_giver
   * @cost O(1) commander resolve + O(t) task_info scan (t = 3-10 typical) | 3 luabind: commander_id trivial + alife_object medium + section_name heavy; task scan pure Lua
   * @src anomaly/axr_companions.script(25,150), anomaly/axr_task_manager.script task_info
   * @param squad Squad server object
   * @returns True if has active role (nil squad returns true for safety)
   * @returns Reason: "nil", "task_giver", "companion"
   * @returns Commander section_name
   */
  has_active_role(squad: TODO): LuaMultiReturn<[boolean, string | undefined, string | undefined]>
  /**
   * Short-circuiting boolean: any squad within max_distance matches?
   * Same filter scaffolding as find_squad (faction, exclusion, level, distance) plus optional
   * opts.match per-squad predicate. Exits true on first match â no collection, no sampling.
   * Use when the consumer is boolean (does X exist nearby?) and find_squads' collect-all-then-sample
   * pattern wastes the walk.
   * @scope global - iterates the supplied pool. When opts.source is nil, walks SIMBOARD.squads across all levels.
   * @safety SAFE - SIMBOARD iteration, alife_object returns nil for deleted
   * @cost O(n) squads in pool worst case, short-circuits on first match | per squad: 1 medium (sim:object xr_map find) + 1 trivial (distance_to_sqr inline math); opts.match cost set by caller
   * @src anomaly/sim_board.script(84), anomaly/_g.script(2044), xray/xrGame/alife_object_registry_inline.h(36)
   * @param pos Origin position
   * @param opts { factions, max_distance, min_distance, exclude_squad_id, level_id,
   *   exclude_at_smart_id, exclude_permanent, exclude_active_role, exclude_task_target,
   *   exclude_scripted, exclude_filter, exclude_ids, source, match }
   *   source: optional { [squad_id] = true, ... } iterable. When present, replaces SIMBOARD.squads as the iteration pool.
   *   Use AlifePlus ap_core_cache.squads_on_level(level_id) to fetch a per-level bucket.
   *   match: optional function(squad) -> boolean per-squad predicate evaluated after distance gate.
   * @returns True on first matching squad, false after walking pool
   */
  has_squad(pos: TODO, opts: AnyTable): boolean
  /**
   * Check if squad has permanent protected identity (story, trader, named NPC, empty)
   * Static within session. Cached per squad object (weak keys, GC-safe).
   * @safety SAFE - returns true for nil (fail-safe), alife_object returns nil for invalid
   * @cost O(1) cache hit | uncached 4-5 luabind mixed weights (story_id 0, commander_id trivial, alife_object medium, section_name heavy, clsid trivial, community heavy)
   * @src anomaly/_g.script(2674) get_object_story_id
   * @param squad Squad server object
   * @returns True if permanent (nil squad returns true for safety)
   * @returns Reason: "nil_squad", "not_squad", "story_id", "trader", "named_npc", "empty_squad"
   * @returns Commander section_name (for "trader" and "named_npc" reasons)
   */
  is_permanent_squad(squad: TODO): LuaMultiReturn<[boolean, string | undefined, string | undefined]>
  /**
   * Check all protection guards with shared commander context
   * Order: exclude_filter (cheapest) -> scripted -> permanent -> active_role (reuses cmd_id) -> task_target
   * @safety SAFE - nil-guarded, returns true for nil squad (fail-safe)
   * @cost O(1) cached | 0 luabind (cache hit) or 4-5 luabind medium (miss: alife_object, clsid, community)
   * @src xray/alife_object_registry_inline.h, anomaly/_g.script
   * @param squad Squad server object
   * @param opts { exclude_filter, exclude_filter_reason, exclude_scripted, exclude_permanent, exclude_active_role, exclude_task_target }
   * @returns protected
   * @returns reason ("is_permanent", "has_active_role", "is_task_target", "is_scripted", or opts.exclude_filter_reason)
   * @returns detail (sub-reason: "story_id", "trader", "task_giver", "companion", "scripted:target", etc.)
   * @returns name (section_name, from permanent cache)
   */
  is_protected(squad: TODO, opts: AnyTable): LuaMultiReturn<[boolean, string | undefined, string | undefined, string | undefined]>
  /**
   * Check if squad has engine/vanilla scripting fields set.
   * Checks runtime fields set by the engine or Anomaly's vanilla systems.
   * Mod-specific fields (__lock, registered_with_warfare) handled by AP ownership registry.
   *
   * Fields checked (order = priority):
   *   scripted_target - Any mod calling acquire_squad or setting directly (AP, Guards Spawner, etc.)
   *   action_condlist - Vanilla Anomaly: LTX condlist-driven target logic
   *   random_targets  - Vanilla Anomaly: random patrol system
   *
   * @safety SAFE - pure Lua field reads, nil-guarded, no luabind
   * @cost O(1) | 0-3 luabind for the .scripted_target/.action_condlist/.random_targets field reads (each is a userdata field access, trivial when present, falls through on nil)
   * @src anomaly/sim_squad_scripted.script(37-39,55-69,105,336)
   * @param squad Squad server object
   * @returns True if scripted (nil returns true for safety)
   * @returns Reason: "nil", "scripted:{target}", "condlist", "random_targets"
   */
  is_scripted(squad: TODO): LuaMultiReturn<[boolean, string | undefined]>
  /**
   * Class identity check for sim_squad_scripted instances.
   * Canonical Anomaly idiom: obj:clsid() == clsid.online_offline_group_s
   * (anomaly/axr_task_manager.script:1128, dialogs_axr_companion.script:231).
   * Required wherever a saved id may resolve to a different engine class after the
   * original squad was released and the server-entity slot reassigned (id recycling).
   * @safety SAFE - nil-guarded; tests for clsid method presence before calling
   * @cost O(1) | 2 luabind trivial (clsid field access + call)
   * @src anomaly/class_registrator.script(132), xray/xrGame/clsid_game.h
   * @param obj Server entity to test
   * @returns True if obj is a sim_squad_scripted instance
   */
  is_squad(obj: TODO | undefined): boolean
  /**
   * Check if squad is engine-stationed (current_action=1, not in transit)
   * Engine sets current_action=1 in specific_update when am_i_reached returns true, then keeps
   * it until either idle_time elapses or a new target is assigned. Sticky while staying,
   * bounded by smart's idle_time. Returns false during transit, before first arrival, and
   * after idle expiry triggers reassignment.
   * @safety SAFE - pure Lua field reads, nil-guarded
   * @cost O(1) | 0 luabind (current_action / current_target_id are plain CSE fields)
   * @src anomaly/sim_squad_scripted.script(295-323) arrival + stay + reset lifecycle
   * @param squad Squad server object
   * @param smart_id When given, checks stationed at THIS specific smart
   */
  is_stationed(squad: TODO, smart_id: number | undefined): boolean
  /**
   * Check if squad is an active task target (assault, bounty, hostage, delivery, dominance, rescue, etc.)
   * O(1) hash check against task_squads, then member-level bounty/hostage fallback for timing gaps
   * @safety SAFE - nil-guarded, returns true for nil (fail-safe)
   * @cost O(1) typical (hash hit, pure Lua) | O(m*b) worst case via _check_member_task_target
   * @src anomaly/sim_offline_combat.script(53), anomaly/axr_task_manager.script bounties_by_id hostages_by_id
   * @param squad Squad server object
   * @returns True if squad is a task target (nil squad returns true for safety)
   * @returns Reason: "nil", "task_squads", "bounty", "hostage"
   */
  is_task_target(squad: TODO): LuaMultiReturn<[boolean, string | undefined]>
  /**
   * Iterate squad member IDs as plain numbers
   * Wraps engine member iterator with nil/empty guard, yields k.id per member
   * @safety SAFE - nil-guarded, engine iterator yields nil on empty squad
   * @cost O(n) members | 0-1 luabind per member (squad_members C++ iterator + .id field read trivial)
   * @src xray/xrServerEntities/xrServer_Objects_ALife_script.cpp, anomaly/sim_squad_scripted.script(413)
   * @param squad Squad server object
   * @returns Iterator yielding member IDs (numbers)
   */
  iter_member_ids(squad: TODO): (this: void, ...args: any[]) => any
  /**
   * Iterate all SIMBOARD squads as resolved server entities
   * Handles SIMBOARD/alife nil guards and skips deleted squads (nil from alife_object)
   * Caller must not mutate SIMBOARD.squads (release_squad, SIMBOARD:create_squad, anything touching the
   * table) mid-iteration: next() continuation is then undefined. Collect IDs first, mutate after the loop
   * (see release_squads two-pass at :711-736).
   * @safety SAFE - alife_object returns nil for deleted, skipped automatically
   * @cost O(n) squads | 1 luabind medium per squad (sim:object: xr_map find)
   * @src anomaly/sim_board.script(84), anomaly/_g.script(2044), xray/xrGame/alife_object_registry_inline.h(36)
   * @returns Iterator yielding squad server objects
   */
  iter_squads(): (this: void, ...args: any[]) => any
  /**
   * Reassert: restore scripted_target if another mod overwrote it between scans, clear __lock
   * Returns false (no-op) when scripted_target already matches; callers use return value for debug logging
   * @safety SAFE - pure field writes, nil-guarded
   * @cost O(1) | 1 luabind trivial (read scripted_target) + 2 luabind trivial on mismatch (write scripted_target, __lock)
   * @param squad Squad server object
   * @param target Expected scripted_target value
   * @returns True if target was overwritten and restored
   */
  reassert_target(squad: AnyTable, target: string): boolean
  /**
   * Release: clear scripted_target (stops specific_update) + __lock (unblocks generic_update so sim resumes)
   * Inverse of acquire_squad/target_actor; squad returns to SIMBOARD autonomous targeting
   * @safety SAFE - pure field writes, nil-guarded
   * @cost O(1) | 3 luabind trivial (scripted_target, __lock, rush_to_target field writes on squad userdata)
   * @src anomaly/sim_squad_scripted.script(258)
   * @param squad Squad server object
   */
  release_squad(squad: AnyTable): void
  /**
   * Release squads from SIMBOARD (delete from world)
   * Collects IDs first to avoid mutating SIMBOARD.squads during iteration, then calls remove_squad on each
   * @safety SAFE - iter_squads handles nil SIMBOARD; remove_squad is engine standard cleanup
   * @cost O(n) squads | per squad: 1 luabind medium (sim:object xr_map find via iter_squads); protection guards add 4-5 luabind on commander resolve
   * @src anomaly/debug_cmd_list.script(2146), anomaly/sim_squad_scripted.script(413), anomaly/sim_board.script SIMBOARD:remove_squad
   * @param opts { common_only = bool } - if common_only, skip non-common squads
   * @returns Count of squads released
   */
  release_squads(opts: AnyTable | undefined): number
  /**
   * Acquire (actor): set scripted_target="actor", clear __lock, squad pursues player
   * Engine resolves "actor" to id=0 in get_script_target; no arrival detection (player moves)
   * @safety SAFE - pure field writes, nil-guarded
   * @cost O(1) | 4 luabind trivial (scripted_target, __lock, rush_to_target, current_action field writes on squad userdata)
   * @src anomaly/sim_squad_scripted.script(102,128-129)
   * @param squad Squad to command
   * @param rush Sprint to target
   * @returns Success
   */
  target_actor(squad: TODO, rush: boolean): boolean
}
