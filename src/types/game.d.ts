type TODO = any
type TODO_TABLE = Record<string, any>
type Suggest<S extends string> = S | (string & {})

//#region classes

declare class vector {
  constructor(x: number, y: number, z: number)
  x: number
  y: number
  z: number
  set(x: number, y: number, z: number): vector
  add(x: number, y: number, z: number): vector
  sub(x: number, y: number, z: number): vector
  distance_to(to: vector): number
  distance_to_sqr(pos: vector): number
}

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
/** Adds a console command to the game console. This function should be called in `on_game_start` */
declare function add_console_command(this: void, name: string, func: () => any): void
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
declare function time_global(): number
declare function clamp(value: number, min: number, max: number): number
declare function random_choice<A>(...args: A[]): A | null
declare function random_number(min: number, max: number): number
declare function random_float(min: number, max: number): number
declare function trim(str: string): string
declare function str_explode(str: string, separator: string): string
declare function alife(this: void): {
  switch_distance(): number
  switch_distance(distance: number): void
  level_name(level_id: number): string
  level_id(): number
  teleport_object(id: number, game_vertex_id: number, level_vertex_id: number, server_object: ServerObjectBase): void
  object(id: number): ServerObjectBase
  create(section: string, pos: vector, level_vertex_id: number, game_vertex_id: number, parent_id?: number): CseAbstract
  create_ammo(section: string): CseAbstract
  register(server_object: ServerObjectBase): void
  release(server_object: ServerObjectBase): void
  actor(): ServerObjectBase
}
// declare function Frect(this: void): {
//   set(x: number, y: number, w: number, h: number): any
// }
declare function ChangeLevel(position: vector, level_vertex_id: number, game_vertex_id: number, angle: vector): void
declare function alife_create_item(
  this: void,
  section: string,
  npc: NpcGameObject,
  table?: Partial<{
    ammo: number
    cond: number
    uses: number
  }>
): void

//#endregion

//#region enums

declare enum TaskState {
  Fail = 0,
  InProgress = 1,
  Completed = 2,
  Dummy = -1,
}

//#endregion

//#region types

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
  actor_on_before_hit(
    this: void,
    shit: {
      draftsman: TODO
      power: TODO
      type: TODO
    },
    bone_id: number,
    flags: TODO_TABLE
  ): void
  actor_on_footstep(this: void, material: string, power: number, hud_view: boolean, flags: TODO_TABLE): void
  actor_on_update(this: void, binder: Binder, delta_time: number): void
  actor_on_jump(this: void): void
  actor_on_land(this: void, landing_speed: number): void
  actor_on_first_update(this: void): void
  actor_on_movement_changed(this: void, cmd: TODO): void
  actor_on_weapon_before_fire(this: void, flags: TODO_TABLE): void
  actor_on_feeling_anomaly(this: void, anomaly: TODO, flags: TODO_TABLE): void
  actor_on_item_before_use(this: void, item: ItemGameObject, flags: TODO_TABLE): void
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
    obj: GameObjectBase | null
  ): void
  ActorMenu_on_mode_changed(this: void, mode: TODO, last_mode: TODO): void
  on_option_change(this: void): void
  GUI_on_show(this: void, name: string, path: string): void
  on_screen_resolution_changed(this: void): void
  on_key_press(this: void, key: number): void
  on_key_release(this: void, key: number): void
  on_key_hold(this: void, key: number): void
  on_mouse_wheel(this: void, vol: number): void
  on_mouse_move(this: void, x: number, y: number): void
  on_item_belt(this: void, item: ItemGameObject): void
  on_item_ruck(this: void, item: ItemGameObject): void
  on_item_slot(this: void, item: ItemGameObject): void
  select_inventory_item(this: void, item: ItemGameObject): void
  switch_torch(this: void, on: 0 | 1): void
  drop_item_in_box(this: void, item: ItemGameObject): void
  map_spot_menu_add_property(this: void, ui: { AddItem: (text: string) => void }, spot_id: string, level: string): void
  map_spot_menu_property_clicked(this: void, ui: { AddItem: (text: string) => void }, spot_id: string, level: string, clicked_property: string): void
}

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

type cse_alife_online_offline_group = cse_alife_dynamic_object &
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

//#region gameobject

type GameObjectBase = {
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
  profile_name(): string
  name(): string
  /** Id of object to which this object belongs. Used for items in inventories and boxes. @returns -1 (if no parent) */
  parent(): number
  mass(): number
  /** Center of physical shell */
  center(): vector
}
type ItemGameObject = {
  condition(): number
  set_condition(condition: number): void
  weight(): number
  set_weight(weight: number): void
}
type ActorGameObject = StalkerGameObject & {
  set_actor_position(pos: vector): void
  set_actor_direction(dir: number): void
  give_game_news(title: string, message: string, icon_ath: string, delay_ms: number, duration: number): void
  switch_to_trade(): void
  switch_to_talk(): void
  switch_to_upgrade(): void
  reload_weapon(): void
  hide_weapong(): void
  disable_hit_marks(_0: boolean): void
  get_task_state(task_id: string): TaskState
  set_task_state(state: TaskState, task_id: string): void
  // give_task():void
}
/** Stalker or mutant */
type NpcGameObject = GameObjectBase & {
  accuracy(): number
  kill(by: NpcGameObject): void
  death_time(): number
  get_bleeding(): number
  fov(): number
  set_fov(fov: number): void
  /** Distance of sight */
  range(): number
  set_range(range: number): void
  iterate_inventory(iterator: (npc: NpcGameObject, item: ItemGameObject) => void, npc: NpcGameObject): void
  max_health(): number
  set_sight(target: GameObjectBase): void
}
/** Stalker only, including actor */
type StalkerGameObject = NpcGameObject & {
  active_slot(): number
  make_item_active(item: ItemGameObject): void
  item_in_slot(slot: number): ItemGameObject
  activate_slot(slot: number): void
  active_item(): ItemGameObject
  object_count(): number
  object(section_or_index: string | number): ItemGameObject
  inventory_for_each(iterator: (item: ItemGameObject, npc: NpcGameObject) => void): void
  team(): number
  squad(): number
  group(): number
  rank(): number
  character_rank(): number
  set_character_rank(rank: number): void
  character_name(): string
  character_icon(): string
  character_community(): string
  set_character_community(comm: string, _0: 0, _1: 0): void
  money(): number
  transfer_money(sum: number, to: StalkerGameObject): void
  give_money(sum: number): void
  drop_item(item: GameObjectBase): void
  drop_item_and_teleport(item: GameObjectBase, pos: vector): void
  eat(food: ItemGameObject): void
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
}
type WeaponGameObject = GameObjectBase & {
  /** Completely remove loaded ammo from the magazine. Does not return ammo to the inventory */
  get_ammo_total(): void
  get_ammo_in_magazine(): number
  set_ammo_elapsed(count: number): void
  unload_magazine(keep_ammo: boolean): void
  force_unload_magazine(keep_ammo: boolean): void
}
type FoodGameObject = GameObjectBase & {
  set_remaining_uses(uses: number): void
  get_remaining_uses(): number
  get_max_uses(): number
}

//#endregion

type Binder = {
  object: GameObjectBase
}
type Align = 't' | 'r' | 'b' | 'l' | 'c'
type Texture = {
  x?: number
  y?: number
  width?: number
  height?: number
  stretch?: 0 | 1
}

//#endregion

//#region vars

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
  r_string_ex(section: string, param: string): string | null
  r_bool_ex(section: string, param: string): boolean | null
  r_float_ex(section: string, param: string): number | null
  r_u32(section: string, param: string): number | null
  r_s32(section: string, param: string): TODO
  section_exist(section: string): boolean | null
  section_for_each(cb: (section: string) => void): void
  line_count(section: string): number | null
}
declare var DIK_keys: Record<`DIK_${string}`, number>
declare var SIMBOARD: {
  create_squad(smart: ServerObjectBase, squad_id: number): SquadServerObject
  create_squad_at_named_location(location: string, squad_id: string): SquadServerObject | null
  assign_squad_to_smart(squad: SquadServerObject, _0: TODO): void
  get_smart_population(smart: ServerObjectBase): number
  get_smart_by_name(name: string): ServerObjectBase | null
  squads: Record<number, SquadServerObject>
}

// modules

declare var actor_effects: TODO
declare var actor_menu: {
  set_msg(type: 1 | 2 | 3, message: string, seconds?: number, color?: string): void
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
      object: GameObjectBase
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
  actor: ActorGameObject & {
    // object(id: string): GameObject
    game_vertex_id(): number
    level_vertex_id(): number
    health: number
    change_health(by: number): void
    radiation: number
    bleeding: number
    psy_health: number
    active_item(): any
    active_detector(): any
    active_slot(): number
    item_in_slot(slot: number): any
    give_game_news(caption: string, text: string, texture: string, delay_ms: number, duration: number, type?: 0 | 1): void
    give_talk_message2(caption: string, text: string, texture: string, template: Suggest<'iconed_answer_item'>): void
    transfer_item(item: ItemGameObject, to: GameObjectBase): void
    money(): number
    give_money(sum: number): void
    give_info_portion(portion: string): void
  }
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
declare var game: {
  translate_string<Id extends string>(this: void, id: Id): string
}
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
  name(this: void): string
  get_time_hours(this: void): number
  environment(): TODO
  rain_factor(): number | null
  change_game_time(this: void, minutes: number, hours: number, days: number): void
  object_by_id(this: void, id: number): GameObjectBase
  add_pp_effector(name: string, _0: number, _1: boolean): void
  add_cam_effector(this: void, path: string, _0: number, _1: boolean, _2: string, _3: number, _4: string): void
  map_remove_object_spot(this: void, id: string, ...args: string[]): void
  map_add_object_spot(this: void, id: string, ...args: string[]): void
  send(this: void, net_packet: TODO, _0: boolean): void
  enable_input(this: void): void
  disable_input(this: void): void
  vertex_id(this: void, position: vector): number
  vertex_in_direction(this: void, level_vertex_id: number, direction: vector, distance: number): number
  vertex_position(this: void, vertex_id: number): vector
  // vertex_id_by_pos(pos: vector): number
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
