/// <reference path="__base/alife.d.ts" />
/// <reference path="__base/clsid.d.ts" />
/// <reference path="__base/fs.d.ts" />
/// <reference path="__base/gameobject.d.ts" />
/// <reference path="__base/items.d.ts" />
/// <reference path="__base/keys.d.ts" />
/// <reference path="__base/smarts.d.ts" />
/// <reference path="__base/system_ini.d.ts" />
/// <reference path="__base/ui.d.ts" />
/// <reference path="__base/weather.d.ts" />

// This is the base type declaration file that includes types from the _unpacked and luabind definitions from XRay Monolith.

// TODO is for when you are not sure what the type actually is
type TODO = any
// Suggest is more confident when TODO but only for string values, although it allows any string, it gives a siggestion in the IDE
type Suggest<S extends string> = S | (string & {})

declare class NetPacket {}
declare class IReader {}
declare class CScriptSoundInfo {}
declare class ObjectBinder {
  constructor(obj: CGameObject)
  readonly object: CGameObject
  reinit(): void
  reload(section: string): void
  net_spawn(se_obj: CseAlifeObject): boolean
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
declare const RayPick: RayPickCtor
interface RayPickCtor {
  new (): RayPick
}
interface RayPick {
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
/** @customConstructor vector2 */
declare class vector2 {
  constructor()
  x: number
  y: number
  set(x: number, y: number): vector2
  set(v: vector): vector2
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
declare class CGameTask {
  constructor()
  // state
  readonly fail: 0
  readonly in_progress: 1
  readonly completed: 2
  // type
  readonly storyline: 0
  readonly additional: 1
  get_id(): string
  set_id(id: string): void
  get_priority(): number
  set_priority(priority: number): void
  get_title(): string
  set_title(title: string): void
  set_map_hint(hint: string): void
  add_on_fail_info(info: string): void
  add_complete_func(name: string): void
  add_fail_func(name: string): void
  add_fail_info(info: string): void
  add_complete_info(info: string): void
  set_type(type: number): void
  set_map_object_id(id: number): void
  set_description(desc: string): void
  add_on_fail_func(name: string): void
  add_on_complete_func(name: string): void
  set_icon_name(icon: string): void
  set_map_location(map_loc: string): void
  add_on_complete_info(info: string): void
  change_map_location(map_loc: string, map_obj_id: number): void
  remove_map_locations(notify: boolean): void
}
type Community =
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
type Rank = 'novice' | 'trainee' | 'experienced' | 'professional' | 'veteran' | 'expert' | 'master' | 'legend'
type Reputation = 'excellent' | 'really_good' | 'very_good' | 'good' | 'neutral' | 'bad' | 'very_bad' | 'really_bad' | 'terrible'
type Color =
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
/** @customConstructor alife */
declare class alife {
  constructor()
  actor(): CseAlifeCreatureActor
  switch_distance(): number
  switch_distance(distance: number): void
  level_name(level_id: number): LevelName
  level_id(): number
  has_info(obj_id: number, info_portion: string): boolean
  teleport_object(id: number, game_vertex_id: number, level_vertex_id: number, pos: vector): void
  object(id: number): CseAbstract | null
  story_object(sid: string): CseAbstract | null
  set_switch_online(obj_id: number, state: boolean): void
  set_switch_offline(obj_id: number, state: boolean): void
  create(section: string, pos: vector, level_vertex_id: number, game_vertex_id: number, parent_id?: number): CseAbstract
  create_ammo(section: string): CseAbstract
  register(server_object: CseAbstract): void
  release(server_object: CseAbstract): void
}
type LevelName =
  | 'fake_start'
  | 'k00_marsh'
  | 'l01_escape'
  | 'k01_darkscape'
  | 'l02_garbage'
  | 'k02_trucks_cemetery'
  | 'l03_agroprom'
  | 'l03u_agr_underground'
  | 'l04_darkvalley'
  | 'y04_pole'
  | 'l04u_labx18'
  | 'l05_bar'
  | 'l06_rostok'
  | 'l07_military'
  | 'l08_yantar'
  | 'l08u_brainlab'
  | 'l09_deadcity'
  | 'l10_limansk'
  | 'l10_radar'
  | 'l10_red_forest'
  | 'l10u_bunker'
  | 'l11_hospital'
  | 'l11_pripyat'
  | 'l12_stancia'
  | 'l12_stancia_2'
  | 'l12u_control_monolith'
  | 'l12u_sarcofag'
  | 'l13_generators'
  | 'l13u_warlab'
  | 'jupiter'
  | 'jupiter_underground'
  | 'labx8'
  | 'pripyat'
  | 'zaton'
declare class vertex {
  level_id(): number
  level_point(): vector
  level_vertex_id(): number
  game_point(): vector
}
/** @customConstructor game_graph */
declare class game_graph {
  constructor()
  accessible(vertex_id: number): boolean
  accessible(vertex_id: number, val: boolean): void
  vertex_id(vertex: vertex): number
  vertex(game_vertex_id: number): vertex | null
  valid_vertex_id(game_vertex_id: number): boolean
  levels(): {
    id: number
    name: LevelName
  }[]
}
/** @customConstructor CScriptXmlInit */
declare class CScriptXmlInit {
  constructor()
  ParseFile(file: string): void
  ParseDirFile(dir: string, file: string): void
  NodeExist(path: string, index: number): boolean
  GetNodesNum(path: string, index: number, tag: string): number
  NavigateToNode(path: string, index: number): boolean
  NavigateToNode_ByAttribute(tag: string, attr_name: string, attr_value: string): boolean
  NavigateToNode_ByPath(path: string, index: number, tag: string, attr: string, attr_value_pattern: string): boolean
  NavigateToRoot(): void
  ReadValue(path: string, index: number): string | null
  ReadAttribute(path: string, index: number, attr: string): string | null
  InitWindow(path: string, index: number, window: CUIWindow): void
  InitHint(path: string, parent: CUIWindow): UIHint | null
  InitFrame(path: string, parent: CUIWindow): CUIFrameWindow | null
  InitFrameLine(path: string, parent: CUIWindow): CUIFrameLineWnd | null
  InitEditBox(path: string, parent: CUIWindow): CUIEditBox | null
  InitStatic(path: string, parent: CUIWindow): CUIStatic | null
  InitTextWnd(path: string, parent: CUIWindow): CUITextWnd | null
  InitAnimStatic(path: string, parent: CUIWindow): CUIStatic | null
  InitSleepStatic(path: string, parent: CUIWindow): CUIStatic | null
  Init3tButton(path: string, parent: CUIWindow): CUI3tButton | null
  InitCheck(path: string, parent: CUIWindow): CUICheckButton | null
  InitSpinNum(path: string, parent: CUIWindow): CUISpinNum | null
  InitSpinFlt(path: string, parent: CUIWindow): CUISpinFlt | null
  InitSpinText(path: string, parent: CUIWindow): CUISpinText | null
  InitComboBox(path: string, parent: CUIWindow): CUIComboBox | null
  InitTab(path: string, parent: CUIWindow): CUITabControl | null
  InitServerList(path: string, parent: CUIWindow): CServerList | null
  InitMapList(path: string, parent: CUIWindow): CUIMapList | null
  InitMapInfo(path: string, parent: CUIWindow): CUIMapInfo | null
  InitTrackBar(path: string, parent: CUIWindow): CUITrackBar | null
  InitCDkey(path: string, parent: CUIWindow): CUIEditBox | null
  InitMPPlayerName(path: string, parent: CUIWindow): CUIEditBox | null
  InitKeyBinding(path: string, parent: CUIWindow): CUIWindow | null
  InitMMShniaga(path: string, parent: CUIWindow): CUIMMShniaga | null
  InitScrollView(path: string, parent: CUIWindow): CUIScrollView | null
  InitListBox(path: string, parent: CUIWindow): CUIListBox | null
  InitProgressBar(path: string, parent: CUIWindow): CUIProgressBar | null
}
declare const enum EquipmentSlotId {
  Knife = 1,
  Weapon1 = 2,
  Weapon2 = 3,
  Grenade = 4,
  Binocular = 5,
  Bolt = 6,
  Outfit = 7,
  PDA = 8,
  Detector = 9,
  Torch = 10,
  Artefact = 11,
  Helmet = 12,
  Backpack = 13,
}
