/** @noSelfInFile */

declare namespace phantom_manager {
  export const g_PhantomManager: TODO
  export const phantom_registry: TODO
  export function bind(obj: TODO): void
  export function bind_phantom(obj: TODO): void
  export function dynamic_phantom_count(sec: TODO): TODO
  export function on_game_start(): void
  export function phantom_count(): TODO
  export function spawn_dynamic_phantom(sec: TODO, pos: TODO, lvid: TODO): void
  export function spawn_phantom(pos: TODO): void
}

/** @customConstructor DynamicPhantom */
declare class DynamicPhantom extends object_binder {
  constructor(obj: TODO)
  net_destroy(): void
}

/** @customConstructor Phantom */
declare class Phantom extends object_binder {
  constructor(obj: TODO)
  reinit(): void
  net_spawn(se_abstract: TODO): boolean
  update(delta: TODO): void
  net_destroy(): void
  reload(section: TODO): void
  net_save_relevant(): boolean
  save(packet: TODO): void
  load(reader: TODO): void
}

/** @customConstructor PhantomManager */
declare class PhantomManager {
  constructor()
  add_phantom(): void
  remove_phantom(): void
  spawn_phantom(pos: TODO): void
}
