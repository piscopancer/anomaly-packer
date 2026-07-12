/** @noSelfInFile */

declare namespace db {
  const actor: CGameObject | null
  const actor_binder: object_binder
  const offline_objects: Record<
    number,
    {
      level_vertex_id: number | null
      active_section?: any
      [key: string]: any
    }
  >
  /**
   * Per-object runtime state table, keyed by object id (`db.storage[obj:id()]`).
   * Holds the object binder state (`self.st`): the bound object, persistent
   * storage and the active scheme tables. Loosely modelled because schemes add
   * their own fields dynamically.
   */
  const storage: Record<number, ObjectState>
  const spawned_vertex_by_id: Record<number, number | null>
  const cc_icc: boolean
  const cc_npc: boolean
  const cc_vrb: boolean
  const gameover_credits_started: boolean
  const trader: CGameObject | null
  const zone_by_name: Record<string, CGameObject>
  /** Heli/enemy relation tables (`goodwill = {sympathy = {}, relations = {}}`). */
  const goodwill: {
    sympathy: Record<number, number>
    relations: Record<number, number>
  }
  function add_obj(obj: CGameObject): void
  function del_obj(obj: CGameObject): void
  function add_enemy(obj: CGameObject): void
  function delete_enemy(obj: CGameObject): void
  function add_zone(zone: CGameObject): void
  function del_zone(zone: CGameObject): void
  const used_level_vertex_ids: Record<number, boolean>
  /** Ids of online stalkers (array). */
  const OnlineStalkers: number[]
  const campfire_by_name: Record<string, any>
  const campfire_table_by_smart_names: Record<string, any>
  /** Bridge binders, keyed by object name. */
  const bridge_by_name: Record<string, object_binder>
  const script_ids: Record<number, any>
  /** The actor proxy instance. */
  const actor_proxy: any
  const heli: Record<number, any>
  const camp_storage: Record<number, any>
  const story_by_id: Record<number, any>
  /** Server smart terrains, keyed by object id. */
  const smart_terrain_by_id: Record<number, se_smart_terrain>
  const info_restr: Record<string, any>
  /** Ids of NPCs treated as helicopter enemies (array). */
  const heli_enemies: number[]
  /** Animated-object binders, keyed by object name. */
  const anim_obj_by_name: Record<string, object_binder>
  const story_object: Record<number, any>
  const signal_light: Record<string, any>
  /** Anomaly binders, keyed by object name. */
  const anomaly_by_name: Record<string, any>
  const level_doors: Record<string, any>
  const no_weap_zones: Record<string, any>
  const dynamic_ltx: Record<string, any>
  const vehicle: CGameObject | null
  const actor_inside_zones: Record<string, any>
  function add_bridge(bridge: CGameObject, binder: object_binder): void
  function del_bridge(bridge: CGameObject): void
  function add_anomaly(anomaly: object_binder): void
  function del_anomaly(anomaly: object_binder): void
  function add_actor(obj: CGameObject): void
  function del_actor(): void
  function add_heli(obj: CGameObject): void
  function del_heli(obj: CGameObject): void
  function add_smart_terrain(obj: se_smart_terrain): void
  function del_smart_terrain(obj: se_smart_terrain): void
  function add_anim_obj(anim_obj: CGameObject, binder: object_binder): void
  function del_anim_obj(anim_obj: CGameObject): void
  function add_stalker(npc: CGameObject): void
  function del_stalker(npc: CGameObject): void
}

/** Runtime object-state table stored in {@link db.storage}. */
interface ObjectState {
  object?: CGameObject
  pstor?: Record<string, any>
  active_section?: string
  active_scheme?: string
  [key: string]: any
}
