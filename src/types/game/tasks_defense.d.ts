/** @noSelfInFile */

declare namespace tasks_defense {
  export function actor_on_first_update(): boolean
  export function barrier_defense_available(tid: TODO): boolean
  export function barrier_defense_monolith_complete(a: TODO, b: TODO): void
  export function barrier_defense_monolith_start(a: TODO, b: TODO): void
  export function barrier_defense_zombie_complete(a: TODO, b: TODO): void
  export function barrier_defense_zombie_start(a: TODO, b: TODO): void
  export function f_chatter(opponent: TODO, stage: TODO): boolean
  export function f_expire(x: TODO): boolean
  export function get_closest_freedom(): TODO
  export function get_random_stalker_chatter(): TODO
  export function load_state(mdata: TODO): void
  export function mid_news(str: TODO): TODO
  export function npc_on_update(npc: CGameObject): void
  export function on_game_start(): void
  export function printl(frmt: TODO, ...args: TODO[]): TODO
  export function save_state(mdata: TODO): void
  export function skip_surge(t: TODO): void
}
