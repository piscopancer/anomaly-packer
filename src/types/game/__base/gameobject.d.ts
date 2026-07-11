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
  get_task_state(task_id: string): TODO // number
  set_task_state(state: TODO /** number */, task_id: string): void
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
  get_sound_info(): TODO
  get_monster_hit_info(): TODO
  best_danger(): TODO
  best_enemy(): CGameObject
  best_item(): CGameObject
  motivation_action_manager(): TODO // CScriptActionPlanner
  action_count(): number
  action_by_index(index: number): TODO
  memory_time(): number
  memory_position(obj: CGameObject): vector
  best_weapon(): CGameObject | null
  patrol(): string | null
  command(action: TODO, high_priority: boolean): void
  action(): TODO
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
  get_current_outfit(): TODO
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
  show_condition(ini_file: TODO, section: string): void
  show_condition(ini_file: TODO, section: string): TODO
  buy_supplies(ini_file: TODO, section: string): void
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
  set_movement_selection_type(selection_type: TODO): void
  get_movement_speed(): vector
  vertex_in_direction(level_vertex_id: number, direction: vector, max_distance: number): number
  debug_planner(planner: TODO): TODO
  get_smart_cover_description(): string
  find_best_cover(position_to_cover_from: vector): TODO
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
  best_cover(position: vector, enemy_position: vector, radius: number, min_enemy_distance: number, max_enemy_distance: number): TODO
  safe_cover(position: vector, radius: number, min_distance: number): TODO
  accessible(position: vector): boolean
  accessible(level_vertex_id: number): boolean
  accessible_nearest(position: vector, result: vector): number
  location_on_path(distance: number, location: vector): number
  sight_params(): TODO
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
  iterate_ruck(functor: number, _object: number): void
  iterate_belt(functor: number, _object: number): void
  iterate_inventory_box(functor: number, _object: number): void
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
  get_actor_relation_flags(): TODO
  set_actor_relation_flags(a0: TODO): void
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
  set_visual_name(visual: string, bForce: boolean): void
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
  spawn_ini(): TODO
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
  get_helicopter(): TODO
  get_car(): TODO
  get_hanging_lamp(): TODO
  get_bone_id(bone_name: string): number
  get_physics_shell(): TODO
  get_holder_class(): TODO
  get_current_holder(): TODO
  set_tip_text(tip_text: string): void
  set_tip_text_default(): void
  active_zone_contact(id: number): boolean
  set_fastcall(functor: number, _object: number): void
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
  get_campfire(): TODO
  get_artefact(): TODO
  get_physics_object(): TODO
  enable_level_changer(b: boolean): void
  is_level_changer_enabled(): boolean
  set_level_changer_invitation(str: string): void
  start_particles(pname: string, bone: string): void
  stop_particles(pname: string, bone: string): void
  attach_vehicle(veh: CGameObject, bForce?: boolean): void
  detach_vehicle(bForce?: boolean): void
  get_attached_vehicle(): CGameObject | null
  reset_bone_protections(imm_sect: string, bone_sect: string): void
  iterate_feel_touch(functor: number): void
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
  iterate_installed_upgrades(functor: number): void
  switch_state(state: number): void
  get_state(): number
  cast_Car(): TODO
  cast_Heli(): TODO
  cast_CustomZone(): TODO
  cast_TorridZone(): TODO
  cast_MosquitoBald(): TODO
  cast_ZoneCampfire(): TODO
  cast_InventoryItem(): TODO
  cast_Medkit(): TODO
  cast_Antirad(): TODO
  cast_FoodItem(): TODO
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
}
//
// casts
//
declare class CInventoryOwner extends CGameObject {
  constructor()
  IconName(): string
  get_money(): number
  EnableTalk(): void
  DisableTalk(): void
  IsTalkEnabled(): boolean
  EnableTrade(): void
  DisableTrade(): void
  IsTradeEnabled(): boolean
  EnableInvUpgrade(): void
  DisableInvUpgrade(): void
  IsInvUpgradeEnabled(): boolean
  GetTalkPartner(): CInventoryOwner
  /** @returns talk was offered */
  OfferTalk(talk_partner: CInventoryOwner): boolean
  StartTalk(talk_partner: CInventoryOwner, start_trade?: boolean): void
  StopTalk(): void
  IsTalking(): boolean
  deadbody_can_take(can: boolean): void
  deadbody_can_take_status(): boolean
  deadbody_closed(closed: boolean): void
  deadbody_closed_status(): boolean
}
declare class CInventoryBox extends CGameObject {
  constructor()
  can_take(): boolean
  set_can_take(can: boolean): void
  set_closed(closed: boolean, reason: string): void
}
declare class CCustomOutfit extends CGameObject {
  constructor()
  m_fPowerLoss: number
  m_fHealthRestoreSpeed: number
  m_fRadiationRestoreSpeed: number
  m_fSatietyRestoreSpeed: number
  m_fPowerRestoreSpeed: number
  m_fBleedingRestoreSpeed: number
  readonly bIsHelmetAvaliable: boolean
  readonly bIsBackpackAvaliable: boolean
  BonePassBullet(bone_id: number): boolean
  get_HitFracActor(): number
  get_artefact_count(): number
  GetDefHitTypeProtection(outfit: CCustomOutfit, hit_type: number): number
  GetHitTypeProtection(outfit: CCustomOutfit, hit_type: number, element: string): number
  GetBoneArmor(element: number): number
}
declare class CHelmet extends CGameObject {
  constructor()
  m_fPowerLoss: number
  m_fHealthRestoreSpeed: number
  m_fRadiationRestoreSpeed: number
  m_fSatietyRestoreSpeed: number
  m_fPowerRestoreSpeed: number
  m_fBleedingRestoreSpeed: number
  get_HitFracActor(): number
  GetDefHitTypeProtection(helmet: CHelmet, hit_type: number): number
  GetHitTypeProtection(helmet: CHelmet, hit_type: number, element: string): number
  GetBoneArmor(element: number): number
}
declare class CArtefact extends CGameObject {
  constructor()
  m_bCanSpawnZone: boolean
  m_fHealthRestoreSpeed: number
  m_fRadiationRestoreSpeed: number
  m_fSatietyRestoreSpeed: number
  m_fPowerRestoreSpeed: number
  m_fBleedingRestoreSpeed: number
  ActivateArtefact(): void
  CanBeActivated(): boolean
  AdditionalInventoryWeight(): number
  FollowByPath(path: string, start_index: number, magic_force: vector): void
  SwitchVisibility(visible: boolean): void
  GetAfRank(): number
}
declare class CWeaponAmmo extends CGameObject {
  constructor()
  m_boxSize: number
  m_boxCurr: number
  m_tracer: boolean
  m_4to1_tracer: boolean
  Weight(): number
  Cost(): number
}
declare class CWeapon extends CGameObject {
  constructor()
  // EWeaponStates
  readonly eFire: 5
  readonly eFire2: 6
  readonly eReload: 7
  readonly eMisfire: 8
  readonly eSwitch: 9
  readonly eSwitchMode: 10
  // EWeaponSubStates
  readonly eSubstateReloadBegin: 0
  readonly eSubstateReloadInProcess: 1
  readonly eSubstateReloadEnd: 2
  can_kill(): boolean
  IsGrenadeLauncherAttached(): boolean
  GrenadeLauncherAttachable(): boolean
  GetGrenadeLauncherName(): string
  IsScopeAttached(): boolean
  ScopeAttachable(): boolean
  GetScopeName(): string
  IsSilencerAttached(): boolean
  SilencerAttachable(): boolean
  GetSilencerName(): string
  IsZoomEnabled(): boolean
  IsZoomed(): boolean
  GetZoomFactor(): number
  SetZoomFactor(factor: number): void
  IsSingleHanded(): boolean
  GetBaseDispersion(cartridge_k: number): number
  GetFireDispersion(): number
  GetMisfireStartCondition(): number
  GetMisfireEndCondition(): number
  GetAmmoElapsed(): number
  GetAmmoMagSize(): number
  GetSuitableAmmoTotal(use_item_to_spawn?: boolean): number
  SetAmmoElapsed(count: number): void
  SwitchAmmoType(flags: number): boolean
  GetMagazineWeight(): number
  GetAmmoCount_forType(type: string): number
  set_ef_main_weapon_type(type: number): void
  set_ef_weapon_type(type: number): void
  SetAmmoType(type: number): void
  GetAmmoType(): number
  AmmoTypeForEach(functor: () => void): void
  RPM(): number
  ModeRPM(): number
  GetZoomType(): number
  Get_PDM_Base(): number
  Get_Silencer_PDM_Base(): number
  Get_Scope_PDM_Base(): number
  Get_Launcher_PDM_Base(): number
  Get_PDM_BuckShot(): number
  Get_PDM_Vel_F(): number
  Get_Silencer_PDM_Vel(): number
  Get_Scope_PDM_Vel(): number
  Get_Launcher_PDM_Vel(): number
  Get_PDM_Accel_F(): number
  Get_Silencer_PDM_Accel(): number
  Get_Scope_PDM_Accel(): number
  Get_Launcher_PDM_Accel(): number
  Get_PDM_Crouch(): number
  Get_PDM_Crouch_NA(): number
  GetCrosshairInertion(): number
  Get_Silencer_CrosshairInertion(): number
  Get_Scope_CrosshairInertion(): number
  Get_Launcher_CrosshairInertion(): number
  GetFirstBulletDisp(): number
  GetHitPower(): number
  GetHitPowerCritical(): number
  GetHitImpulse(): number
  GetFireDistance(): number
  GetFireMode(): number
  GetInertionAimFactor(): number
  Cost(): number
  Weight(): number
  IsMisfire(): boolean
  SetMisfire(value: boolean): void
  IsPending(): boolean
  SetPending(): boolean
}
declare class CWeaponMagazined extends CWeapon {
  constructor()
  SetFireMode(mode: number): void
}
declare class CWeaponMagazinedWGrenade extends CWeaponMagazined {
  constructor()
  GetGrenadeLauncherMode(): boolean
  SetGrenadeLauncherMode(mode: boolean): void
  SetAmmoElapsed2(count: number): void
  GetAmmoElapsed2(): number
  GetAmmoMagSize2(): number
  SetAmmoType2(type: number): void
  GetAmmoType2(): number
  AmmoTypeForEach2(functor: () => void): void
}
declare class CEatableItem extends CGameObject {
  constructor()
  Empty(): boolean
  CanDelete(): boolean
  GetMaxUses(): number
  GetRemainingUses(): number
  SetRemainingUses(uses: number): void
  m_bRemoveAfterUse: boolean
  m_fWeightFull: number
  m_fWeightEmpty: number
  Weight(): number
  Cost(): number
}
declare class CBottleItem extends CGameObject {
  constructor()
  BreakToPieces(): void
}
