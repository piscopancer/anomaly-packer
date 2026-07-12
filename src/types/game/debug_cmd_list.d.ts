/** @noSelfInFile */

declare namespace debug_cmd_list {
  interface Cmd {
    help(me: string, text: string, owner: string, p: AnyTable): void
    echo(me: string, text: string, owner: string, p: AnyTable): void
    char_desc(me: string, text: string, owner: string, p: AnyTable): void
  }
  export function command_get_list(): Cmd
  // --- auto-added by audit-coverage (missing from hand-refined types; refine by hand) ---
  export function command_get_count(): TODO
  export function command_exists(name: TODO): TODO
  export function command_give(name: TODO, ...args: TODO[]): TODO
  export function split(txt: TODO): TODO
  export function check_and_set_help(caller: TODO, txt: TODO, owner: TODO, msg: TODO): TODO
  export function get_var_list(): TODO
  export function get_position_offset(npc: TODO, o: TODO): TODO
  export function match_or_var(txt: TODO, token: TODO, pat: TODO, _var: TODO): TODO
  export function antifreeze_switch(id: TODO): TODO
  export const debug_visuals: TODO
}
