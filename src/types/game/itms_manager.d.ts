/** @noSelfInFile */

declare namespace itms_manager {
  export const ini_manager: system_ini
  export const ini_container: system_ini
  export const ini_parts: system_ini
  export const ini_craft: system_ini
  export const ini_death: system_ini
  export const ini_reward: system_ini
  /** Artefact-container definitions collected from `ini_container`. */
  export const itms_arty_container: AnyTable
  export const n: number
  export const item_rewards: AnyTable
  export const item_combine: AnyTable
  export function relocate_item_to_actor(actor: CGameObject, npc: CGameObject, section: Section, count: number): void
  export function relocate_item_from_actor(actor: CGameObject, npc: CGameObject, section: Section, amount: number): void

  export function on_game_start(): void
  export function actor_on_item_before_use(obj: CGameObject, flags: AnyTable): void
  export function actor_on_first_update(): void
  export function actor_on_item_drop(obj: CGameObject): void
  export function actor_on_item_use(obj: CGameObject): void
  export function actor_on_item_take(obj: CGameObject): void
  export function dropdrop_ArtyContainer(obj_1: CGameObject, obj_2: CGameObject, sec_1: string, sec_2: string): void
  export function dropdrop_Basic_Combination(obj_1: CGameObject, obj_2: CGameObject, sec_1: string, sec_2: string): void
  export function ActorMenu_on_item_drag_drop(obj_1: CGameObject, obj_2: CGameObject, slot_from: number, slot_to: number): void
  export function ActorMenu_on_item_focus_receive(obj: CGameObject): void
  export function save_state(m_data: AnyTable): boolean
  /** Inventory context-menu label (translated string). */
  export function menu_open(itm: CGameObject): string
  export function menu_unpack(itm: CGameObject): string
  export function menu_play(itm: CGameObject): string
  export function menu_place(obj: CGameObject): string
  export function use_package(obj: CGameObject): void
  export function use_package_random(obj: CGameObject): void
  export function use_deployable_mgun(obj: CGameObject): void
  export function use_guitar(obj: CGameObject): void
  export function use_harmonica(obj: CGameObject): void
  export function use_arty_container(obj: CGameObject): void
  export function use_watch(obj: CGameObject): void
  export function use_place(obj: CGameObject): void
  export function actor_on_trade(obj: CGameObject, sell_bye: boolean, money: number): void
  export function actor_item_take(obj: CGameObject): void
  export function npc_on_item_take_from_box(npc: CGameObject, box: CGameObject, item: CGameObject): void
  export function new_game_equippment(): boolean
  export function bolt_manager(): boolean
  export function give_item_reward(num_of_items: number): boolean
  export function send_itm_msg(sec: Section): void
  export function extract_upgr_tools(t1: AnyTable, current_grp: string): void
  export function play_item_sound(item: CGameObject, vol: number): void
  export function get_item_processor(): ItemProcessor
  export function process_item(...args: any[]): void
  /** Spawns an item; returns the created server object(s), or `nil`. */
  export function create_item(...args: any[]): CseAbstract | AnyTable | undefined
  export function generate_boosters_list(): void
}

/**
 * Deferred item spawner/processor (`itms_manager.get_item_processor()`).
 * @customConstructor ItemProcessor
 */
declare class ItemProcessor {
  constructor()
  update(): void
  /** @returns the created server object(s), or `nil` */
  Create_Item(section: Section, owner?: CGameObject, t?: AnyTable): CseAbstract | AnyTable | undefined
  Process_Item(section: Section, id: number, t?: AnyTable): void
  Remove_Process(id: number, mark?: any, str?: string): void
  Random_Choice(arg: any[]): any
  Random_Condition(arg: number[]): number
  Extract_Uses(sec_d: string): LuaMultiReturn<[string, number]>
}
