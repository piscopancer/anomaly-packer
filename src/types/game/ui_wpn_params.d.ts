/** @noSelfInFile */

declare namespace ui_wpn_params {
  export function GetAccuracy(wpn_section: string, upgr_sections: string): number
  export function GetDamage(wpn_section: string, upgr_sections: string): number
  export function GetDamageMP(wpn_section: string, upgr_sections: string): number
  export function GetHandling(wpn_section: string, upgr_sections: string): number
  export function GetRPM(wpn_section: string, upgr_sections: string): number
  export function normalizeMP(val: number): number
  export function read_float(wpn_section: string, upgr_sections: string, param: string): number
  export function read_if_exist(section: Section, value: string, default_: number): number
}
