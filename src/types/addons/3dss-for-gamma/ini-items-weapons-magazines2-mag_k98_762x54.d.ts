// AUTO-GENERATED addon pack for `3dss-for-gamma` by `anomaly-packer gen-addon`. Config ltx schemas.
// Refine `TODO` (= any) by hand where the mod gave no type.
// `items/weapons/magazines2/mag_k98_762x54.ltx` is never opened directly — `items/weapons/magazines2/_importer.ltx` globs it in, so these sections augment
// that file's schema. The interface is path-derived, so every mod contributing to it merges here.
export {}

declare global {
  interface ItemsWeaponsMagazines2ImporterIni {
    'mag_k98_7.62x54': {
      base_type: string
      cost: number
      description: string
      inv_grid_height: number
      inv_grid_x: number
      inv_grid_y: number
      inv_name: string
      inv_name_short: string
      inv_weight: number
      mag_size: string
      max_mag_size: number
      retool_group: string
      visual: string
    }
  }
}
