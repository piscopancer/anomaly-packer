// AUTO-GENERATED addon pack for `3dss-for-gamma` by `anomaly-packer gen-addon`. Lua API of zzz_mspizza_Godis_ZoomCalc.script.
// Refine `TODO` (= any) by hand where the mod gave no type.

/** @noSelf */
declare const zzz_mspizza_Godis_ZoomCalc: {
  /** Global variable to save scope name */
  current_scope_name: string
  last_alt: number
  saved_fov: TODO
  /** Main Function */
  actor_on_weapon_zoom_in(obj: TODO): void
  /** Sets current zoom type to global variable */
  actor_on_weapon_zoom_type_changed(obj: TODO, previous: TODO, current: TODO): void
  /** Bind the function to a key (e.g., F5) */
  bind_key(key: TODO, func: TODO): void
  /** Custom rounding function based on specific rules */
  custom_round(num: TODO): TODO
  /** Function to format number to 13 decimal places */
  format_to_13_digits(num: TODO): TODO
  /** Black Magic. Gets information from global scope sections. Overwrites if local weapon section exists. */
  get(wpn_section: TODO, key: TODO): TODO
  /** Function to get the current scope name */
  get_current_scope_name(): TODO
  /** Function to get scope zoom and normalise to x1.5 */
  get_mcm_scope_zoom(): TODO
  /** check if current scope is listed above */
  is_scope_in_list(scope_name: TODO, scope_list: AnyTable): boolean
  on_game_start(): void
}
