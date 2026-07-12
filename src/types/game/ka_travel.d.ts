/** @noSelfInFile */

declare namespace ka_travel {
  /** Maps a travel destination key to its target smart-terrain name. */
  export const smarts: Record<string, string>
  export function can_travel_to_agroprom_hard(a: CGameObject, b: CGameObject): boolean
  export function can_travel_to_agroprom_soft(a: CGameObject, b: CGameObject): boolean
  export function can_travel_to_bar_hard(a: CGameObject, b: CGameObject): boolean
  export function can_travel_to_bar_soft(a: CGameObject, b: CGameObject): boolean
  export function can_travel_to_city_hard(a: CGameObject, b: CGameObject): boolean
  export function can_travel_to_city_soft(a: CGameObject, b: CGameObject): boolean
  export function can_travel_to_cordon_hard(a: CGameObject, b: CGameObject): boolean
  export function can_travel_to_cordon_soft(a: CGameObject, b: CGameObject): boolean
  export function can_travel_to_jupiter_hard(a: CGameObject, b: CGameObject): boolean
  export function can_travel_to_jupiter_soft(a: CGameObject, b: CGameObject): boolean
  export function can_travel_to_swamp_hard(a: CGameObject, b: CGameObject): boolean
  export function can_travel_to_swamp_soft(a: CGameObject, b: CGameObject): boolean
  export function can_travel_to_warehouses_hard(a: CGameObject, b: CGameObject): boolean
  export function can_travel_to_warehouses_soft(a: CGameObject, b: CGameObject): boolean
  export function can_travel_to_yantar_hard(a: CGameObject, b: CGameObject): boolean
  export function can_travel_to_yantar_soft(a: CGameObject, b: CGameObject): boolean
  export function can_travel_to_zaton_hard(a: CGameObject, b: CGameObject): boolean
  export function can_travel_to_zaton_soft(a: CGameObject, b: CGameObject): boolean
  export function text_travel_to_agroprom(a: CGameObject, b: CGameObject): string
  export function text_travel_to_bar(a: CGameObject, b: CGameObject): string
  export function text_travel_to_city(a: CGameObject, b: CGameObject): string
  export function text_travel_to_cordon(a: CGameObject, b: CGameObject): string
  export function text_travel_to_jupiter(a: CGameObject, b: CGameObject): string
  export function text_travel_to_swamp(a: CGameObject, b: CGameObject): string
  export function text_travel_to_warehouses(a: CGameObject, b: CGameObject): string
  export function text_travel_to_yantar(a: CGameObject, b: CGameObject): string
  export function text_travel_to_zaton(a: CGameObject, b: CGameObject): string
  export function travel_to_agroprom(a: CGameObject, b: CGameObject): void
  export function travel_to_bar(a: CGameObject, b: CGameObject): void
  export function travel_to_city(a: CGameObject, b: CGameObject): void
  export function travel_to_cordon(a: CGameObject, b: CGameObject): void
  export function travel_to_jupiter(a: CGameObject, b: CGameObject): void
  export function travel_to_swamp(a: CGameObject, b: CGameObject): void
  export function travel_to_warehouses(a: CGameObject, b: CGameObject): void
  export function travel_to_yantar(a: CGameObject, b: CGameObject): void
  export function travel_to_zaton(a: CGameObject, b: CGameObject): void
}
