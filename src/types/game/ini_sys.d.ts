declare namespace ini_sys {
  export function r_string_ex(section: string, prop: string): string | null
  export function r_bool_ex(section: string, prop: string): boolean | null
  export function r_float_ex(section: string, prop: string): number | null
  export function r_u32(section: string, prop: string): number | null
  export function r_s32(section: string, prop: string): TODO
  export function section_exist(section: string): boolean | null
  export function section_for_each(cb: (section: string) => void): void
  export function line_count(section: string): number | null
}
