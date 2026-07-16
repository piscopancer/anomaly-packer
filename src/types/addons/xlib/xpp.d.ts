// AUTO-GENERATED addon pack for `xlib` by `anomaly-packer gen-addon`. Lua API of xpp.script.
// Refine `TODO` (= any) by hand where the mod gave no type.

/** @noSelf */
declare const xpp: {
  /**
   * Verified-safe .ppe filenames. All 35 entries tested 2026-05-19 in GAMMA install.
   * Sourced from postprocess.ltx and vanilla scripts; see doc/library/modding/post-process-effectors.md.
   * Usage: xpp.acquire(xpp.PPE.PSY_ANTENNA, { smoothing = 0.5 })
   * Engine fatal-errors on missing .ppe (PostprocessAnimator.cpp:80), not catchable via pcall.
   */
  PPE: AnyTable
  /**
   * Acquire a post-process effector slot. Returns handle (slot id) or nil if no actor.
   * Engine renders the .ppe at default factor (curve max) immediately on add. Call
   * set_target(handle, value) right after acquire to drive factor to your starting value.
   * @safety SAFE - guards db.actor before engine call (level.add_pp_effector crashes without actor)
   * @cost O(1) | 1 luabind heavy (xr_new<CPostprocessAnimator> + Load + AddPPEffector)
   * @src xray/xrGame/level_script.cpp(987) add_pp_effector
   * @param ppe_name Filename relative to gamedata/anims/ (e.g. "psy_antenna.ppe")
   * @param opts { cyclic = bool (default true), smoothing = number (default 0.3) }
   * @returns handle
   */
  acquire(ppe_name: string, opts: AnyTable | undefined): number | undefined
  /**
   * Snapshot of a slot's state (for diagnostics)
   * @cost O(1) | 0 luabind
   * @param handle Slot id from acquire()
   * @returns { ppe, smoothing, cyclic, releasing } or nil if handle unknown
   */
  inspect(handle: number): AnyTable | undefined
  /**
   * Check if a handle is still tracked (not yet removed by the release timer)
   * @cost O(1) | 0 luabind
   * @param handle Slot id from acquire()
   * @returns True while the handle is registered in _active
   */
  is_active(handle: number): boolean
  /**
   * Reset all state on save load. Engine wipes its effectors on level change anyway,
   * so we just clear our handle table. Pending CreateTimeEvent timers don't survive
   * the load cycle in Anomaly.
   */
  on_game_start(): void
  /**
   * Release the slot. Ramps factor to 0 via engine smoothing, then removes the effector
   * on a CreateTimeEvent timer (delay = 1/smoothing + 0.5s buffer).
   * @safety SAFE - no-op on unknown or already-releasing handle
   * @cost O(1) | 1 luabind (set_pp_effector_factor) + deferred 1 luabind (remove_pp_effector)
   * @src xray/xrGame/level_script.cpp(994) remove_pp_effector
   * @param handle Slot id
   * @returns ok
   */
  release(handle: number): boolean
  /**
   * Set the target factor. Engine smooths internally at `smoothing` (factor units per second).
   * The 3-arg form calls SetDesiredFactor in the engine; no Lua tick needed.
   * @safety SAFE - rejects unknown or already-releasing handles
   * @cost O(1) | 1 luabind trivial (smart_cast + SetDesiredFactor)
   * @src xray/xrGame/level_script.cpp(1001) set_pp_effector_factor 3-arg
   * @param handle Slot id from acquire()
   * @param value Target factor, clamped to [0, 1]
   * @param smoothing Override smoothing for this transition
   * @returns ok
   */
  set_target(handle: number, value: number, smoothing: number | undefined): boolean
}
