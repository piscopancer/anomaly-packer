// CGameObject subclasses, one file each (see ./gameobject/)
/// <reference path="gameobject/CActor.d.ts" />
/// <reference path="gameobject/CInventoryOwner.d.ts" />
/// <reference path="gameobject/CInventoryBox.d.ts" />
/// <reference path="gameobject/CCustomOutfit.d.ts" />
/// <reference path="gameobject/CHelmet.d.ts" />
/// <reference path="gameobject/CArtefact.d.ts" />
/// <reference path="gameobject/CWeaponAmmo.d.ts" />
/// <reference path="gameobject/CWeapon.d.ts" />
/// <reference path="gameobject/CWeaponMagazined.d.ts" />
/// <reference path="gameobject/CWeaponMagazinedWGrenade.d.ts" />
/// <reference path="gameobject/CEatableItem.d.ts" />
/// <reference path="gameobject/CBottleItem.d.ts" />
/// <reference path="gameobject/CHelicopter.d.ts" />
/// <reference path="gameobject/CHangingLamp.d.ts" />
/// <reference path="gameobject/CZoneCampfire.d.ts" />
/// <reference path="gameobject/CPhysicObject.d.ts" />
/// <reference path="gameobject/CCustomZone.d.ts" />
/// <reference path="gameobject/CTorridZone.d.ts" />
/// <reference path="gameobject/CMosquitoBald.d.ts" />
/// <reference path="gameobject/CMedkit.d.ts" />
/// <reference path="gameobject/CAntirad.d.ts" />
/// <reference path="gameobject/CFoodItem.d.ts" />

/**
 * Global holder of the `game_object` luabind class enums, accessed as `game_object.enemy`,
 * `game_object.level_path` and so on. The instance type is {@link CGameObject}.
 *
 * Only the stable (non build-conditional) enums are listed. The `callback_types` enum is
 * intentionally omitted: its numeric values depend on engine compile flags (`INPUT_CALLBACKS`,
 * `EXTENDED_WEAPON_CALLBACKS`, …) and scripts address callbacks through the separate `callback`
 * table rather than through `game_object`.
 */
declare const game_object: {
  // relation (ALife::ERelationType)
  readonly friend: 0
  readonly neutral: 1
  readonly enemy: 2
  readonly dummy: -1
  // path type (MovementManager::EPathType)
  readonly game_path: 0
  readonly level_path: 1
  readonly patrol_path: 2
  readonly no_path: 3
  // action type (ScriptEntity::EActionType)
  readonly movement: 0
  readonly watch: 1
  readonly animation: 2
  readonly sound: 3
  readonly particle: 4
  readonly object: 5
  readonly action_type_count: 6
  // movement selection type (ESelectionType)
  readonly alifeMovementTypeMask: 0
  readonly alifeMovementTypeRandom: 1
  // pda message (EPdaMsg)
  readonly dialog_pda_msg: 0
  readonly info_pda_msg: 1
  readonly no_pda_msg: 2
  // actor relations (RELATION_REGISTRY)
  readonly relation_kill: 0
  readonly relation_attack: 1
  readonly relation_fight_help_human: 2
  readonly relation_fight_help_monster: 4
}
/**
 * A functor passed to engine callback setters such as {@link CGameObject.set_callback}.
 * The bound `this` and argument list vary per callback type, so both are left open.
 */
declare type EngineCallback = (this: any, ...args: any[]) => any

declare class CGameObject {
  constructor()
  health: number
  psy_health: number
  power: number
  satiety: number
  radiation: number
  morale: number
  // cast
  cast_Actor(): CActor
  // cast_Car()
  // cast_Heli()
  cast_InventoryOwner(): CInventoryOwner
  cast_InventoryBox(): CInventoryBox
  // cast_CustomZone()
  // cast_TorridZone()
  // cast_MosquitoBald()
  // cast_ZoneCampfire()
  cast_CustomOutfit(): CCustomOutfit
  cast_Helmet(): CHelmet
  cast_Artefact(): CArtefact
  cast_Ammo(): CWeaponAmmo
  cast_Weapon(): CWeapon
  cast_WeaponMagazined(): CWeaponMagazined
  cast_WeaponMagazinedWGrenade(): CWeaponMagazinedWGrenade
  cast_EatableItem(): CEatableItem
  cast_BottleItem(): CBottleItem
  //
  // shared
  //
  id(): number
  clsid(): number
  level_vertex_id(): number
  game_vertex_id(): number
  has_info(portion: string): boolean
  give_info_portion(portion: string): boolean
  disable_info_portion(portion: string): void
  /** Unique story id, @returns -1 (if not unique) */
  story_id(): number
  position(): vector
  direction(): vector
  section(): string
  /** XML name */
  profile_name(): string | null
  name(): string
  /** Object to which this object belongs. Used for items in inventories and boxes */
  parent(): CGameObject | null
  mass(): number
  /** Center of physical shell */
  center(): vector
  bind_object(obj: CGameObject): void
  binded_object(): CGameObject | null
  //
  // Item
  //
  condition(): number | null
  set_condition(condition: number): void
  weight(): number | null
  set_weight(weight: number): void
  //
  // actor
  //
  change_health(health: number): void
  change_psy_health(psy: number): void
  change_power(power: number): void
  change_satiety(satiety: number): void
  change_radiation(rad: number): void
  change_morale(value: number): void
  set_actor_position(pos: vector): void
  set_actor_direction(dir: number): void
  give_game_news(caption: string, text: string, icon_path: string, delay_ms: number, duration_ms: number): void
  give_talk_message2(caption: string, text: string, icon_path: string, template?: string): void
  switch_to_trade(): void
  switch_to_talk(): void
  switch_to_upgrade(): void
  reload_weapon(): void
  hide_weapon(): void
  disable_hit_marks(_0: boolean): void
  get_task_state(task_id: string): number // ETaskState
  set_task_state(state: number /** ETaskState */, task_id: string): void
  give_task(task: CGameTask, dt: number, check_existing: boolean, timer: number): void
  set_active_task(task: CGameTask): void
  is_active_task(task: CGameTask): boolean
  get_task(id: string, only_in_process: boolean): CGameTask | null
  use(user: CGameObject): boolean
  start_trade(actor: CGameObject): void
  start_upgrade(actor: CGameObject): void
  //
  // npc (stalker or monster)
  //
  alive(): boolean
  play_sound(internal_type: number, max_start_type?: number, min_start_time?: number, max_stop_time?: number, min_stop_time?: number, id?: number): void
  get_enemy(): CGameObject | null
  get_corpse(): CGameObject | null
  get_enemy_strength(): number
  get_sound_info(): CScriptSoundInfo
  get_monster_hit_info(): CScriptMonsterHitInfo
  best_danger(): CDangerObject
  best_enemy(): CGameObject
  best_item(): CGameObject
  motivation_action_manager(): CScriptActionPlanner
  action_count(): number
  action_by_index(index: number): CScriptEntityAction
  memory_time(): number
  memory_position(obj: CGameObject): vector
  best_weapon(): CGameObject | null
  patrol(): string | null
  command(action: CScriptEntityAction, high_priority?: boolean): void
  action(): CScriptEntityAction
  accuracy(): number
  kill(by: CGameObject): void
  death_time(): number
  get_bleeding(): number
  fov(): number
  set_fov(fov: number): void
  range(): number
  set_range(range: number): void
  iterate_inventory(iterator: (npc: CGameObject, item: CGameObject) => void, npc: CGameObject): void
  max_health(): number
  set_sight(target: CGameObject): void
  who_hit_name(): string | null
  who_hit_section_name(): string | null
  active_slot(): number
  make_item_active(item: CGameObject): void
  item_in_slot(slot: number): CGameObject | null
  activate_slot(slot: number): void
  active_item(): CGameObject | null
  object_count(): number
  object(section: string): CGameObject | null
  inventory_for_each(iterator: (item: CGameObject, npc: CGameObject) => void): void
  team(): number
  squad(): number
  group(): number
  rank(): number
  character_rank(): number
  set_character_rank(rank: number): void
  character_name(): string | null
  character_icon(): string
  character_community(): string
  set_character_community(comm: string, _0: 0, _1: 0): void
  money(): number
  transfer_money(sum: number, to: CGameObject): void
  give_money(sum: number): void
  drop_item(item: CGameObject): void
  drop_item_and_teleport(item: CGameObject, pos: vector): void
  eat(food: CGameObject): void
  enable_talk(): void
  disable_talk(): void
  is_talking(): boolean
  is_talk_enabled(): boolean
  enable_trade(): void
  disable_trade(): void
  is_trade_enabled(): boolean
  get_inv_weight(): number
  get_inv_max_weight(): number
  get_current_outfit(): CGameObject
  //
  // weapon
  //
  get_ammo_total(): void
  get_ammo_in_magazine(): number
  set_ammo_elapsed(count: number): void
  unload_magazine(keep_ammo: boolean): void
  force_unload_magazine(keep_ammo: boolean): void
  set_ammo_type(type: number): void
  get_ammo_type(): number
  get_ammo_count_for_type(type: number): number
  get_main_weapon_type(): number
  get_weapon_type(): number
  set_main_weapon_type(type: number): void
  set_weapon_type(type: number): void
  has_ammo_type(type: number): boolean
  get_weapon_substate(): number
  set_weight(weight: number): void
  //
  // weapon maganized
  //
  set_queue_size(size: number): void
  //
  // food
  //
  set_remaining_uses(uses: number): void
  get_remaining_uses(): number
  get_max_uses(): number
  //
  // explosives
  //
  explode(level_time: number): void
  //
  // internal sight fields (SightManager)
  //
  readonly m_object: CGameObject | null
  readonly m_vector: vector
  readonly m_sight_type: number
  //
  // --- rest of the vanilla game_object API (auto-derived from CScriptGameObject) ---
  //
  //
  // Monster abilities & special
  //
  burer_set_force_gravi_attack(force: boolean): void
  burer_get_force_gravi_attack(): boolean
  poltergeist_set_actor_ignore(ignore: boolean): void
  poltergeist_get_actor_ignore(): boolean
  force_stand_sleep_animation(index: number): void
  release_stand_sleep_animation(): void
  set_alien_control(val: boolean): void
  fake_death_fall_down(): boolean
  fake_death_stand_up(): void
  berserk(): void
  //
  // Trader & dialog
  //
  run_talk_dialog(pToWho: CGameObject, disable_break: boolean): void
  allow_break_talk_dialog(disable_break: boolean): void
  set_start_dialog(dialog_id: string): void
  get_start_dialog(): void
  restore_default_start_dialog(): void
  show_condition(ini_file: system_ini, section: string): void
  buy_supplies(ini_file: system_ini, section: string): void
  is_trader(): boolean
  set_trader_global_anim(anim: string): void
  set_trader_head_anim(anim: string): void
  set_trader_sound(sound: string, anim: string): void
  external_sound_start(sound: string): void
  external_sound_stop(): void
  //
  // Doors
  //
  register_door_for_npc(): void
  unregister_door_for_npc(): void
  on_door_is_open(): void
  on_door_is_closed(): void
  lock_door_for_npc(): void
  unlock_door_for_npc(): void
  is_door_locked_for_npc(): boolean
  is_door_blocked_by_npc(): boolean
  //
  // Loopholes
  //
  in_loophole_fov(cover_id: string, loophole_id: string, object_position: vector): boolean
  in_current_loophole_fov(object_position: vector): boolean
  in_loophole_range(cover_id: string, loophole_id: string, object_position: vector): boolean
  in_current_loophole_range(object_position: vector): boolean
  //
  // Restrictions & restrictors
  //
  add_restrictions(out: string, in_: string): void
  remove_restrictions(out: string, in_: string): void
  remove_all_restrictions(): void
  in_restrictions(): string
  out_restrictions(): string
  base_in_restrictions(): string
  base_out_restrictions(): string
  set_restrictor_type(typ: number): void
  get_restrictor_type(): number
  is_space_restrictor(): boolean
  //
  // Devices: detector, torch, night vision
  //
  active_detector(): CGameObject | null
  hide_detector(bFast: boolean): void
  force_hide_detector(): void
  show_detector(bFast: boolean): void
  night_vision_allowed(value: boolean): void
  enable_night_vision(value: boolean): void
  night_vision_enabled(): boolean
  enable_torch(value: boolean): void
  torch_enabled(): boolean
  //
  // Info portions
  //
  dont_has_info(info_id: string): boolean
  //
  // Deadbody & inventory owner
  //
  deadbody_closed(status: boolean): void
  deadbody_closed_status(): boolean
  deadbody_can_take(status: boolean): void
  deadbody_can_take_status(): boolean
  //
  // Movement, path & AI planner
  //
  set_invisible(val: boolean): void
  set_body_state(body_state: number): void
  set_movement_type(movement_type: number): void
  set_mental_state(mental_state: number): void
  set_path_type(path_type: number): void
  set_detail_path_type(detail_path_type: number): void
  body_state(): number
  target_body_state(): number
  movement_type(): number
  target_movement_type(): number
  mental_state(): number
  target_mental_state(): number
  path_type(): number
  detail_path_type(): number
  set_patrol_path(path_name: string, patrol_start_type: number, patrol_route_type: number, random: boolean): void
  inactualize_patrol_path(): void
  set_dest_level_vertex_id(level_vertex_id: number): void
  set_dest_game_vertex_id(game_vertex_id: number): void
  set_movement_selection_type(selection_type: number /** ESelectionType */): void
  get_movement_speed(): vector
  vertex_in_direction(level_vertex_id: number, direction: vector, max_distance: number): number
  debug_planner(planner: CScriptActionPlanner): void
  get_smart_cover_description(): string
  find_best_cover(position_to_cover_from: vector): CCoverPoint
  in_smart_cover(): boolean
  get_dest_smart_cover_name(): string
  set_smart_cover_target_idle(): void
  set_smart_cover_target_lookout(): void
  set_smart_cover_target_fire(): void
  set_smart_cover_target_fire_no_lookout(): void
  set_smart_cover_target_default(value: boolean): void
  movement_target_reached(): boolean
  suitable_smart_cover(_object: CGameObject): boolean
  set_previous_point(point_index: number): void
  set_start_point(point_index: number): void
  get_current_point_index(): number
  path_completed(): boolean
  patrol_path_make_inactual(): void
  best_cover(position: vector, enemy_position: vector, radius: number, min_enemy_distance: number, max_enemy_distance: number): CCoverPoint
  safe_cover(position: vector, radius: number, min_distance: number): CCoverPoint
  accessible(position: vector): boolean
  accessible(level_vertex_id: number): boolean
  accessible_nearest(position: vector, result: vector): number
  location_on_path(distance: number, location: vector): number
  sight_params(): CSightParams
  movement_enabled(enable: boolean): void
  movement_enabled(): boolean
  actor_look_at_point(point: vector): void
  actor_stop_look_at_point(): void
  //
  // Vision & memory
  //
  set_visual_memory_enabled(enabled: boolean): void
  see(tpLuaGameObject: CGameObject): boolean
  see(section_name: string): boolean
  force_visibility_state(state: number): void
  get_visibility_state(): number
  set_manual_invisibility(val: boolean): void
  get_current_direction(): vector
  head_orientation(): vector
  enable_memory_object(_object: CGameObject, enable: boolean): void
  memory_visible_objects(): number
  memory_sound_objects(): number
  memory_hit_objects(): number
  not_yet_visible_objects(): number
  visibility_threshold(): number
  make_object_visible_somewhen(_object: CGameObject): void
  bone_visible(bone_name: string, bHud?: boolean): boolean
  set_bone_visible(bone_name: string, bVisibility: boolean, bRecursive?: boolean, bHud?: boolean): void
  //
  // Sound
  //
  remove_sound(internal_type: number): void
  set_sound_mask(sound_mask: number): void
  set_sound_threshold(value: number): void
  restore_sound_threshold(): void
  disable_show_hide_sounds(val: boolean): void
  sound_voice_prefix(): string
  //
  // Animation & HUD
  //
  clear_override_animation(): void
  set_capture_anim(e: CGameObject, e_str: string, position: vector, factor: number): void
  clear_animations(): void
  animation_count(): number
  animation_slot(): number
  play_hud_motion(M: string, bMixIn: boolean, state: number, speed?: number, end?: number): number
  set_color_animator(name: string, bFlicker: boolean, flickerChance: number, flickerDelay: number, framerate: number): void
  reset_color_animator(): void
  is_hud_item(): boolean
  //
  // Inventory, belt & slots
  //
  enable_inv_upgrade(): void
  disable_inv_upgrade(): void
  is_inv_upgrade_enabled(): boolean
  transfer_item(pItem: CGameObject, pForWho: CGameObject): void
  take_item(pItem: CGameObject): void
  iterate_ruck(iterator: (npc: CGameObject, item: CGameObject) => void, npc: CGameObject): void
  iterate_belt(iterator: (npc: CGameObject, item: CGameObject) => void, npc: CGameObject): void
  iterate_inventory_box(iterator: (npc: CGameObject, item: CGameObject) => void, npc: CGameObject): void
  move_to_ruck(pItem: CGameObject): void
  move_to_slot(pItem: CGameObject, slot_id: number): void
  move_to_belt(pItem: CGameObject): void
  is_on_belt(obj: CGameObject): boolean
  item_on_belt(item_id: number): CGameObject | null
  belt_count(): number
  item_allow_trade(pItem: CGameObject): void
  item_deny_trade(pItem: CGameObject): void
  is_inv_box_empty(): boolean
  inv_box_closed(status: boolean, reason: string): boolean
  inv_box_closed_status(): boolean
  inv_box_can_take(status: boolean): boolean
  inv_box_can_take_status(): boolean
  marked_dropped(item: CGameObject): boolean
  //
  // Combat, weapon & enemy
  //
  set_force_anti_aim(force: boolean): void
  get_force_anti_aim(): boolean
  set_enemy(e: CGameObject): void
  skip_transfer_enemy(val: boolean): void
  set_custom_panic_threshold(value: number): void
  set_default_panic_threshold(): void
  register_in_combat(): void
  unregister_in_combat(): void
  is_weapon_going_to_be_strapped(_object: CGameObject): boolean
  weapon_strapped(): boolean
  weapon_unstrapped(): boolean
  restore_weapon(): void
  weapon_is_grenadelauncher(): boolean
  weapon_is_scope(): boolean
  weapon_is_silencer(): boolean
  weapon_grenadelauncher_status(): number
  weapon_scope_status(): number
  weapon_silencer_status(): number
  ammo_get_count(): number
  ammo_set_count(count: number): void
  ammo_box_size(): number
  weapon_addon_attach(item: CGameObject): void
  weapon_addon_detach(item_section: string, b_spawn_item?: boolean): void
  weapon_in_grenade_mode(): boolean
  phantom_set_enemy(a0: CGameObject): void
  is_weapon(): boolean
  is_grenade_launcher(): boolean
  is_weapon_magazined(): boolean
  is_ammo(): boolean
  is_weapon_gl(): boolean
  //
  // Relations, community & info
  //
  relation(who: CGameObject): number
  ignore_monster_threshold(): number
  ignore_monster_threshold(threshold: number): void
  restore_ignore_monster_threshold(): void
  max_ignore_monster_distance(): number
  max_ignore_monster_distance(distance: number): void
  restore_max_ignore_monster_distance(): void
  goodwill(pToWho: CGameObject): number
  set_goodwill(goodwill: number, pWhoToSet: CGameObject): void
  force_set_goodwill(goodwill: number, pWhoToSet: CGameObject): void
  change_goodwill(delta_goodwill: number, pWhoToSet: CGameObject): void
  general_goodwill(pToWho: CGameObject): number
  set_relation(relation: number, pWhoToSet: CGameObject): void
  community_goodwill(community: string): number
  set_community_goodwill(community: string, goodwill: number): void
  sympathy(): number
  set_sympathy(sympathy: number): void
  change_character_rank(a0: number): void
  character_reputation(): number
  set_character_reputation(a0: number): void
  change_character_reputation(a0: number): void
  get_actor_relation_flags(): Flags
  set_actor_relation_flags(flags: Flags): void
  set_character_icon(iconName: string): void
  //
  // Callbacks & scripting control
  //
  script(f: boolean, g: string): void
  get_script(): boolean
  get_script_name(): string
  set_vis_state(value: number): void
  set_collision_off(val: boolean): void
  can_script_capture(): boolean
  set_visual_name(visual: string, bForce?: boolean): void
  set_nonscript_usable(nonscript_usable: boolean): void
  //
  // Attachable items
  //
  enable_attachable_item(value: boolean): void
  attachable_item_enabled(): boolean
  attachable_item_load_attach(section: string): void
  //
  // Anomaly zone
  //
  enable_anomaly(): void
  disable_anomaly(): void
  get_anomaly_power(): number
  set_anomaly_power(p: number): void
  get_anomaly_radius(): number
  set_anomaly_radius(p: number): void
  set_anomaly_position(pos: vector): void
  is_anomaly(): boolean
  //
  // Misc
  //
  cost(): number
  power_critical(): number
  psy_factor(): number
  set_psy_factor(val: number): void
  hit(tLuaHit: hit): void
  reset_action_queue(): void
  object_id(id: number): CGameObject | null
  remove_home(): void
  get_current_outfit_protection(hit_type: number): number
  set_npc_position(pos: vector): void
  get_visual_name(): string
  spawn_ini(): system_ini
  enable_vision(value: boolean): void
  vision_enabled(): boolean
  bone_position(bone_name: string, bHud?: boolean): vector
  bone_name(id: number, bHud: boolean): string
  is_body_turning(): boolean
  stop_talk(): void
  allow_sprint(b: boolean): void
  set_idle_particles(name: string, bIdleLight: boolean): void
  get_artefact_health(): number
  get_artefact_radiation(): number
  get_artefact_satiety(): number
  get_artefact_power(): number
  get_artefact_bleeding(): number
  get_artefact_immunity(hit_type: number): number
  set_artefact_health(value: number): void
  set_artefact_radiation(value: number): void
  set_artefact_satiety(value: number): void
  set_artefact_power(value: number): void
  set_artefact_bleeding(value: number): void
  set_artefact_immunity(hit_type: number, value: number): void
  get_helicopter(): CHelicopter
  get_car(): CCar
  get_hanging_lamp(): CHangingLamp
  get_bone_id(bone_name: string): number
  get_physics_shell(): physics_shell | null
  get_holder_class(): CHolderCustom
  get_current_holder(): CHolderCustom
  set_tip_text(tip_text: string): void
  set_tip_text_default(): void
  active_zone_contact(id: number): boolean
  set_fastcall<T>(functor: (object: T) => boolean, object: T): void
  set_const_force(dir: vector, value: number, time_interval: number): void
  info_add(text: string): void
  info_clear(): void
  jump(position: vector, factor: number): void
  buy_item_condition_factor(factor: number): void
  buy_item_exponent(factor: number): void
  sell_item_exponent(factor: number): void
  is_there_items_to_pickup(): boolean
  mark_item_dropped(item: CGameObject, flag: boolean): void
  critically_wounded(): boolean
  get_campfire(): CZoneCampfire
  get_artefact(): CArtefact
  get_physics_object(): CPhysicObject
  enable_level_changer(b: boolean): void
  is_level_changer_enabled(): boolean
  set_level_changer_invitation(str: string): void
  start_particles(pname: string, bone: string): void
  stop_particles(pname: string, bone: string): void
  attach_vehicle(veh: CGameObject, bForce?: boolean): void
  detach_vehicle(bForce?: boolean): void
  get_attached_vehicle(): CGameObject | null
  reset_bone_protections(imm_sect: string, bone_sect: string): void
  iterate_feel_touch(functor: (id: number) => void): void
  get_luminocity_hemi(): number
  get_luminocity(): number
  set_health_ex(hp: number): void
  force_set_position(pos: vector, enable?: boolean): void
  force_set_rotation(rot: vector, enable?: boolean): void
  set_spatial_type(sptype: number): void
  get_spatial_type(): number
  destroy_object(): void
  install_upgrade(upgrade: string): boolean
  has_upgrade(upgrade: string): boolean
  iterate_installed_upgrades(functor: (upgrade_section: string, owner: CGameObject) => boolean): void
  switch_state(state: number): void
  get_state(): number
  cast_Car(): CCar
  cast_Heli(): CHelicopter
  cast_CustomZone(): CCustomZone
  cast_TorridZone(): CTorridZone
  cast_MosquitoBald(): CMosquitoBald
  cast_ZoneCampfire(): CZoneCampfire
  cast_InventoryItem(): CInventoryItem
  cast_Medkit(): CMedkit
  cast_Antirad(): CAntirad
  cast_FoodItem(): CFoodItem
  is_entity_alive(): boolean
  is_inventory_item(): boolean
  is_inventory_owner(): boolean
  is_actor(): boolean
  is_custom_monster(): boolean
  is_outfit(): boolean
  is_helmet(): boolean
  is_scope(): boolean
  is_silencer(): boolean
  is_stalker(): boolean
  is_monster(): boolean
  is_artefact(): boolean
  is_inventory_box(): boolean
  get_actor_max_weight(): number
  set_actor_max_weight(max_weight: number): void
  get_actor_max_walk_weight(): number
  set_actor_max_walk_weight(max_walk_weight: number): void
  get_additional_max_weight(): number
  set_additional_max_weight(add_max_weight: number): void
  get_additional_max_walk_weight(): number
  set_additional_max_walk_weight(add_max_walk_weight: number): void
  get_total_weight(): number
  get_actor_jump_speed(): number
  set_actor_jump_speed(jump_speed: number): void
  get_actor_sprint_koef(): number
  set_actor_sprint_koef(sprint_koef: number): void
  get_actor_run_coef(): number
  set_actor_run_coef(run_coef: number): void
  get_actor_runback_coef(): number
  set_actor_runback_coef(run_back_coef: number): void
  set_can_be_harmed(state: boolean): void
  can_be_harmed(): boolean
  // Engine bindings previously missing — verified against script_game_object.h / *.cpp
  active_sound_count(): number
  add_animation(animation: string, hand_usage: boolean, use_movement_controller: boolean): void
  add_animation(animation: string, hand_usage: boolean, position: vector, rotation: vector, local_animation: boolean): void
  add_sound(prefix: string, max_count: number, type: number, priority: number, mask: number, internal_type: number, bone_name?: string, head_anim?: string): number
  add_combat_sound(prefix: string, max_count: number, type: number, priority: number, mask: number, internal_type: number, bone_name: string): number
  aim_bone_id(): string
  aim_bone_id(value: string): void
  aim_time(weapon: CGameObject): number
  aim_time(weapon: CGameObject, time: number): void
  apply_loophole_direction_distance(): number
  apply_loophole_direction_distance(value: number): void
  buy_condition(ini_file: system_ini, section: string): void
  buy_condition(friend_factor: number, enemy_factor: number): void
  can_select_weapon(): boolean
  can_select_weapon(status: boolean): void
  can_throw_grenades(): boolean
  change_team(team: number, squad: number, group: number): void
  death_sound_enabled(): boolean
  death_sound_enabled(value: boolean): void
  extrapolate_length(): number
  extrapolate_length(extrapolate_length: number): void
  get_dest_smart_cover(): CCoverPoint
  give_talk_message(caption: string, icon: string, text: string): void
  group_throw_time_interval(): number
  group_throw_time_interval(throw_time_interval: number): void
  idle_max_time(): number
  idle_min_time(): number
  inside(position: vector, epsilon: number): boolean
  invulnerable(): boolean
  invulnerable(invulnerable: boolean): void
  lookout_max_time(): number
  lookout_min_time(): number
  play_cycle(anim: string): void
  play_cycle(anim: string, mix_in: boolean): void
  sell_condition(ini_file: system_ini, section: string): void
  sell_condition(friend_factor: number, enemy_factor: number): void
  set_callback(type: number): void
  set_callback(type: number, functor: EngineCallback | null, object?: any): void
  set_desired_direction(): void
  set_desired_position(): void
  set_dest_loophole(): void
  set_dest_loophole(loophole_id: string): void
  set_dest_smart_cover(): void
  set_dest_smart_cover(cover_id: string): void
  set_enemy_callback(): void
  set_enemy_callback(functor: (this: void, ...args: any[]) => boolean): void
  set_enemy_callback(functor: (this: void, ...args: any[]) => boolean, object: any): void
  set_home(name: string, r_min: number, r_max: number, aggressive: boolean, r_mid: number): void
  set_home(lv_id: number, r_min: number, r_max: number, aggressive: boolean, r_mid: number): void
  set_item(object_action: number): void
  set_item(object_action: number, game_object: CGameObject): void
  set_item(object_action: number, game_object: CGameObject, queue_size: number): void
  set_item(object_action: number, game_object: CGameObject, queue_size: number, queue_interval: number): void
  set_override_animation(anim_name: string): void
  set_patrol_extrapolate_callback(): void
  set_patrol_extrapolate_callback(functor: EngineCallback | null, object?: any): void
  set_smart_cover_target(): void
  set_smart_cover_target(position: vector): void
  set_smart_cover_target(object: CGameObject): void
  set_smart_cover_target_selector(): void
  set_smart_cover_target_selector(functor: (this: void, ...args: any[]) => void): void
  set_smart_cover_target_selector(functor: (this: void, ...args: any[]) => void, object: any): void
  sniper_fire_mode(): boolean
  sniper_fire_mode(value: boolean): void
  sniper_update_rate(): boolean
  sniper_update_rate(value: boolean): void
  sound_prefix(): string
  sound_prefix(sound_prefix: string): void
  special_danger_move(): boolean
  special_danger_move(value: boolean): void
  take_items_enabled(): boolean
  take_items_enabled(value: boolean): void
  use_smart_covers_only(): boolean
  use_smart_covers_only(value: boolean): void
  wounded(): boolean
  wounded(value: boolean): void
}
//
// casts
//

//
// Engine object types returned by game_object getters/casts. Declared as stubs
// (correct luabind/engine name) to keep return types precise; members to be
// filled in from the engine as needed. Not registered as script game objects,
// so they carry no CGameObject methods.
//

/** Sight parameters (luabind class `CSightParams`). */
declare class CSightParams {
  readonly m_object: CGameObject
  readonly m_vector: vector
  /** One of the `CSightParams.eSightType*` constants. */
  readonly m_sight_type: number
}
/** Sight-type constants of the `CSightParams` luabind class (`SightManager::ESightType`). */
declare const CSightParams: {
  readonly eSightTypeCurrentDirection: 0
  readonly eSightTypePathDirection: 1
  readonly eSightTypeDirection: 2
  readonly eSightTypePosition: 3
  readonly eSightTypeObject: 4
  readonly eSightTypeCover: 5
  readonly eSightTypeSearch: 6
  readonly eSightTypeLookOver: 7
  readonly eSightTypeCoverLookOver: 8
  readonly eSightTypeFireObject: 9
  readonly eSightTypeFirePosition: 10
  readonly eSightTypeAnimationDirection: 11
  readonly eSightTypeDummy: -1
}
/**
 * Engine base-client object (luabind class `CGameObject`, C++ `CGameObject` from
 * `base_client_classes`). This is a DIFFERENT class from the `game_object`
 * (`CScriptGameObject`) modelled by {@link CGameObject}: it is the common engine base of
 * non-scriptable objects such as {@link CCar}, {@link CHelicopter}, {@link CPhysicObject}
 * and {@link CZoneCampfire}, which are obtained through the `game_object:get_*()` /
 * `cast_*()` accessors and expose only these low-level members (not the rich `game_object`
 * API). Modelled as an interface so it does not shadow the `CGameObject` value.
 */
interface CGameObjectBase {
  _construct(): CGameObjectBase
  Visual(): IRender_Visual
  net_Export(packet: net_packet): void
  net_Import(packet: net_packet): void
  net_Spawn(se_abstract: CseAbstract): boolean
  use(who_use: CGameObjectBase): boolean
  getVisible(): boolean
  getEnabled(): boolean
}
/** Render visual of an object (luabind class `IRender_Visual`, C++ `IRenderVisual`), returned by {@link CGameObjectBase.Visual}. */
declare class IRender_Visual {
  dcast_PKinematicsAnimated(): IKinematicsAnimated | null
}
/** Animated skeleton visual (luabind class `IKinematicsAnimated`). */
declare class IKinematicsAnimated {
  PlayCycle(anim: string): void
}
/** Animation blend handle (luabind class `CBlend`). */
declare class CBlend {}
/** Last monster hit info (luabind class `MonsterHitInfo`, C++ `CScriptMonsterHitInfo`). */
declare class CScriptMonsterHitInfo {
  who: CGameObject | null
  direction: vector
  time: number
}
/** A perceived danger (luabind class `danger_object`, C++ `CDangerObject`). */
declare class CDangerObject {
  position(): vector
  time(): number
  /** One of the `CDangerObject.danger_type` constants. */
  type(): number
  /** One of the `CDangerObject.danger_perceive_type` constants. */
  perceive_type(): number
  object(): CGameObject | null
  dependent_object(): CGameObject | null
}
/** Enum constants of the `danger_object` luabind class (`danger_type`/`danger_perceive_type`). */
declare const CDangerObject: {
  readonly bullet_ricochet: 0
  readonly attack_sound: 1
  readonly entity_attacked: 2
  readonly entity_death: 3
  readonly entity_corpse: 4
  readonly attacked: 5
  readonly grenade: 6
  readonly enemy_sound: 7
  readonly visual: 0
  readonly sound: 1
  readonly hit: 2
}
// --- GOAP planner core (xrGame graph-engine script bindings) ---

/**
 * A single world-state property: a `(condition_id, value)` pair
 * (luabind class `world_property`, C++ `CScriptWorldProperty`).
 * @customConstructor world_property
 */
declare class CScriptWorldProperty {
  constructor(condition: number, value: boolean)
  condition(): number
  value(): boolean
}
/**
 * A set of {@link CScriptWorldProperty} entries (luabind class `world_state`,
 * C++ `CScriptWorldState`).
 * @customConstructor world_state
 */
declare class CScriptWorldState {
  constructor()
  constructor(other: CScriptWorldState)
  add_property(property: CScriptWorldProperty): void
  remove_property(condition: number): void
  clear(): void
  includes(state: CScriptWorldState): boolean
  property(condition: number): CScriptWorldProperty
}
/**
 * Solver property storage mapping condition ids to boolean values
 * (luabind class `property_storage`, C++ `CPropertyStorage`).
 * @customConstructor property_storage
 */
declare class CPropertyStorage {
  constructor()
  set_property(condition: number, value: boolean): void
  property(condition: number): boolean
}
/**
 * Property evaluator, subclassable from Lua/TS (luabind class `property_evaluator`,
 * C++ `CScriptPropertyEvaluator`).
 * @customConstructor property_evaluator
 */
declare class CScriptPropertyEvaluator {
  readonly object: CGameObject
  readonly storage: CPropertyStorage
  constructor()
  constructor(object: CGameObject)
  constructor(object: CGameObject, name: string)
  setup(object: CGameObject, storage: CPropertyStorage): void
  evaluate(): boolean
}
/**
 * Constant-value property evaluator (luabind class `property_evaluator_const`).
 * @customConstructor property_evaluator_const
 */
declare class CPropertyEvaluatorConst extends CScriptPropertyEvaluator {
  constructor(value: boolean)
}
/**
 * GOAP action, subclassable from Lua/TS (luabind class `action_base`,
 * C++ `CScriptActionBase`).
 * @customConstructor action_base
 */
declare class CScriptActionBase {
  readonly object: CGameObject
  readonly storage: CPropertyStorage
  constructor()
  constructor(object: CGameObject)
  constructor(object: CGameObject, name: string)
  add_precondition(condition: CScriptWorldProperty): void
  add_effect(effect: CScriptWorldProperty): void
  remove_precondition(condition: number): void
  remove_effect(condition: number): void
  setup(object: CGameObject, storage: CPropertyStorage): void
  initialize(): void
  execute(): void
  finalize(): void
  set_weight(weight: number): void
  show(caption: string): void
}
/**
 * GOAP action planner: holds actions and evaluators and drives the solver
 * (luabind class `action_planner`, C++ `CScriptActionPlanner`).
 * @customConstructor action_planner
 */
declare class CScriptActionPlanner {
  readonly object: CGameObject
  readonly storage: CPropertyStorage
  constructor()
  /** Whether the current plan is still actual. */
  actual(): boolean
  setup(object: CGameObject): void
  update(): void
  add_action(action_id: number, action: CScriptActionBase): void
  remove_action(action_id: number): void
  action(action_id: number): CScriptActionBase
  add_evaluator(evaluator_id: number, evaluator: CScriptPropertyEvaluator): void
  remove_evaluator(evaluator_id: number): void
  evaluator(evaluator_id: number): CScriptPropertyEvaluator
  current_action_id(): number
  current_action(): CScriptActionBase
  initialized(): boolean
  set_goal_world_state(world_state: CScriptWorldState): void
  clear(): void
  show(caption: string): void
}
/**
 * An action that is itself a planner (luabind class `planner_action`,
 * C++ `CScriptActionPlannerAction`; engine bases `action_planner` + `action_base`).
 * @customConstructor planner_action
 */
interface CScriptActionPlannerAction extends CScriptActionPlanner, CScriptActionBase {}
declare class CScriptActionPlannerAction {
  constructor()
  constructor(object: CGameObject)
  constructor(object: CGameObject, name: string)
  weight(): number
}

/**
 * Composite monster/entity action (luabind class `entity_action`, C++ `CScriptEntityAction`).
 * Its `set_action` accepts the monster action objects (`move`/`look`/`anim`/`sound`/`particle`/
 * `object`/`cond`/`act`), which are not yet modelled; typed loosely for now.
 */
declare class CScriptEntityAction {
  constructor()
  constructor(other: CScriptEntityAction)
  set_action(action: object): void
  move(): boolean
  look(): boolean
  anim(): boolean
  sound(): boolean
  particle(): boolean
  object(): boolean
  time(): boolean
  all(): boolean
  completed(): boolean
}
/** A cover point (luabind class `cover_point`, C++ `CCoverPoint`). */
declare class CCoverPoint {
  position(): vector
  level_vertex_id(): number
  is_smart_cover(): boolean
}
/** Vehicle/holder interface (luabind class `holder`, C++ `CHolderCustom`). */
declare class CHolderCustom {
  /** Whether the holder currently has an owner. */
  engaged(): boolean
  Action(id: number, flags: number): void
  SetParam(id: number, value: vector): void
  SetEnterLocked(locked: boolean): void
  SetExitLocked(locked: boolean): void
}
declare class CInventoryItem {}
