/** @noSelfInFile */

declare namespace alife_storage_manager {
  /** The global save-data table (`m_data`). */
  export function get_state(): {
    enable_campfire_mode: boolean
    /** Per game-object persistent save state, keyed by object id. */
    game_object: Record<number, Record<string, any> | null>
    /** Per server-object persistent save state, keyed by object id. */
    se_object: Record<number, SeObjectState>
    [key: string]: any
  }
  /**
   * Persistent save state for a game object, keyed by id
   * (`m_data.game_object[id]`). Returns `nil` when it does not exist and
   * `create_if_dont_exist` is falsy.
   */
  export function get_game_object_state(obj: CGameObject, create_if_dont_exist?: boolean): Record<string, any> | null
  /**
   * Persistent save state for a server object, keyed by id
   * (`m_data.se_object[id]`). Returns `nil` when it does not exist and
   * `create_if_dont_exist` is falsy.
   */
  export function get_se_obj_state(se_obj: CseAbstract, create_if_dont_exist?: boolean): SeObjectState | null
  // --- auto-added by audit-coverage (missing from hand-refined types; refine by hand) ---
  export function on_game_start(): void
  export function on_before_load_state(): void
  export function on_after_load_state(): void
  export function CALifeStorageManager_before_save(fname: string): void
  export function CALifeStorageManager_save(fname: string): void
  export function CALifeStorageManager_load(fname: string): void
  export function decode(t: string): any
}

/** Persistent server-object save state stored in `m_data.se_object`. */
interface SeObjectState {
  name?: string
  visual?: string
  icon_name?: string
  [key: string]: any
}
