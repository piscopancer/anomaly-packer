/** @noSelfInFile */

declare const ini_sys: system_ini
declare function start_game_callback(): void
declare interface GameEvents {
  // Actor
  on_before_level_changing(): void
  on_level_changing(): void
  actor_on_before_death(_0: number, _1: LuaTable): void
  actor_on_net_destroy(binder: ObjectBinder): void
  actor_on_first_update(binder: ObjectBinder, delta_time: number): void
  actor_on_update(binder: ObjectBinder, delta_time: number): void
  actor_on_weapon_fired(obj: CGameObject, weapon: CGameObject, ammo_elapsed: number, grenade_elapsed: number, ammo_type: number, grenade_type: number): void
  actor_on_weapon_jammed(weapon: CGameObject): void
  actor_on_weapon_no_ammo(weapon: CGameObject, ammo_total: number): void
  actor_on_weapon_lower(weapon: CGameObject): void
  actor_on_weapon_raise(weapon: CGameObject): void
  actor_on_weapon_reload(weapon: CGameObject, ammo_total: number): void
  actor_on_weapon_zoom_in(weapon: CGameObject): void
  actor_on_weapon_zoom_out(weapon: CGameObject): void
  actor_on_item_take(item: CGameObject): void
  actor_on_item_take_from_box(box: CGameObject, item: CGameObject): void
  actor_on_item_put_in_box(box: CGameObject, item: CGameObject): void
  actor_on_item_drop(item: CGameObject): void
  actor_on_item_use(item: CGameObject, section: string): void
  actor_on_item_before_use(item: CGameObject, flags: LuaTable): void
  actor_on_item_before_pickup(item: CGameObject, flags: LuaTable): void
  actor_item_to_belt(item: CGameObject): void
  actor_item_to_ruck(item: CGameObject): void
  actor_item_to_slot(item: CGameObject): void
  actor_on_trade(item: CGameObject, sell_buy: TODO, money: number): void
  actor_on_init(binder: ObjectBinder): void
  actor_on_reinit(binder: ObjectBinder): void
  actor_on_info_callback(obj: CGameObject, info_id: number): void
  actor_on_hit_callback(obj: CGameObject, amount: number, local_dir: vector, dealer: CGameObject, bone_id: number): void
  actor_on_attach_vehicle(vehicle: CGameObject): void
  actor_on_detach_vehicle(vehicle: CGameObject): void
  actor_on_use_vehicle(vehicle: CGameObject): void
  actor_on_hud_animation_play(
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
  actor_on_hud_animation_end(item: CGameObject, section: string, motion: TODO, state: TODO, slot: number): void
  actor_on_hud_animation_mark(state: number, mark: string): void
  actor_on_sleep(hours: number): void
  actor_on_foot_step(ground: CGameObject, power: number, play: boolean, on_ground: boolean, hud_view: boolean): void
  actor_on_interaction(_type: string, obj: CGameObject | null, name: string): void
  actor_on_before_hit(_hit: hit, bone_id: number, flags: TODO): void
  actor_on_before_hit_belt(hit_table: TODO, power: number, _type: TODO): void
  actor_on_weapon_before_fire(flags: TODO): void
  actor_on_feeling_anomaly(zone: CGameObject, flags: TODO): void
  actor_on_leave_dialog(npc_id: number): void
  actor_on_stash_create(stash: { id: number; name: string; section: string }): void
  actor_on_stash_remove(stash: { id: number; cancel: boolean }): void
  actor_on_frequency_change(old_freq: number, new_freq: number): void
  actor_on_achievement_earned(ach_id: string, message: string): void
  actor_on_movement_changed(cmd: TODO): void
  actor_on_footstep(material: string, power: number, hud_view: boolean, flags: TODO): void
  actor_on_jump(): void
  actor_on_land(landing_speed: number): void
  // NPCs
  npc_on_update(): void
  npc_on_death_callback(): void
  // Mutants
  // Physical objects
  // Vehicles
  // Squads
  squad_on_npc_death(squad: CseAlifeOnlineOfflineGroup, npc: CseAlifeTraderAbstract): void
  // Smart terrains
  // Server objects
  server_entity_on_unregister(squad: CseAlifeOnlineOfflineGroup, type: Suggest<'sim_squad_scripted'>): void
  // GUI
  ActorMenu_on_mode_changed(mode: TODO, last_mode: TODO): void
  GUI_on_show(name: string, path: string): void
  map_spot_menu_add_property(ui: { AddItem: (text: string) => void }, spot_id: string, level: string): void
  map_spot_menu_property_clicked(ui: { AddItem: (text: string) => void }, spot_id: string, level: string, clicked_property: string): void
  on_screen_resolution_changed(): void
  // Technical
  on_key_press(key: number): void
  on_key_release(key: number): void
  on_key_hold(key: number): void
  on_option_change(): void
  on_before_save_input(): void
  // Files
  save_state(m_data: MData): void
  load_state(m_data: MData): void
  // Other
  // set_callback / callback class
  inventory_info(): void
  task_state(): void
  take_item_from_box(): void
  trade_sell_buy_item(): void
  on_mouse_move(x: number, y: number): void
  on_mouse_wheel(vol: number): void
  mouse_move(): void
  mouse_wheel(): void
  use_object(): void
  select_inventory_item(item: CGameObject): void
  actor_before_death(): void
  // switch_torch(on: 0 | 1): void
}
/**
 * Functions can be provided to game events as callbacks. With most game events some params are also returned (see the example below). Full list of game events names can be found in *axr_main.script*. To find game events implementations in _unpacked, search for `SendScriptCallback`
 *
 * @example
 * ```ts
 * function my_on_key_press( key: number) {
 *   if (key === DIK_keys.DIK_I) {
 *     printf('"I" was just pressed | key: %s', key)
 *   }
 * }
 *
 * function on_game_start() {
 *   RegisterScriptCallback('on_key_press', my_on_key_press)
 *}
 * ```
 */
declare function RegisterScriptCallback<E extends keyof GameEvents>(event: E, cb: GameEvents[E]): void
declare function UnregisterScriptCallback<E extends keyof GameEvents>(event: E, cb: GameEvents[E]): void
declare function SendScriptCallback<E extends keyof GameEvents>(event: E, ...args: Parameters<GameEvents[E]>): void
declare function Unregister_UI(name: string): void
declare function DestroyAll_UI(name: string): void
declare function Check_UI(name: string): boolean
declare function Overlapped_UI(name: string): boolean
declare function CloseAll_UI(): void
declare function GetActorMenu(): TODO
declare function hide_hud_all(): void
declare function hide_hud_inventory(): void
declare function hide_hud_pda(): void
declare function show_all_ui(show: boolean): void
declare function show_indicators(show: boolean): void
declare function main_hud_shown(): boolean
/**
 * Delayed action. If provided with a callback that takes params, such must be provided too.
 * @param event_id a unique identifier of your choice (could be your name, or something related to what is happening)
 * @param action_id a second unique identifier of your choice (what matters is that two time events should not have the same `event_id` & `action_id` pair)
 * @param action action that will be executed after delay. If action returns `true`, the time event gets destroyed, if `false`, the time event fill be fired again with the fresh timer
 * @tutorial read on [Modding Book](https://igigog.github.io/anomaly-modding-book/scripting/time_events.html)
 * @example kill 100 random NPCs after 5 seconds
 * ```ts
 * function kill_random_npcs( count: number) {
 *   // ...
 * }
 * CreateTimeEvent(0, 'kill_random_npcs', 5, kill_random_npcs, 100)
 * ```
 * */
declare function CreateTimeEvent<F extends (...args: any) => boolean>(
  event_id: number,
  action_id: string,
  delay_s: number,
  action: F,
  ...args: Parameters<F>
): void
/** @see {@link CreateTimeEvent} */
declare function ResetTimeEvent(event_id: number, action_id: string, new_delay_s: number): void
/** @see {@link CreateTimeEvent} */
declare function RemoveTimeEvent(event_id: number, action_id: string): void
declare function ProcessEventQueue(force: boolean): boolean
declare function ProcessEventQueueState(m_data: MData, save: boolean): void
declare function ChangeLevel(pos: vector, level_vertex_id: number, game_vertex_id: number, angle: vector, anim?: boolean): void
declare function change_level_now(pos: vector, level_vertex_id: number, game_vertex_id: number, angle: vector): void
declare function AddUniqueCall(functor: TODO): void
declare function RemoveUniqueCall(functor: TODO): void
declare function JumpToLevel(level: string): boolean
declare function TeleportObject(id: number, pos: vector, level_vertex_id: number, game_vertex_id: number): void
declare function TeleportSquad(squad: CseAlifeOnlineOfflineGroup, pos: vector, level_vertex_id: number, game_vertex_id: number): void
declare function in_time_interval(time_stamp_1: number, time_stamp_2: number): boolean
declare function level_changing(): boolean
declare function LoadScheme(filename: string, scheme: string, ...args: any[]): void
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
declare function printf(...args: any[]): void
declare function printe(...args: any[]): void
declare function printdbg(...args: any[]): void
declare function abort(msg: TODO, ...args: any[]): void
declare function callstack(c1: boolean, to_str: boolean): string | null
declare function get_console_cmd(_type: string, name: string): TODO
declare function exec_console_cmd(cmd: string): void
declare const time_infinite: number
/** @returns Current time in ms */
declare function time_global(): number
declare function time_continual(): number
declare function round(num: number): number
declare function round_idp(num: number, idp: number): number
declare function round_100(num: number): number
declare function odd(num: number): boolean
declare function clamp(num: number, min: number, max: number): number
declare function normalize(num: number, min: number, max: number): number
declare function normalize_100(num: number, min: number, max: number): number
declare function random_choice<A>(...args: A[]): A
declare function random_number(min: number, max: number): number
declare function random_float(min: number, max: number): number
declare function yaw(vec_1: vector, vec_2: vector): number
declare function yaw_degree(vec_1: vector, vec_2: vector): number
declare function yaw_degree3d(vec_1: vector, vec_2: vector): number
declare function vector_cross(vec_1: vector, vec_2: vector): number
declare function vec_to_str(vec: vector): vector
declare function vector_rotate_y(v: vector, deg: number): vector
declare function distance_2d(vec_1: vector, vec_2: vector): number
declare function distance_2d_sqr(vec_1: vector, vec_2: vector): number
declare function trim(str: string): string
declare function strformat(str: string, ...items: any[]): string
declare function str_explode(str: string, separator: string, plain: any): string[]
declare function parse_list(ini: TODO, key: string, val: string, convert: boolean): Record<TODO, TODO>
declare function parse_names(str: string): string[]
declare function parse_key_value(str: string): Record<string, any>
declare function parse_nums(str: string): number[]
declare function parse_func(sec: string, param: string, ...args: any[]): TODO | null
declare function starts_with(str: string, with_text: string): boolean
declare function has_translation(str: string): boolean
declare function get_param_string(src_str: string, obj: CGameObject): LuaMultiReturn<[string, boolean]>
declare function execute_func(file: any, func: any, ...args: any[]): any
declare function reset_action(npc: CGameObject, script_name: string): void
declare function stop_playing_sound(obj: CGameObject): void
declare function action(obj: CGameObject, ...args: any[]): any
declare function action_first(obj: CGameObject, ...args: any[]): any
declare function interrupt_action(npc: CGameObject, script_name: string): void
declare function get_clsid(obj: CGameObject): number
declare function set_save_marker(netp: TODO, mode: 'save' | 'load', check: boolean, prefix: string): void
declare const ActorMoveStates: {
  mcFwd: 1
  mcBack: 2
  mcLStrafe: 4
  mcRStrafe: 8
  mcCrouch: 16
  mcAccel: 32
  mcTurn: 64
  mcJump: 128
  mcFall: 256
  mcLanding: 512
  mcLanding2: 1024
  mcClimb: 2048
  mcSprint: 4096
  mcLLookout: 8192
  mcRLookout: 16384
  //
  mcAnyMove: 15
  mcAnyAction: 1935
  mcAnyState: 6192
  mcLookout: 24576
}
type StringToNumber<T extends string> = T extends `${infer N extends number}` ? N : never
type ActorMoveState = (typeof ActorMoveStates)[keyof typeof ActorMoveStates]
declare function IsMoveState(state: keyof typeof ActorMoveStates, compare_state: number): boolean
declare function reload_ini_sys(): void
/**
 * May be an extended version of ini_file. Read any ltx file
 * @customConstructor ini_file_ex
 */
declare class ini_file_ex {
  constructor(filename: string, advanced_mode?: boolean)
  cache: Record<TODO, TODO>
  collect_section(section: string): Record<string, any>
  fname: string
  get_sections<KT extends boolean>(keytable?: boolean): KT extends true ? Record<string, true> : string[]
  ini: system_ini
  line_exist(section: string, key: string): boolean
  r_bool_ex(section: string, key: string, def_val: boolean): boolean
  r_float_ex(section: string, key: string): string | null
  r_list(section: string, key: string, def_val: boolean): string[]
  r_mult(section: string, key: string, ...args: any[]): TODO
  r_string_ex(section: string, key: string): string | null
  r_string_to_condlist(section: string, key: string, def_val?: any): Record<TODO, TODO> | null
  r_value(section: string, key: string, _type: number, def_val: any): string | null
  remove_line(section: string, key: string): void
  save(): void
  section_exist(section: string): boolean
  w_value(section: string, key: string, val: any, comment?: string): void
}
declare const INISYS_CACHE: LuaTable
declare function SYS_GetParam(_type: number, section: string, param: string, def_val: any): any
declare function is_empty(table: LuaTable): boolean
declare function is_not_empty(table: LuaTable): boolean
declare function iempty_table(table: LuaTable): LuaTable
declare function empty_table(table: LuaTable): Record<string, null>
declare function size_table(table: LuaTable): number
declare function random_key_table(table: LuaTable): any | null
declare function copy_table(to: LuaTable, from: LuaTable): void
declare function dup_table<T extends LuaTable>(from: T): T
declare function swap(arr: LuaTable, index_1: number, index_2: number): void
declare function shuffle_table(table: LuaTable): void
declare function invert_table(table: LuaTable): void
declare function t2k_table(table: LuaTable): void
declare function k2t_table(table: LuaTable): void
/** @deprecated unused */
declare function print_table(table: LuaTable): void
declare function store_table(table: LuaTable, subs?: string): void
declare function spairs(table: AnyTable, order?: (table: AnyTable, a: any, b: any) => any): () => any
declare const VEC_ZERO: vector
declare const VEC_X: vector
declare const VEC_Y: vector
declare const VEC_Z: vector
/** Subtract vectors without mutating them */
declare function vec_sub(vec_1: vector, vec_2: vector): vector
/** Add vectors without mutating them */
declare function vec_add(vec_1: vector, vec_2: vector): vector
/** Set vector without mutating the original */
declare function vet_set(vec: vector): vector
declare const BoneID: {
  bip01_pelvis: 2
  bip01_l_thigh: 3
  bip01_l_calf: 4
  bip01_l_foot: 5
  bip01_r_thigh: 7
  bip01_r_calf: 8
  bip01_r_foot: 9
  bip01_spine: 11
  bip01_spine1: 12
  bip01_spine2: 13
  bip01_neck: 14
  bip01_head: 15
  eye_left: 16
  eye_right: 17
  eyelid_1: 18
  jaw_1: 19
  bip01_l_clavicle: 20
  bip01_l_upperarm: 21
  bip01_l_forearm: 22
  bip01_l_hand: 23
}
declare const HitTypeID: {
  Burn: 0
  Shock: 1
  ChemicalBurn: 2
  Radiation: 3
  Telepatic: 4
  Wound: 5
  FireWound: 6
  Strike: 7
  Explosion: 8
  Wound_2: 9
  LightBurn: 10
}
declare const BoosterID: {
  HpRestore: 0
  PowerRestore: 1
  RadiationRestore: 2
  BleedingRestore: 3
  MaxWeight: 4
  RadiationProtection: 5
  TelepaticProtection: 6
  ChemicalBurnProtection: 7
  BurnImmunity: 8
  ShockImmunity: 9
  RadiationImmunity: 10
  TelepaticImmunity: 11
  ChemicalBurnImmunity: 12
  ExplImmunity: 13
  StrikeImmunity: 14
  FireWoundImmunity: 15
  WoundImmunity: 16
  MaxCount: 17
}
declare const _ALIFE_CNT: number
declare const _ALIFE_WARNING: number
declare const _ALIFE_CACHE: LuaTable
declare const _ALIFE_CACHE_RECORD: boolean
declare const _ALIFE_UNREGISTER: LuaTable
declare function alife_object(id: number): CseAbstract | void
declare function alife_create(
  section: string,
  pos: vector,
  level_vertex_id: number,
  game_vertex_id: number,
  parent_id?: number,
  state?: TODO
): CseAbstract | null
declare function alife_create_item(
  section: string,
  npc: CGameObject,
  table?: Partial<{
    ammo: number
    cond: number
    uses: number
  }>
): void
declare function alife_process_item(
  section: string,
  id: number,
  table: Partial<{
    ammo: number
    cond: number
    uses: number
  }>
): void
declare function alife_release(se_obj: CseAbstract, msg?: string): void
declare function alife_release_id(id: number, msg?: string): void
declare function alife_clone_weapon(se_obj: CseAbstract, section: string, parent_id: number): CseAbstract | void
declare function alife_character_community(se_obj: CseAbstract): Faction | void
declare function alife_on_limit(): boolean
declare function alife_record(se_obj: CseAbstract, state?: boolean): void
declare function alife_first_update(): void
declare function create_ammo(
  section: string,
  pos: vector,
  level_vertex_id: number,
  game_vertex_id: number,
  parent_id?: number,
  num_of_bullets?: number
): LuaTable<number, CseAbstract>
declare function SetSwitchDistance(dist: number): void
declare function get_object_community(obj: CGameObject | CseAbstract): ReturnType<typeof alife_character_community>
declare function character_community(obj: CGameObject): Faction
declare function get_actor_true_community(): Faction
declare function set_actor_true_community(comm: Faction, now: boolean): void
declare function get_object_squad(obj: CGameObject): CseAlifeOnlineOfflineGroup | null
declare function set_inactivate_input_time(delta_time: number): void
declare function npc_in_actor_frustrum(npc: CGameObject): boolean
declare function change_team_squad_group(se_obj: CseAbstract, team: TODO, squad: TODO, group: TODO): void
declare function get_speaker(safe: boolean, all: boolean): CGameObject
declare function distance_between(obj_1: CGameObject, obj_2: CGameObject): number
declare function has_alife_info(info_portion: string): boolean
declare function give_info(info_portion: string): void
declare function disable_info(info_portion: string): void
declare function pstor_is_registered_type(value_type: any): boolean
/**
 * Storage for gameobjects using `db.storage`
 * @param val Lua-supported value, `gamedata` is not allowed
 */
declare function save_var(obj: CGameObject | null, var_name: string, val: boolean | string | number): void
/** @returns value of a variable for a gameobject from `db.storage` */
declare function load_var(obj: CGameObject | null, var_name: string, def_val: boolean | string | number): any
declare function save_ctime(obj: CGameObject | null, var_name: string, val: boolean | string | number): void
declare function load_ctime(obj: CGameObject | null, var_name: string): any
declare function se_save_var(id: string, name: string, varname: string, val: any): void
declare function se_load_var(id: string, name: string, varname: string): any
//
// story id handlers
//
declare function get_story_se_object(story_id: string): CseAbstract | null
declare function get_story_se_item(story_id: string): CseAbstract | null
/** @returns gameobject with this story ID on the current level */
declare function get_story_object(story_id: string): CGameObject | null
/** @returns story ID of a gameobject */
declare function get_object_story_id(id: string): string | null
declare function get_story_object_id(story_id: string): number | null
/** @deprecated duplicate of {@link get_story_se_object} */
declare function get_story_squad(story_id: string): CseAbstract | null
declare function unregister_story_object_by_id(obj_id: string): void
/**  @deprecated duplicate of {@link get_story_object} */
declare function level_object_by_sid(story_id: string): CGameObject | null
declare function id_by_sid(story_id: string): number | null
//
// event storage
//
declare const _EVENTS: LuaTable
declare function GetEvent(key: string, value: string): any
declare function SetEvent(key: string, val_1: string, val_2?: any): void
declare function IsAzazelMode(): boolean
declare function IsHardcoreMode(): boolean
declare function IsStoryMode(): boolean
declare function IsSurvivalMode(): boolean
declare function IsAgonyMode(): boolean
declare function IsTimerMode(): boolean
declare function IsCampfireMode(): boolean
declare function IsWarfare(): boolean
declare function IsTestMode(): boolean
declare function IsStoryPlayer(): boolean
//
// class testing
//
declare function IsStalker(obj: CGameObject): boolean
declare function IsStalker(obj: null, clsid: number): boolean
declare function IsMonster(obj: CGameObject): boolean
declare function IsMonster(obj: null, clsid: number): boolean
declare function IsAnomaly(obj: CGameObject): boolean
declare function IsAnomaly(obj: null, clsid: number): boolean
declare function IsTrader(obj: CGameObject): boolean
declare function IsTrader(obj: null, clsid: number): boolean
declare function IsCar(obj: CGameObject): boolean
declare function IsCar(obj: null, clsid: number): boolean
declare function IsHelicopter(obj: CGameObject): boolean
declare function IsHelicopter(obj: null, clsid: number): boolean
declare function IsInvbox(obj: CGameObject): boolean
declare function IsInvbox(obj: null, clsid: number): boolean
/** @returns object is level changer */
declare function isLc(obj: CGameObject): boolean
declare function IsWounded(obj: CGameObject): boolean
declare function IsOutfit(obj: CGameObject): boolean
declare function IsOutfit(obj: null, clsid: number): boolean
declare function IsHeadgear(obj: CGameObject): boolean
declare function IsHeadgear(obj: null, clsid: number): boolean
declare function IsExplosive(obj: CGameObject): boolean
declare function IsExplosive(obj: null, clsid: number): boolean
declare function IsPistol(obj: CGameObject): boolean
declare function IsPistol(obj: null, clsid: number): boolean
declare function IsMelee(obj: CGameObject): boolean
declare function IsMelee(obj: null, clsid: number): boolean
declare function IsSniper(obj: CGameObject): boolean
declare function IsSniper(obj: null, clsid: number): boolean
declare function IsLauncher(obj: CGameObject): boolean
declare function IsLauncher(obj: null, clsid: number): boolean
declare function IsShotgun(obj: CGameObject): boolean
declare function IsShotgun(obj: null, clsid: number): boolean
declare function IsRifle(obj: CGameObject): boolean
declare function IsRifle(obj: null, clsid: number): boolean
declare function IsWeapon(obj: CGameObject): boolean
declare function IsWeapon(obj: null, clsid: number): boolean
declare function IsAmmo(obj: CGameObject): boolean
declare function IsAmmo(obj: null, clsid: number): boolean
declare function IsGrenade(obj: CGameObject): boolean
declare function IsGrenade(obj: null, clsid: number): boolean
declare function IsBolt(obj: CGameObject): boolean
declare function IsBolt(obj: null, clsid: number): boolean
declare function IsArtefact(obj: CGameObject): boolean
declare function IsArtefact(obj: null, clsid: number): boolean
//
// items lookup table
//
declare const ITM: LuaTable
declare function IsItem(_type: string, section: string, obj: CGameObject): boolean
declare function GetItemList(_type: string): LuaTable
declare function Parse_ITM(): void
/**
 * Adds a console command to the game console. Game must have debug mode enabled
 *
 * @returns registration success
 */
declare function add_console_command(name: string, func: () => any): boolean
declare function get_player_level_id(): number | void
/** @returns updated best weapon */
declare function update_best_weapon(
  npc: CGameObject,
  wpn: CGameObject,
  flags: {
    gun_id: number | null
  }
): CGameObject | void
declare var SIMBOARD: {
  create_squad(smart: CseAbstract, squad_id: number): CseAlifeOnlineOfflineGroup
  create_squad_at_named_location(location: string, squad_id: string): CseAlifeOnlineOfflineGroup | null
  assign_squad_to_smart(squad: CseAlifeOnlineOfflineGroup, _0: TODO): void
  get_smart_population(smart: CseAbstract): number
  get_smart_by_name(name: string): CseAbstract | null
  squads: Record<number, CseAlifeOnlineOfflineGroup>
  smarts: Record<
    number,
    {
      squads: Record<number, CGameObject>
    }
  >
}
type MData = Record<string, any>
/**
 * Marshal library. Save serializable Lua data to the save file. See the encoded save data in the .scoc file. Register for `load_state` and `save_state` game events to interact with Marshall library, load and save data you need
 * @example
 * ```ts
 * let last_time_ate_beans: string | null = null
 *
 * type MyMData = MData & {
 *   last_time_ate_beans: string | null
 * }
 *
 * function load_state( m_data: MyMData) {
 *   last_time_ate_beans = m_data.last_time_ate_beans
 * }
 *
 * function on_game_start() {
 *   RegisterScriptCallback('load_state', load_state)
 * }
 * ```
 */
declare var m_data: MData
