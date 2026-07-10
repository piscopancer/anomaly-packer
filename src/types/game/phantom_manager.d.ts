// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace phantom_manager {
  export const g_PhantomManager: TODO
  export const phantom_registry: TODO
  export function bind(obj: TODO): TODO
  export function bind_phantom(obj: TODO): TODO
  export function dynamic_phantom_count(sec: TODO): TODO
  export function on_game_start(): TODO
  export function phantom_count(): TODO
  export function spawn_dynamic_phantom(sec: TODO, pos: TODO, lvid: TODO): TODO
  export function spawn_phantom(pos: TODO): TODO
}

/** @customConstructor DynamicPhantom */
declare class DynamicPhantom extends object_binder {
  constructor(obj: TODO)
  net_destroy(): TODO
}

/** @customConstructor Phantom */
declare class Phantom extends object_binder {
  constructor(obj: TODO)
  reinit(): TODO
  net_spawn(se_abstract: TODO): TODO
  update(delta: TODO): TODO
  net_destroy(): TODO
  reload(section: TODO): TODO
  net_save_relevant(): TODO
  save(packet: TODO): TODO
  load(reader: TODO): TODO
}

/** @customConstructor PhantomManager */
declare class PhantomManager {
  constructor()
  add_phantom(): TODO
  remove_phantom(): TODO
  spawn_phantom(pos: TODO): TODO
}
