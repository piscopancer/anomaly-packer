/** @noSelfInFile */

declare namespace arszi_psy {
  export function actor_on_before_hit(s_hit: TODO): TODO
  export function actor_on_item_use(obj: TODO): void
  export function actor_on_sleep(hours: TODO): void
  export function actor_on_update(): void
  export function get_controller_tube_damage(obj_position: TODO, power: TODO): TODO
  export function get_distance(position_1: TODO, position_2: TODO): TODO
  export function get_ppe_intensity(): TODO
  export function get_psy_health(): TODO
  export function get_psy_health_regeneration(): TODO
  export function get_telepatic_protection_artefacts(): TODO
  export function get_telepatic_protection_booster(): TODO
  export function get_telepatic_protection_helmet(): TODO
  export function get_telepatic_protection_outfit(): TODO
  export function get_telepatic_protection_total(): TODO
  export function is_actor_zombied(): TODO
  export function is_controller(obj: TODO): TODO
  export function load_state(m_data: TODO): void
  export function manage_ppe_effects(): void
  export function manage_psy_bar(): void
  export function manage_psy_health(): void
  export function manage_sound_effects(): void
  export function manage_zombification(): void
  export function on_enemy_eval(obj: TODO, enemy: TODO, flags: TODO): void
  export function on_game_load(): void
  export function on_game_start(): void
  export function remove_all_psy_ppe_effects(): void
  export function save_state(m_data: TODO): void
  export function set_psy_health(amount: TODO): void
  export function show_message(msg: TODO): void
  export function show_message_news(message: TODO): void
  export function trace_this(to_trace: TODO): void
}
