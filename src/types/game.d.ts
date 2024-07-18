type TODO = any

//#region functions

declare function RegisterScriptCallback<E extends keyof GameEvents>(this: void, event: E, cb: GameEvents[E]): void
declare function UnregisterScriptCallback<E extends keyof GameEvents>(this: void, event: E, cb: GameEvents[E]): void
declare function SendScriptCallback<E extends keyof GameEvents>(this: void, event: E, ...args: Parameters<GameEvents[E]>): void
declare function CreateTimeEvent(ev_id: number, act_id: string, timer: number, cb: () => void, ...args: any[]): void
declare function printf(this: void, ...items: any[]): void
declare function strformat(str: string, ...items: any[]): string
declare function exec_console_cmd(cmd: string): void
/** @returns Current time in ms */
declare function time_global(): number
declare function vector(
  x: number,
  y: number,
  z: number
): {
  x: number
  y: number
  z: number
  set(x: number, y: number, z: number): typeof vector
  add(x: number, y: number, z: number): typeof vector
  sub(x: number, y: number, z: number): typeof vector
  distance_to(to: typeof vector): number
  distance_to_sqr(...arg: TODO[]): TODO
}
declare function alife(): {
  switch_distance(): number
  switch_distance(distance: number): void
  level_name(level_id: number): string
  level_id(): number
  teleport_object(id: number, game_vertex_id: number, level_vertex_id: number, server_object: ServerObjectBase): void
  object(id: number): ServerObjectBase
  create(section: string, pos: typeof vector, level_vertex_id: number, game_vertex_id: number, parent_id?: number): CseAbstract
  create_ammo(section: string): CseAbstract
  register(server_object: ServerObjectBase): void
  release(server_object: ServerObjectBase): void
  actor(): ServerObjectBase
}
declare function Frect(this: void): {
  set(x: number, y: number, w: number, h: number): any
}
declare function ChangeLevel(position: typeof vector, level_vertex_id: number, game_vertex_id: number, angle: typeof vector): void

//#endregion

//#region types

declare type GameEvents = {
  load_state(this: void): void
  save_state(this: void): void
  on_before_save_input(this: void): void
  actor_on_update(this: void): void
  actor_on_jump(this: void): void
  actor_on_first_update(this: void): void
  on_option_change(this: void): void
  GUI_on_show(this: void, name: string, path: string): void
  on_key_press(this: void, key: number): void
  on_key_release(this: void, key: number): void
  map_spot_menu_add_property(this: void, ui: { AddItem: (text: string) => void }, spot_id: string, level: string): void
  map_spot_menu_property_clicked(this: void, ui: { AddItem: (text: string) => void }, spot_id: string, level: string, clicked_property: string): void
}
type CseAbstract = TODO
type ServerObjectBase = {
  id: number
  section_name(): string
  direction: typeof vector
  position: typeof vector
  m_level_vertex_id: number
  m_game_vertex_id: number
}
type NpcServerObject = ServerObjectBase & {
  alive(): boolean
  character_community(): string
}
type SquadServerObject = {
  group_id: number
  remove_squad(): void
  remove_npc(id: number, _0: boolean): void
  squad_members: TODO[]
}
type GameObjectBase = {
  // https://www.amk-team.ru/forum/topic/7450-spravochnik-po-funkciyam-i-klassam/
  /** 0 ... 65535 */
  id(): number
  clsid(): number
  level_vertex_id(): number
  game_vertex_id(): number
  has_info(portion: string): boolean
  give_info_portion(portion: string): boolean
  disable_info_portion(portion: string): void
  /** Unique story id, @returns -1 (if not unique) */
  story_id(): number
  position(): typeof vector
  direction(): typeof vector
  section(): string
  /** XML name */
  profile_name(): string
  name(): string
  /** Id of object to which this object belongs. Used for items in inventories and boxes. @returns -1 (if no parent) */
  parent(): number
  mass(): number
  /** Center of physical shell */
  center(): typeof vector
}

type ItemGameObject = {
  condition(): number
  set_condition(condition: number): void
  weight(): number
  set_weight(weight: number): void
}

type ActorGameObject = StalkerGameObject & {
  set_actor_position(pos: typeof vector): void
  set_actor_direction(dir: number): void
  give_game_news(title: string, message: string, icon_ath: string, delay_ms: number, duration: number): void
  switch_to_trade(): void
  switch_to_talk(): void
  switch_to_upgrade(): void
  reload_weapon(): void
  hide_weapong(): void
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
  drop_item_and_teleport(item: GameObjectBase, pos: typeof vector): void
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
  unload_magazine(return_ammo: boolean): void
}

type Binder = {
  object: GameObjectBase
}

//#endregion

//#region vars

declare var DIK_keys: Record<`DIK_${string}`, number>
declare var game: {
  // translate_string(this: void, id: `${AddonId}_${keyof AddonTexts['eng']}`): string
}
declare var level: {
  add_pp_effector(name: string, _0: number, _1: boolean): void
  map_remove_object_spot(this: void, id: string, ...args: string[]): void
  map_add_object_spot(this: void, id: string, ...args: string[]): void
  get_time_hours(): number
  name(): string
  environment(): TODO
  object_by_id(id: number): GameObjectBase
  change_game_time(_0: number, _1: number, _2: number): void
}
declare var level_weathers: {
  get_weather_manager(this: void): {
    get_curr_weather(): any
  }
}
declare var alife_storage_manager: {}
declare var xr_conditions: {
  surge_started(): boolean
}
declare var axr_main: {
  weapon_is_zoomed: boolean
}
declare var xr_sound: {
  get_safe_sound_object(this: void, path: string): any
}
declare var psi_storm_manager: {
  is_started(): boolean
}
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
declare var utils_xml: {
  get_color(color: Color, to_code?: boolean): string
}
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
    give_game_news(title: string, message: string, icon_ath: string, delay_ms: number, duration: number): void
    money(): number
    give_money(sum: number): void
    give_info_portion(portion: string): void
  }
}
declare var dialogs: {
  break_dialog(first_speaker: TODO, second_speaker: TODO): void
  relocate_money_from_actor(first_speaker: TODO, second_speaker: TODO, sum: number): void
}
declare var game_relations: {
  is_factions_enemies(faction_1: string, faction_2: string): boolean
}
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
declare var ranks: {
  // get_obj_rank_name(this: void, obj: ): string
}
declare var game_difficulties: {
  get_eco_factor(this: void, factor: 'money_loots'): number
}

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
type Align = 't' | 'r' | 'b' | 'l' | 'c'
type Texture = {
  x?: number
  y?: number
  width?: number
  height?: number
  stretch?: 0 | 1
}

//#endregion
