/** @noSelfInFile */

/** @customConstructor actor_proxy */
declare class actor_proxy {
  constructor()
  init(): void
  deinit(): void
  id(): number
  has_info(name: string): void
  dont_has_info(name: string): boolean
  net_spawn(obj: CseAbstract): void
  net_destroy(): void
}
