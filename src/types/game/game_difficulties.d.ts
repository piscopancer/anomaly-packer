/** @noSelfInFile */

declare namespace game_difficulties {
  export function get_eco_factor(factor: Suggest<'money_loots'>): number
  // --- auto-added by audit-coverage (missing from hand-refined types; refine by hand) ---
  export function setup_game_factors(diff: string): void
  export function setup_eco_factors(eco: string): void
  export function set_game_factor(key: string, val: number): void
  export function set_eco_factor(key: string, val: number): void
  export function get_game_factor(key: string): number
  export function set_actor_immunities(): void
  export function set_hit_power(): void
  export function set_dispersion_base(): void
  export function set_dispersion_factor(): void
  export function set_actor_stamina(): void
  export function set_actor_weight(): void
  export function set_weapon_degradation(): void
  export function on_game_start(): void
}
