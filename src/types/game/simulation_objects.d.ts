/** @noSelfInFile */

declare namespace simulation_objects {
  export const available_by_id: TODO
  export const base_smarts: TODO
  export const config: TODO
  export const object_registry: TODO
  export const object_registry_size: number
  export function evaluate_prior(target: CseAbstract, squad: CseAbstract): number
  export function get_props(se_obj: CseAbstract): void
  export function get_server_entity(id: number): CseAbstract | undefined
  export function is_on_the_actor_level(se_obj: CseAbstract): boolean
  export function is_on_the_linked_level(se_obj_1: CseAbstract, se_obj_2: CseAbstract): boolean
  export function is_on_the_nearby_level(se_obj_1: CseAbstract, se_obj_2: CseAbstract): boolean
  export function is_on_the_same_level(se_obj_1: CseAbstract, se_obj_2: CseAbstract): boolean
  export function on_game_start(): void
  export function register(se_obj: CseAbstract): void
  export function sim_dist_to(obj1: CseAbstract, obj2: CseAbstract): number
  export function unregister(se_obj: CseAbstract): void
}
