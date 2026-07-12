declare class CWeaponMagazinedWGrenade extends CWeaponMagazined {
  constructor()
  GetGrenadeLauncherMode(): boolean
  SetGrenadeLauncherMode(mode: boolean): void
  SetAmmoElapsed2(count: number): void
  GetAmmoElapsed2(): number
  GetAmmoMagSize2(): number
  SetAmmoType2(type: number): void
  GetAmmoType2(): number
  AmmoTypeForEach2(functor: () => void): void
}
