// WIP

// This gigantic declaration file includes types from the _unpacked lua modules and xray-monolith repo luabind definitions.

type TODO = any
type TODO_TABLE = Record<string, any>
type Suggest<S extends string> = S | (string & {})

//#region classes

//#region classes / from xray-monolith

declare class clsid {
  static readonly art_bast_artefact = 0
  static readonly art_black_drops = 1
  static readonly art_gravi_black = 2
  static readonly art_cta = 3
  static readonly art_dummy = 4
  static readonly art_electric_ball = 5
  static readonly art_faded_ball = 6
  static readonly art_galantine = 7
  static readonly art_gravi = 8
  static readonly art_mercury_ball = 9
  static readonly art_needles = 10
  static readonly art_rusty_hair = 11
  static readonly art_thorn = 12
  static readonly art_zuda = 13
  static readonly bloodsucker = 14
  static readonly boar = 15
  static readonly burer = 16
  static readonly cat = 17
  static readonly controller = 18
  static readonly crow = 19
  static readonly dog_black = 20
  static readonly psy_dog_phantom = 21
  static readonly psy_dog = 22
  static readonly dog_red = 23
  static readonly flesh = 24
  static readonly flesh_group = 25
  static readonly fracture = 26
  static readonly pseudo_gigant = 27
  static readonly graph_point = 28
  static readonly chimera = 29
  static readonly phantom = 30
  static readonly poltergeist = 31
  static readonly rat = 32
  static readonly snork = 33
  static readonly stalker = 34
  static readonly script_stalker = 35
  static readonly trader = 36
  static readonly script_trader = 37
  static readonly tushkano = 38
  static readonly zombie = 39
  static readonly wpn_ammo = 40
  static readonly wpn_ammo_s = 41
  static readonly artefact = 42
  static readonly wpn_ammo_m209 = 43
  static readonly wpn_ammo_og7b = 44
  static readonly wpn_ammo_vog25 = 45
  static readonly game_cl_artefact_hunt = 46
  static readonly game_cl_capture_the_artefact = 47
  static readonly game_cl_deathmatch = 48
  static readonly game_cl_single = 49
  static readonly game_cl_team_deathmatch = 50
  static readonly helicopter = 51
  static readonly script_heli = 52
  static readonly car = 53
  static readonly detector_advanced_s = 54
  static readonly detector_elite_s = 55
  static readonly detector_scientific_s = 56
  static readonly detector_simple_s = 57
  static readonly device_detector_advanced = 58
  static readonly device_custom = 59
  static readonly device_dosimeter = 60
  static readonly device_detector_elite = 61
  static readonly device_flashlight = 62
  static readonly device_flare = 63
  static readonly device_pda = 64
  static readonly device_detector_scientific = 65
  static readonly device_detector_simple = 66
  static readonly device_torch = 67
  static readonly equ_exo = 68
  static readonly equ_military = 69
  static readonly equ_scientific = 70
  static readonly equ_stalker = 71
  static readonly equ_backpack = 72
  static readonly helmet = 73
  static readonly equ_helmet_s = 74
  static readonly equ_stalker_s = 75
  static readonly wpn_grenade_f1 = 76
  static readonly wpn_grenade_f1_s = 77
  static readonly wpn_grenade_fake = 78
  static readonly level = 79
  static readonly game = 80
  static readonly wpn_grenade_rgd5 = 81
  static readonly wpn_grenade_rgd5_s = 82
  static readonly wpn_grenade_rpg7 = 83
  static readonly hud_manager = 84
  static readonly obj_antirad = 85
  static readonly obj_attachable = 86
  static readonly obj_bandage = 87
  static readonly obj_bolt = 88
  static readonly obj_bottle = 89
  static readonly obj_document = 90
  static readonly obj_explosive = 91
  static readonly obj_food = 92
  static readonly obj_medkit = 93
  static readonly level_changer = 94
  static readonly level_changer_s = 95
  static readonly main_menu = 96
  static readonly mp_players_bag = 97
  static readonly online_offline_group = 98
  static readonly online_offline_group_s = 99
  static readonly actor = 100
  static readonly obj_breakable = 101
  static readonly obj_climable = 102
  static readonly destrphys_s = 103
  static readonly hanging_lamp = 104
  static readonly obj_holder_ent = 105
  static readonly inventory_box = 106
  static readonly obj_physic = 107
  static readonly script_phys = 108
  static readonly projector = 109
  static readonly obj_phys_destroyable = 110
  static readonly obj_phskeleton = 111
  static readonly script_zone = 112
  static readonly artefact_s = 113
  static readonly car_s = 114
  static readonly script_object = 115
  static readonly smart_cover = 116
  static readonly smart_terrain = 117
  static readonly smart_zone = 118
  static readonly smartcover_s = 119
  static readonly bloodsucker_s = 120
  static readonly boar_s = 121
  static readonly burer_s = 122
  static readonly cat_s = 123
  static readonly chimera_s = 124
  static readonly controller_s = 125
  static readonly psy_dog_phantom_s = 126
  static readonly psy_dog_s = 127
  static readonly dog_s = 128
  static readonly flesh_s = 129
  static readonly gigant_s = 130
  static readonly fracture_s = 131
  static readonly poltergeist_s = 132
  static readonly pseudodog_s = 133
  static readonly rat_s = 134
  static readonly snork_s = 135
  static readonly tushkano_s = 136
  static readonly zombie_s = 137
  static readonly hlamp_s = 138
  static readonly space_restrictor = 139
  static readonly script_restr = 140
  static readonly spectator = 141
  static readonly game_sv_artefact_hunt = 142
  static readonly game_sv_capture_the_artefact = 143
  static readonly game_sv_deathmatch = 144
  static readonly game_sv_single = 145
  static readonly game_sv_team_deathmatch = 146
  static readonly script_actor = 147
  static readonly obj_explosive_s = 148
  static readonly obj_food_s = 149
  static readonly inventory_box_s = 150
  static readonly wpn_ammo_m209_s = 151
  static readonly wpn_ammo_og7b_s = 152
  static readonly obj_pda_s = 153
  static readonly wpn_ammo_vog25_s = 154
  static readonly device_torch_s = 155
  static readonly game_ui_artefact_hunt = 156
  static readonly game_ui_capture_the_artefact = 157
  static readonly game_ui_deathmatch = 158
  static readonly game_ui_single = 159
  static readonly game_ui_team_deathmatch = 160
  static readonly wpn_ak74_s = 161
  static readonly wpn_auto_shotgun_s = 162
  static readonly wpn_binocular_s = 163
  static readonly wpn_bm16_s = 164
  static readonly wpn_grenade_launcher_s = 165
  static readonly wpn_groza_s = 166
  static readonly wpn_hpsa_s = 167
  static readonly wpn_knife_s = 168
  static readonly wpn_lr300_s = 169
  static readonly wpn_pm_s = 170
  static readonly wpn_rg6_s = 171
  static readonly wpn_rpg7_s = 172
  static readonly wpn_scope_s = 173
  static readonly wpn_shotgun_s = 174
  static readonly wpn_silencer_s = 175
  static readonly wpn_svd_s = 176
  static readonly wpn_svu_s = 177
  static readonly wpn_usp45_s = 178
  static readonly wpn_val_s = 179
  static readonly wpn_vintorez_s = 180
  static readonly wpn_walther_s = 181
  static readonly wpn_ak74 = 182
  static readonly wpn_binocular = 183
  static readonly wpn_bm16 = 184
  static readonly wpn_fn2000 = 185
  static readonly wpn_fort = 186
  static readonly wpn_grenade_launcher = 187
  static readonly wpn_groza = 188
  static readonly wpn_hpsa = 189
  static readonly wpn_knife = 190
  static readonly wpn_lr300 = 191
  static readonly wpn_pm = 192
  static readonly wpn_rg6 = 193
  static readonly wpn_rpg7 = 194
  static readonly wpn_scope = 195
  static readonly wpn_shotgun = 196
  static readonly wpn_silencer = 197
  static readonly wpn_stat_mgun = 198
  static readonly wpn_svd = 199
  static readonly wpn_svu = 200
  static readonly wpn_usp45 = 201
  static readonly wpn_val = 202
  static readonly wpn_vintorez = 203
  static readonly wpn_walther = 204
  static readonly wpn_wmagaz = 205
  static readonly wpn_wmaggl = 206
  static readonly zone_ameba_s = 207
  static readonly zone_bfuzz_s = 208
  static readonly zone_galant_s = 209
  static readonly zone_mbald_s = 210
  static readonly zone_mincer_s = 211
  static readonly zone_nograv_s = 212
  static readonly zone_radio_s = 213
  static readonly zone_torrid_s = 214
  static readonly zone_acid_fog = 215
  static readonly ameba_zone = 216
  static readonly zone_bfuzz = 217
  static readonly zone_campfire = 218
  static readonly zone_dead = 219
  static readonly zone_galantine = 220
  static readonly zone_mosquito_bald = 221
  static readonly zone_mincer = 222
  static readonly nogravity_zone = 223
  static readonly zone_radioactive = 224
  static readonly zone_rusty_hair = 225
  static readonly team_base_zone = 226
  static readonly torrid_zone = 227
  static readonly zone = 228
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
  /** Id of object to which this object belongs. Used for items in inventories and boxes. @returns -1 (if no parent) */
  parent(): number | null
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
  give_game_news(title: string, message: string, icon_ath: string, delay_ms: number, duration: number): void
  switch_to_trade(): void
  switch_to_talk(): void
  switch_to_upgrade(): void
  reload_weapon(): void
  hide_weapong(): void
  disable_hit_marks(_0: boolean): void
  get_task_state(task_id: string): TODO // number
  set_task_state(state: TODO /** number */, task_id: string): void
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
  active_item(): CGameObject
  object_count(): number
  object(section_or_index: string | number): CGameObject | null
  object_by_id(id: number): CGameObject | null
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

declare class NetPacket {}
declare class IReader {}
declare class CScriptSoundInfo {}
declare class object_binder {
  constructor(obj: CGameObject)
  readonly object: CGameObject
  reinit(): void
  reload(section: string): void
  net_spawn(se_obj: cse_alife_object): boolean
  net_destroy(): void
  net_import(net_packet: NetPacket): void
  net_export(net_packet: NetPacket): void
  update(delta_time: number): void
  save(output_packet: NetPacket): void
  load(input_packet: IReader): void
  net_save_relevant(): boolean
  net_Relcase(obj: CGameObject): void
}
/** @customConstructor sound_object */
declare class sound_object {
  constructor(sound: string, sound_type?: TODO)
  readonly looped: 0
  readonly s2d: 1
  readonly s3d: 2
  frequency: number
  min_distance: number
  max_distance: number
  volume: number
  position: vector
  get_position(): vector
  set_position(pos: vector): void
  play(source: CGameObject, delay?: number, flags?: number): void
  /** @param pos only mono channel sounds like `device` can be played at a position */
  play_at_pos(source: CGameObject, pos: vector, delay?: number, flags?: number): void
  play_no_feedback(source: CGameObject, flags: number, delay: number, pos: vector, vol: number, freq: number): void
  stop(): void
  stop_deffered(): void
  playing(): boolean
  length(): number
  attach_tail(sound: string): void
}
declare class CWound {
  TypeSize(hit_type: number): number
  BloodSize(): number
  AddHit(power: number, type: number): void
  Incarnation(percent: number, min_wound_size: number): void
  TotalSize(): number
  SetBoneNum(num: number): void
  GetBoneNum(): number
  GetParticleBoneNum(): number
  SetParticleBoneNum(num: number): void
  SetDestroy(destroy: boolean): void
  GetDestroy(): boolean
}
declare class CEntityCondition {
  readonly eBoostHpRestore: 0
  readonly eBoostPowerRestore: 1
  readonly eBoostRadiationRestore: 2
  readonly eBoostBleedingRestore: 3
  readonly eBoostMaxWeight: 4
  readonly eBoostRadiationProtection: 5
  readonly eBoostTelepaticProtection: 6
  readonly eBoostChemicalBurnProtection: 7
  readonly eBoostBurnImmunity: 8
  readonly eBoostShockImmunity: 9
  readonly eBoostRadiationImmunity: 10
  readonly eBoostTelepaticImmunity: 11
  readonly eBoostChemicalBurnImmunity: 12
  readonly eBoostExplImmunity: 13
  readonly eBoostStrikeImmunity: 14
  readonly eBoostFireWoundImmunity: 15
  readonly eBoostWoundImmunity: 16
  AddWound(hit_power: number, hit_type: number, element: number): CWound
  ClearWounds(): void
  GetWhoHitLastTimeID(): number
  GetPower(): number
  SetPower(power: number): void
  GetRadiation(): number
  GetPsyHealth(): number
  GetSatiety(): number
  GetEntityMorale(): number
  GetHealthLost(): number
  IsLimping(): boolean
  ChangeSatiety(satiety: number): void
  ChangeHealth(health: number): void
  ChangePower(power: number): void
  ChangeRadiation(rad: number): void
  ChangePsyHealth(psy: number): void
  ChangeAlcohol(alcohol: number): void
  SetMaxPower(power: number): void
  GetMaxPower(): number
  ChangeEntityMorale(morale: number): void
  ChangeBleeding(bleeding: number): void
  BleedingSpeed(): number
}
declare class Flags {
  constructor()
  get(...args: TODO): TODO
  zero(...args: TODO): TODO
  one(...args: TODO): TODO
  invert(...args: TODO): TODO
  invert(...args: TODO): TODO
  invert(...args: TODO): TODO
  assign(...args: TODO): TODO
  assign(...args: TODO): TODO
  or(...args: TODO): TODO
  or(...args: TODO): TODO
  and(...args: TODO): TODO
  and(...args: TODO): TODO
  set(...args: TODO): TODO
  is(...args: TODO): TODO
  is_any(...args: TODO): TODO
  test(...args: TODO): TODO
  equal(...args: TODO): TODO
  equal(...args: TODO): TODO
}
declare class SBooster {
  constructor()
  fBoostTime: number
  fBoostValue: number
  m_type: number
}
declare class CActorCondition {
  readonly eCriticalPowerReached: 1
  readonly eCriticalBleedingSpeed: 4
  readonly eCriticalSatietyReached: 8
  readonly eCriticalRadiationReached: 16
  readonly eWeaponJammedReached: 32
  readonly ePhyHealthMinReached: 64
  readonly eCantWalkWeight: 128
  readonly eCantWalkWeightReached: 256
  m_MaxWalkWeight: number
  m_fJumpPower: number
  m_fStandPower: number
  m_fJumpWeightPower: number
  m_fWalkWeightPower: number
  m_fOverweightWalkK: number
  m_fOverweightJumpK: number
  m_fAccelK: number
  m_fSprintK: number
  m_condition_flags: Flags
  ClearAllBoosters(condition: CActorCondition): void
  ApplyBooster(condition: CActorCondition, booster: SBooster, section: string): boolean
  BoosterForEach(condition: CActorCondition, functor: () => void): void
  WoundForEach(condition: CActorCondition, functor: () => void): void
  V_Satiety(): number
  V_SatietyPower(): number
  V_SatietyHealth(): number
  SatietyCritical(): number
  GetSatiety(): number
  SetPsyBar(psybar: number): void
  GetPsyBar(): number
  BoostMaxWeight(weight: number): void
  BoostHpRestore(restore: number): void
  BoostPowerRestore(restore: number): void
  BoostRadiationRestore(restore: number): void
  BoostBleedingRestore(restore: number): void
  BoostBurnImmunity(restore: number): void
  BoostShockImmunity(restore: number): void
  BoostRadiationImmunity(restore: number): void
  BoostTelepaticImmunity(restore: number): void
  BoostChemicalBurnImmunity(restore: number): void
  BoostExplImmunity(restore: number): void
  BoostStrikeImmunity(restore: number): void
  BoostFireWoundImmunity(restore: number): void
  BoostWoundImmunity(restore: number): void
  BoostRadiationProtection(restore: number): void
  BoostTelepaticProtection(restore: number): void
  BoostChemicalBurnProtection(restore: number): void
  IsLimping(): boolean
  IsCantWalk(): boolean
  IsCantWalkWeight(): boolean
  IsCantSprint(): boolean
}
declare class CActor extends CGameObject {
  constructor()
  conditions: CActorCondition
  inventory_disabled(): boolean
  set_inventory_disabled(disabled: boolean): void
}
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
declare class ray_pick {
  constructor()
  set_position(pos: vector): void
  set_direction(dir: vector): void
  set_range(range: number): void
  set_flags(collide: rq_target[keyof rq_target]): void
  set_ignore_object(obj: CGameObject): void
  query(): boolean
  get_result(): rq_result
  get_object(): CGameObject
  get_distance(): number
  get_element(): number
}
declare class rq_result {
  readonly object: CGameObject
  readonly range: number
  readonly element: number
}
declare class rq_target {
  readonly rqtNone: 0
  readonly rqtObject: 1
  readonly rqtStatic: 2
  readonly rqtShape: 4
  readonly rqtObstacle: 8
  readonly rqtBoth: 3
  readonly rqtDyn: 13
}
/** @customConstructor vector */
declare class vector {
  constructor()
  x: number
  y: number
  z: number
  set(x: number, y: number, z: number): vector
  set(v: vector): vector
  // add(value: number): vector
  add(v: vector): vector
  // sub(value: number): vector
  sub(v: vector): vector
  div(value: number): vector
  div(v: vector): vector
  mul(value: number): vector
  mul(v: vector): vector
  distance_to(to: vector): number
  distance_to_sqr(pos: vector): number
}
declare class hit {
  constructor()
  constructor(hit: hit)
  static readonly burn: 0
  static readonly shock: 1
  static readonly chemical_burn: 2
  static readonly radiation: 3
  static readonly telepatic: 4
  static readonly wound: 5
  static readonly strike: 7
  static readonly fire_wound: 6
  static readonly explosion: 8
  static readonly light_burn: 10
  power: number
  direction: vector
  draftsman: CGameObject
  impulse: number
  type: number
  weapon_id: number
  bone(name: string): void
}
declare class CTime {
  constructor()
  readonly DateToDay: 0
  readonly DateToMonth: 1
  readonly DateToYear: 2
  readonly TimeToHours: 0
  readonly TimeToMinutes: 1
  readonly TimeToSeconds: 2
  readonly TimeToMilisecs: 3
  diffSec(other: CTime): number
  add(other: CTime): void
  sub(other: CTime): void
  setHMS(h: number, m: number, s: number): void
  setHMSms(h: number, m: number, s: number, ms: number): void
  set(year: number, month: number, day: number, h: number, m: number, s: number, ms: number): void
  get(year: number, month: number, day: number, h: number, m: number, s: number, ms: number): void
  dateToString(mode: typeof this.DateToDay | typeof this.DateToMonth | typeof this.DateToYear): string
  timeToString(mode: typeof this.TimeToHours | typeof this.TimeToMinutes | typeof this.TimeToSeconds | typeof this.TimeToMilisecs): string
}

//#endregion

//#endregion

//#region functions

/**
 * Functions can be provided to game events as callbacks. With most game events some params are also returned (see the example below). Full list of game events names can be found in *axr_main.script*. To find game events implementations in _unpacked, search for `SendScriptCallback`
 *
 * @example
 * ```ts
 * function my_on_key_press(this: void, key: number) {
 *   if (key === DIK_keys.DIK_I) {
 *     printf('"I" was just pressed | key: %s', key)
 *   }
 * }
 *
 * function on_game_start(this: void) {
 *   RegisterScriptCallback('on_key_press', my_on_key_press)
 *}
 * ```
 */
declare function RegisterScriptCallback<E extends keyof GameEvents>(this: void, event: E, cb: GameEvents[E]): void
declare function UnregisterScriptCallback<E extends keyof GameEvents>(this: void, event: E, cb: GameEvents[E]): void
declare function SendScriptCallback<E extends keyof GameEvents>(this: void, event: E, ...args: Parameters<GameEvents[E]>): void
/**
 * Delayed action. If provided with a callback that takes params, such must be provided after too.
 *
 * @example kill 100 random NPCs after 5 seconds
 * ```ts
 * function kill_random_npcs(this: void, count: number) {
 *   // ...
 * }
 *
 * CreateTimeEvent(0, 'kill_random_npcs', 5, kill_random_npcs, 100)
 * ```
 * */
declare function CreateTimeEvent<F extends (...args: any) => any>(event_id: number, action_id: string, delay_s: number, action: F, ...args: Parameters<F>): void
/**
 * Adds a console command to the game console. Game must have debug mode enabled
 *
 * @returns registration success
 */
declare function add_console_command(this: void, name: string, func: () => any): boolean
/**
 * Print formatted text to the game console.
 *
 * Prefix with a special symbol to change appearance.
 *
 * - `-` green
 * - `!` red
 * - `~` yellow
 * - `*` gray
 * - `#` cyan
 */
declare function printf(this: void, ...items: any[]): void
declare function strformat(str: string, ...items: any[]): string
declare function exec_console_cmd(cmd: string): void
declare function get_hud(): {
  show_messages(): void
  hide_messages(): void
  HideActorMenu(): void
  HidePdaMenu(): void
  GetCustomStatic(static: Suggest<'gameplay_notification' | 'notify_icon' | 'showcase_notification'>): {
    wnd(): {
      TextControl(): {
        SetTextColor(color: string): void
      }
    }
  }
  AddCustomStatic(static: string, _0: boolean): TODO
} | null
/** @returns Current time in ms */
declare function time_global(this: void): number
declare function clamp(this: void, value: number, min: number, max: number): number
declare function random_choice<A>(this: void, ...args: A[]): A | null
declare function random_number(this: void, min: number, max: number): number
declare function random_float(this: void, min: number, max: number): number
declare function trim(this: void, str: string): string
declare function str_explode(this: void, str: string, separator: string): string
declare function vector_rotate_y(this: void, v: vector, deg: number): vector
declare function vec_to_str(this: void, v: vector): vector
declare function alife(this: void): {
  switch_distance(): number
  switch_distance(distance: number): void
  level_name(level_id: number): string
  level_id(): number
  teleport_object(id: number, game_vertex_id: number, level_vertex_id: number, server_object: cse_abstract): void
  object(id: number): cse_abstract
  create(section: string, pos: vector, level_vertex_id: number, game_vertex_id: number, parent_id?: number): cse_abstract
  create_ammo(section: string): cse_abstract
  register(server_object: cse_abstract): void
  release(server_object: cse_abstract): void
  actor(): cse_alife_creature_actor
}
// declare function Frect(this: void): {
//   set(x: number, y: number, w: number, h: number): any
// }
declare function ChangeLevel(position: vector, level_vertex_id: number, game_vertex_id: number, angle: vector): void
declare function alife_create_item(
  this: void,
  section: string,
  npc: CGameObject,
  table?: Partial<{
    ammo: number
    cond: number
    uses: number
  }>
): void

//#endregion

//#region types

//#region server object

// <==================== alife (server) objects ====================>

/**
 * Inheritance
 *
 * ipure_alife_load_save_object
 * ipure_server_object
 * cpure_server_object
 * cse_abstract
 * cse_alife_object
 * cse_alife_dynamic_object
 */

type cse_abstract = {
  readonly id: number
  readonly parent_id: number
  readonly script_version: number
  position: vector
  angle: vector
  section_name(): string
  name(): string
  clsid(): number
  spawn_ini(): TODO
  STATE_Read(): TODO
  STATE_Write(): TODO
  UPDATE_Read(): TODO
  UPDATE_Write(): TODO
}

type cse_alife_object = cse_abstract & {
  readonly online: boolean
  move_offline(): boolean
  move_offline(value: boolean): void
  visible_for_map(): boolean
  visible_for_map(value: boolean): void
  can_switch_online(value: boolean): void
  can_switch_offline(value: boolean): void
  use_ai_locations(value: boolean): void
  readonly m_level_vertex_id: number
  readonly m_level_game_id: number
  readonly m_story_id: number
}
type cse_alife_dynamic_object = cse_alife_object & {}
type cse_visual = {}
type cse_alife_dynamic_object_visual = cse_alife_dynamic_object & cse_visual & {}
type cse_ph_skeleton = {}
type cse_alife_creature_abstract = {
  health(): number
  alive(): boolean
  team: string
  squad: string
  group: string
  o_torso(): TODO
}
type cse_alife_trader_abstract = {
  community(): string
  profile_name(): string
  set_profile_name(name: string): void
  character_name(): string
  rank(): number
  set_rank(rank: number): void
  reputation(): number
  character_icon(): string
}
type cse_alife_creature_actor = cse_alife_creature_abstract & cse_alife_trader_abstract & cse_ph_skeleton & {}
type cse_alife_schedulable = {}
declare type cse_alife_online_offline_group = cse_alife_dynamic_object &
  cse_alife_schedulable & {
    register_member(id: number): void
    unregister_member(id: number): void
    commander_id(): number
    squad_members(): TODO
    npc_count(): number
    add_location_type(mask: string): void
    clear_location_types(): void
    force_change_position(pos: vector): void
  }

//#endregion

//#endregion

declare type Faction = 'stalker' | 'bandit' | 'killer' | 'dolg' | 'freedom' | 'army' | 'csky' | 'monolith'
declare type Rank = 'novice' | 'trainee' | 'experienced' | 'professional' | 'veteran' | 'expert' | 'master' | 'legend'
declare type Reputation = 'excellent' | 'really_good' | 'very_good' | 'good' | 'neutral' | 'bad' | 'very_bad' | 'really_bad' | 'terrible'
declare type Color =
  | 'default'
  | 'white'
  | 'green'
  | 'yellow'
  | 'red'
  | 'orange'
  | `d_${'orange' | 'red' | 'cyan' | 'red' | 'purple' | 'green' | 'blue'}`
  | 'ui_gray_1'
  | 'ui_gray_2'
  | `pda_${'green' | 'blue' | 'yellow' | 'white'}`
declare type GameEvents = {
  load_state(this: void, m_data: TODO_TABLE): void
  save_state(this: void, m_data: TODO_TABLE): void
  on_before_save_input(this: void): void
  // death(this: void): void
  actor_before_death(this: void): void
  actor_on_before_hit(this: void, shit: hit, bone_id: number, flags: TODO_TABLE): void
  actor_on_footstep(this: void, material: string, power: number, hud_view: boolean, flags: TODO_TABLE): void
  actor_on_update(this: void, binder: object_binder, delta_time: number): void
  actor_on_jump(this: void): void
  actor_on_land(this: void, landing_speed: number): void
  actor_on_first_update(this: void): void
  actor_on_movement_changed(this: void, cmd: TODO): void
  actor_on_feeling_anomaly(this: void, anomaly: TODO, flags: TODO_TABLE): void
  actor_on_item_before_use(this: void, item: CGameObject, flags: TODO_TABLE): void
  actor_on_before_hit_belt(this: void, hit_table: TODO_TABLE, power: number, type: TODO): void
  actor_on_hud_animation_mark(this: void, state: number, mark: string): void
  actor_on_hud_animation_play(
    this: void,
    animation: {
      anm_name: string
      anm_mixin: boolean
      anm_mixin2: boolean
      anm_state: number
      anm_speed: number
      anm_end: number
    },
    obj: CGameObject | null
  ): void
  actor_on_weapon_before_fire(this: void, flags: TODO_TABLE): void
  actor_on_foot_step(this: void): void
  actor_on_weapon_fired(this: void): void
  actor_on_weapon_jammed(this: void): void
  actor_on_weapon_zoom_in(this: void, weapon: CGameObject): void
  actor_on_weapon_zoom_out(this: void): void
  actor_on_weapon_magazine_empty(this: void): void
  actor_on_weapon_lowered(this: void): void
  actor_on_weapon_raised(this: void): void
  npc_on_update(this: void): void
  npc_on_death_callback(this: void): void
  ActorMenu_on_mode_changed(this: void, mode: TODO, last_mode: TODO): void
  on_option_change(this: void): void
  GUI_on_show(this: void, name: string, path: string): void
  on_screen_resolution_changed(this: void): void
  on_key_press(this: void, key: number): void
  on_key_release(this: void, key: number): void
  on_key_hold(this: void, key: number): void
  on_mouse_wheel(this: void, vol: number): void
  on_mouse_move(this: void, x: number, y: number): void
  on_item_belt(this: void, item: CGameObject): void
  on_item_ruck(this: void, item: CGameObject): void
  on_item_slot(this: void, item: CGameObject): void
  select_inventory_item(this: void, item: CGameObject): void
  switch_torch(this: void, on: 0 | 1): void
  drop_item_in_box(this: void, item: CGameObject): void
  map_spot_menu_add_property(this: void, ui: { AddItem: (text: string) => void }, spot_id: string, level: string): void
  map_spot_menu_property_clicked(this: void, ui: { AddItem: (text: string) => void }, spot_id: string, level: string, clicked_property: string): void
  mouse_move(this: void): void
  mouse_wheel(this: void): void
  inventory_info(this: void): void
  on_item_take(this: void): void
  on_item_drop(this: void): void
  task_state(this: void): void
  trade_sell_buy_item(this: void): void
  take_item_from_box(this: void): void
  use_object(this: void): void
}
type Weather =
  | 'w_clear1'
  | 'w_clear2'
  | 'w_partly1'
  | 'w_partly2'
  | 'w_cloudy1'
  | 'w_cloudy2_dark'
  | 'w_rain1'
  | 'w_rain2'
  | 'w_rain3'
  | 'w_storm1'
  | 'w_storm2'
  | 'w_foggy1'
  | 'w_foggy2'
  | 'w_foggy2'
type Align = 't' | 'r' | 'b' | 'l' | 'c'
type Texture = {
  x?: number
  y?: number
  width?: number
  height?: number
  stretch?: 0 | 1
}
type SectionProperty = Suggest<'inv_name' | 'inv_name_short'>

//#region vars (modules)

//#region vars / from xray-monolith

declare var actor_stats: {
  add_points(this: void, section: string, detail_key: string, count: number, points: number): void
  add_points_str(this: void, section: string, detail_key: string, value: string): void
  get_points(this: void, section: string): number
}
declare var weather: {
  get_value_numric(this: void, name: string): number
  get_value_vector(this: void, name: string): vector
  get_value_string(this: void, name: string): string
  pause(this: void, pause: boolean): void
  is_paused(this: void): boolean
  set_value_numric(this: void, name: string, value: number): void
  set_value_vector(this: void, name: string, x: number, y: number, z: number, w?: number): void
  set_value_string(this: void, name: string, value: string): void
  reload(this: void): void
  boost_value(this: void, name: string, value: number): void
  boost_reset(this: void): void
  sun_time(this: void, h: number, m: number): void
}
declare var hud_adjust: {
  enabled(this: void, state: boolean): void
  set_vector(this: void, off: number, idx: number, x: number, y: number, z: number): void
  set_value(this: void, name: string, value: number): void
  remove_hud_model(this: void, section: string): void
}
declare var relation_registry: {
  community_goodwill(this: void, community: Faction, entity_id: number): number
  set_community_goodwill(this: void, community: Faction, entity_id: number, goodwill: number): void
  change_community_goodwill(this: void, community: Faction, entity_id: number, goodwill: number): void
  community_relation(this: void, community_1: Faction, community_2: Faction): number
  set_community_relation(this: void, community_1: Faction, community_2: Faction, relation: number): void
  get_general_goodwill_between(this: void, from: number, to: number): number
}
declare var game: {
  CTime: ((this: void, ...ctr: ConstructorParameters<typeof CTime>) => CTime) & CTime
  time(this: void): number
  get_game_time(this: void): CTime
  start_tutorial(this: void, name: string): void
  stop_tutorial(this: void): void
  has_active_tutorial(this: void): boolean
  translate_string<Id extends string>(this: void, id: Id): string
  reload_language(this: void): void
  get_resolutions(this: void): string
  play_hud_motion(this: void, hand: string, item_name: string, anim_name: string, mixin?: boolean, speed?: number): number
  stop_hud_motion(this: void): void
  get_motion_length(this: void, section: string, name: string, speed: number): number
  hud_motion_allowed(this: void): boolean
  play_hud_anm(this: void, name: string, part: string, speed: number, power: number, loop: boolean, no_restart: boolean): void
  stop_hud_anm(this: void, name: string, force: boolean): void
  stop_all_hud_anms(this: void, force: boolean): void
  set_hud_anm_time(this: void, name: string, time: number): number
  only_allow_movekeys(this: void, value: boolean): void
  only_movekeys_allowed(this: void): boolean
  set_actor_allow_ladder(this: void, value: boolean): void
  set_nv_lumfactor(this: void, factor: boolean): void
  reload_ui_xml(this: void): void
  actor_weapon_lowered(this: void): boolean
  actor_lower_weapon(this: void, lower: boolean): void
  prefetch_texture(this: void, name: string): void
  prefetch_model(this: void, name: string): void
  get_visual_userdata(this: void, visual: string): TODO // @returns CScriptIniFile
  world2ui(this: void, pos: vector, hud?: boolean): TODO // @returns Fvector2
}
declare var ini_file: {
  r_bool_ex: TODO
  r_float_ex: TODO
  r_line_ex: TODO
  r_list: TODO
  r_mult: TODO
  r_sec_ex: TODO
  r_string_ex: TODO
  r_string_to_condlist: TODO
}
declare var ini_sys: {
  r_string_ex(section: string, prop: SectionProperty): string | null
  r_bool_ex(section: string, prop: SectionProperty): boolean | null
  r_float_ex(section: string, prop: SectionProperty): number | null
  r_u32(section: string, prop: SectionProperty): number | null
  r_s32(section: string, prop: SectionProperty): TODO
  section_exist(section: string): boolean | null
  section_for_each(cb: (section: string) => void): void
  line_count(section: string): number | null
}
declare var DIK_keys: Record<
  | 'DIK_ESCAPE'
  | 'DIK_2'
  | 'DIK_4'
  | 'DIK_6'
  | 'DIK_8'
  | 'DIK_0'
  | 'DIK_EQUALS'
  | 'DIK_TAB'
  | 'DIK_W'
  | 'DIK_R'
  | 'DIK_Y'
  | 'DIK_I'
  | 'DIK_P'
  | 'DIK_RBRACKET'
  | 'DIK_LCONTROL'
  | 'DIK_S'
  | 'DIK_F'
  | 'DIK_H'
  | 'DIK_K'
  | 'DIK_SEMICOLON'
  | 'DIK_GRAVE'
  | 'DIK_BACKSLASH'
  | 'DIK_X'
  | 'DIK_V'
  | 'DIK_N'
  | 'DIK_COMMA'
  | 'DIK_SLASH'
  | 'DIK_MULTIPLY'
  | 'DIK_SPACE'
  | 'DIK_F1'
  | 'DIK_F3'
  | 'DIK_F5'
  | 'DIK_F7'
  | 'DIK_F9'
  | 'DIK_NUMLOCK'
  | 'DIK_NUMPAD7'
  | 'DIK_NUMPAD9'
  | 'DIK_NUMPAD4'
  | 'DIK_NUMPAD6'
  | 'DIK_NUMPAD1'
  | 'DIK_NUMPAD3'
  | 'DIK_DECIMAL'
  | 'DIK_F12'
  | 'DIK_F14'
  | 'DIK_KANA'
  | 'DIK_NOCONVERT'
  | 'DIK_NUMPADEQUALS'
  | 'DIK_AT'
  | 'DIK_UNDERLINE'
  | 'DIK_STOP'
  | 'DIK_UNLABELED'
  | 'DIK_RCONTROL'
  | 'DIK_DIVIDE'
  | 'DIK_RMENU'
  | 'DIK_UP'
  | 'DIK_LEFT'
  | 'DIK_END'
  | 'DIK_NEXT'
  | 'DIK_DELETE'
  | 'DIK_RWIN'
  | 'DIK_PAUSE'
  | 'MOUSE_2'
  | 'DIK_1'
  | 'DIK_3'
  | 'DIK_5'
  | 'DIK_7'
  | 'DIK_9'
  | 'DIK_MINUS'
  | 'DIK_BACK'
  | 'DIK_Q'
  | 'DIK_E'
  | 'DIK_T'
  | 'DIK_U'
  | 'DIK_O'
  | 'DIK_LBRACKET'
  | 'DIK_RETURN'
  | 'DIK_A'
  | 'DIK_D'
  | 'DIK_G'
  | 'DIK_J'
  | 'DIK_L'
  | 'DIK_APOSTROPHE'
  | 'DIK_LSHIFT'
  | 'DIK_Z'
  | 'DIK_C'
  | 'DIK_B'
  | 'DIK_M'
  | 'DIK_PERIOD'
  | 'DIK_RSHIFT'
  | 'DIK_LMENU'
  | 'DIK_CAPITAL'
  | 'DIK_F2'
  | 'DIK_F4'
  | 'DIK_F6'
  | 'DIK_F8'
  | 'DIK_F10'
  | 'DIK_SCROLL'
  | 'DIK_NUMPAD8'
  | 'DIK_SUBTRACT'
  | 'DIK_NUMPAD5'
  | 'DIK_ADD'
  | 'DIK_NUMPAD2'
  | 'DIK_NUMPAD0'
  | 'DIK_F11'
  | 'DIK_F13'
  | 'DIK_F15'
  | 'DIK_CONVERT'
  | 'DIK_YEN'
  | 'DIK_CIRCUMFLEX'
  | 'DIK_COLON'
  | 'DIK_KANJI'
  | 'DIK_AX'
  | 'DIK_NUMPADENTER'
  | 'DIK_NUMPADCOMMA'
  | 'DIK_SYSRQ'
  | 'DIK_HOME'
  | 'DIK_PRIOR'
  | 'DIK_RIGHT'
  | 'DIK_DOWN'
  | 'DIK_INSERT'
  | 'DIK_LWIN'
  | 'DIK_APPS'
  | 'MOUSE_1'
  | 'MOUSE_3'
  | 'MOUSE_4'
  | 'MOUSE_5'
  | 'MOUSE_6'
  | 'MOUSE_7'
  | 'MOUSE_8'
  | 'DIK_RETURN'
  | 'DIK_NUMPADENTER',
  number
>

//#endregion

//#region vars / other

declare var SIMBOARD: {
  create_squad(smart: cse_abstract, squad_id: number): cse_alife_online_offline_group
  create_squad_at_named_location(location: string, squad_id: string): cse_alife_online_offline_group | null
  assign_squad_to_smart(squad: cse_alife_online_offline_group, _0: TODO): void
  get_smart_population(smart: cse_abstract): number
  get_smart_by_name(name: string): cse_abstract | null
  squads: Record<number, cse_alife_online_offline_group>
}

//#endregion

//#region vars / from _unpacked

declare var actor_effects: TODO
declare var actor_menu: {
  set_msg(this: void, type: 1 | 2 | 3, message: string, seconds?: number, color?: string): void
}
declare var actor_menu_inventory: TODO
declare var actor_proxy: TODO
declare var actor_status: TODO
declare var actor_status_sleep: TODO
declare var actor_status_thirst: TODO
declare var alife_storage_manager: {
  get_state(this: void): {
    enable_campfire_mode: boolean
  }
}
declare var arszi_psy: TODO
declare var axr_beh: TODO
declare var axr_companions: TODO
declare var axr_fight_from_cover: TODO
declare var axr_keybind: TODO
declare var axr_main: {
  weapon_is_zoomed: boolean
}
declare var axr_npc_vs_box: TODO
declare var axr_npc_vs_heli: TODO
declare var axr_radio_in_heli: TODO
declare var axr_stalker_panic: TODO
declare var axr_task_manager: TODO
declare var axr_trade_manager: TODO
declare var axr_turn_on_campfire: TODO
declare var bind_anomaly_field: TODO
declare var bind_anomaly_zone: TODO
declare var bind_awr: TODO
declare var bind_camp: TODO
declare var bind_campfire: {
  campfires_all: Record<
    string,
    {
      campfire?: {
        is_on(): boolean
      }
      object: CGameObject
    }
  >
}
declare var bind_car: TODO
declare var bind_container: TODO
declare var bind_crow: TODO
declare var bind_door_labx8: TODO
declare var bind_dynamic_light: TODO
declare var bind_dynamo_hand: TODO
declare var bind_faction: TODO
declare var bind_heli: TODO
declare var bind_item: TODO
declare var bind_level_changer: TODO
declare var bind_monster: TODO
declare var bind_physic_object: TODO
declare var bind_red_forest_bridge: TODO
declare var bind_restrictor: TODO
declare var bind_signal_light: TODO
declare var bind_smart_cover: TODO
declare var bind_smart_terrain: TODO
declare var bind_stalker: TODO
declare var bind_stalker_ext: TODO
declare var bind_trader: TODO
declare var class_registrator: TODO
declare var closecaption: TODO
declare var combat_restrictor: TODO
declare var cover_manager: TODO
declare var db: {
  actor: CGameObject
  // & {
  //   game_vertex_id(): number
  //   level_vertex_id(): number
  //   health: number
  //   change_health(by: number): void
  //   radiation: number
  //   bleeding: number
  //   psy_health: number
  //   active_item(): any
  //   active_detector(): any
  //   active_slot(): number
  //   item_in_slot(slot: number): any
  //   give_game_news(caption: string, text: string, texture: string, delay_ms: number, duration: number, type?: 0 | 1): void
  //   give_talk_message2(caption: string, text: string, texture: string, template: Suggest<'iconed_answer_item'>): void
  //   transfer_item(item: CGameObject, to: CGameObject): void
  //   money(): number
  //   give_money(sum: number): void
  //   give_info_portion(portion: string): void
  // }
  storage: TODO
}
declare var death_manager: TODO
declare var debug_cmd_list: TODO
declare var dialogs: {
  break_dialog(first_speaker: TODO, second_speaker: TODO): void
  relocate_money_from_actor(first_speaker: TODO, second_speaker: TODO, sum: number): void
}
declare var dialogs_agr_u: TODO
declare var dialogs_axr_companion: TODO
declare var dialogs_bar: TODO
declare var dialogs_darkvalley: TODO
declare var dialogs_devushka: TODO
declare var dialogs_escape: TODO
declare var dialogs_jupiter: TODO
declare var dialogs_lostzone: TODO
declare var dialogs_marsh: TODO
declare var dialogs_mlr: TODO
declare var dialogs_pripyat: TODO
declare var dialogs_warlab: TODO
declare var dialogs_yantar: TODO
declare var dialogs_zaton: TODO
declare var dialog_manager: TODO
declare var dynamic_news_helper: TODO
declare var dynamic_news_manager: TODO
declare var faction_expansions: TODO
declare var gamemode_agony: TODO
declare var gamemode_azazel: TODO
declare var gamemode_ironman: TODO
declare var gamemode_timer: TODO
declare var gameplay_disguise: TODO
declare var gameplay_radioactive_water: TODO
declare var gameplay_silent_kills: TODO
declare var game_achievements: TODO
declare var game_autosave: TODO
declare var game_autosave_new: TODO
declare var game_backpack_travel: TODO
declare var game_difficulties: {
  get_eco_factor(this: void, factor: Suggest<'money_loots'>): number
}
declare var game_fast_travel: TODO
declare var game_registrator: TODO
declare var game_relations: {
  is_factions_enemies(faction_1: string, faction_2: string): boolean
}
declare var game_setup: TODO
declare var game_statistics: TODO
declare var global_position: TODO
declare var guaranteed_loot: TODO
declare var gulag_general: TODO
declare var gwr_worldweapon_binder: TODO
declare var heli_alife: TODO
declare var heli_alife_warfare: TODO
declare var heli_combat: TODO
declare var heli_fire: TODO
declare var heli_fly: TODO
declare var heli_look: TODO
declare var heli_move: TODO
declare var heli_snd: TODO
declare var info_portions: TODO
declare var inventory_upgrades: TODO
declare var item_artefact: TODO
declare var item_backpack: TODO
declare var item_cooking: TODO
declare var item_device: TODO
declare var item_knife: TODO
declare var item_map_kit: TODO
declare var item_mine: TODO
declare var item_money: TODO
declare var item_parts: TODO
declare var item_radio: TODO
declare var item_recipe: TODO
declare var item_repair: TODO
declare var item_tent: TODO
declare var item_weapon: TODO
declare var itms_manager: TODO
declare var ka_dialog: TODO
declare var ka_travel: TODO
declare var ka_travel_dialog: TODO
declare var level: {
  send(this: void, net_packet: TODO, reliable?: boolean, sequential?: boolean, high_priority?: boolean, send_immediately?: boolean): void
  /** Target object at the crosshair */
  get_target_obj(this: void): CGameObject | null
  /** Distance to an object at the crosshair */
  get_target_dist(this: void): number
  get_target_element(this: void): number
  spawn_item(this: void, section: string, pos: vector, level_vertex_id: number, parent_id: number, return_item?: boolean): void
  get_active_cam(this: void): string
  set_active_cam(this: void, mode: 0 | 1 | 2 | 3 | 4): void
  get_start_time(this: void): CTime
  get_view_entity(this: void): CGameObject
  set_view_entity(this: void, obj: CGameObject): void
  get_weather(this: void): Weather
  set_weather(this: void, weather: Weather, force: boolean): void
  set_weather_fx(this: void, weather: string): boolean
  start_weather_fx_from_time(this: void, weather: string, time: number): boolean
  is_wfx_playing(this: void): boolean
  get_wfx_time(this: void): number
  stop_weather_fx(this: void): void
  environment(this: void): TODO
  set_time_factor(this: void, factor: number): void
  get_time_factor(this: void): number
  set_game_difficulty(this: void, diff: 0 | 1 | 2 | 3): void
  get_game_difficulty(this: void): number
  get_time_days(this: void): number
  get_time_hours(this: void): number
  get_time_minutes(this: void): number
  change_game_time(this: void, d: number, h: number, m: number): void
  high_cover_in_direction(this: void, level_vertex_id: number, dir: vector): number
  low_cover_in_direction(this: void, level_vertex_id: number, dir: vector): number
  vertex_in_direction(this: void, level_vertex_id: number, dir: vector, distance: number): number
  rain_factor(this: void): number
  patrol_path_exists(this: void, path: string): boolean
  vertex_position(this: void, level_vertex_id: number): vector
  name(this: void): string
  prefetch_sound(this: void, name: string): void
  client_spawn_manager(this: void): TODO
  map_add_object_spot_ser(this: void, id: number, spot_type: string, text: string): void
  map_add_object_spot(this: void, id: number, spot_type: string, text: string): void
  map_remove_object_spot(this: void, id: number, spot_type: string): void
  map_has_object_spot(this: void, id: number, spot_type: string): number
  map_change_spot_hint(this: void, id: number, spot_type: string, text: string): void
  add_dialog_to_render(this: void, dialog_window: TODO /** CUIDialogWnd */): void
  remove_dialog_to_render(this: void, dialog_window: TODO /** CUIDialogWnd */): void
  hide_indicators(this: void): void
  hide_indicators_safe(this: void): void
  show_indicators(this: void): void
  show_weapon(this: void, show: boolean): void
  add_call(this: void, lua_obj: TODO, condition: TODO, action: TODO): void
  // add_call(this: void): TODO
  // add_call(this: void): TODO
  remove_call(this: void, lua_obj: TODO, condition: TODO, action: TODO): void
  // remove_call(this: void): TODO
  // remove_call(this: void): TODO
  remove_calls_for_object(this: void, lua_obj: TODO): void
  present(this: void): boolean
  disable_input(this: void): void
  enable_input(this: void): void
  spawn_phantom(this: void, pos: vector): void
  get_bounding_volume(this: void): TODO // Fbox
  iterate_sounds(this: void, prefix: string, max_count: number, functor: () => void): void
  // iterate_sounds(this: void): TODO
  physics_world(this: void): TODO //cphysics_world_scripted
  get_snd_volume(this: void): number
  get_rain_volume(this: void): number
  set_snd_volume(this: void, volume: number): void
  add_cam_effector(this: void, path: string, id: number, cyclic: boolean, callback: string, fov?: number, hud?: boolean, power?: number): void
  remove_cam_effector(this: void, id: number): void
  set_cam_effector_factor(this: void, id: number, factor: number): void
  get_cam_effector_factor(this: void, id: number): number
  get_cam_effector_length(this: void, id: number): number
  check_cam_effector(this: void, id: number): boolean
  add_pp_effector(this: void, path: string, id: number, cyclic: boolean): void
  set_pp_effector_factor(this: void, id: number, factor: number, factor_sp?: number): void
  remove_pp_effector(this: void, id: number): void
  add_complex_effector(this: void, section: string, id: number): void
  remove_complex_effector(this: void, id: number): void
  vertex_id(this: void, pos: vector): number
  game_id(this: void): number
  ray_pick(this: void, start: vector, dir: vector, range: number, target: rq_target, result: rq_result, ignore_obj: CGameObject): boolean
  press_action(this: void, cmd: number): void
  release_action(this: void, cmd: number): void
  hold_action(this: void, cmd: number): void
  actor_moving_state(this: void): number
  get_env_rads(this: void): number
  iterate_nearest(this: void, pos: vector, radius: number, functor: () => void): void
  pick_material(this: void, start_pos: vector, dir: vector, distance: number, ignore_obj: CGameObject): string
}
declare var level_environment: TODO
declare var level_input: TODO
declare var level_targets: TODO
declare var level_weathers: {
  get_weather_manager(this: void): {
    get_curr_weather(): TODO
  }
}
declare var loadscreen: TODO
declare var logic_enforcer: TODO
declare var lua_ext: TODO
declare var lua_extensions: TODO
declare var lua_help: TODO
declare var medic_effects: TODO
declare var memusage: TODO
declare var mlr_utils: TODO
declare var mob_camp: TODO
declare var mob_combat: TODO
declare var mob_death: TODO
declare var mob_home: TODO
declare var mob_jump: TODO
declare var mob_remark: TODO
declare var mob_sound: TODO
declare var mob_state_mgr: TODO
declare var mob_trade: TODO
declare var mob_trader: TODO
declare var mob_walker: TODO
declare var modules: TODO
declare var move_mgr: TODO
declare var news_manager: TODO
declare var pda: TODO
declare var pda_actor: TODO
declare var pda_flagger: TODO
declare var pda_smart_terrain_warfare: TODO
declare var phantom_manager: TODO
declare var ph_appforce: TODO
declare var ph_button: TODO
declare var ph_car: TODO
declare var ph_car_originalx: TODO
declare var ph_code: TODO
declare var ph_death: TODO
declare var ph_door: TODO
declare var ph_hit: TODO
declare var ph_idle: TODO
declare var ph_minigun: TODO
declare var ph_on_hit: TODO
declare var ph_oscillate: TODO
declare var ph_sound: TODO
declare var post_combat_idle: TODO
declare var psi_storm_manager: {
  is_started(): boolean
}
declare var ranks: TODO
declare var release_body_manager: TODO
declare var release_item_manager: TODO
declare var release_npc_inventory: TODO
declare var restrictor_manager: TODO
declare var rx_ff: TODO
declare var safe_release_manager: TODO
declare var se_actor: TODO
declare var se_artefact: TODO
declare var se_car: TODO
declare var se_heli: TODO
declare var se_item: TODO
declare var se_level_changer: TODO
declare var se_monster: TODO
declare var se_smart_cover: TODO
declare var se_stalker: TODO
declare var se_zones: TODO
declare var simulation_objects: TODO
declare var sim_board: TODO
declare var sim_offline_combat: TODO
declare var sim_squad_bounty: TODO
declare var sim_squad_scripted: TODO
declare var sim_squad_warfare: TODO
declare var smart_covers: TODO
declare var smart_covers_animpoint_pri_a15: TODO
declare var smart_covers_animpoint_sit: TODO
declare var smart_covers_animpoint_sit_ass: TODO
declare var smart_covers_animpoint_sit_high: TODO
declare var smart_covers_animpoint_sit_knee: TODO
declare var smart_covers_animpoint_sit_low: TODO
declare var smart_covers_animpoint_sit_normal: TODO
declare var smart_covers_animpoint_sit_wait: TODO
declare var smart_covers_animpoint_stay_bar: TODO
declare var smart_covers_animpoint_stay_ohrana: TODO
declare var smart_covers_animpoint_stay_table: TODO
declare var smart_covers_animpoint_stay_wait: TODO
declare var smart_covers_animpoint_stay_wall: TODO
declare var smart_covers_anim_pri_a22: TODO
declare var smart_covers_combat: TODO
declare var smart_covers_combat_front: TODO
declare var smart_covers_combat_prone: TODO
declare var smart_covers_cover_lesnik: TODO
declare var smart_covers_cover_loophole_lead_forester_idle_talk: TODO
declare var smart_covers_loophole_animpoint_pri_a15: TODO
declare var smart_covers_loophole_animpoint_sit: TODO
declare var smart_covers_loophole_animpoint_sit_ass: TODO
declare var smart_covers_loophole_animpoint_sit_high: TODO
declare var smart_covers_loophole_animpoint_sit_knee: TODO
declare var smart_covers_loophole_animpoint_sit_low: TODO
declare var smart_covers_loophole_animpoint_sit_normal: TODO
declare var smart_covers_loophole_animpoint_sit_wait: TODO
declare var smart_covers_loophole_animpoint_stay_bar: TODO
declare var smart_covers_loophole_animpoint_stay_ohrana: TODO
declare var smart_covers_loophole_animpoint_stay_table: TODO
declare var smart_covers_loophole_animpoint_stay_wait: TODO
declare var smart_covers_loophole_animpoint_stay_wall: TODO
declare var smart_covers_loophole_anim_pri_a22: TODO
declare var smart_covers_loophole_crouch_back: TODO
declare var smart_covers_loophole_crouch_front: TODO
declare var smart_covers_loophole_crouch_front_left: TODO
declare var smart_covers_loophole_crouch_front_right: TODO
declare var smart_covers_loophole_crouch_left: TODO
declare var smart_covers_loophole_crouch_right: TODO
declare var smart_covers_loophole_lead_forester_idle: TODO
declare var smart_covers_loophole_lead_forester_talk: TODO
declare var smart_covers_loophole_lesnik: TODO
declare var smart_covers_loophole_prone: TODO
declare var smart_covers_loophole_stand_back: TODO
declare var smart_covers_loophole_stand_front_left: TODO
declare var smart_covers_loophole_stand_front_right: TODO
declare var smart_covers_loophole_stand_left: TODO
declare var smart_covers_loophole_stand_right: TODO
declare var smart_terrain: TODO
declare var smart_terrain_warfare: TODO
declare var sound_ambient: TODO
declare var sound_manager: TODO
declare var sound_theme: TODO
declare var spawn_nimble_items: TODO
declare var sr_camp: TODO
declare var sr_crow_spawner: TODO
declare var sr_cutscene: TODO
declare var sr_deimos: TODO
declare var sr_idle: TODO
declare var sr_light: TODO
declare var sr_monster: TODO
declare var sr_no_weapon: TODO
declare var sr_particle: TODO
declare var sr_postprocess: TODO
declare var sr_psy_antenna: TODO
declare var sr_silence: TODO
declare var sr_teleport: TODO
declare var sr_timer: TODO
declare var stalker_generic: TODO
declare var state_lib: TODO
declare var state_lib_animpoint: TODO
declare var state_mgr: TODO
declare var state_mgr_animation: TODO
declare var state_mgr_animation_list: TODO
declare var state_mgr_animation_list_animpoint: TODO
declare var state_mgr_animstate: TODO
declare var state_mgr_animstate_list: TODO
declare var state_mgr_animstate_list_animpoint: TODO
declare var state_mgr_bodystate: TODO
declare var state_mgr_direction: TODO
declare var state_mgr_goap: TODO
declare var state_mgr_mental: TODO
declare var state_mgr_movement: TODO
declare var state_mgr_pri_a15: TODO
declare var state_mgr_scenario: TODO
declare var state_mgr_smartcover: TODO
declare var state_mgr_weapon: TODO
declare var story_objects: TODO
declare var surge_manager: TODO
declare var tasks_agent_rescue: TODO
declare var tasks_anomaly_scanner: TODO
declare var tasks_assault: TODO
declare var tasks_bounty: TODO
declare var tasks_chimera_scan: TODO
declare var tasks_clear_map: TODO
declare var tasks_defense: TODO
declare var tasks_delivery: TODO
declare var tasks_dominance: TODO
declare var tasks_faction_control: TODO
declare var tasks_fate: TODO
declare var tasks_fetch: TODO
declare var tasks_guide: TODO
declare var tasks_measure: TODO
declare var tasks_multifetch: TODO
declare var tasks_pump_station_defense: TODO
declare var tasks_recover_item_on_corpse: TODO
declare var tasks_recover_mutant_data: TODO
declare var tasks_smart_control: TODO
declare var tasks_stash: TODO
declare var tasks_top_10: TODO
declare var tasks_veh_destroy: TODO
declare var task_functor: TODO
declare var task_manager: TODO
declare var task_objects: TODO
declare var task_status_functor: TODO
declare var trade_manager: TODO
declare var trans_outfit: TODO
declare var treasure_manager: TODO
declare var txr_mines: TODO
declare var txr_paid_companions: TODO
declare var txr_routes: TODO
declare var ui_companion_inv: TODO
declare var ui_ctrl_lighting: TODO
declare var ui_debug_item: TODO
declare var ui_debug_launcher: TODO
declare var ui_debug_lighting: TODO
declare var ui_debug_main: TODO
declare var ui_debug_weather: TODO
declare var ui_debug_wpn_hud: TODO
declare var ui_dosimeter: TODO
declare var ui_dyn_msg_box: TODO
declare var ui_enemy_health: TODO
declare var ui_extra: TODO
declare var ui_freeplay_dialog: TODO
declare var ui_inventory: TODO
declare var ui_item: TODO
declare var ui_itm_details: TODO
declare var ui_load_dialog: TODO
declare var ui_main_menu: TODO
declare var ui_map_debug_ex: TODO
declare var ui_mm_faction_select: TODO
declare var ui_mutant_loot: TODO
declare var ui_numpad: TODO
declare var ui_options: TODO
declare var ui_pda_contacts_tab: TODO
declare var ui_pda_encyclopedia_tab: TODO
declare var ui_pda_npc_tab: TODO
declare var ui_pda_radio_tab: TODO
declare var ui_pda_relations_tab: TODO
declare var ui_pda_warfare_tab: TODO
declare var ui_registrator: TODO
declare var ui_save_dialog: TODO
declare var ui_scenes: TODO
declare var ui_sleep_dialog: TODO
declare var ui_sr_teleport: TODO
declare var ui_warfare_options_hints: TODO
declare var ui_workshop: TODO
declare var ui_wpn_params: TODO
declare var utils_data: TODO
declare var utils_item: TODO
declare var utils_obj: TODO
declare var utils_stpk: TODO
declare var utils_ui: TODO
declare var utils_xml: {
  get_color(color: Color, to_code?: boolean): string
}
declare var visual_memory_manager: TODO
declare var warfare: TODO
declare var warfare_factions: TODO
declare var warfare_faction_control: TODO
declare var warfare_levels: TODO
declare var warfare_names: TODO
declare var warfare_options: TODO
declare var xrs_debug_tools: TODO
declare var xrs_dyn_music: TODO
declare var xrs_facer: TODO
declare var xrs_kill_wounded: TODO
declare var xrs_rnd_npc_loadout: TODO
declare var xr_abuse: TODO
declare var xr_actions_id: TODO
declare var xr_animpoint: TODO
declare var xr_animpoint_predicates: TODO
declare var xr_box: TODO
declare var xr_bribe: TODO
declare var xr_camper: TODO
declare var xr_campfire_point: TODO
declare var xr_combat: TODO
declare var xr_combat_camper: TODO
declare var xr_combat_ignore: TODO
declare var xr_combat_monolith: TODO
declare var xr_combat_zombied: TODO
declare var xr_companion: TODO
declare var xr_conditions: {
  surge_started(): boolean
}
declare var xr_conditions_addon: TODO
declare var xr_corpse_detection: TODO
declare var xr_cover: TODO
declare var xr_danger: TODO
declare var xr_death: TODO
declare var xr_detector: TODO
declare var xr_eat_medkit: TODO
declare var xr_effects: TODO
declare var xr_effects_addon: TODO
declare var xr_evaluators_id: TODO
declare var xr_gather_items: TODO
declare var xr_gulag: TODO
declare var xr_hear: TODO
declare var xr_help_wounded: TODO
declare var xr_hit: TODO
declare var xr_logic: TODO
declare var xr_meet: TODO
declare var xr_motivator: TODO
declare var xr_patch: TODO
declare var xr_patrol: TODO
declare var xr_reach_task: TODO
declare var xr_remark: TODO
declare var xr_sleeper: TODO
declare var xr_smartcover: TODO
declare var xr_sound: {
  get_safe_sound_object(this: void, path: string): TODO
}
declare var xr_state: TODO
declare var xr_walker: TODO
declare var xr_weapon_jam: TODO
declare var xr_wounded: TODO
declare var xr_zones: TODO
declare var xr_zones_sound: TODO

//#endregion

//#endregion vars

//#region ui

declare namespace JSX {
  interface IntrinsicElements {
    auto_frameline: Texture & { vertical: 0 | 1 }
    article_list: Texture
    category_list: Texture
    description: Texture
    texture: { children: string } & Texture
    text: Texture & {
      r: number
      g: number
      b: number
      align: Align
      vert_align: Align
      font: string
      color: string
      complex_mode: 0 | 1
    }
    caption: Texture
    text_order: Texture
    frame1: Texture
    frame2: Texture
    auto_check: Texture
    image_checkbox: Texture
    information: Texture
    information2: Texture
    listbox: Texture & {
      can_select: 0 | 1
      always_show_scroll: 0 | 1
      stretch: 0 | 1
    }
    show_all: Texture
    background: Texture
    w: { children: Element }
    progress: {
      children: Element
      sector_count: number
      clockwise: number
    } & Texture
    main_wnd: Texture
    message_checkbox: Texture
    scrollbar: Texture & {
      right_ident: number
      left_ident: number
      top_indent: number
      bottom_indent: number
    }
  }
}

//#endregion
