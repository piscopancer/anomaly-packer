/** @noSelfInFile */

declare namespace debug_cmd_list {
  interface Cmd {
    help(me: string, text: string, owner: string, p: AnyTable): void
    echo(me: string, text: string, owner: string, p: AnyTable): void
    char_desc(me: string, text: string, owner: string, p: AnyTable): void
  }
  export function command_get_list(): Cmd
  // --- auto-added by audit-coverage (missing from hand-refined types; refine by hand) ---
  export function command_get_count(): number
  export function command_exists(name: string): boolean
  export function command_give(name: string, ...args: any[]): any
  export function split(txt: string): AnyTable
  export function check_and_set_help(caller: any, txt: string, owner: string, msg: string): any
  export function get_var_list(): AnyTable
  export function get_position_offset(npc: CGameObject, o: any): any
  export function match_or_var(txt: string, token: string, pat: string, _var: any): any
  export function antifreeze_switch(id: number): any
  export const debug_visuals: AnyTable
}
