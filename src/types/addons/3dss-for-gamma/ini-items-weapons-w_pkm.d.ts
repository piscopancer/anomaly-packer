// AUTO-GENERATED addon pack for `3dss-for-gamma` by `anomaly-packer gen-addon`. Config ltx schemas.
// Refine `TODO` (= any) by hand where the mod gave no type.
// `items/weapons/w_pkm.ltx` is never opened directly — `items/weapons/base.ltx` globs it in, so these sections augment
// that file's schema. The interface is path-derived, so every mod contributing to it merges here.
export {}

declare global {
  interface ItemsWeaponsBaseIni {
    wpn_pkm: {
      parent_section: string
    }
    wpn_pkm_zulus: {
      parent_section: string
    }
    wpn_pkp: {
      parent_section: string
    }
  }
}
