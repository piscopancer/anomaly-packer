// AUTO-GENERATED addon pack for `xlib` by `anomaly-packer gen-addon`. Lua API of xsound.script.
// Refine `TODO` (= any) by hand where the mod gave no type.

/** @noSelf */
declare const xsound: {
  /**
   * Verified-safe sound paths. Sourced from vanilla scripts and configs/misc/sound/*.ltx.
   * Usage: xsound.acquire(xsound.SND.PSY_ANTENNA_L, { volume = 0.7 })
   * Missing paths play silently (no fatal error like .ppe), but waste a handle slot.
   * @src anomaly/sr_psy_antenna.script(42): PSY_ANTENNA_L, PSY_ANTENNA_R
   * @src anomaly/psi_storm_manager.script(384): PSI_STORM
   * @src anomaly/bind_anomaly_field.script(283-284): EMI_BLOWOUT, EMI_BLOWOUT_FAR
   * @src anomaly/sr_teleport.script(52): TINNITUS
   * @src anomaly/configs/misc/script_sound.ltx: EARTHQUAKE, ORGANIC_MOAN, MONOLITH_HUM, WARLAB_NOISE, NOOS_TUNNEL, RADAR_1, RADAR_2
   * @src anomaly/bind_dynamic_light.script(70): LIGHT_HUMMING
   */
  SND: AnyTable
  /**
   * Acquire a sound handle for a looping sound. Plays the sound immediately at volume 0 so the handle is live.
   * Caller ramps the audible volume via set_volume(handle, target); release(handle) lerps back to 0 and frees the slot.
   * @safety SAFE - guards db.actor, returns nil if sound_object constructor fails
   * @cost O(1) | 1 luabind heavy (sound_object ctor + play_at_pos)
   * @src xray/xrGame/script_sound_script.cpp sound_object bindings
   * @param snd_path Sound path (e.g. xsound.SND.PSY_ANTENNA_L), backslashes
   * @param opts { looped (default true), s2d (default true), position (vector), smoothing (default 1.0) }
   * @returns handle
   */
  acquire(snd_path: string, opts: AnyTable | undefined): number | undefined
  /**
   * Snapshot of a handle's state for diagnostics. Pure read, does not affect lerp or scheduling.
   * @cost O(1) | 0 luabind (hash lookup + table copy of small fields)
   * @param handle Handle from acquire()
   * @returns { path, volume, target_volume, smoothing, releasing }, nil for unknown handle
   */
  inspect(handle: number): AnyTable | undefined
  /**
   * Check if a handle is still tracked. Tracking ends when release()'s lerp finishes.
   * @cost O(1) | 0 luabind (hash table lookup)
   * @param handle Handle from acquire()
   * @returns True while the handle has an entry in _active
   */
  is_active(handle: number): boolean
  /** Reset all state on save load. Stops any playing sounds we still hold. */
  on_game_start(): void
  /**
   * Play a one-shot sound (no looping, no handle, no lerp).
   * For short notification cues; use acquire/release for looping sounds with volume control.
   * @safety SAFE - nil-guarded on db.actor and sound_object_t constructor
   * @cost O(1) | 1 luabind heavy (sound_object ctor + play)
   * @src xray/xrGame/script_sound_script.cpp sound_object bindings, anomaly/utils_obj.script(834)
   * @param snd_path Sound path (e.g. "affects\\tinnitus3a", xsound.SND.*)
   * @param opts { volume (default 1.0) }
   * @returns True if sound was played
   */
  play(snd_path: string, opts: AnyTable | undefined): boolean
  /**
   * Release the handle. Ramps volume to 0, then stops the sound and frees.
   * @safety SAFE - no-op on unknown or already-releasing handle
   * @cost O(1) | 0 luabind (state flag; stop happens on lerp completion)
   * @param handle Handle
   * @returns ok
   */
  release(handle: number): boolean
  /**
   * Set the target volume. Lerp drives current volume toward target each tick (100ms).
   * @safety SAFE - rejects unknown or already-releasing handles
   * @cost O(1) | 0 luabind (state write)
   * @param handle Handle from acquire()
   * @param target Target volume, clamped to [0, 1]
   * @param smoothing Override smoothing for this transition (units/sec)
   * @returns ok
   */
  set_volume(handle: number, target: number, smoothing: number | undefined): boolean
}
