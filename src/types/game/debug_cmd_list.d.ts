/** @noSelfInFile */

declare namespace debug_cmd_list {
  interface Cmd {
    help(me: string, text: string, owner: string, p: AnyTable): void
    echo(me: string, text: string, owner: string, p: AnyTable): void
    char_desc(me: string, text: string, owner: string, p: AnyTable): void
  }
  export function command_get_list(): Cmd
}
