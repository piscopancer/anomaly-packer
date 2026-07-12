/** Helicopter (luabind class `CHelicopter`), obtained via `game_object:get_helicopter()`. */
declare class CHelicopter extends CGameObjectBase {
  constructor()
  /** @returns one of `CHelicopter.eAlive`/`eDead` */
  GetState(): number
  /** @returns one of `CHelicopter.eMov*` */
  GetMovementState(): number
  /** @returns one of `CHelicopter.eEnemy*` */
  GetHuntState(): number
  /** @returns one of `CHelicopter.eBody*` */
  GetBodyState(): number
  GetCurrVelocity(): number
  GetMaxVelocity(): number
  SetMaxVelocity(v: number): void
  GetCurrVelocityVec(): vector
  GetfHealth(): number
  SetfHealth(value: number): number
  SetSpeedInDestPoint(sp: number): void
  GetSpeedInDestPoint(sp: number): number
  SetLinearAcc(forward: number, backward: number): void
  SetOnPointRangeDist(d: number): void
  GetOnPointRangeDist(): number
  GetDistanceToDestPosition(): number
  ClearEnemy(): void
  SetEnemy(enemy: CGameObject): void
  SetEnemy(pos: vector): void
  GoPatrolByPatrolPath(path_name: string, start_idx: number): void
  GoPatrolByRoundPath(center: vector, radius: number, clockwise: boolean): void
  SetDestPosition(pos: vector): void
  LookAtPoint(point: vector, do_it: boolean): void
  SetFireTrailLength(val: number): void
  SetBarrelDirTolerance(val: number): void
  UseFireTrail(): boolean
  UseFireTrail(val: boolean): void
  Die(): void
  StartFlame(): void
  Explode(): void
  isVisible(o: CGameObject): boolean
  GetRealAltitude(): number
  GetSafeAltitude(): number
  TurnLighting(on: boolean): void
  TurnEngineSound(on: boolean): void
  m_use_rocket_on_attack: boolean
  m_use_mgun_on_attack: boolean
  m_min_rocket_dist: number
  m_max_rocket_dist: number
  m_min_mgun_dist: number
  m_max_mgun_dist: number
  m_time_between_rocket_attack: number
  m_syncronize_rocket: boolean
  readonly m_flame_started: boolean
  readonly m_light_started: boolean
  readonly m_exploded: boolean
  readonly m_dead: boolean
}
/** Enum constants of the `CHelicopter` luabind class (`state`/`movement_state`/`hunt_state`/`body_state`). */
declare const CHelicopter: {
  readonly eAlive: number
  readonly eDead: number
  readonly eMovNone: number
  readonly eMovToPoint: number
  readonly eMovPatrolPath: number
  readonly eMovRoundPath: number
  readonly eMovLanding: number
  readonly eMovTakeOff: number
  readonly eEnemyNone: number
  readonly eEnemyPoint: number
  readonly eEnemyEntity: number
  readonly eBodyByPath: number
  readonly eBodyToPoint: number
}
