/** @noSelfInFile */

declare namespace xr_animpoint_predicates {
  export const animpoint_sit: AnyTable
  export const animpoint_sit_ass: AnyTable
  export const animpoint_sit_knee: AnyTable
  export const associations: AnyTable
  export function animpoint_predicate_bread(id: number): boolean
  export function animpoint_predicate_energy(id: number): boolean
  export function animpoint_predicate_guitar(id: number, camp: AnyTable): boolean
  export function animpoint_predicate_harmonica(id: number, camp: AnyTable): boolean
  export function animpoint_predicate_kolbasa(id: number): boolean
  export function animpoint_predicate_need_sleep(id: number, camp: AnyTable): boolean
  export function animpoint_predicate_roast(id: number, camp: AnyTable): boolean
  export function animpoint_predicate_use_pda(id: number): boolean
  export function animpoint_predicate_vodka(id: number): boolean
  export function animpoint_predicate_weapon(id: number): boolean
  export function const_predicate_true(id: number): boolean
}
