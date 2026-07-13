/** @noSelfInFile */

declare namespace level_input {
  export function action_quick_load(dik: number, bind: number): boolean
  export function action_quick_save(dik: number, bind: number): boolean
  export function on_key_hold(dik: number, bind: number, dis: boolean): boolean
  export function on_key_press(dik: number, bind: number, dis: boolean): boolean
  export function on_key_release(dik: number, bind: number, dis: boolean): boolean
}
