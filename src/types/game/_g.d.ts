/** @noSelfInFile */

declare const ini_sys: system_ini
declare function start_game_callback(): void
declare interface GameEvents {
  load_state(m_data: MData): void
  save_state(m_data: MData): void
  on_before_save_input(): void
  actor_before_death(): void
  actor_on_before_hit(shit: hit, bone_id: number, flags: TODO): void
  actor_on_footstep(material: string, power: number, hud_view: boolean, flags: TODO): void
  actor_on_update(binder: ObjectBinder, delta_time: number): void
  actor_on_jump(): void
  actor_on_land(landing_speed: number): void
  actor_on_first_update(): void
  actor_on_movement_changed(cmd: TODO): void
  actor_on_feeling_anomaly(anomaly: TODO, flags: TODO): void
  actor_on_item_before_use(item: CGameObject, flags: TODO): void
  actor_on_before_hit_belt(hit_table: TODO, power: number, type: TODO): void
  actor_on_hud_animation_mark(state: number, mark: string): void
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
  actor_on_weapon_before_fire(flags: TODO): void
  actor_on_foot_step(): void
  actor_on_weapon_fired(): void
  actor_on_weapon_jammed(): void
  actor_on_weapon_zoom_in(weapon: CGameObject): void
  actor_on_weapon_zoom_out(): void
  actor_on_weapon_magazine_empty(): void
  actor_on_weapon_lowered(): void
  actor_on_weapon_raised(): void
  squad_on_npc_death(squad: CseAlifeOnlineOfflineGroup, npc: CseAlifeTraderAbstract): void
  server_entity_on_unregister(squad: CseAlifeOnlineOfflineGroup, type: Suggest<'sim_squad_scripted'>): void
  npc_on_update(): void
  npc_on_death_callback(): void
  ActorMenu_on_mode_changed(mode: TODO, last_mode: TODO): void
  on_option_change(): void
  GUI_on_show(name: string, path: string): void
  on_screen_resolution_changed(): void
  on_key_press(key: number): void
  on_key_release(key: number): void
  on_key_hold(key: number): void
  on_mouse_wheel(vol: number): void
  on_mouse_move(x: number, y: number): void
  on_item_belt(item: CGameObject): void
  on_item_ruck(item: CGameObject): void
  on_item_slot(item: CGameObject): void
  select_inventory_item(item: CGameObject): void
  switch_torch(on: 0 | 1): void
  drop_item_in_box(item: CGameObject): void
  map_spot_menu_add_property(ui: { AddItem: (text: string) => void }, spot_id: string, level: string): void
  map_spot_menu_property_clicked(ui: { AddItem: (text: string) => void }, spot_id: string, level: string, clicked_property: string): void
  mouse_move(): void
  mouse_wheel(): void
  inventory_info(): void
  on_item_take(): void
  on_item_drop(): void
  task_state(): void
  trade_sell_buy_item(): void
  take_item_from_box(): void
  use_object(): void
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
declare const enum ActorMoveStates {
  'mcFwd' = 1 << 0,
  'mcBack' = 1 << 1,
  'mcLStrafe' = 1 << 2,
  'mcRStrafe' = 1 << 3,
  'mcCrouch' = 1 << 4,
  'mcAccel' = 1 << 5,
  'mcTurn' = 1 << 6,
  'mcJump' = 1 << 7,
  'mcFall' = 1 << 8,
  'mcLanding' = 1 << 9,
  'mcLanding2' = 1 << 10,
  'mcClimb' = 1 << 11,
  'mcSprint' = 1 << 12,
  'mcLLookout' = 1 << 13,
  'mcRLookout' = 1 << 14,
  //
  'mcAnyMove' = 15,
  'mcAnyAction' = 1935,
  'mcAnyState' = 6192,
  'mcLookout' = 24576,
}
type StringToNumber<T extends string> = T extends `${infer N extends number}` ? N : never
type ActorMoveState = StringToNumber<`${ActorMoveStates}`>
declare function IsMoveState(state: ActorMoveState, compare_state: number): boolean
declare function reload_ini_sys(): void
/** @customConstructor ini_file */
declare class ini_file {
  constructor(filename: string, advanced_mode?: boolean)
  save(): void
  r_value(section: string, key: string, _type: number, def_val: any): string | null
  w_value(section: string, key: string, val: any, comment?: string): void
}
/**
 * Adds a console command to the game console. Game must have debug mode enabled
 *
 * @returns registration success
 */
declare function add_console_command(name: string, func: () => any): boolean
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
declare function alife_create_item(
  section: string,
  npc: CGameObject,
  table?: Partial<{
    ammo: number
    cond: number
    uses: number
  }>
): void
/**
 * Storage for gameobjects using `db.storage`
 * @param val Lua-supported value, `gamedata` is not allowed
 */
declare function save_var(obj: CGameObject | null, var_name: string, val: boolean | string | number): void
/** @returns value of a variable for a gameobject from `db.storage` */
declare function load_var(obj: CGameObject | null, var_name: string, def_val: boolean | string | number): any
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
