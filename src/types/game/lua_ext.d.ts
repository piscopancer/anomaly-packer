/** @noSelfInFile */

declare namespace lua_ext {
  export function recurse_subdirectories_and_execute(node: string, ext: string, func: any, ...args: any[]): void
}
