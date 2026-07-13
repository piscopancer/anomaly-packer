/** @noSelfInFile */

declare namespace item_knife {
  export function can_loot(monster: string): boolean
  export function degradate(): void
  export function get_condition(): number
  export function is_axe(): boolean
  export function is_equipped(): boolean
}
