/** @noSelfInFile */

declare namespace guaranteed_loot {
  export function check(obj_id: number, who_id: number): boolean
  export function load_state(md: AnyTable): void
  export function make_drop_table(): void
  export function npc_on_use(obj: CGameObject, who: CGameObject): void
  export function on_game_start(): void
  export function pr(x: any, ...args: any[]): void
  export function save_state(md: AnyTable): void
  export function server_entity_on_unregister(se_obj: CseAbstract, kind: string): void
  export function split(str: string): AnyTable
  export function split_tonumber(str: string): AnyTable
}
