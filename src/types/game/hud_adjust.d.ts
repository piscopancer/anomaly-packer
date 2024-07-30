/** @noSelfInFile */

declare namespace hud_adjust {
  export function enabled(state: boolean): void
  export function set_vector(off: number, idx: number, x: number, y: number, z: number): void
  export function set_value(name: string, value: number): void
  export function remove_hud_model(section: string): void
}
