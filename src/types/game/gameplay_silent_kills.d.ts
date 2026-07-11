/** @noSelfInFile */

declare namespace gameplay_silent_kills {
  export function all_melee_ok(): TODO
  export function anybody_see(obj: TODO): boolean
  export function are_enemies(a: CGameObject, b: CGameObject): TODO
  export function backstab_hear_range(): TODO
  export function closest_npc_dist(obj: TODO, victim: TODO): TODO
  export function feature_enabled(): TODO
  export function get_fresh_time(): TODO
  export function get_suspect_dist(): TODO
  export function gun_enabled(): TODO
  export function headshot_only(): TODO
  export function load_state(md: TODO): void
  export function melee_enabled(): TODO
  export function npc_on_before_hit(npc: CGameObject, shit: TODO, bone_id: number, flags: TODO): TODO
  export function npc_on_update(npc: TODO): TODO
  export function on_game_start(): void
  export function pr(...args: TODO[]): boolean
  export function save_state(md: TODO): void
  export function silent_weapon_hear_range(obj: TODO): TODO
  export function tss(): TODO
  export function valid_backstab_weapon(obj: TODO): boolean
  export function valid_silent_weapon(obj: TODO): TODO
}
