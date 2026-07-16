// AUTO-GENERATED addon pack for `xlib` by `anomaly-packer gen-addon`. Lua API of xsmart_spawn.script.
// Refine `TODO` (= any) by hand where the mod gave no type.

/** @noSelf */
declare const xsmart_spawn: {
  /** Faction -> generic simulation squad sections (novice, advanced, veteran). Copy of smart_terrain.script:16-29. */
  SQUADS_BY_FACTION: AnyTable
  /** Species -> single-species simulation squad section (species-pure for infest/conquest). See doc/library/xray/api/squad-factions.md. */
  SQUADS_BY_SPECIES: AnyTable
  /**
   * Clear exclusive spawn from smart terrain, restoring original LTX spawning
   * Clears faction_controlled (deactivates faction gate), reverts faction to default,
   * removes the exclusive entry. Original LTX entries resume on next try_respawn.
   * @scope global - mutates server-entity fields directly
   * @safety SAFE - pure Lua table writes on smart terrain object
   * @cost O(1) | 0 luabind
   * @src anomaly/smart_terrain.script(246-267,1665-1672)
   * @param smart Smart terrain to revert
   * @param key Respawn_params key to remove
   * @returns True if cleared
   */
  clear_exclusive_spawn(smart: TODO, key: string): boolean
  /**
   * Remove shared spawn entry from smart terrain
   * @scope global - mutates server-entity respawn_params directly
   * @safety SAFE - pure Lua table writes on smart terrain object
   * @cost O(1) | 0 luabind
   * @param smart Smart terrain to revert
   * @param key Respawn_params key to remove
   * @returns True if cleared
   */
  clear_shared_spawn(smart: TODO, key: string): boolean
  /**
   * Reset population and re-seed world from simulation preset
   * Resets spawn counters, clears start_position_filled flag, calls fill_start_position
   * @scope global - mutates SIMBOARD and triggers fill_start_position
   * @safety SAFE - delegates to engine's fill_start_position (runs on every new game start)
   * @cost O(n) smarts for reset + fill_start_position cost | 0 luabind for reset_spawns; fill_start_position is engine-side spawn injection (heavy per smart, mostly server-entity field writes)
   * @src anomaly/se_actor.script(14), anomaly/sim_board.script(284)
   * @returns True if repopulate ran
   */
  repopulate(): boolean
  /**
   * Reset all smart terrain spawn counters to zero
   * Zeros already_spawned[k].num and clears last_respawn_update on all respawn-capable smarts
   * @scope global - iterates SIMBOARD.smarts and mutates server-entity fields
   * @safety SAFE - pure Lua field writes on smart terrain objects, nil-guarded
   * @cost O(n) smarts * O(k) spawn sections | 0 luabind (SIMBOARD.smarts holds direct refs to server entities; field writes via pairs are pure Lua)
   * @src anomaly/smart_terrain.script(251,886,1625), anomaly/sim_board.script(302)
   * @returns Count of smarts reset
   */
  reset_spawns(): number
  /**
   * Set exclusive spawn on smart terrain (suppresses original LTX entries via faction filter)
   * Sets faction_controlled + one entry with .faction; monster factions need periodic re-apply (check_smart_faction ignores monsters; see @src line 1209-1236).
   * @scope global - mutates server-entity fields directly; faction_controlled gate evaluates in try_respawn
   * @safety SAFE - pure Lua table writes on smart terrain object
   * @cost O(1) | 0 luabind (parse_condlist is pure Lua)
   * @src anomaly/smart_terrain.script(246-267,1209-1236,1665-1672)
   * @param smart Smart terrain to mutate
   * @param key Unique respawn_params key (e.g. "ap_infest")
   * @param identity Stalker faction or mutant species (_SQUADS_BY_IDENTITY lookup)
   * @param spawn_num Max squads for this entry (default 1)
   * @returns True if applied
   */
  set_exclusive_spawn(smart: TODO, key: string, identity: string, spawn_num: number | undefined): boolean
  /**
   * Add shared spawn entry to smart terrain respawn_params (additive, originals keep spawning)
   * No faction_controlled -- engine filter stays in "spawn all" mode, both LTX and injected entries fire
   * @scope global - mutates server-entity fields directly; respawn evaluates in try_respawn (cse_alife_schedulable tick, runs offline)
   * @safety SAFE - pure Lua table writes on smart terrain object
   * @cost O(1) | 0 luabind (parse_condlist is pure Lua)
   * @src anomaly/smart_terrain.script(1665-1716)
   * @param smart Smart terrain to inject into
   * @param key Unique respawn_params key (e.g. "ap_conquest")
   * @param identity Stalker faction or mutant species (_SQUADS_BY_IDENTITY lookup)
   * @param spawn_num Max squads for this entry (default 1)
   * @returns True if applied
   */
  set_shared_spawn(smart: TODO, key: string, identity: string, spawn_num: number | undefined): boolean
}
