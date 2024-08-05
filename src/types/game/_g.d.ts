/** @noSelf */
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
 * Delayed action. If provided with a callback that takes params, such must be provided too.
 * @param event_id a unique identifier of your choice (could be your name, or something related to what is happening)
 * @param action_id a second unique identifier of your choice (what matters is that two time events should not have the same `event_id` & `action_id` pair)
 * @param action action that will be executed after delay. If action returns `true`, the time event gets destroyed, if `false`, the time event fill be fired again with the fresh timer
 * @tutorial read on [Modding Book](https://igigog.github.io/anomaly-modding-book/scripting/time_events.html)
 * @example kill 100 random NPCs after 5 seconds
 * ```ts
 * function kill_random_npcs(this: void, count: number) {
 *   // ...
 * }
 * CreateTimeEvent(0, 'kill_random_npcs', 5, kill_random_npcs, 100)
 * ```
 * */
declare function CreateTimeEvent<F extends (...args: any) => boolean>(
  this: void,
  event_id: number,
  action_id: string,
  delay_s: number,
  action: F,
  ...args: Parameters<F>
): void
/** @see {@link CreateTimeEvent} */
declare function ResetTimeEvent(this: void, event_id: number, action_id: string, new_delay_s: number): void
/** @see {@link CreateTimeEvent} */
declare function RemoveTimeEvent(this: void, event_id: number, action_id: string): void
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
declare function strformat(this: void, str: string, ...items: any[]): string
declare function exec_console_cmd(this: void, cmd: string): void
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
declare function random_choice<A>(this: void, ...args: A[]): A
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
  teleport_object(id: number, game_vertex_id: number, level_vertex_id: number, server_object: CseAbstract): void
  object(id: number): CseAbstract
  create(section: string, pos: vector, level_vertex_id: number, game_vertex_id: number, parent_id?: number): CseAbstract
  create_ammo(section: string): CseAbstract
  register(server_object: CseAbstract): void
  release(server_object: CseAbstract): void
  actor(): CseAlifeCreatureActor
}
// declare function Frect(this: void): {
//   set(x: number, y: number, w: number, h: number): any
// }
declare function ChangeLevel(this: void, position: vector, level_vertex_id: number, game_vertex_id: number, angle: vector): void
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
 * function load_state(this: void, m_data: MyMData) {
 *   last_time_ate_beans = m_data.last_time_ate_beans
 * }
 *
 * function on_game_start(this: void) {
 *   RegisterScriptCallback('load_state', load_state)
 * }
 * ```
 */
declare var m_data: MData

declare var TEST: {
  smart: Smarts
}
