/** @noSelfInFile */

declare namespace gameplay_silent_kills {
  export function all_melee_ok(): boolean
  export function anybody_see(obj: CGameObject): boolean
  export function are_enemies(a: CGameObject, b: CGameObject): boolean
  export function backstab_hear_range(): number
  export function closest_npc_dist(obj: CGameObject, victim: CGameObject): number
  export function feature_enabled(): boolean
  export function get_fresh_time(): number
  export function get_suspect_dist(): number
  export function gun_enabled(): boolean
  export function headshot_only(): boolean
  export function load_state(md: AnyTable): void
  export function melee_enabled(): boolean
  export function npc_on_before_hit(npc: CGameObject, shit: AnyTable, bone_id: number, flags: number): void
  export function npc_on_update(npc: CGameObject): void
  export function on_game_start(): void
  export function pr(...args: any[]): boolean
  export function save_state(md: AnyTable): void
  export function silent_weapon_hear_range(obj: CGameObject): number
  export function tss(): number
  export function valid_backstab_weapon(obj: CGameObject): boolean
  export function valid_silent_weapon(obj: CGameObject): boolean
}
