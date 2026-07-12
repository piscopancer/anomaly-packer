declare class CCustomOutfit extends CGameObjectBase {
  constructor()
  m_fPowerLoss: number
  m_fHealthRestoreSpeed: number
  m_fRadiationRestoreSpeed: number
  m_fSatietyRestoreSpeed: number
  m_fPowerRestoreSpeed: number
  m_fBleedingRestoreSpeed: number
  m_additional_weight: number
  m_additional_weight2: number
  readonly bIsHelmetAvaliable: boolean
  readonly bIsBackpackAvaliable: boolean
  BonePassBullet(bone_id: number): boolean
  get_HitFracActor(): number
  get_artefact_count(): number
  GetDefHitTypeProtection(outfit: CCustomOutfit, hit_type: number): number
  GetHitTypeProtection(outfit: CCustomOutfit, hit_type: number, element: string): number
  GetBoneArmor(element: number): number
}
