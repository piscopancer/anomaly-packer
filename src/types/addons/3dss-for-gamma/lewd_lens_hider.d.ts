// AUTO-GENERATED addon pack for `3dss-for-gamma` by `anomaly-packer gen-addon`. Lua API of lewd_lens_hider.script.
// Refine `TODO` (= any) by hand where the mod gave no type.

/** @noSelf */
declare const lewd_lens_hider: {
  CONFIG_KEY_AIM_MODE: string
  CONFIG_KEY_BONE_NAME: string
  CONFIG_KEY_DELAYS: string
  CONFIG_KEY_ENABLED: string
  CONFIG_KEY_SPAWN_HIDE: string
  CONFIG_KEY_SPAWN_SHOW: string
  DEBUG_MODE: boolean
  ZOOM_TYPES: AnyTable
  /** Function triggered by callback used to trigger some code when the actor aims down sights. */
  actor_on_weapon_zoom_in(obj: TODO): any | undefined
  /** Function triggered by callback used to trigger some code when the actor aims out of sights. */
  actor_on_weapon_zoom_out(obj: TODO): any | undefined
  /** Function called to set the visibility a bone on an object that has lens hider enabled when aiming in/out of sight. */
  actor_on_weapon_zoom_set_bone(id: number, visibility: boolean): boolean
  /** Function triggered by callback used to trigger some code when the actor changes the zoom type. */
  actor_on_weapon_zoom_type_changed(obj: TODO, previous: number, current: number): any | undefined
  /** Function triggered by callback used to trigger some code when a game_object is spawned. */
  game_object_on_net_spawn(obj: TODO): any | undefined
  /** Function called to set the visibility a bone on an object that has lens hider enabled when it spawns. */
  game_object_on_net_spawn_set_bone(id: number, bone_name: string, visibility: boolean): boolean
  /**
   * Function used to get delays when aiming in and aiming out.
   * @returns number
   */
  get_delays(obj: TODO): TODO
  /**
   * Function used to get information for a certain ID.
   * This will run all necessary checks and will either:
   * - "return false, nil" - if something went wrong or if the object for the given ID isn't part of lens hider.
   * - "return game_object, string" - if everything is in order and a bone should be shown/hidden for the object.
   * @returns game_object|nil
   */
  get_information(id: TODO, override_zoom_type: TODO): TODO
  /** Function used to register callbacks. */
  on_game_start(): any | undefined
  /**
   * Function used to print information to the log if DEBUG_MODE is set to true.
   * @param any
   */
  printdbg(...args: any[]): any | undefined
  /** Function used to set the visibility of a bone for a HUD object. */
  set_bone_visibility(obj: TODO, bone_name: string, visibility: boolean): any | undefined
}
