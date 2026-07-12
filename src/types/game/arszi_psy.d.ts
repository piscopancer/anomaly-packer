/** @noSelfInFile */

declare namespace arszi_psy {
  export function actor_on_before_hit(s_hit: AnyTable): void
  export function actor_on_item_use(obj: CGameObject): void
  export function actor_on_sleep(hours: number): void
  export function actor_on_update(): void
  export function get_controller_tube_damage(obj_position: vector, power: number): number
  export function get_distance(position_1: vector, position_2: vector): number
  export function get_ppe_intensity(): number
  export function get_psy_health(): number
  export function get_psy_health_regeneration(): number
  export function get_telepatic_protection_artefacts(): number
  export function get_telepatic_protection_booster(): number
  export function get_telepatic_protection_helmet(): number
  export function get_telepatic_protection_outfit(): number
  export function get_telepatic_protection_total(): number
  export function is_actor_zombied(): boolean
  export function is_controller(obj: CGameObject): boolean
  export function load_state(m_data: AnyTable): void
  export function manage_ppe_effects(): void
  export function manage_psy_bar(): void
  export function manage_psy_health(): void
  export function manage_sound_effects(): void
  export function manage_zombification(): void
  export function on_enemy_eval(obj: CGameObject, enemy: CGameObject, flags: AnyTable): void
  export function on_game_load(): void
  export function on_game_start(): void
  export function remove_all_psy_ppe_effects(): void
  export function save_state(m_data: AnyTable): void
  export function set_psy_health(amount: number): void
  export function show_message(msg: string): void
  export function show_message_news(message: string): void
  export function trace_this(to_trace: any): void
}
