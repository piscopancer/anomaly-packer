/** @noSelfInFile */

/** @customConstructor actor_detector */
declare class actor_detector {
  constructor()
  actor_enter(): void
  actor_exit(): void
  update(): void
  save(packet: net_packet): void
  load(packet: net_packet): void
}
