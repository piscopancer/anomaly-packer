/** @noSelfInFile */

// WIP
declare function tonumber(item: any): number
declare function tostring(item: any): string
declare function getmetatable(userdata: any): Record<string, any>
declare function type(obj: any): string

declare namespace math {
  export function floor(value: number): number
  export function ceil(value: number): number
  export function random(min: number, max: number): number
}

declare namespace string {
  export function format(template: string, ...args: any[]): string
}

declare namespace table {
  export function concat(table: Record<string, any>, separator: string): string
}
