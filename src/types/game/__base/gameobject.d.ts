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
