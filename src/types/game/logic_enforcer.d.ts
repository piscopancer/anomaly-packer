/** @noSelfInFile */

declare namespace logic_enforcer {
  export function actor_on_update(): void
  export function assign(id: TODO, ini_filename: TODO, logic_name: TODO, section_name: TODO, tags: TODO): void
  export function load_state(m_data: TODO): void
  export function on_game_start(): void
  export function printl(frmt: TODO, ...args: TODO[]): void
  export function remove(id: TODO, tag: TODO): void
  export function save_state(m_data: TODO): void
}
