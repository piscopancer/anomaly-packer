/** @noSelfInFile */

declare namespace logic_enforcer {
  export function actor_on_update(): void
  export function assign(id: number, ini_filename: string, logic_name: string, section_name: string, tags: AnyTable): void
  export function load_state(m_data: AnyTable): void
  export function on_game_start(): void
  export function printl(frmt: string, ...args: any[]): void
  export function remove(id: number, tag: string): void
  export function save_state(m_data: AnyTable): void
}
