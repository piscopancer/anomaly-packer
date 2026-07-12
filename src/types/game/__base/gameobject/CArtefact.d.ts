declare class CArtefact extends CGameObjectBase {
  constructor()
  m_bCanSpawnZone: boolean
  m_fHealthRestoreSpeed: number
  m_fRadiationRestoreSpeed: number
  m_fSatietyRestoreSpeed: number
  m_fPowerRestoreSpeed: number
  m_fBleedingRestoreSpeed: number
  ActivateArtefact(): void
  CanBeActivated(): boolean
  AdditionalInventoryWeight(): number
  FollowByPath(path: string, start_index: number, magic_force: vector): void
  SwitchVisibility(visible: boolean): void
  GetAfRank(): number
}
