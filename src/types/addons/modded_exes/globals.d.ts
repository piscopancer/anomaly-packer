/** @noSelfInFile */

declare namespace bit {
  export function tobit(n: number): void
  export function tohex(n: number): void
  export function bnot(n: number): void
  export function band(n_1: number, n_2: number): void
  export function bor(n_1: number, n_2: number): void
  export function bxor(n_1: number, n_2: number): void
  export function lshift(n_1: number, n_2: number): void
  export function rshift(n_1: number, n_2: number): void
  export function rol(n: number): void
  export function ror(n: number): void
}

declare namespace string {
  export function trim(str: string): string
  export function trim_l(str: string): string
  export function trim_r(str: string): string
  export function trim_w(str: string): string
}

declare namespace table {
  export function keys<T extends AnyTable>(t: T): keyof T[]
  export function values<T extends AnyTable>(t: T): T[keyof T][]
  export function size(t: AnyTable): number
  export function random<T extends AnyTable>(t: T): T[keyof T]
}

declare const MODDED_EXES_VERSION: number
declare function get_modded_exes_version(): number
/** @returns all translated strings */
declare function get_string_table(): Record<string, string>
