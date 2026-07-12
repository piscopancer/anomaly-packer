/** @noSelfInFile */

declare namespace bind_awr {
  export function access(obj: CGameObject): boolean
  export function actor_on_first_update(): void
  export function CloseDl(): void
  export function dout(call: any, fmt: string, ...args: any[]): void
  export function full_access(vice: any, npc_s: any): void
  export function l_v(name: string, def: any): any
  export function Lamp(npc_name: string, state: boolean): void
  export function load_state(m_data: AnyTable): void
  export function npc_on_death_callback(victim: CGameObject, who: CGameObject): string
  export function on_game_start(): void
  export function OnDeath(npc: CGameObject): void
  export function physic_object_on_use_callback(_obj: CGameObject, who: CGameObject): boolean
  export function print_table(tbl: AnyTable, header: string, format_only: boolean): void
  export function r_unused(): void
  export function s_v(name: string, val: any): void
  export function save_state(m_data: AnyTable): void
  export function SetMarker(name: string): void
}
