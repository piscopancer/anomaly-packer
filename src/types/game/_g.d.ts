/** @noSelf */
declare interface GameEvents {
  load_state(m_data: TODO): void
  save_state(m_data: TODO): void
  on_before_save_input(): void
  actor_before_death(): void
  actor_on_before_hit(shit: hit, bone_id: number, flags: TODO): void
  actor_on_footstep(material: string, power: number, hud_view: boolean, flags: TODO): void
  actor_on_update(binder: object_binder, delta_time: number): void
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
declare function CreateTimeEvent<F extends (...args: any) => any>(
  this: void,
  event_id: number,
  action_id: string,
  delay_s: number,
  action: F,
  ...args: Parameters<F>
): void
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
  create_squad(smart: cse_abstract, squad_id: number): cse_alife_online_offline_group
  create_squad_at_named_location(location: string, squad_id: string): cse_alife_online_offline_group | null
  assign_squad_to_smart(squad: cse_alife_online_offline_group, _0: TODO): void
  get_smart_population(smart: cse_abstract): number
  get_smart_by_name(name: string): cse_abstract | null
  squads: Record<number, cse_alife_online_offline_group>
  smarts: Record<
    number,
    {
      squads: Record<number, CGameObject>
    }
  >
}
