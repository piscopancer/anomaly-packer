/**
 * Class-level constants of the luabind `FS` class (C++ `CLocatorAPI`).
 * In Lua these are read off the global `FS` (e.g. `FS.FS_ListFiles`), while the
 * file-system instance itself is obtained through `getFS()`.
 */
declare const FS: {
  // enum FS_sort_mode
  readonly FS_sort_by_name_up: 0
  readonly FS_sort_by_name_down: 1
  readonly FS_sort_by_size_up: 2
  readonly FS_sort_by_size_down: 3
  readonly FS_sort_by_modif_up: 4
  readonly FS_sort_by_modif_down: 5
  // enum FS_List (bit flags)
  readonly FS_ListFiles: 1
  readonly FS_ListFolders: 2
  readonly FS_ClampExt: 4
  readonly FS_RootOnly: 8
}

/**
 * File-system locator (luabind class `FS`, C++ `CLocatorAPI`).
 * The single instance is returned by the global `getFS()`.
 * @customConstructor getFS
 */
declare class getFS {
  constructor()
  /** @returns whether the resolved path alias exists */
  path_exist(path: string): boolean
  /** Resolve `src` under the path alias `initial` (e.g. `$game_config$`) into a full path string */
  update_path(initial: string, src: string): string
  /** `FS_Path` — not modelled */
  get_path(path: string): TODO
  /** `FS_Path` — not modelled */
  append_path(path_alias: string, root: string, add: string, recursive: boolean): TODO
  rescan_path(initial: string): void
  rescan_pathes(): void
  file_delete(path: string, nm: string): void
  file_delete(full_path: string): void
  dir_delete(path: string, nm: string, remove_files: number): void
  dir_delete(full_path: string, remove_files: number): void
  file_rename(src: string, dest: string, overwrite?: boolean): void
  file_length(src: string): number
  file_copy(src: string, dest: string): void
  exist(nm: string): fs_file | null
  exist(path: string, name: string): fs_file | null
  get_file_age(nm: string): number
  get_file_age_str(nm: string): string
  r_open(path: string, nm: string): reader | null
  r_open(nm: string): reader | null
  r_close(file: reader): void
  /** `IWriter` — not modelled */
  w_open(path: string, nm: string): TODO
  /** `IWriter` — not modelled */
  w_open(nm: string): TODO
  /** @param writer `IWriter` */
  w_close(writer: TODO): void
  file_list_open(initial: string, folder: string, flags: number): FS_file_list
  file_list_open(initial: string, flags: number): FS_file_list
  file_list_open_ex(path: string, flags: number, mask: string): FS_file_list_ex
}

/** A single entry of `CLocatorAPI` (luabind class `fs_file`) */
declare class fs_file {
  readonly name: string
  readonly vfs: number
  readonly ptr: number
  readonly size_real: number
  readonly size_compressed: number
  readonly modif: number
}

/** One file record of `file_list_open_ex` (luabind class `FS_item`) */
declare class FS_item {
  NameFull(): string
  NameShort(): string
  Size(): number
  /** Formatted `dd/mm/yyyy hh:mm` modification time */
  ModifDigitOnly(): string
  /** `asctime`-formatted modification time */
  Modif(): string
}

/** Sortable file list returned by `getFS():file_list_open_ex(...)` (luabind class `FS_file_list_ex`) */
declare class FS_file_list_ex {
  Size(): number
  GetAt(idx: number): FS_item
  /** @param flags one of `FS.FS_sort_by_*` */
  Sort(flags: number): void
}

/** Plain file list returned by `getFS():file_list_open(...)` (luabind class `FS_file_list`) */
declare class FS_file_list {
  Size(): number
  /** @returns the file name at `idx` */
  GetAt(idx: number): string
  /** Release the underlying native list */
  Free(): void
}
