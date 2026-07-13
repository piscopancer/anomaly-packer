declare class CWound {
  TypeSize(hit_type: number): number
  BloodSize(): number
  AddHit(power: number, type: number): void
  Incarnation(percent: number, min_wound_size: number): void
  TotalSize(): number
  SetBoneNum(num: number): void
  GetBoneNum(): number
  GetParticleBoneNum(): number
  SetParticleBoneNum(num: number): void
  SetDestroy(destroy: boolean): void
  GetDestroy(): boolean
}
declare class CEntityCondition {
  readonly eBoostHpRestore: 0
  readonly eBoostPowerRestore: 1
  readonly eBoostRadiationRestore: 2
  readonly eBoostBleedingRestore: 3
  readonly eBoostMaxWeight: 4
  readonly eBoostRadiationProtection: 5
  readonly eBoostTelepaticProtection: 6
  readonly eBoostChemicalBurnProtection: 7
  readonly eBoostBurnImmunity: 8
  readonly eBoostShockImmunity: 9
  readonly eBoostRadiationImmunity: 10
  readonly eBoostTelepaticImmunity: 11
  readonly eBoostChemicalBurnImmunity: 12
  readonly eBoostExplImmunity: 13
  readonly eBoostStrikeImmunity: 14
  readonly eBoostFireWoundImmunity: 15
  readonly eBoostWoundImmunity: 16
  AddWound(hit_power: number, hit_type: number, element: number): CWound
  ClearWounds(): void
  GetWhoHitLastTimeID(): number
  GetPower(): number
  SetPower(power: number): void
  GetRadiation(): number
  GetPsyHealth(): number
  GetSatiety(): number
  GetEntityMorale(): number
  GetHealthLost(): number
  IsLimping(): boolean
  ChangeSatiety(satiety: number): void
  ChangeHealth(health: number): void
  ChangePower(power: number): void
  ChangeRadiation(rad: number): void
  ChangePsyHealth(psy: number): void
  ChangeAlcohol(alcohol: number): void
  SetMaxPower(power: number): void
  GetMaxPower(): number
  ChangeEntityMorale(morale: number): void
  ChangeBleeding(bleeding: number): void
  BleedingSpeed(): number
}
declare class SBooster {
  constructor()
  fBoostTime: number
  fBoostValue: number
  m_type: number
}
declare class CActorCondition extends CEntityCondition {
  readonly eCriticalPowerReached: 1
  readonly eCriticalBleedingSpeed: 4
  readonly eCriticalSatietyReached: 8
  readonly eCriticalRadiationReached: 16
  readonly eWeaponJammedReached: 32
  readonly ePhyHealthMinReached: 64
  readonly eCantWalkWeight: 128
  readonly eCantWalkWeightReached: 256
  m_MaxWalkWeight: number
  m_fJumpPower: number
  m_fStandPower: number
  m_fJumpWeightPower: number
  m_fWalkWeightPower: number
  m_fOverweightWalkK: number
  m_fOverweightJumpK: number
  m_fAccelK: number
  m_fSprintK: number
  m_condition_flags: Flags
  ClearAllBoosters(): void
  ApplyBooster(booster: SBooster, section: Section): boolean
  /** @param functor called for each active booster as `(boostType, boostTime, boostValue)`; return `true` to stop iteration */
  BoosterForEach(functor: (this: void, boostType: number, boostTime: number, boostValue: number) => boolean): void
  /** @param functor called for each wound; return `true` to stop iteration */
  WoundForEach(functor: (this: void, wound: CWound) => boolean): void
  V_Satiety(): number
  V_SatietyPower(): number
  V_SatietyHealth(): number
  SatietyCritical(): number
  GetSatiety(): number
  SetPsyBar(psybar: number): void
  GetPsyBar(): number
  BoostMaxWeight(weight: number): void
  BoostHpRestore(restore: number): void
  BoostPowerRestore(restore: number): void
  BoostRadiationRestore(restore: number): void
  BoostBleedingRestore(restore: number): void
  BoostBurnImmunity(restore: number): void
  BoostShockImmunity(restore: number): void
  BoostRadiationImmunity(restore: number): void
  BoostTelepaticImmunity(restore: number): void
  BoostChemicalBurnImmunity(restore: number): void
  BoostExplImmunity(restore: number): void
  BoostStrikeImmunity(restore: number): void
  BoostFireWoundImmunity(restore: number): void
  BoostWoundImmunity(restore: number): void
  BoostRadiationProtection(restore: number): void
  BoostTelepaticProtection(restore: number): void
  BoostChemicalBurnProtection(restore: number): void
  IsLimping(): boolean
  IsCantWalk(): boolean
  IsCantWalkWeight(): boolean
  IsCantSprint(): boolean
}
