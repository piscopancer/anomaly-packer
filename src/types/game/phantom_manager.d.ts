/** @noSelfInFile */

declare namespace phantom_manager {
  export const g_PhantomManager: AnyTable
  export const phantom_registry: AnyTable
  export function bind(obj: CGameObject): void
  export function bind_phantom(obj: CGameObject): void
  export function dynamic_phantom_count(sec: Section): number
  export function on_game_start(): void
  export function phantom_count(): number
  export function spawn_dynamic_phantom(sec: Section, pos: vector, lvid: number): void
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
  reload(section: Section): void
  net_save_relevant(): boolean
  save(packet: net_packet): void
  load(reader: net_packet): void
}

/** @customConstructor PhantomManager */
declare class PhantomManager {
  phantom_count: TODO // @generated field — refine type
  constructor()
  add_phantom(): void
  remove_phantom(): void
  spawn_phantom(pos: vector): void
}

declare namespace phantom_manager {
  /** Anomaly `class "DynamicPhantom"` is also reachable on the `phantom_manager` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`phantom_manager.DynamicPhantom.Method = ...`). */
  export const DynamicPhantom: DynamicPhantom
  /** Anomaly `class "Phantom"` is also reachable on the `phantom_manager` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`phantom_manager.Phantom.Method = ...`). */
  export const Phantom: Phantom
  /** Anomaly `class "PhantomManager"` is also reachable on the `phantom_manager` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`phantom_manager.PhantomManager.Method = ...`). */
  export const PhantomManager: PhantomManager
}
