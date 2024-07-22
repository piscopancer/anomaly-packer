//#region functions

declare function tonumber(this: void, item: any): number
declare function tostring(this: void, item: any): string
declare function getmetatable(this: void, userdata: any): Record<string, any>
declare function type(this: void, obj: any): string

//#endregion

//#region vars

declare namespace math {
  export function random(this: void, min: number, max: number): number
}
declare var table: {
  concat(this: void, table: AnyTable, separator: string): string
}

//#endregion

//#region types

//#endregion
