/** @noSelfInFile */

/** @customConstructor actor_proxy */
declare class actor_proxy {
  actor: TODO // @generated field — refine type
  actor_id: TODO // @generated field — refine type
  alife: TODO // @generated field — refine type
  initialized: boolean // @generated field — refine type
  online: boolean // @generated field — refine type
  constructor()
  init(): void
  deinit(): void
  id(): number
  has_info(name: string): void
  dont_has_info(name: string): boolean
  net_spawn(obj: CseAbstract): void
  net_destroy(): void
}

declare namespace actor_proxy {
  /** Anomaly `class "actor_proxy"` is also reachable on the `actor_proxy` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`actor_proxy.actor_proxy.Method = ...`). */
  export const actor_proxy: actor_proxy
}
