// AUTO-GENERATED addon pack for `xlib` by `anomaly-packer gen-addon`. Lua API of xchange.script.
// Refine `TODO` (= any) by hand where the mod gave no type.

/** @noSelf */
declare const xchange: {
  /**
   * Register a changeset. Append-only registry; declaration order is run order.
   * Rejects bad input and duplicate ids with a warn so caller bugs surface at load time.
   * @safety SAFE - pure table push, guards bad input
   * @cost O(1) | 0 luabind
   * @param id Globally unique changeset id (e.g. "ap_v12_to_v13_release_orphaned_squads")
   * @param fn Apply the change to m_data
   */
  register(id: string, fn: TODO): void
  /**
   * Run all registered changesets not yet applied to this save.
   * Stamps applied id with os.time (libc); xtime.game_sec AVs at load_state because
   * CLevel::game is null during CALifeSimulator ctor (alife_storage_manager.cpp:131).
   * Idempotent: changesets in the log are skipped on subsequent loads.
   * @safety SAFE - pure table writes, no engine APIs (os.time is libc)
   * @cost O(n) registry | 1 libc os.time per applied
   * @param m_data Save data table
   */
  run(m_data: AnyTable): void
}
