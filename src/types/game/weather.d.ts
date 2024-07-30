/** @noSelfInFile */

declare namespace weather {
  export function get_value_numric(name: string): number
  export function get_value_vector(name: string): vector
  export function get_value_string(name: string): string
  export function pause(pause: boolean): void
  export function is_paused(): boolean
  export function set_value_numric(name: string, value: number): void
  export function set_value_vector(name: string, x: number, y: number, z: number, w?: number): void
  export function set_value_string(name: string, value: string): void
  export function reload(): void
  export function boost_value(name: string, value: number): void
  export function boost_reset(): void
  export function sun_time(h: number, m: number): void
}
