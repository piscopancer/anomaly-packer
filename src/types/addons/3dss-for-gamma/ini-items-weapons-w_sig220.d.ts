// AUTO-GENERATED addon pack for `3dss-for-gamma` by `anomaly-packer gen-addon`. Config ltx schemas.
// Refine `TODO` (= any) by hand where the mod gave no type.
// `items/weapons/w_sig220.ltx` is never opened directly — `items/weapons/base.ltx` globs it in, so these sections augment
// that file's schema. The interface is path-derived, so every mod contributing to it merges here.
export {}

declare global {
  interface ItemsWeaponsBaseIni {
    wpn_sig220: {
      parent_section: string
    }
    wpn_sig220_upg220: {
      parent_section: string
      scopes: string
    }
    wpn_sig220_u2p2g0r: {
      parent_section: string
      scopes: string
    }
  }
}
