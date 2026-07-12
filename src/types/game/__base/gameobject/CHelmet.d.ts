declare class CHelmet extends CGameObjectBase {
  constructor()
  m_fPowerLoss: number
  m_fHealthRestoreSpeed: number
  m_fRadiationRestoreSpeed: number
  m_fSatietyRestoreSpeed: number
  m_fPowerRestoreSpeed: number
  m_fBleedingRestoreSpeed: number
  get_HitFracActor(): number
  GetDefHitTypeProtection(helmet: CHelmet, hit_type: number): number
  GetHitTypeProtection(helmet: CHelmet, hit_type: number, element: string): number
  GetBoneArmor(element: number): number
}
