/// <reference path="__base/alife.d.ts" />
/// <reference path="__base/clsid.d.ts" />
/// <reference path="__base/condition.d.ts" />
/// <reference path="__base/dialogs.d.ts" />
/// <reference path="__base/engine-classes.d.ts" />
/// <reference path="__base/math.d.ts" />
/// <reference path="__base/streams.d.ts" />
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

declare class CScriptSoundInfo {}
/** @customConstructor object_binder */
declare class object_binder {
  constructor(obj: CGameObject)
  readonly object: CGameObject
  reinit(): void
  reload(section: string): void
  net_spawn(se_obj: CseAlifeObject): boolean
  net_destroy(): void
  net_import(packet: net_packet): void
  net_export(packet: net_packet): void
  update(delta_time: number): void
  save(output_packet: net_packet): void
  load(input_packet: reader): void
  net_save_relevant(): boolean
  net_Relcase(obj: CGameObject): void
  /** Base-method super-call form: `object_binder.net_spawn(self, se_abstract)`. */
  static net_spawn(self: object_binder, se_abstract: CseAbstract): boolean
  /** Base-method super-call form: `object_binder.net_destroy(self)`. */
  static net_destroy(self: object_binder): void
  /** Base-method super-call form: `object_binder.reinit(self)`. */
  static reinit(self: object_binder): void
  /** Base-method super-call form: `object_binder.update(self, delta_time)`. */
  static update(self: object_binder, delta_time: number): void
  /** Base-method super-call form: `object_binder.save(self, packet)`. */
  static save(self: object_binder, output_packet: net_packet): void
  /** Base-method super-call form: `object_binder.load(self, reader)`. */
  static load(self: object_binder, input_packet: reader): void
}
declare class sound_params {
  position: vector
  volume: number
  frequency: number
  min_distance: number
  max_distance: number
}
/** @customConstructor sound_object */
declare class sound_object {
  constructor(sound: string, sound_type?: number)
  /** `sm_Looped` (`1 << 0`) */
  static readonly looped: 1
  /** `sm_2D` (`1 << 1`) */
  static readonly s2d: 2
  static readonly s3d: 0
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
  /** @param freq engine declares it required, but luabind tolerates omitting the trailing frequency */
  play_no_feedback(source: CGameObject, flags: number, delay: number, pos: vector, vol: number, freq?: number): void
  stop(): void
  stop_deffered(): void
  playing(): boolean
  length(): number
  attach_tail(sound: string): void
}
/**
 * 32-bit flag set. In luabind this class is registered as `flags32`.
 * @customConstructor flags32
 */
declare class Flags {
  constructor()
  get(): number
  zero(): Flags
  /** Sets every bit to one. */
  one(): void
  invert(): Flags
  invert(f: Flags): Flags
  invert(mask: number): Flags
  assign(f: Flags): Flags
  assign(mask: number): Flags
  or(mask: number): Flags
  or(f: Flags, mask: number): Flags
  and(mask: number): Flags
  and(f: Flags, mask: number): Flags
  set(mask: number, value: boolean): Flags
  is(mask: number): boolean
  is_any(mask: number): boolean
  test(mask: number): boolean
  equal(f: Flags): boolean
  equal(f: Flags, mask: number): boolean
}

/** @customConstructor ray_pick */
declare class ray_pick {
  constructor()
  constructor(pos: vector, dir: vector, range: number, flags: rq_target, obj: CGameObject)
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
  readonly object: CGameObject | null
  readonly range: number
  readonly element: number
}
declare const enum rq_target {
  None = 0,
  Object = 1 << 0,
  Static = 1 << 1,
  Shape = 1 << 2,
  Obstacle = 1 << 3,
  Both = rq_target.Object | rq_target.Static,
  Dyn = rq_target.Object | rq_target.Shape | rq_target.Obstacle,
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
  static readonly dummy: 11
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
  constructor(other: Time)
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
/** Global holder of task state/type enums (luabind class `task`). */
declare const task: {
  // task_state
  readonly fail: 0
  readonly in_progress: 1
  readonly completed: 2
  readonly task_dummy: -1
  // task_type
  readonly storyline: 0
  readonly additional: 1
}
declare class CGameTask {
  constructor()
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
  get_icon_name(): string
  set_map_location(map_loc: string): void
  get_map_location(): string
  get_map_object_id(): number
  create_map_location(on_load: boolean): void
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
/** Ранги монстров (creatures\game_relations.ltx → monster_rating) */
type MonsterRank = 'weak' | 'normal' | 'strong'
type Reputation = 'excellent' | 'really_good' | 'very_good' | 'good' | 'neutral' | 'bad' | 'very_bad' | 'really_bad' | 'terrible'
type Color =
  | 'default'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'white'
  | 'black'
  | 'gray'
  | 'light_gray'
  | 'tut_gray'
  | 'dark_gray'
  | 'edit'
  | `d_${'orange' | 'red' | 'cyan' | 'red_1' | 'purple' | 'green' | 'blue'}`
  | `ui_${'red' | 'green' | 'blue' | 'white' | 'black' | 'gray' | 'yellow' | 'gray_1' | 'gray_2' | 'gray_3' | 'lime'}`
  | `ui_${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10}`
  | `pda_${'green' | 'blue' | 'yellow' | 'white' | 'red'}`
/** @customConstructor alife */
declare class alife {
  constructor()
  actor(): CseAlifeCreatureActor
  valid_object_id(object_id: number): boolean
  switch_distance(): number
  set_switch_distance(distance: number): void
  level_name(level_id: number): LevelName
  level_id(): number
  has_info(obj_id: number, info_portion: string): boolean
  dont_has_info(obj_id: number, info_portion: string): boolean
  give_info(obj_id: number, info_portion: string): void
  disable_info(obj_id: number, info_portion: string): void
  iterate_info(obj_id: number, functor: (this: void, obj_id: number, info_id: string) => void): void
  teleport_object(id: number, game_vertex_id: number, level_vertex_id: number, pos: vector): void
  object(id: number): CseAbstract | null
  story_object(sid: string): CseAbstract | null
  set_switch_online(obj_id: number, state: boolean): void
  set_switch_offline(obj_id: number, state: boolean): void
  set_interactive(obj_id: number, interactive: boolean): void
  kill_entity(monster: CseAlifeCreatureAbstract): void
  kill_entity(monster: CseAlifeCreatureAbstract, game_vertex_id: number): void
  add_in_restriction(monster: CseAlifeCreatureAbstract, restrictor_id: number): void
  add_out_restriction(monster: CseAlifeCreatureAbstract, restrictor_id: number): void
  remove_in_restriction(monster: CseAlifeCreatureAbstract, restrictor_id: number): void
  remove_out_restriction(monster: CseAlifeCreatureAbstract, restrictor_id: number): void
  remove_all_restrictions(obj_id: number, restrictor_type: number): void
  create(section: string, pos: vector, level_vertex_id: number, game_vertex_id: number, parent_id?: number): CseAbstract
  create_ammo(section: string): CseAbstract
  /** Resolves a spawn story id (`_SPAWN_STORY_ID`) to a spawn id (`_SPAWN_ID`). */
  spawn_id(spawn_story_id: number): number
  /** Duplicates a magazined weapon server object, copying its condition, ammo, addons and upgrades. */
  clone_weapon(
    object: CseAbstract,
    section: string,
    position: vector,
    level_vertex_id: number,
    game_vertex_id: number,
    id_parent: number,
    register?: boolean
  ): CseAbstract | null
  /** Iterates the ids of an object's children: `for id in alife():get_children(obj) do ... end`. */
  get_children(object: CseAbstract): LuaIterable<number>
  register(server_object: CseAbstract): void
  release(server_object: CseAbstract): void
  set_objects_per_update(count: number): void
  set_process_time(micro: number): void
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
