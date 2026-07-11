/** @noSelfInFile */

declare namespace guaranteed_loot {
  export function check(obj_id: TODO, who_id: TODO): boolean
  export function load_state(md: TODO): void
  export function make_drop_table(): void
  export function npc_on_use(obj: TODO, who: TODO): TODO
  export function on_game_start(): void
  export function pr(x: TODO, ...args: TODO[]): void
  export function save_state(md: TODO): void
  export function server_entity_on_unregister(se_obj: TODO, kind: TODO): void
  export function split(str: TODO): TODO
  export function split_tonumber(str: TODO): TODO
}
