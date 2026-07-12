/** @noSelfInFile */

declare namespace axr_keybind {
  export function bind(dik_or_bind: string | number, functor: any, alias: string): void
  export function on_game_start(): void
  export function on_key_hold(key: number): void
  export function on_key_press(key: number): void
  export function on_key_release(key: number): void
  export function try_key_action(key: number, typ: string): void
  export function unbind(dik_or_bind: string | number, functor: any): void
}
