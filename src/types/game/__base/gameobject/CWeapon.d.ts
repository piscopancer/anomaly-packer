declare class CWeapon extends CGameObjectBase {
  constructor()
  // EWeaponStates
  readonly eFire: 5
  readonly eFire2: 6
  readonly eReload: 7
  readonly eMisfire: 8
  readonly eSwitch: 9
  readonly eSwitchMode: 10
  // EWeaponSubStates
  readonly eSubstateReloadBegin: 0
  readonly eSubstateReloadInProcess: 1
  readonly eSubstateReloadEnd: 2
  can_kill(): boolean
  IsGrenadeLauncherAttached(): boolean
  GrenadeLauncherAttachable(): boolean
  GetGrenadeLauncherName(): string
  IsScopeAttached(): boolean
  ScopeAttachable(): boolean
  GetScopeName(): string
  IsSilencerAttached(): boolean
  SilencerAttachable(): boolean
  GetSilencerName(): string
  IsZoomEnabled(): boolean
  IsZoomed(): boolean
  GetZoomFactor(): number
  SetZoomFactor(factor: number): void
  IsSingleHanded(): boolean
  GetBaseDispersion(cartridge_k: number): number
  GetFireDispersion(): number
  GetMisfireStartCondition(): number
  GetMisfireEndCondition(): number
  GetAmmoElapsed(): number
  GetAmmoMagSize(): number
  GetSuitableAmmoTotal(use_item_to_spawn?: boolean): number
  SetAmmoElapsed(count: number): void
  SwitchAmmoType(flags: number): boolean
  GetMagazineWeight(): number
  GetAmmoCount_forType(type: string): number
  set_ef_main_weapon_type(type: number): void
  set_ef_weapon_type(type: number): void
  SetAmmoType(type: number): void
  GetAmmoType(): number
  AmmoTypeForEach(functor: () => void): void
  RPM(): number
  ModeRPM(): number
  GetZoomType(): number
  Get_PDM_Base(): number
  Get_Silencer_PDM_Base(): number
  Get_Scope_PDM_Base(): number
  Get_Launcher_PDM_Base(): number
  Get_PDM_BuckShot(): number
  Get_PDM_Vel_F(): number
  Get_Silencer_PDM_Vel(): number
  Get_Scope_PDM_Vel(): number
  Get_Launcher_PDM_Vel(): number
  Get_PDM_Accel_F(): number
  Get_Silencer_PDM_Accel(): number
  Get_Scope_PDM_Accel(): number
  Get_Launcher_PDM_Accel(): number
  Get_PDM_Crouch(): number
  Get_PDM_Crouch_NA(): number
  GetCrosshairInertion(): number
  Get_Silencer_CrosshairInertion(): number
  Get_Scope_CrosshairInertion(): number
  Get_Launcher_CrosshairInertion(): number
  GetFirstBulletDisp(): number
  GetHitPower(): number
  GetHitPowerCritical(): number
  GetHitImpulse(): number
  GetFireDistance(): number
  GetFireMode(): number
  GetInertionAimFactor(): number
  Cost(): number
  Weight(): number
  IsMisfire(): boolean
  SetMisfire(value: boolean): void
  IsPending(): boolean
  SetPending(): boolean
}
