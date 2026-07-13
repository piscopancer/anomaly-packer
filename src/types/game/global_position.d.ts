/** @noSelfInFile */

declare namespace global_position {
  export const level_offsets: AnyTable
  export function from(object_or_position: vector | CseAbstract, level_id?: number): vector
}
