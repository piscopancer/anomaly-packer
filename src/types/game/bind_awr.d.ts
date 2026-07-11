/** @noSelfInFile */

declare namespace bind_awr {
  export function access(obj: TODO): boolean
  export function actor_on_first_update(): void
  export function CloseDl(): void
  export function dout(call: TODO, fmt: TODO, ...args: TODO[]): TODO
  export function full_access(vice: TODO, npc_s: TODO): void
  export function l_v(name: TODO, def: TODO): TODO
  export function Lamp(npc_name: TODO, state: boolean): void
  export function load_state(m_data: TODO): void
  export function npc_on_death_callback(victim: TODO, who: TODO): string
  export function on_game_start(): void
  export function OnDeath(npc: TODO): void
  export function physic_object_on_use_callback(_obj: TODO, who: TODO): boolean
  export function print_table(tbl: TODO, header: TODO, format_only: TODO): TODO
  export function r_unused(): void
  export function s_v(name: TODO, val: TODO): void
  export function save_state(m_data: TODO): void
  export function SetMarker(name: TODO): void
}
