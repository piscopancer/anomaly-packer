/** @noSelfInFile */

declare namespace tasks_defense {
  export function actor_on_first_update(): boolean
  export function barrier_defense_available(tid: string): boolean
  export function barrier_defense_monolith_complete(a: any, b: any): void
  export function barrier_defense_monolith_start(a: any, b: any): void
  export function barrier_defense_zombie_complete(a: any, b: any): void
  export function barrier_defense_zombie_start(a: any, b: any): void
  export function f_chatter(opponent: string, stage: number): boolean
  export function f_expire(x: string): boolean
  export function get_closest_freedom(): LuaMultiReturn<[string | undefined, string | undefined]>
  export function get_random_stalker_chatter(): LuaMultiReturn<[string | undefined, string | undefined]>
  export function load_state(mdata: AnyTable): void
  export function mid_news(str: string): void
  export function npc_on_update(npc: CGameObject): void
  export function on_game_start(): void
  export function printl(frmt: string, ...args: any[]): void
  export function save_state(mdata: AnyTable): void
  export function skip_surge(t: AnyTable): void
}
