/** @noSelfInFile */

declare namespace phantom_manager {
  export const g_PhantomManager: AnyTable
  export const phantom_registry: AnyTable
  export function bind(obj: CGameObject): void
  export function bind_phantom(obj: CGameObject): void
  export function dynamic_phantom_count(sec: string): number
  export function on_game_start(): void
  export function phantom_count(): number
  export function spawn_dynamic_phantom(sec: string, pos: vector, lvid: number): void
  export function spawn_phantom(pos: vector): void
}

/** @customConstructor DynamicPhantom */
declare class DynamicPhantom extends object_binder {
  constructor(obj: CGameObject)
  net_destroy(): void
}

/** @customConstructor Phantom */
declare class Phantom extends object_binder {
  constructor(obj: CGameObject)
  reinit(): void
  net_spawn(se_abstract: CseAbstract): boolean
  update(delta: number): void
  net_destroy(): void
  reload(section: string): void
  net_save_relevant(): boolean
  save(packet: net_packet): void
  load(reader: net_packet): void
}

/** @customConstructor PhantomManager */
declare class PhantomManager {
  constructor()
  add_phantom(): void
  remove_phantom(): void
  spawn_phantom(pos: vector): void
}
