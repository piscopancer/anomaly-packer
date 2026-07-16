// AUTO-GENERATED addon pack for `xlib` by `anomaly-packer gen-addon`. Lua API of xlibs_mcm.script.
// Refine `TODO` (= any) by hand where the mod gave no type.

/** @noSelf */
declare const xlibs_mcm: {
  on_mcm_load(): AnyTable
  /**
   * Set MCM info-page version line from xlibs.get_version()
   * Called by MCM via ui_hook_functor on the version desc widget; runs on MCM render
   * @safety SAFE - handlers.desc is MCM-supplied; SetText is MCM widget API
   * @cost O(1) | 0 luabind (pure MCM widget call; no engine bridge)
   * @param _anchor MCM anchor element (unused, required by MCM callback signature)
   * @param handlers MCM handlers with desc text widget
   */
  set_version_text(_anchor: AnyTable, handlers: AnyTable): void
}
