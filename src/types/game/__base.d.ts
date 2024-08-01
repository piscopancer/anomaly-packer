// WIP
// This gigantic declaration file includes types for luabind definitions from the _unpacked lua modules and XRay Monolith.

type TODO = any
type Suggest<S extends string> = S | (string & {})

//

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
  give_game_news(caption: string, text: string, icon_path: string, delay_ms: number, duration_ms: number): void
  give_talk_message2(caption: string, text: string, icon_path: string, template?: string): void
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
declare class Time {
  constructor()
  readonly DateToDay: 0
  readonly DateToMonth: 1
  readonly DateToYear: 2
  readonly TimeToHours: 0
  readonly TimeToMinutes: 1
  readonly TimeToSeconds: 2
  readonly TimeToMilisecs: 3
  diffSec(other: Time): number
  add(other: Time): void
  sub(other: Time): void
  setHMS(h: number, m: number, s: number): void
  setHMSms(h: number, m: number, s: number, ms: number): void
  set(year: number, month: number, day: number, h: number, m: number, s: number, ms: number): void
  get(year: number, month: number, day: number, h: number, m: number, s: number, ms: number): void
  dateToString(mode: typeof this.DateToDay | typeof this.DateToMonth | typeof this.DateToYear): string
  timeToString(mode: typeof this.TimeToHours | typeof this.TimeToMinutes | typeof this.TimeToSeconds | typeof this.TimeToMilisecs): string
}

//
// ALIFE
//

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
declare type Faction =
  | 'stalker'
  | 'bandit'
  | 'csky'
  | 'army'
  | 'freedom'
  | 'dolg'
  | 'ecolog'
  | 'killer'
  | 'monolith'
  | 'greh'
  | 'renegade'
  | 'isg'
  | 'monster'
  | 'zombied'
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
